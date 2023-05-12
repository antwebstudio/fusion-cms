<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ui-sortable-handle',

        inject: ['sortableListHandleClass'],

        mounted() {
            this.$el.classList.add(this.sortableListHandleClass)
        },
    }
</script>
