<template>
    <div class="roles-page">
        <portal to="title">
            <page-title icon="user-shield" :subtitle="role.description">Role - {{ role.name }}</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="$mq != 'sm'" key="go-back-btn" :to="{ name: 'roles' }" variant="secondary">Go Back</ui-button>
                <ui-button v-if="canEdit" key="edit-role-btn" :to="{ name: 'roles.edit', params: {role: role.id} }" variant="primary">Edit Role</ui-button>
            </div>
        </portal>

        <portal to="sidebar-right">
            <sidebar>
                <status-card id="role_panel_status_card" :entry="role" tabindex="-1"></status-card>
            </sidebar>
        </portal>

        <section-card
            id="roles_panel_users"
            :grid="false"
            title="Assigned Users"
            description="Users currently assigned to this role."
            tabindex="-1">
                
                <ui-table
                    id="users"
                    key="'roles-table'"
                    :endpoint="endpoint"
                    sort-by="name"
                    :no-search="isOwner"
                    no-actions show-page-status show-page-numbers show-page-nav show-page-ends>

                        <template v-slot:name="table">
                            <div class="flex items-center">
                                <ui-status :value="table.record.status" class="mr-2"></ui-status>
                                <router-link :to="{ name: 'users.show', params: {user: table.record.id} }">{{ table.record.name }}</router-link>
                            </div>
                        </template>

                        <template v-slot:email="table">
                            {{ table.record.email }}
                        </template>

                        <template v-slot:role="table">
                            <ui-badge>{{ table.record.role.name }}</ui-badge>
                        </template>

                        <template v-slot:created_at="table">
                            <ui-date :timestamp="table.record.created_at"></ui-date>
                        </template>

                        <template v-slot:email_verified_at="table">
                            <ui-badge v-if="table.record.email_verified_at" variant="success">Yes</ui-badge>
                            <ui-badge v-else variant="danger">No</ui-badge>
                        </template>
                </ui-table>
        </section-card>

        <section-card
            v-if="!isOwner && permissions"
            id="roles_panel_permissions"
            :grid="false"
            title="Assigned Permissions"
            description="permissions currently assigned to this role."
            tabindex="-1">

                <ui-table
                    id="permissions"
                    key="permissions-table"
                    :endpoint="permissions"
                    sort-by="name"
                    no-actions show-page-status show-page-numbers show-page-nav show-page-ends>

                        <template v-slot:name="table">
                            <code>{{ table.record.name }}</code>
                        </template>

                        <template v-slot:description="table">
                            <p>{{ table.record.description }}</p>
                        </template>
                </ui-table>
        </section-card>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'roles.view',
            }
        },

        head: {
            title() {
                return {
                    inner: this.role.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                role: {}
            }
        },

        beforeRouteEnter(to, from, next) {
            getRole(to.params.role, (error, role) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/roles')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.role = role

                        window.emitter.emit('updateHead')
                    })
                }
            })
        },

        computed: {
            endpoint() {
                if (this.role) {
                    return `/datatable/users/${this.role.name}`
                }

                return '/datatable/users'
            },

            permissions() {
                if (this.role.id) {
                    return `/datatable/roles/${this.role.id}/permissions`
                }

                return false
            },

            isOwner() {
                return this.role.id && this.role.id === 1
            },

            isGuest() {
                return this.role.id && this.role.id === 2
            },

            canEdit() {
                return this.$can('roles.update', this.role.level ? this.role.level : 0)
            }
        }
    }

    export function getRole(id, callback) {
        axios.get(`/api/roles/${id}`).then((response) => {
            callback(null, response.data.data)
        }).catch(function(error) {
            callback(new Error('The requested role could not be found'))
        })
    }
</script>