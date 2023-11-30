@extends('layouts.admin')

@php
	$config = [
		'name' => config('fusion.name'),
		'locale' => config('app.locale'),
		'demo_username' => config('fusion.demo.username', ''),
		'demo_password' => config('fusion.demo.password', ''),
	];
@endphp

@section('content')
	@auth
		<app :user="{{ auth()->user()->append('permitted') }}" :config='@json($config)' version="{{ config('app.version', FUSION_VERSION) }}"></app>
	@else
		<app :config='@json($config)' version="{{ config('app.version', FUSION_VERSION) }}"></app>
	@endauth
@endsection