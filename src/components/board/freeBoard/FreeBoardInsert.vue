<template>
  <!--  @submit.prevent="submitForm" -->
  <div>
    <QuillEditorVue></QuillEditorVue>
   {{quillContent}} 
  </div>
  <!-- <form @submit.prevent="submitForm">
      <div>
        <label for="userId">UserID:</label>
        <input type="text" id="userId" v-model="postData.userId">
      </div>
      <div>
        <label for="title">Title: </label>
        <input type="text" id="title" v-model="postData.title">
      </div>
      <div>
        <label for="body">Body: </label>
        <textarea id="body" rows="6" cols="22" v-model="postData.body"></textarea>
      </div>
      <button type="submit">Create Post</button>
    </form>  -->
</template>

<script>
import QuillEditorVue from '@/components/quillEditor/QuillEditor.vue';
import { mapState } from 'vuex';
export default {
    name:"FreeBoardInsert",
    data() {
      return {
        postData: {
          writer: '',
          title:  '',
          content:   ''
        },
      }
  },
  components:{
    QuillEditorVue,
  },
  computed:{
    ...mapState(['quillContent']),
  },
  methods: {
    // submitForm:function(){
    //   console.log(this.postData)
    // },

    // submitForm(){
      // this.$axios.post('/freeBoard/insert', this.postData)
      //   .then((response)=>
      //     console.log(response)
      //   )
    // },
  }

}
</script>

<style>

</style>