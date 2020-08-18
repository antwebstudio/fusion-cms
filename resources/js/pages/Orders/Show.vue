<template>
    <div>
        <portal to="title">
            <app-title icon="layer-group">Order</app-title>
        </portal>
		
        <div class="flex -mx-2">
			<p-card classes="w-1/2 mx-2">
				<p-card-header>Bill To</p-card-header>
				
				<p-card-body v-if="order.billpayer">
                    <div v-if="order.is_organization">
					    <h3>{{ order.billpayer.company_name }}</h3>
                    </div>
                    <div v-else >
                        <h3>{{ order.billpayer.lastname}} {{ order.billpayer.firstname }}</h3>
                    </div>
                    <address>
                        {{ order.billpayer.address.fullAddress }}
                    </address>

				</p-card-body>
			</p-card>
			<p-card classes="w-1/2 mx-2">
				<p-card-header>Ship To</p-card-header>
				
				<p-card-body>
                    <h3>{{ order.shippingAddress.lastname}} {{ order.shippingAddress.firstname }}</h3>
                    <address>
                        {{ order.shippingAddress.fullAddress }}
                    </address>
				</p-card-body>
			</p-card>
		</div>

		<div>
			<p-card>
				<p-card-header>Ordered Items</p-card-header>
                    <div class="table__wrapper mx-3 my-3">
                        <table class="table">
                            <tr>
                                <th class="px-4 py-2 text-left">#</th>
                                <th class="text-left px-4 py-2">Item</th>
                                <th class="px-4 py-2">Quantity</th>
                                <th class="px-4 py-2">Price</th>
                            </tr>
                            <tr v-for="(item, index) in order.items">
                                <td class="border px-4 py-2">{{ index + 1 }}</td>
                                <td class="border px-4 py-2">{{ item.name }}</td>
                                <td class="border px-4 py-2 text-center">{{ item.quantity }}</td>
                                <td class="border px-4 py-2 text-right">{{ item.price }}</td>
                            </tr>
                        </table>
                    </div>
				<p-card-body>
				</p-card-body>
			</p-card>
		</div>
		
        <!--
		<div>
			<p-card>
				<pre>{{ order }}</pre>
				<p-button @click="this.load()">Load</p-button>
			</p-card>
		</div>

        -->
		
        <portal to="modals">
            <p-modal name="delete-matrix" title="Delete Matrix" key="delete_matrix">
                <p>Are you sure you want to permenantly delete this matrix?</p>

                <template slot="footer" slot-scope="matrix">
                    <p-button v-modal:delete-matrix @click="destroy(matrix.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-matrix>Cancel</p-button>
                </template>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    //import store from '../../store'

    export default {
        head: {
            title() {
                return {
                    inner: 'Order'
                }
            }
        },

        data() {
            return {
				id: null,
				order: {},
                endpoint: '/datatable/orders',
            }
        },
		/*beforeRouteEnter(to, from, next) {
			load();
			next((vm) => {
				
			});
		},*/
        mounted() {
			this.id = this.$route.params.order;
			
			this.load();
		},

        methods: {
			load(id) {
				axios.get('/api/orders/' + this.id).then((response) => {
					this.order = response.data.data;
				});
			},
            destroy(id) {
                axios.delete('/api/matrices/' + id).then((response) => {
                    //store.dispatch('navigation/fetchAdminNavigation')

                    //toast('Matrix successfully deleted.', 'success')

                    //bus().$emit('refresh-datatable-matrices')
                })
            }
        }
    }
</script>
