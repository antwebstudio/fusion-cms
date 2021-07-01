<?php

namespace Fusion\Console;

use Illuminate\Console\Command;

class SyncModels extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:sync-models';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync FusionCMS models';

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
        $modelTypes = [
            \Fusion\Models\Matrix::class,
            \Fusion\Models\Taxonomy::class,
            \Fusion\Models\Form::class,
            \Fusion\Models\Extension::class,
            \Fusion\Models\Setting::class,
            // \Fusion\Models\Replicator::class,
        ];
        foreach ($modelTypes as $modelType) {
            // $this->line($modelType);
            $matrices = $modelType::get();
            foreach ($matrices as $matrix) {
                try {
                    // dd($matrix);
                    if (isset($matrix->fieldset)) {
                        $matrix->attachFieldset($matrix->fieldset);
                    }
                } catch (\Illuminate\Contracts\Container\BindingResolutionException $ex) {
                    // Need to catch class not found exception to run this command successfully
                }
            }
        }
        return 0;
    }
}
