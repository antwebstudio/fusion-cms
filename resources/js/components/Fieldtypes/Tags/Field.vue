<template>
  <div>
    <label :for="field.handle" class="form__label">{{ field.name }}</label>
    <div>
      <input v-model="tag" v-on:keyup.enter="addTag" type="text" class="w-100 form-control" placeholder="Type in your tags and hit enter">
      <span @click="removeTag(tag)" v-for="(tag, index) in tags" :key="index" class="badge badge-primary">{{tag}}<i @click="removeTag(index)" class="fa fa-times"></i></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      field: {
        type: Object,
        required: true,
      },

       value: {
          required: false,
          default: function() {
              return []
          },
      },
    },

    data(){
      return{
        tag: '',
        tags: []
      }
    },

    mounted() {
      this.tags = this.value.map((value) => {
        return value.name;
      });
    },

    methods:{
      addTag(){
        this.tags.push(this.tag);
        this.tag = '';
        this.$emit('input', this.tags)
      },

      removeTag(deletedTag){
        _.remove(this.tags, function(tag) {
            return tag == deletedTag;
        });
        this.$forceUpdate();
        this.$emit('input', this.tags)
      }
    }
  }
</script>

<style scoped>
  .w-100{
    width: 100%
  }
</style>
