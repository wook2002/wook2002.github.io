<template>
  <div class="container-lg">
    <div>:카테고리</div>

    <!-- table -->
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
        <tr v-for="(item,i) in connectData" :key="i">
          <th>{{item.no}}</th>
          <td class="Boardtitle" 
            @click="titleClick(`${item.no}`)"
          >
              {{item.title}}
          </td>
          <td>{{item.userId}}</td>
          <td>{{item.regDate}}</td>
          <td>{{item.recommend}}</td>
          <td>{{item.lookup}}</td>
        </tr>
      </tbody>
    </table>

    <!-- button -->
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

  <!-- pageBar -->
<!-- disabled -->
<nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link disabled previousBar" href="#" @click="barPrevious">Previous</a>
        </li>
        
        <div v-for="(item, i) in barTotal" :key="i" style="width: 40px; min-width: 40px;">
          <li class="page-item">
            <a class="page-link" 
              @click="clickNavBar(i+barStart)"
              href="#">{{i+barStart}}
            </a>
          </li>
        </div>
        
        <li class="page-item">
          <a class="page-link" href="#" @click="barNext">Next</a>
        </li>
      </ul>
    </nav>
  

</template>

<script>
export default {
  name: "GetListA",
  data() {
    return {
      category:this.$route.params.id,
      connectData:"",
      pageItem:{
        "currentBar":1, 
        "sizeList":10, 
        "sizeBar":5, 
        "sortBy":"post_no", 
        "sort":"DESC"
      },
    }
  },
  
  mounted: function () {
    //https://milugarcito.tistory.com/610
    this.$axios.post("/post/readListPage/" + this.category,
      {
        currentBar: this.pageItem.currentBar,
        sizeList: this.pageItem.sizeList,
        sizeBar: this.pageItem.sizeBar,
        sortBy: this.pageItem.sortBy,
        sort: this.pageItem.sort,
      })
      .then(response => {
        console.log("야야야 : " + response)
        this.connectData = response.data
      })
    },

}
</script>

<style>

</style>