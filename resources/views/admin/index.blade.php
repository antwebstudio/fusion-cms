@extends('layouts.admin')

@php
	$config = [
		'name' => config('fusion.name'),
	];
@endphp

@section('content')
	@auth
		<app :user="{{ auth()->user()->append('permitted') }}" :config='@json($config)' version="{{ config('app.version', FUSION_VERSION) }}"></app>
	@else
		<app :config='@json($config)' version="{{ config('app.version', FUSION_VERSION) }}"></app>
	@endauth
@endsection