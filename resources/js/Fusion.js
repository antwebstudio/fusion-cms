import Vue from 'vue'

import store from '@/store'
import router from '@/router'
import forms from '@/mixins/forms'
import setting from '@/mixins/setting'
import VueI18n from 'vue-i18n'

import * as Directives from '@/directives'

export default class Fusion {
    constructor (config) {
        this.config = config
        this.router = router
        this.store = store
        this.vue = null

        // Mixins
        Vue.mixin(forms)
        Vue.mixin(setting)
        Vue.use(VueI18n)

        this.i18n = new VueI18n({
            locale: config.locale,
            fallbackLocale: 'en',
            messages: {
            }
        })

        // Directives
        Object.values(Directives).forEach((Directive) => {
            Vue.use(Directive)
        })

        // Callbacks
        this.bootingCallbacks = []
        this.bootedCallbacks = []
    }

    booting (callback) {
        this.bootingCallbacks.push(callback)
    }

    boot () {
        this.bootingCallbacks.forEach((callback) => {
            callback(Vue, this.router, this.store, this.i18n)
        })

        this.vue = new Vue({
            el: '#gravity',
            i18n: this.i18n, 

            router: this.router,

            store: this.store
        })

        this.bootedCallbacks.forEach((callback) => {
            callback(this.vue)
        })
    }

    booted (callback) {
        this.bootedCallbacks.push(callback)
    }

    setI18nLanguage (lang) {
        this.i18n.locale = lang
        axios.defaults.headers.common['Accept-Language'] = lang
        document.querySelector('html').setAttribute('lang', lang)
        return lang
    }

    setLocaleMessage(lang, messages) {
        this.i18n.setLocaleMessage(lang, messages)
        this.loadedLanguages.push(lang)
    }

    loadLanguageAsync(lang) {
        // If the same language
        if (this.i18n.locale === lang) {
          return Promise.resolve(this.setI18nLanguage(lang))
        }
      
        // If the language was already loaded
        if (this.loadedLanguages.includes(lang)) {
          return Promise.resolve(this.setI18nLanguage(lang))
        }
      
        // If the language hasn't been loaded yet
        return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.js`).then(
          messages => {
            this.i18n.setLocaleMessage(lang, messages.default)
            this.loadedLanguages.push(lang)
            return this.setI18nLanguage(lang)
          }
        )
    }
      
}
