<template>
  <!--  @submit.prevent="submitForm" -->
  <form @submit.prevent="submitForm">
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
    </form> 
</template>

<script>
export default {
    name:"FreeBoardInsert",
    data() {
      return {
        postData: {
          userId: '',
          title:  '',
          body:   ''
        },
      }
  },
  methods: {
    // submitForm:function(){
    //   console.log(this.postData)
    // },

    submitForm(){

      // { headers: { 'Content-Type': 'application/json' } }
      this.$axios.post('/freeBoard/insert', this.postData)
        .then((response)=>
          console.log(response)
        )
    },
  }

}
</script>

<style>

</style>