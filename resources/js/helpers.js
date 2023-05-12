import Vue from 'vue'
import Emitter from 'tiny-emitter'

const emitter = new Emitter()
window.bus = function() {
    return {
        $on(...args) {
            emitter.on(...args)
        },
        $once(...args) {
            emitter.once(...args)
        },
        $off(...args) {
            emitter.off(...args)
        },
        $emit(...args) {
            emitter.emit(...args)
        }
    }
}

window.toast = function (message, level) {
    bus().$emit('toast', {
        message,
        level
    })
}