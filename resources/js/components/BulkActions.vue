<template>
    <div v-if="alwaysShow || hasSelections">
        <div>
            <div class="input-group-prepend">
                <div class="text-grey-60"
                    v-text="displaySelectedText" />
            </div>

            <span
                v-if="hasSelections"
                v-for="(action, index) in sortedActions"
                :key="index"
            >
                <button class="button"
                    @click="performAction(action)"
                    v-text="action.text" />
            </span>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            endpoint: {
                type: String,
            },
            selections: {
                type: Array,
            },
            alwaysShow: {
                type: Boolean,
                default: true,
            },
        },
        watch: {
            selections(value) {
                this.getActions()
            }
        },
        data() {
            return {
                actions: [],
                errors: {},
            }
        },
        computed: {
            sortedActions() {
                return this.actions
            },
            hasSelections() {
                return this.selections.length > 0
            },
            displaySelectedText() {
                if (this.selections.length > 1) {
                    return this.selections.length + ' items selected';
                } else {
                    return this.selections.length + ' item selected';
                }
            }
        },
        methods: {
            performAction(action) {
                this.$emit('started');

                this.errors = {};

                const payload = {
                    action: action.handle,
                    context: action.context,
                    selections: this.selections,
                    // values
                };

                axios.post(this.endpoint, payload, { responseType: 'blob' }).then(response => {
                    if (response.headers['content-disposition']) {
                        this.downloadFile(response);
                        this.$emit('completed', true);
                    }

                    // We need a blob for file downloads, but we need to convert it back to JSON to handle a redirect
                    else {
                        response.data.text().then(data => {
                            data = JSON.parse(data);
                            if (data.redirect) window.location = data.redirect;
                            this.$emit('completed', true, data);
                        });
                    }
                }).catch(error => {
                    error.response.data.text().then(data => {
                        data = JSON.parse(data);
                        toast(data.message, 'error');
                        if (error.response.status == 422) this.errors = data.errors;
                        this.$emit('completed', false, data)
                    });
                });
            },
            getActions() {
                if (!this.hasSelections) {
                    this.actions = [];

                    return;
                }

                let data = {
                    selections: this.selections,
                };

                // if (this.context) {
                //     data.context = this.context;
                // }

                axios.get(this.endpoint, data).then(response => {
                    this.actions = response.data;
                });
            },
        }
    }
</script>
