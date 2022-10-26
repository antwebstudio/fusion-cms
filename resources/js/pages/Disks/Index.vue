<template>
    <div class="disk-page">
        <portal to="title">
            <page-title icon="hdd">Disks</page-title>
        </portal>

        <portal to="actions">
            <ui-button key="create-disk-btn" :to="{ name: 'disks.create' }" variant="primary" v-if="$can('disks.create')">Create Disk</ui-button>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table
                    id="disks"
                    sort-by="order"
                    primary-key="handle"
                    key="disks_table"
                    link_name="disks.edit"
                    link_param="disk"
                    reorder_route="/api/disks/reorder"
                    :show_status="false"
                    :endpoint="endpoint"
                >
                    <template v-slot:name="table">
                        <router-link v-if="!isLocked(table.record.handle)" :to="{ name: 'disks.edit', params: {disk: table.record.id} }">{{ table.record.name }}</router-link>
                        <span v-else>{{ table.record.name }}</span>
                    </template>

                    <template v-slot:handle="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template v-slot:driver="table">
                        <strong>{{ table.record.driver }}</strong>
                    </template>

                    <template v-slot:actions="table">
                        <ui-table-actions :disabled="isLocked(table.record.handle)" :id="'disks_' + table.record.id + '_actions'" :key="'disks_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'disks.edit', params: {disk: table.record.id} }">
                                Edit
                            </ui-dropdown-link>

                            <ui-dropdown-divider></ui-dropdown-divider>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-disk="table.record"
                                class="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-disk" title="Delete Disk" key="delete_disk">
                <p>Are you sure you want to permenantly delete this disk?</p>

                <template v-slot:footer="disk">
                    <ui-button v-modal:delete-disk @click="destroy(disk.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-disk>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'disks.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Disks'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/disks',
            }
        },

        methods: {
            isLocked(handle) {
                return _.includes(['public','local'], handle)
            },

            destroy(id) {
                axios.delete(`/api/disks/${id}`).then((response) => {
                    toast('Disk successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-disks')
                })
            }
        }
    }
</script>