<template>
    <button @click="clickDelete">삭제3</button>

</template>

<script>
export default {
    name:"FreeBoardDeleteA",
    data() {
      return {
        connectData:"",
        
      }
    },
    
    methods: {
      clickDelete: function(){
        this.$axios.get("/freeBoard/delete/"+ this.$route.params.id)
      }
    },
    

}
</script>

<style>

</style>