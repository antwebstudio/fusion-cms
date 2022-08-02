<?php

namespace Fusion\Models;

use Fusion\Concerns\CachesQueries;
use Fusion\Concerns\HasBlueprint;
use Fusion\Concerns\HasBuilder;
use Fusion\Contracts\Structure;
use Fusion\Database\Eloquent\Model;
use Fusion\Services\Builders\Extension as Builder;
use Illuminate\Support\Str;

class Extension extends Model implements Structure
{
    // use CachesQueries;
    use HasBlueprint;
    use HasBuilder;

    protected $with = ['blueprint'];

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['name', 'handle', 'status'];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = ['status' => 'boolean'];

    protected $structure = 'Extension';
}
