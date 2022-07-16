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

    protected $assignFieldset = [];

    protected $replicatorsData = [];

    public function restoreOldVersionSchema($schemaJson)
    {
        $json = json_decode($schemaJson, true);

        $this->replicatorsData = collect($json['replicators'] ?? [])->keyBy('id');
        $fieldset = collect($json['fieldsets'] ?? [])->keyBy('handle');

        $this->restoreMatrices($json['matrices'], $fieldset);
        $this->restoreTaxonomies($json['taxonomies'], $fieldset);

    }protected function restoreTaxonomies($data, $fieldsetData)
    {
        foreach ($data as $taxonomyData) {
            $this->restoreTaxonomy($taxonomyData, $fieldsetData);
        }
    }

    protected function restoreTaxonomy($taxonomyData, $fieldsetData)
    {
        $handle = $taxonomyData['handle'];
        if (!isset($this->taxonomies[$handle])) {
            $taxonomy = Taxonomy::create($taxonomyData);
            $this->taxonomies[$handle] = $taxonomy;

            if (isset($taxonomyData['fieldset']['handle'])) {
                // $blueprint = $this->createBlueprint($taxonomy);
                $this->createBlueprintFields($taxonomy->blueprint, $fieldsetData[$taxonomyData['fieldset']['handle']]);
    
                $fieldsetHandle = $taxonomyData['fieldset']['handle'];
                $fieldset = Fieldset::where('handle', $fieldsetHandle)->first();
                if (isset($fieldset)) {
                    // $taxonomy->attachFieldset($fieldset);
                } else {
                    $this->assignFieldset['taxonomy'][$taxonomy->id] = $fieldsetHandle;
                }
            }

            $this->line('Created taxonomy ' . $taxonomy->handle);

            return $taxonomy;
        }
    }

    protected function restoreMatrices($data, $fieldsetData)
    {
        foreach ($data as $matrixData) {
            $this->restoreMatrix($matrixData, $fieldsetData);
        }
    }

    protected function restoreMatrix($matrixData, $fieldsetData)
    {
        $handle = $matrixData['handle'];
        if (!isset($this->matrices[$handle])) {
            $matrix = Matrix::create($matrixData);
            $this->matrices[$handle] = $matrix;

            if (isset($matrixData['fieldset']['handle'])) {
                // $blueprint = $this->createBlueprint($matrix);
                $this->createBlueprintFields($matrix->blueprint, $fieldsetData[$matrixData['fieldset']['handle']]);
    
                $fieldsetHandle = $matrixData['fieldset']['handle'];
                $fieldset = Fieldset::where('handle', $fieldsetHandle)->first();
                if (isset($fieldset)) {
                    // $matrix->attachFieldset($fieldset);
                } else {
                    $this->assignFieldset['matrix'][$matrix->id] = $fieldsetHandle;
                }
            }

            // $this->line('Created matrix ' . $matrix->handle);

            return $matrix;
        }
    }
    protected function createBlueprint($model) {
        if ($model instanceof Matrix) {
            $structure = $model->type == 'collection' ? 'Collections' : 'Singles';
        } else if ($model instanceof Taxonomy) {
            $structure = 'Taxonomy';
        } else if ($model instanceof Replicator) {
            $structure = 'Replicator';
        } else {
            throw new \Exception('Unsupported model type: '.get_class($model));
        }

        return $model->blueprint()->create([
            'structure' => $structure,
            'blueprintable_type' => get_class($model),
            'blueprintable_id' => $model->id,
            'name' => $model->name,
        ]);
    }

    protected function createBlueprintFields($blueprint, $fieldsetData) {
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
                // dd($field['settings']['taxonomy']);
                // if (!isset($field['settings']['taxonomy'])) {
                //     dd($field);
                // }
                $taxonomy = $fieldData['settings']['taxonomy'];
                $handle = $taxonomy['handle'];

                if (isset($this->taxonomies[$handle])) {
                    $taxonomy = $this->taxonomies[$handle];
                } else {
                    try {
                        $taxonomy = Taxonomy::create($taxonomy);
                        $this->taxonomies[$handle] = $taxonomy;
                        // $this->line('Created taxonomy ' . $taxonomy->handle);
                    } catch (\Exception $ex) {
                        // throw $ex;
                        dd($taxonomy['handle'], array_keys($this->taxonomies), $ex->getMessage());
                    }
                }
                $fieldData['settings']['taxonomy'] = $taxonomy->id;
            } else if ($fieldData['type']['id'] == 'matrix') {
                $matrix = $fieldData['settings']['matrix'];
                $handle = $matrix['handle'];

                if (isset($this->matrices[$handle])) {
                    $matrix = $this->matrices[$handle];
                } else {
                    $matrix = Matrix::create($matrix);
                    $this->matrices[$handle] = $matrix;
                    // $this->line('Created matrix ' . $matrix->handle);
                }
                $fieldData['settings']['matrix'] = $matrix->id;
            }

            if (!isset($fieldData['type']['id'])) {
                dd($fieldData);
            }
            try {
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
            
            // if ($fieldData['type']['id'] == 'replicator') {
            //     try {
            //         $replicatorData = $this->replicatorsData[$fieldData['settings']['replicator']];
            //         $replicatorData['field_id'] = $field->id;
            //         $replicator = Replicator::create($replicatorData);

            //         $blueprint = $this->createBlueprint($replicator);
            //         $this->createBlueprintFields($blueprint, $replicatorData);
            //     } catch (\Exception $ex) {
            //         throw $ex;
            //     }
            // }
        }
    }
}