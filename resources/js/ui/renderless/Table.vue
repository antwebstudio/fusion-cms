<template>
    <slot :isLoading="isLoading" :sortField="sortField" :sortOrder="sortOrder" :perPage="perPage" :total="total" :page="page"></slot>
</template>
<script>
    import { h } from 'vue'

    export default {
        name: 'renderless-table',

        data() {
            return {    
                isLoading: false,
                sortField: '',
                sortOrder: '',
                perPage: 25,
                total: 0,
                page: 1,
            }
        },

        props: {
            data: {
                required: false,
                default: () => {
                    return []
                }
            },

            columns: {
                required: false,
                default: () => {
                    return []
                }
            },
        },
    }
</script>