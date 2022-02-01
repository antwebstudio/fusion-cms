<?php

namespace Fusion\Actions;

use Fusion\Services\BulkAction;

class Publish extends BulkAction
{
    protected $success = 'Selected items successfully published.';
    /**
     * Determine if the user is authorized to make this action.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Execute the action and return a result.
     *
     * @return mixed
     */
    public function handle($entries)
    {
        $entries->each(function ($entry) {
            $entry->update(['status' => 1]);
        });
    }
}
