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

   

  <!-- pageBar -->
<!-- disabled -->
<nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link previousBar " href="#" @click="previousBar">Previous</a>
        </li>
        
        <div v-for="(item, i) in this.sizeBar" :key="i" style="width: 40px; min-width: 40px;">
          <li class="page-item">
            <a class="page-link barNum disabled" :class="`barNum-${i+1}`"
              @click="clickNavBar(i+barStart)"
              href="#">{{i+barStart}}
            </a>
          </li>
        </div>
        
        <li class="page-item">
          <a class="page-link nextBar" href="#" @click="nextBar">Next</a>
        </li>
      </ul>
    </nav>

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
    connectPage : {{ connectPage }}<br>
    connectData : {{ connectData }}
</template>

<script>
import $ from 'jquery';
export default {
  name: "GetListA",
  
  mounted: function () {
    //https://milugarcito.tistory.com/610
    
    // 첨엔 항상 1번페이지
    this.clickNavBar(1)
    
  },
  data() {
    const sizeBar = 5;
    return {
      sizeBar,
      barStart:sizeBar - (sizeBar-1),

      category:this.$route.params.id,
      connectData:"",
      connectPage:"",

      
      // Post보낼 page
      currentBar:1, 
      sizeList:10, 
      // sizeBar:5, 
      sortBy:"post_no", 
      sort:"DESC",
      
      // page정보
      // maxiumBar:"",

    }
  },
  
  methods: {
    clickNavBar(i){
      this.currentBar = i

      //리스트 가져옴
      this.$axios.post("/post/readListPage/" + this.category,
      {
        currentBar: this.currentBar,
        sizeList: this.sizeList,
        sizeBar: this.sizeBar,

        sortBy: this.sortBy,
        sort: this.sort,
      })
      .then(response => {
        this.connectData = response.data
      })

      //페이지 정보 가져옴
      this.$axios.post("/post/getPageItem/" + this.category,
      {
        currentBar: this.currentBar,
        sizeList: this.sizeList,
        sizeBar: this.sizeBar,
      })
      .then(response => {
        this.connectPage = response.data
        this.maxiumBar = response.data.maxiumBar
        this.currentBar = response.data.currentBar
        this.sizeBar = response.data.sizeBar
        

        // navBar
        this.disableBar()
        this.previousBar()
        // this.nextBar()
      })
    },
    
    // currentBar:1, 
    // sizeList:10, 
    //   sizeBar:5, 
// navBar
    disableBar(){
      for(let i = 1; i <= (this.maxiumBar); i++){
       $(".barNum-"+ i).removeClass('disabled');  
      }
    },
    previousBar(){
      this.barStart -= this.sizeBar
    
      // $(".previousBar").removeClass('disabled'); 
        
    },
    nextBar(){
      this.barStart += this.sizeBar
      // $(".nextBar").removeClass('disabled');  
    } 


  },
  
  

}
</script>

<style>
.barNum-1{
  background-color: aqua;
}
</style>