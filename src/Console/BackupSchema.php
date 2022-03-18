<?php

namespace Fusion\Console;

use Fusion\Models\Matrix;
use Fusion\Models\Fieldset;
use Fusion\Models\Taxonomy;
use Illuminate\Support\Arr;
use Fusion\Models\Extension;
use Fusion\Models\Replicator;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Fusion\Http\Resources\MatrixResource;
use Fusion\Http\Resources\SectionResource;
use Fusion\Http\Resources\FieldsetResource;
use Fusion\Http\Resources\TaxonomyResource;
use Fusion\Http\Resources\ExtensionResource;
use Fusion\Http\Resources\ReplicatorResource;

class BackupSchema extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:backup-schema';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $request = request();
        
        $data = [
            'fieldsets' => $this->backupFieldsets(),
            'matrices' => $this->backupMatrices(),
            'taxonomies' => $this->backupTaxonomies(),
            'extensions' => $this->backupExtensions(),
        ];

        Storage::disk('local')->put('schema.json', json_encode($data));

        dd($data);

        return 0;
    }

    protected function backupExtensions()
    {
        $data = [];

        foreach (Extension::all() as $extension) {
            $extension = new ExtensionResource($extension);
            $extension = Arr::only($extension->toArray(request()), ['name', 'handle', 'fieldset', 'slug']);

            if (!isset($extension['fieldset']->id)) {
                unset($extension['fieldset']);
            }

            $data[] = $extension;
        }

        return $data;
    }

    protected function backupTaxonomies()
    {
        $data = [];

        foreach (Taxonomy::all() as $taxonomy) {
            $taxonomy = new TaxonomyResource($taxonomy);
            $taxonomy = Arr::only($taxonomy->toArray(request()), ['name', 'handle', 'fieldset', 'slug']);

            if (!isset($taxonomy['fieldset']->id)) {
                unset($taxonomy['fieldset']);
            }

            $data[] = $taxonomy;
        }

        return $data;
    }

    protected function backupMatrices()
    {
        $data = [];

        foreach (Matrix::all() as $matrix) {
            $matrix = new MatrixResource($matrix);
            $matrix = Arr::only($matrix->toArray(request()), ['name', 'handle', 'type', 'fieldset', 'slug']);

            if (!isset($matrix['fieldset']->id)) {
                unset($matrix['fieldset']);
            }

            $data[] = $matrix;
        }

        return $data;
    }

    protected function backupFieldsets()
    {
        $fieldsets = Fieldset::where('hidden', 0)->get();

        $resource = FieldsetResource::collection($fieldsets);

        foreach ($resource as $j) {
            foreach ($j->sections as $section) {
                foreach ($section->fields as $field) {
                    if ($field->type == 'replicator') {
                        if (isset($field->settings['replicator'])) {
                            $replicator = Replicator::find($field->settings['replicator']);
                            $field->settings = collect($field->settings)->merge(['sections' => SectionResource::collection($replicator->sections)]);
                        }
                    } else if ($field->type == 'taxonomy') {
                        if (isset($field->settings['taxonomy'])) {
                            $taxonomy = Taxonomy::find($field->settings['taxonomy']);
                            $taxonomy = new TaxonomyResource($taxonomy);
                            $taxonomy = Arr::only($taxonomy->toArray(request()), ['name', 'handle', 'fieldset', 'slug']);
                            
                            if (!isset($taxonomy['fieldset']->id)) {
                                unset($taxonomy['fieldset']);
                            }
                            $field->settings = collect($field->settings)->merge(['taxonomy' => $taxonomy]);
                        }
                    } else if ($field->type == 'matrix') {
                        if (isset($field->settings['matrix'])) {
                            $matrix = Matrix::find($field->settings['matrix']);
                            $matrix = new MatrixResource($matrix);
                            $matrix = Arr::only($matrix->toArray(request()), ['name', 'handle', 'type', 'fieldset', 'slug']);

                            if (!isset($matrix['fieldset']->id)) {
                                unset($matrix['fieldset']);
                            }
                            $field->settings = collect($field->settings)->merge(['matrix' => $matrix]);
                        }
                    }
                }
            }
        }

        return $resource->toArray(request());
    }
}
