<template>
  <div class="container-lg">
    <div>:카테고리</div>
    <table class="table table-hover
      table-striped
      border border-3 border-info
      ">
      <thead class="table-dark">
        <tr>
          <th scope="col">No</th>
          <th scope="col">제목</th>
          <th scope="col">글쓴이</th>
          <th scope="col">작성일</th>
          <th scope="col">추천</th>
          <th scope="col">조회</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
      <div class="d-flex justify-content-between">
        <div>
          <a type="button" 
            class="btn btn-outline-info"
            href="/freeBoard/insert">글쓰기</a>
        </div>

        <div></div>
        
        <div>
          <button type="button" 
            class="btn btn-outline-info">내글보기</button>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "GetListA",
  data() {
      return {
        connectData:this.$route.params.id,
      }
    },
  mounted: function () {
        this.$axios.get("/post/list/" + this.connectData)
          .then(response => {
            console.log("야야야 : " + response)
          })
    },

}
</script>

<style>

</style>