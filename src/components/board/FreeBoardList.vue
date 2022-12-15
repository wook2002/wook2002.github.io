<template>
  <h5 class="">board</h5>
  
  <div class="container-lg">
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
        <tr>
          <th scope="row">1</th>
          <td>제목1</td>
          <td>작성자1</td>
          <td>@mdo</td>
          <td>추천</td>
          <td>조회</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between">
        <div>
          <a type="button" 
            class="btn btn-outline-info"
            href="/boardEditor">글쓰기</a>
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
    name:"freeBoardA",
}
</script>

<style>

</style>