<template>
  
  <QuillEditorVue></QuillEditorVue>
  <!-- state.content 값을 가져올 수가 없음.  -->
  <button @click="$store.commit('setQuillContent',state.content)">send</button>

</template>

<script>
import QuillEditorVue from './QuillEditor.vue';
export default {
  components:{
    QuillEditorVue,
  }
}
</script>

<style>

</style>