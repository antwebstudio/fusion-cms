<template>
    <div>
        <p-input
            name="settings.placeholder"
            label="Placeholder"
            help="Text that will appear inside the WYSIWYG element's content area when empty."
            autocomplete="off"
            v-model="settings.placeholder"
            :has-error="errors.has('settings.placeholder')"
            :error-message="errors.get('settings.placeholder')">
        </p-input>

        <p-checkbox-group
            label="File type restrictions"
            help="Restrict which file types are selectable for this field; leave blank if no retriction is desired."
            :has-error="errors.has('settings.filetype_restrictions')"
            :error-message="errors.get('settings.filetype_restrictions')">
            <p-checkbox
                v-for="(filetype, index) in filetypes"
                name="settings.filetype_restrictions"
                :id="index"
                :key="index"
                :native-value="index"
                v-model="settings.filetype_restrictions">
                {{ filetype }}
            </p-checkbox>
        </p-checkbox-group>
    </div>
</template>

<script>
	import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'tinymce-fieldtype-settings',

        mixins: [fieldtype],

        data() {
        	return {
        		filetypes: {
	                image:    'Images',
	                video:    'Videos',
	                audio:    'Audio',
	                document: 'Documents',
	        	},
	        	directories: []
	        }
        },
    }
</script>

