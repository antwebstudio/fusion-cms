<?php

namespace Fusion\Observers;

use Fusion\Contracts\BuilderObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ExtensionObserver implements BuilderObserver
{
    /**
     * Handle the extension "created" event.
     *
     * @param \Fusion\Models\Extension $extension
     *
     * @return void
     */
    public function created(Model $model)
    {
        Schema::create($model->getBuilderTable(), function (Blueprint $table) use ($model) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('extension_id');
            $table->unsignedBigInteger('related_id');

            $table->foreign('extension_id')
                ->references('id')->on('extensions')
                ->onDelete('cascade');

            // Error caused by the following lines
            // $table->foreign('related_id')
            //     ->references('id')->on($model->getBuilderTable()) // error caused as refer to the wrong table
            //     ->onDelete('cascade');
        });
    }

    public function updating(Model $model)
    {
    }

    /**
     * Handle the extension "deleted" event.
     *
     * @param \Fusion\Models\Extension $extension
     *
     * @return void
     */
    public function deleted(Model $model)
    {
        $this->migration->schema->dropIfExists($model->getBuilderTable());
    }
}
