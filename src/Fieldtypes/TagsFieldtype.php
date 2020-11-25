<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;
use Fusion\Http\Resources\TagResource;

class TagsFieldtype extends \Fusion\Fieldtypes\Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Tags';

    /**
     * @var string
     */
    public $icon = 'tags';

    /**
     * @var string
     */
    public $description = 'A field to add tags for your model';

    /**
     * @var string
     */

    public $relationship = 'morphToMany';

    public $traits = [
        \Spatie\Tags\HasTags::class,
    ];

    /**
     * @var array
     */
    public $settings = [
        'placeholder'           => '',
        'limit'                 => null,
        'root_directory'        => null,
        'filetype_restrictions' => [],
    ];

    public function generateRelationship($field)
    {
    }

    public function persistRelationship($model, Field $field)
    {
        $oldValues = $model->{$field->handle}->pluck('name');
        $model->detachTags($oldValues);
        $model->attachTags(request()->tags);
    }

    public function getResource($model, Field $field)
    {
       return TagResource::collection($this->getValue($model, $field));
    }
}
