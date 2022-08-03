<template>
    <transition name="fade" mode="out-in" appear>
        <component :is="layout">
            <router-view></router-view>
        </component>
    </transition>
</template>

<script>
    export default {
        name: 'app',

        props: {
            user: {
                type: Object,
                required: false,
                default: null
            },

            version: {
                type: String,
                required: true,
            },

            config: {
                type: Object,
            },
        },

        computed: {
            layout() {
                return (this.$route.meta.layout || 'default') + '-layout'
            }
        },

        created() {
            this.$store.commit('auth/setUser', this.user)
            this.$store.commit('fusion/setVersion', this.version)
            this.$store.commit('fusion/setConfig', this.config)

            this.$store.dispatch('auth/authenticate', {
                guestNext: { name: 'login', query: { redirect: location.pathname } },
                adminNext: { name: 'dashboard' }
            })
        }
    }
</script>
