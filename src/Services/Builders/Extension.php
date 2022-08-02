<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Extension as ExtensionModel;
use Illuminate\Support\Facades\File;

class Extension extends Builder
{
    /**
     * @var \Fusion\Models\Extension
     */
    // protected $extension;

    /**
     * @var string
     */
    // protected $namespace = 'Fusion\Models\Extension';

    /**
     * Constructor.
     *
     * @param string $handle
     */
    public function __construct($handle)
    {
        $this->source = ExtensionModel::where(['handle' => $handle])->firstOrFail();
    }

    /**
     * Mass assignment protection.
     *
     * @var array
     */
    protected function getFillable()
    {
        return ['extension_id', 'related_id'];
    }

    /**
     * Attribute casting.
     *
     * @var array
     */
    protected function getCasts()
    {
        return [
            'status' => 'boolean',
        ];
    }

    public static function prefix() {
        return 'ext';
    }
}
