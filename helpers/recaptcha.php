<?php

/*
 * Minimal replacement for the helpers previously provided by
 * `biscolab/laravel-recaptcha` (no release supports Laravel 12+).
 * Implements reCAPTCHA v2 (checkbox).
 */

if (!function_exists('recaptchaApiSiteKey')) {
    function recaptchaApiSiteKey()
    {
        return config('recaptcha.api_site_key', env('RECAPTCHA_SITE_KEY', ''));
    }
}

if (!function_exists('recaptchaApiSecretKey')) {
    function recaptchaApiSecretKey()
    {
        return config('recaptcha.api_secret_key', env('RECAPTCHA_SECRET_KEY', ''));
    }
}

if (!function_exists('recaptchaFieldName')) {
    function recaptchaFieldName()
    {
        return 'g-recaptcha-response';
    }
}

if (!function_exists('recaptchaRuleName')) {
    function recaptchaRuleName()
    {
        return 'recaptcha';
    }
}

if (!function_exists('htmlScriptTagJsApi')) {
    function htmlScriptTagJsApi()
    {
        return '<script src="https://www.google.com/recaptcha/api.js" async defer></script>';
    }
}

if (!function_exists('htmlFormSnippet')) {
    function htmlFormSnippet()
    {
        return '<div class="g-recaptcha" data-sitekey="'.e(recaptchaApiSiteKey()).'"></div>';
    }
}

if (!function_exists('recaptchaVerify')) {
    function recaptchaVerify($response, $ip = null)
    {
        if (empty($response)) {
            return false;
        }

        try {
            $result = \Illuminate\Support\Facades\Http::asForm()
                ->timeout(10)
                ->post('https://www.google.com/recaptcha/api/siteverify', array_filter([
                    'secret'   => recaptchaApiSecretKey(),
                    'response' => $response,
                    'remoteip' => $ip,
                ]));
        } catch (\Throwable $e) {
            report($e);

            return false;
        }

        return (bool) $result->json('success', false);
    }
}
