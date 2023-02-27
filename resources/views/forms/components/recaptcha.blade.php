@if($form->enable_recaptcha)
    @if(trim(config('recaptcha.api_site_key')) == '' || trim(config('recaptcha.api_secret_key')) == '')
        @php
            throw new Exception('Please set RECAPTCHA_SITE_KEY and RECAPTCHA_SECRET_KEY');
        @endphp
    @endif
    {!! htmlScriptTagJsApi() !!} {!! htmlFormSnippet() !!}
@endif