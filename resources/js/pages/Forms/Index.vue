<template>
    <div class="form-page">
        <portal to="title">
            <page-title icon="paper-plane">Forms</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button key="to-inbox-btn" :to="{ name: 'inbox' }">View Inbox</ui-button>
                <ui-button key="create-form-btn" :to="{ name: 'forms.create' }" variant="primary" v-if="$can('forms.create')">Create Form</ui-button>
            </div>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table
                    id="forms"
                    sort-by="order"
                    primary-key="handle"
                    key="forms_table"
                    link_name="forms.edit"
                    link_param="form"
                    reorder_route="/api/forms/reorder"
                    :endpoint="endpoint"
                    :show_status="true"
                >
                    <template v-slot:name="table">
                        <ui-status :value="table.record.status" class="mr-2"></ui-status>

                        <router-link :to="{ name: 'forms.edit', params: {form: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template v-slot:handle="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template v-slot:description="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template v-slot:actions="table">
                        <ui-actions :id="'form_' + table.record.id + '_actions'" :key="'form_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'forms.edit', params: {form: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-divider></ui-dropdown-divider>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-form="table.record"
                                class="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-form" title="Delete Form" key="delete_form">
                <p>Are you sure you want to permenantly delete this form?</p>

                <template v-slot:footer="form">
                    <ui-button v-modal:delete-form @click="destroy(form.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-form>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'forms.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Forms'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/forms',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/forms/' + id).then((response) => {
                    toast('Form successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-forms')
                })
            }
        }
    }
</script>