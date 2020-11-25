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
        $oldValues = collect($model->tagsWithType($this->getTagType($model, $field)))->pluck('name');
        $newValues = collect(request()->{$field->handle})->map(function($value) {
            return is_array($value) ? $value['name'] : $value;
        });
        $model->detachTags($oldValues, $this->getTagType($model, $field));
        $model->attachTags($newValues, $this->getTagType($model, $field));
    }

    public function getResource($model, Field $field)
    {
       return TagResource::collection($model->tagsWithType($this->getTagType($model, $field)) ?? []);
    }

    protected function getTagType($model, $field) {
        $className = get_class($model);
        $className = str_replace('\\', '_', $className);
        $className = strtolower($className);
        return $className.':'.$field->handle;
    }
}
