import Vue from 'vue'
import { createApp } from 'vue'

import store from '@/store'
import router from '@/router'
import forms from '@/mixins/forms'
import setting from '@/mixins/setting'
import PortalVue from 'portal-vue'

import * as Directives from '@/directives'

import auth from '@/plugins/auth'

export default class Fusion {
    constructor (config) {
        this.config = config
        this.router = router
        this.store = store
        this.vue = null

        // Mixins
        Vue.mixin(forms)
        Vue.mixin(setting)

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
            callback(Vue, this.router, this.store)
        })

        this.vue = createApp()

        this.vue.use(auth)
        this.vue.use(this.router)
        this.vue.use(this.store)
        this.vue.use(PortalVue)

       	this.vue.mount('#gravity')  

        this.bootedCallbacks.forEach((callback) => {
            callback(this.vue)
        })
    }

    booted (callback) {
        this.bootedCallbacks.push(callback)
    }
}
