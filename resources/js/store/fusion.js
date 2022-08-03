export default {
    namespaced: true,

    state: {
        version: null,
    },

    getters: {
        getVersion: (state) => {
            return state.version
        },
        getConfig: (state) => {
            return state.config
        },
    },

    mutations: {
        setVersion: (state, version) => {
            state.version = version
        },
        setConfig: (state, config) => {
            state.config = config
        },
    },
}