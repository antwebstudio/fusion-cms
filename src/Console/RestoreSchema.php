<?php

namespace Fusion\Console;

use Fusion\Models\Field;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Fusion\Models\Taxonomy;
use Illuminate\Support\Arr;
use Fusion\Models\Extension;
use Fusion\Models\Replicator;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Fusion\Http\Resources\FieldsetResource;

class RestoreSchema extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:restore-schema';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected $taxonomies = [];

    protected $matrices = [];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $json = Storage::disk('local')->get('schema.json');
        $json = json_decode($json, true);

        \DB::transaction(function () use($json) {
            $this->title('Fieldset and fields');
            $this->restoreFieldsetAndFields($json['fieldsets']);
            $this->title('Matrices');
            $this->restoreMatrices($json['matrices']);
            $this->title('Taxonomies');
            $this->restoreTaxonomies($json['taxonomies']);
            $this->title('Extensions');
            $this->restoreExtensions($json['extensions']);
        });
        return 0;
    }

    protected function title($title)
    {
        $this->line('===============================');
        $this->line(' '.$title);
        $this->line('===============================');
    }

    protected function restoreExtensions($data)
    {
        foreach ($data as $extensionData) {
            $extension = Extension::create($extensionData);
            
            if (isset($extensionData['fieldset']['handle'])) {
                $fieldsetHandle = $extensionData['fieldset']['handle'];
                $fieldset = Fieldset::where('handle', $fieldsetHandle)->first();
                $extension->attachFieldset($fieldset);
            }

            $this->line('Created extension ' . $extension->handle);
        }
    }

    protected function restoreTaxonomies($data)
    {
        foreach ($data as $taxonomyData) {
            $handle = $taxonomyData['handle'];
            if (!isset($this->taxonomies[$handle])) {
                $taxonomy = Taxonomy::create($taxonomyData);
                $this->taxonomies[$handle] = $taxonomy;

                if (isset($taxonomyData['fieldset']['handle'])) {
                    $fieldsetHandle = $taxonomyData['fieldset']['handle'];
                    $fieldset = Fieldset::where('handle', $fieldsetHandle)->first();
                    $taxonomy->attachFieldset($fieldset);
                }

                $this->line('Created taxonomy ' . $taxonomy->handle);
            }
        }
    }

    protected function restoreMatrices($data)
    {
        foreach ($data as $matrixData) {
            $handle = $matrixData['handle'];
            if (!isset($this->matrices[$handle])) {
                $matrix = Matrix::create($matrixData);
                $this->matrices[$handle] = $matrix;

                if (isset($matrixData['fieldset']['handle'])) {
                    $fieldsetHandle = $matrixData['fieldset']['handle'];
                    $fieldset = Fieldset::where('handle', $fieldsetHandle)->first();
                    $matrix->attachFieldset($fieldset);
                }

                $this->line('Created matrix ' . $matrix->handle);
            }
        }
    }

    protected function restoreFieldsetAndFields($data)
    {
        foreach ($data as $fieldsetData) {
            if (!Fieldset::where('handle', $fieldsetData['handle'])->exists()) {
                $fieldset = Fieldset::create($fieldsetData);
                $this->line('Created fieldset ' . $fieldset->handle);
            } else {
                $fieldset = Fieldset::where('handle', $fieldsetData['handle'])->first();
            }
            foreach ($fieldsetData['sections'] as $sectionData) {
                $section = Section::create(array_merge($sectionData, [
                    'fieldset_id' => $fieldset->id,
                ]));

                foreach ($sectionData['fields'] as $fieldData) {
                    $field = Arr::only($fieldData, ['name', 'handle', 'type', 'settings']);

                    if ($field['type']['id'] == 'replicator') {
                        $field['settings']['replicator'] = null;
                    } else if ($field['type']['id'] == 'taxonomy') {
                        // dd($field['settings']['taxonomy']);
                        // if (!isset($field['settings']['taxonomy'])) {
                        //     dd($field);
                        // }
                        $taxonomy = $field['settings']['taxonomy'];
                        $handle = $taxonomy['handle'];

                        if (isset($this->taxonomies[$handle])) {
                            $taxonomy = $this->taxonomies[$handle];
                        } else {
                            try {
                                $taxonomy = Taxonomy::create($taxonomy);
                                $this->taxonomies[$handle] = $taxonomy;
                                $this->line('Created taxonomy ' . $taxonomy->handle);
                            } catch (\Exception $ex) {
                                // throw $ex;
                                dd($taxonomy['handle'], array_keys($this->taxonomies), $ex->getMessage());
                            }
                        }
                        $field['settings']['taxonomy'] = $taxonomy->id;
                    } else if ($field['type']['id'] == 'matrix') {
                        $matrix = $field['settings']['matrix'];
                        $handle = $matrix['handle'];

                        if (isset($this->matrices[$handle])) {
                            $matrix = $this->matrices[$handle];
                        } else {
                            $matrix = Matrix::create($matrix);
                            $this->matrices[$handle] = $matrix;
                            $this->line('Created matrix ' . $matrix->handle);
                        }
                        $field['settings']['matrix'] = $matrix->id;
                    }

                    if (!isset($field['type']['id'])) {
                        dd($field);
                    }
                    try {
                        $field = Field::create(array_merge($field, [
                        'section_id' => $section->id,
                        'type' => $field['type']['id'],
                        ]));
                        $this->line('Created field ' . $field->handle);
                    } catch (\Exception $ex) {
                        // throw $ex;
                        dd($fieldData, $field['type']['id'], $ex->getMessage());
                    }
                }
            }
        }
        // dd($json);
    }
}
