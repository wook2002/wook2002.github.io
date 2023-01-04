<template>
  <!-- 필요데이터 : category, bno(주의 ROWNUM VS post_no) -->
  <button @click="deleteBtn">삭제</button>
 
</template>

<script>
export default {
    name: "DeleteBoardA",
    methods: {
      deleteBtn(){
         this.$axios("/post/deleteBoard/"+ this.categoryNo
          ,{params: {bno: this.$route.query.bno}}, 
         )
            .then(response => {
              console.log("야"+response)
            })
         this.$router.push('/post/readListPage/'+ this.categoryNo);
      }
   },
   data() {
      return {
         categoryNo: this.$route.params.id,
      }
   },
   props:{

   }
}
</script>

<style>

</style>