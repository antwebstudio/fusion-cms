<?php
namespace Fusion\Services;

use Fusion\Models\Field;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Fusion\Models\Blueprint;
use Fusion\Models\Taxonomy;
use Illuminate\Support\Arr;
use Fusion\Models\Extension;
use Fusion\Models\Replicator;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Fusion\Http\Resources\FieldsetResource;

class SchemaImporter {

    protected $taxonomies = [];

    protected $matrices = [];

    protected $extensions = [];

    protected $replicatorsData = [];

    public function restoreOldVersionSchema($schemaJson)
    {
        $json = json_decode($schemaJson, true);

        $this->replicatorsData = collect($json['replicators'] ?? [])->keyBy('id');
        $fieldset = collect($json['fieldsets'] ?? [])->keyBy('handle');

        $this->restoreMatrices($json['matrices']);
        $this->restoreTaxonomies($json['taxonomies']);
        $this->restoreExtensions($json['extensions']);

        $this->restoreMatricesFieldsets($json['matrices']);
        $this->restoreTaxonomiesFieldsets($json['taxonomies']);
        $this->restoreExtensionsFieldsets($json['extensions']);

    }
    
    protected function restoreTaxonomies($data)
    {
        foreach ($data as $taxonomyData) {
            $oldId = $taxonomyData['id'];
            $taxonomy = $this->restoreTaxonomy($taxonomyData);
            $this->taxonomies[$oldId] = $taxonomy;
        }
    }

    protected function restoreTaxonomy($taxonomyData)
    {
        $handle = $taxonomyData['handle'];
        if (!isset($this->taxonomies[$handle])) {
            $taxonomy = Taxonomy::create($taxonomyData);

            return $taxonomy;
        }
    }

    protected function restoreTaxonomiesFieldsets($data)
    {
        foreach ($data as $taxonomyData) {
            $oldId = $taxonomyData['id'];
            if (isset($taxonomyData['fieldset'])) {
                $this->createFieldset($this->taxonomies[$oldId]->blueprint, $taxonomyData['fieldset']);
            }
        }   
    }

    protected function restoreExtensionsFieldsets($data)
    {
        foreach ($data as $extensionData) {
            $oldId = $extensionData['id'];
            if (isset($extensionData['fieldset'])) {
                $this->createFieldset($this->extensions[$oldId]->blueprint, $extensionData['fieldset']);
            }
        }   
    }

    protected function restoreExtensions($data)
    {
        foreach ($data as $extensionData) {
            $oldId = $extensionData['id'];
            $extension = $this->restoreExtension($extensionData);
            $this->extensions[$oldId] = $extension;
        }
    }

    protected function restoreExtension($extensionData)
    {
        $handle = $extensionData['handle'];
        if (!isset($this->extensions[$handle])) {
            $extension = Extension::create($extensionData);

            return $extension;
        }
    }

    protected function restoreMatricesFieldsets($data)
    {
        foreach ($data as $matrixData) {
            $oldId = $matrixData['id'];
            if (isset($matrixData['fieldset'])) {
                $this->createFieldset($this->matrices[$oldId]->blueprint, $matrixData['fieldset']);
            }
        }   
    }

    protected function restoreMatrices($data)
    {
        foreach ($data as $matrixData) {
            $oldId = $matrixData['id'];
            $matrix = $this->restoreMatrix($matrixData);
            $this->matrices[$oldId] = $matrix;
        }
    }

    protected function restoreMatrix($matrixData)
    {
        $handle = $matrixData['handle'];
        if (!isset($this->matrices[$handle])) {
            $matrix = Matrix::create($matrixData);

            return $matrix;
        }
    }

    protected function createFieldset($blueprint, $fieldsetData) {
        if (!isset($fieldsetData['sections'])) {
            throw new \Exception('Sections for fieldset is missing. ');
        }
        foreach ($fieldsetData['sections'] as $sectionData) {
            $section = Section::create(array_merge($sectionData, [
                'blueprint_id' => $blueprint->id,
            ]));
            
            $this->createSectionFields($section, $sectionData['fields']);
        }
    }

    protected function createSectionFields($section, $fields) {
        foreach ($fields as $fieldData) {
            $fieldData = Arr::only($fieldData, ['name', 'handle', 'type', 'settings']);

            if ($fieldData['type']['id'] == 'replicator') {
                $replicatorData = $this->replicatorsData[$fieldData['settings']['replicator']];
                $fieldData['settings']['replicator'] = null;
                $fieldData['settings']['sections'] = $replicatorData['sections'][0]['fields'];
            } else if ($fieldData['type']['id'] == 'taxonomy') {
                if (is_array($fieldData['settings']['taxonomy'])) {
                    if (!isset($fieldData['settings']['taxonomy']['id'])) {
                        dd($fieldData);
                    }
                    $oldId = $fieldData['settings']['taxonomy']['id'];
                } else {
                    $oldId = $fieldData['settings']['taxonomy'];
                }
                $fieldData['settings']['taxonomy'] = $this->taxonomies[$oldId]->id;
            } else if ($fieldData['type']['id'] == 'matrix') {
                if (is_array($fieldData['settings']['matrix'])) {
                    $oldId = $fieldData['settings']['matrix']['id'];
                } else {
                    $oldId = $fieldData['settings']['matrix'];
                }
                $fieldData['settings']['matrix'] = $this->taxonomies[$oldId]->id;
            }

            if (!isset($fieldData['type']['id'])) {
                dd($fieldData);
            }
            try {
                if (!isset($fieldData['validation'])) {
                    $fieldData['validation'] = null;
                }
                $field = Field::make(array_merge($fieldData, [
                    'type' => $fieldData['type']['id'],
                    'fieldable_id' => $section->id,
                    'fieldable_type' => \Fusion\Models\Section::class,
                ]));
                $field->fieldable_id = $section->id;
                $field->fieldable_type = \Fusion\Models\Section::class;
                $field->save();

                // $this->line('Created field ' . $field->handle);
            } catch (\Exception $ex) {
                throw $ex;
                // dd($fieldData, $field['type']['id'], $ex->getMessage());
            }
        }
    }
}