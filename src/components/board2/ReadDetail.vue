<template>
  ReadDetail <br>
  {{ connectDate.userId }}

  {{ connectDate.no }}
  {{ connectDate.category }}

  {{ connectDate.title }}
  {{ connectDate.content }}
  {{ connectDate.regDate }}
  {{ connectDate.recommend }}
  {{ connectDate.lookup }}
 

</template>

<script>
export default {
    name: "ReadDetailA",
    mounted() {
      this.$axios.get("/post/detail/" + this.categoryNo,
      {params: {bno: this.$route.query.bno}}, )
        .then(response => {
          console.log(response)
          this.connectDate = response.data[0]
        }
      )
    },
    data() {
      return {
        categoryNo: this.$route.params.id,
        connectDate:"",
      }
    },
}
</script>

<style>

</style>