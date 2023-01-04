<template>  <!-- 
  <form action="" method="Post" @submit.prevent="submitForm">
    <input type="text" name="title">
    <input type="text" name="content">
    <button @click="submit()">버튼</button>
  <QuillEditorVue></QuillEditorVue> 
  </form>-->
  <form>
    <input type="text" placeholder="Name">
    <input type="text" placeholder="Email">
  </form>
  <button @click="confirmWrite">a</button>



  <section>
    <form @submit.prevent="createPost">
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
      <button>Create Post</button>
    </form>
  </section>

</template>

<script>
// import QuillEditorVue from './QuillEditor.vue';
export default {
  data() {
    return {
      postData: {
        userId: '',
        title:  '',
        body:   ''
      }
    }
  },
  methods: {
    createPost(){
      this.$axios.post('/freeBoard/insert', this.postData)
      .then((response) => console.log(response))
    }
  }, 
  /* */
  // methods: {
  //     confirmWrite(){
  //       this.$axios.post('/freeBoard/insert', {
  //         userId: '1',
  //         title:  'Article title',
  //         body:   'Article body content'    
  //       })
  //       .then((response) => console.log(response))
  //     }
  // },
}
</script>

<style>

</style>