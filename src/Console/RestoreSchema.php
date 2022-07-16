<?php

namespace Fusion\Console;

use Fusion\Models\Field;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Fusion\Models\Blueprint;
use Fusion\Models\Taxonomy;
use Illuminate\Support\Arr;
use Fusion\Models\Extension;
use Fusion\Models\Replicator;
use Fusion\Services\SchemaImporter;
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
	protected $signature = 'fusion:restore-schema {--file=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected $taxonomies = [];

    protected $matrices = [];

    protected $assignFieldset = [];

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
        $rawJson = file_get_contents(base_path($this->option('file')));
        $json = json_decode($rawJson, true);

        $this->matrices = Matrix::get()->keyBy('handle');
        $this->taxonomies = Taxonomy::get()->keyBy('handle');

        // Matrix::unsetEventDispatcher();
        // Taxonomy::unsetEventDispatcher();
        // Section::unsetEventDispatcher();
        // Fieldset::unsetEventDispatcher();
        // Field::unsetEventDispatcher();
        // Replicator::unsetEventDispatcher();

        // \DB::transaction(function () use($json) { // Not useful as the operation will involve schema changes, and hence commit of transaction will be triggered in the middle.
            $fieldset = collect($json['fieldsets'])->keyBy('handle');

            $this->title('Fieldset and fields');
            $this->restoreFieldsetAndFields($json['fieldsets']);
            $this->title('Matrices and Taxonomies');
            
            $importer = new SchemaImporter;
            $importer->restoreOldVersionSchema($rawJson);
            
            // $this->title('Extensions');
            // $this->restoreExtensions($json['extensions']);
            // $this->assignFieldsets();
        // });
        return 0;
    }

    protected function title($title)
    {
        $this->line('===============================');
        $this->line(' '.$title);
        $this->line('===============================');
    }

    protected function assignFieldsets()
    {
        $assign = $this->assignFieldset['matrix'] ?? [];
        foreach ($assign as $modelId => $fieldsetHandle) {
            $fieldset = Fieldset::where('handle', $fieldsetHandle)->first();
            $matrix = Matrix::find($modelId);
            $matrix->attachFieldset($fieldset);
        }

        $assign = $this->assignFieldset['taxonomy'] ?? [];
        foreach ($assign as $modelId => $fieldsetHandle) {
            $fieldset = Fieldset::where('handle', $fieldsetHandle)->first();
            $taxonomy = Taxonomy::find($modelId);
            $taxonomy->attachFieldset($fieldset);
        }
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

    protected function restoreFieldsetAndFields($data)
    {
        foreach ($data as $fieldsetData) {
            if (!Fieldset::where('handle', $fieldsetData['handle'])->exists()) {
                $fieldset = Fieldset::create($fieldsetData);
                $this->line('Created fieldset ' . $fieldset->handle);
            } else {
                $fieldset = Fieldset::where('handle', $fieldsetData['handle'])->first();
            }
        }
        // dd($json);
    }
}
