<!DOCTYPE html>
<html lang="en" class="h-full bg-grey-lighter">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>FusionCMS</title>

        {{-- Styles --}}
        <link rel="stylesheet" href="{{ mix('css/gravity.css', 'vendor/fusion') }}">

        @yield('styles')

        <script src="https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.43/polyfill.min.js" integrity="sha512-lvWiOP+aMKHllm4THsjzNleVuGOh0WGniJ3lgu/nvCbex1LlaQSxySUjAu/LTJw9FhnSL/PVYoQcckg1Q03+fQ==" crossorigin="anonymous"></script>
    </head>

    <body class="admin">
        <div id="gravity" v-cloak class="admin__content">
            @yield('content')
        </div>

        {{-- FusionCMS Config --}}
        <script>window.environment = '{{ app()->environment() }}'</script>
        <script>window.config = @json(config('fusion'))</script>

        {{-- Scripts --}}
        <script src="{{ mix('js/gravity.js', 'vendor/fusion') }}"></script>

        @assets('js')

    </body>
</html>