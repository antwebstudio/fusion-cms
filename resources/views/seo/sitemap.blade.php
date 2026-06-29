@extends('layouts.main')

@section('content')
<div class="container py-8">
    <h1 class="text-2xl font-bold mb-6">Sitemap</h1>
    <ul class="space-y-2">
        <li><a href="{{ url('/') }}" class="text-blue-600 hover:underline">Home</a></li>
        <li><a href="{{ url('/books') }}" class="text-blue-600 hover:underline">Books</a></li>
        @foreach(\Fusion\Models\Matrix::where('type', 'single')->where('status', true)->get() as $single)
            @php
                $entry = \Fusion\Services\Builders\Matrix::resolve($single->handle)->first();
            @endphp
            @if($entry)
            <li>
                <a href="{{ url($single->route) }}" class="text-blue-600 hover:underline">
                    {{ $single->name }}
                </a>
            </li>
            @endif
        @endforeach
    </ul>
</div>
@endsection
