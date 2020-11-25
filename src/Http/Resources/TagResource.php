<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
{
    public function toArray($request)
    {
        $resource = [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'slug' => $this->resource->slug,
            'type' => $this->resource->type,
            'order_column' => $this->resource->order_column,
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at,
            'status' => 1,
        ];

        return $resource;
    }
}