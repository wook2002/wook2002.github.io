<template>
  <!-- 필요데이터 : category, bno(주의 ROWNUM VS post_no) -->
  <button @click="deleteBtn">삭제</button>
</template>

<script>
export default {
    name: "DeleteBoardA",
    methods: {
      deleteBtn(){
         this.$axios("/freeBoard/delete/"+ this.connectData.no,
         {params: {bno: this.$route.query.bno}}, )
            .then(response => {
              console.log(response)
              this.connectDate = response.data[0]
            })
         this.$router.push('/freeBoard/list');
      }
   },
}
</script>

<style>

</style>