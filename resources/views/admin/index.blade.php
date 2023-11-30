@extends('layouts.admin')

@php
	$config = [
		'locale' => config('app.locale'),
	];
@endphp

@section('content')
	@auth
		<app :user="{{ auth()->user()->append('permitted') }}" :config='@json($config)' version="{{ config('app.version', FUSION_VERSION) }}"></app>
	@else
		<app :config='@json($config)' version="{{ config('app.version', FUSION_VERSION) }}"></app>
	@endauth
@endsection