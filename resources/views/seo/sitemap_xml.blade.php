<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>{{ url('/') }}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    @foreach(\Fusion\Models\Matrix::where('type', 'single')->where('status', true)->get() as $single)
        @php
            $entry = \Fusion\Services\Builders\Matrix::resolve($single->handle)->first();
        @endphp
        @if($entry)
        <url>
            <loc>{{ url($single->route) }}</loc>
            <lastmod>{{ $entry->updated_at->toAtomString() }}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
        </url>
        @endif
    @endforeach 
</urlset>
