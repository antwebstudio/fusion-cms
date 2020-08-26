<?php

namespace Fusion\Fieldtypes;

use File;
use Fusion\Http\Resources\MatrixResource;
use Fusion\Models\Field;
use Fusion\Models\Matrix;
use Illuminate\Support\Str;

class MatrixFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Matrix';

    /**
     * @var string
     */
    public $icon = 'sitemap';

    /**
     * @var string
     */
    public $description = 'Relate a matrix.';

    /**
     * @var array
     */
    public $settings = [
        'matrix' => null,
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.matrix' => 'required',
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.matrix' => 'matrix',
    ];

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var string
     */
    public $namespace = 'Fusion\Models\Collections';

    /**
     * Generate relationship methods for associated Model.
     *
     * @param Fusion\Models\Field $field
     *
     * @return string
     */
    public function generateRelationship($field)
    {
        $model = Matrix::find($field->settings['matrix']);
        $namespace = $this->namespace.'\\'.Str::studly($model->handle);
        $stub = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_pivot_key}' => 'matrix_id',
            '{related_namespace}' => $namespace,
            '{related_table}'     => 'matrices_pivot',
            '{where_clause}'      => "->where('field_id', {$field->id})",
            '{order_clause}'      => "->orderBy('order')",
        ]);
    }

    /**
     * Update relationship data in storage.
     *
     * @param Illuminate\Eloquent\Model $model
     * @param Fusion\Models\Field       $field
     *
     * @return void
     */
    public function persistRelationship($model, Field $field)
    {
        $oldValues = $model->{$field->handle}->pluck('id');
        $newValues = collect(request()->input($field->handle))->mapWithKeys(function ($id) use ($field) {
            return [
                $id => ['field_id' => $field->id],
            ];
        });

        $model->{$field->handle}()->detach($oldValues);
        $model->{$field->handle}()->attach($newValues);
    }

    /**
     * Returns resource object of field.
     *
     * @param Illuminate\Eloquent\Model $model
     * @param Fusion\Models\Field       $field
     *
     * @return MartixResource
     */
    public function getResource($model, Field $field)
    {
        //dd($model, $this->getValue($model, $field), $field->handle);
        return MatrixResource::collection($this->getValue($model, $field));
    }
}
