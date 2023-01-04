<template>
   <button @click="deleteBtn">삭제</button>
   <!-- d{{connectData}}d -->
   
    
</template>

<script>
export default {
   name:"FreeBoardDeleteA",
   props:{
      connectData: Array,
   },
   methods: {
      deleteBtn(){
         this.$axios("/freeBoard/delete/"+ this.connectData.no)
            .then(
               console.log('하')
            )
         this.$router.push('/freeBoard/list');
      }
   },
   
    

}
</script>

<style>

</style>