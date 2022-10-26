<template>
    <div class="permissions-page">
        <portal to="title">
            <page-title icon="key">Permissions</page-title>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table
                    key="permissions"
                    class="permissions-table"
                    id="permissions"
                    sort-by="name"
                    :show_order="false"
                    :endpoint="endpoint"
                    no-actions show-page-status show-page-numbers
                    show-page-nav show-page-ends
                >
                    <template v-slot:name="table">
                        <code>{{ table.record.name }}</code>
                    </template>

                    <template v-slot:description="table">
                        <p>{{ table.record.description }}</p>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Permissions'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/permissions',
            }
        }
    }
</script>
