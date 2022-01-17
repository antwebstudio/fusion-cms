<?php
namespace Fusion\Services;

use ReflectionClass;
use Illuminate\Support\Str;

class BulkAction
{
    protected static $name;
    protected $selections;

    public static function all() {
        $actions = app('actions');
        $return = [];
        foreach ($actions as $action) {
            $return[] = $action::make()->toArray();
        }
        return $return;
    }

    public static function get($name) {
        $actions = app('actions');
        $action = $actions[$name];
        return $action::make();
    }

    public static function make() {
        return new static;
    }

    public static function run($items) {
        $action = static::make();
        return $action->handleRun($items);
    }

    protected function handleRun($items)
    {
        // $this->fill($attributes);
        // $this->prepareForValidation();
        // $this->resolveBeforeHook();
        // $this->resolveAuthorization();
        // $this->resolveValidation();

        if (! method_exists($this, 'handle')) {
            return;
        }

        $this->handle($items);

        return $this->successResponse();

        // return $this->resolveAndCall($this, 'handle');
    }

    public function successResponse() {
        return ['message' => $this->success];
    }

    public static function register()
    {
        $actions = app('actions');

        $actions[static::name()] = static::class;
    }

    public static function text()
    {
        $class = (new ReflectionClass(static::class))->getShortName();
        return Str::title($class);
    }

    public static function name()
    {
        if (static::$name) {
            return static::$name;
        }

        $class = (new ReflectionClass(static::class))->getShortName();

        return Str::snake($class);
    }

    public function toArray()
    {
        return [
            'handle' => self::name(),
            'text' => self::text(),
            // 'confirm' => $this->confirm,
            // 'buttonText' => $this->buttonText(),
            // 'confirmationText' => $this->confirmationText(),
            // 'warningText' => $this->warningText(),
            // 'dangerous' => $this->dangerous,
            // 'fields' => $this->fields()->toPublishArray(),
            // 'values' => $this->fields()->values(),
            // 'meta' => $this->fields()->meta(),
            // 'context' => $this->context,
        ];
    }
}