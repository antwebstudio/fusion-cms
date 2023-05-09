import Vue from 'vue'
import VueMq from 'vue3-mq'

Vue.use(VueMq, {
    breakpoints: {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: Infinity
    }
})