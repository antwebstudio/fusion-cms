<template>
    <slot></slot>
</template>
<script>
    export default {
        name: 'ui-sortable-item',

        inject: ['sortableListItemClass'],

        mounted() {
            this.$el.parentNode.classList.add(this.sortableListItemClass)
        },
    }
</script>
