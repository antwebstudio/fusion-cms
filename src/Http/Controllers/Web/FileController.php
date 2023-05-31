<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Streamers\Video\LaravelStreamer as LaravelVideoStreamer;
use Fusion\Models\File;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FileController extends Controller
{
    public function __construct() {
        ini_set('memory_limit', config('filesystems.memory_limit', '256M'));
    }
    
    public function index($uuid, $name)
    {
        $file = File::where('uuid', $uuid)->firstOrFail();

        // Append last modified date
        $params      = request()->all();
        $params['t'] = $file->updated_at->format('U');

        if ($name !== $file->name && $name !== $file->name.'.'.$file->extension) {
            return redirect()->to('/file/'.$uuid.'/'.$file->name.'?'.http_build_query($params));
        }

        if (in_array($file->mimetype, ['image/jpeg', 'image/gif', 'image/png'])) {
            return $this->imageResponse($file, $params);
        }

        if (Str::startsWith($file->mimetype, 'video')) {
            return $this->videoResponse($file->location, $file->mimetype);
        }

        // Create cache for non-image and non-video files
        if (Storage::disk($file->disk->handle)->getDriver()->getAdapter() instanceof \League\Flysystem\Adapter\Local) {
            $sourcePath = Storage::disk($file->disk->handle)->path($file->location);
            $cachePath = glide($file->disk->handle)->getCachePath($file->location).'.'.$file->extension;
            $cachePath = Storage::disk('local')->path($cachePath);
            
            if (!\File::isDirectory(dirname($cachePath))) {
                \File::makeDirectory(dirname($cachePath), 0755, true);
            }

            \File::link($sourcePath, $cachePath);
        } else if ($file->bytes < config('filesystem.max_size_to_cache', 100 * 1024)) {
            $source = Storage::disk($file->disk->handle)->get($file->location);
            $cache = Storage::disk('local');
            $cachePath = glide($file->disk->handle)->getCachePath($file->location);
            $cache->put($cachePath, $source);
        }

        return Storage::disk($file->disk->handle)->response(
            $file->location,
            $file->name.'.'.$file->extension,
            [
                'Content-Type' => $file->mimetype,
            ]
        );
    }

    protected function imageResponse($file, $params)
    {
        return glide($file->disk->handle)->getImageResponse($file->location, $params);
    }

    protected function videoResponse($path, $mimetype)
    {
        $path = storage_path('app/public/'.$path);

        return (new LaravelVideoStreamer($path, $mimetype))->stream();
    }
}
