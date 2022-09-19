<?php

namespace Fusion\Actions;

class Delete extends BulkAction
{
    protected $success = 'Selected items successfully deleted.';

    /**
     * Execute the action and return a result.
     *
     * @return mixed
     */
    public function process($entries)
    {
        activity()->withoutLogs(function () use($entries) {
            $entries->each(function ($entry) {
                $entry->delete();
            });
        });
    }
}
