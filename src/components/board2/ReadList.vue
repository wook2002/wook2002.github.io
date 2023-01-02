<template>
  <div class="container-lg">
    <div> {{categoryName}}</div>
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
        <tr v-for="(item,i) in connectList" :key="i">
          <th>{{item.rn}}</th>
          <td class="Boardtitle" 
            @click="clickTitle(`${item.categoryNo}${item.rn}`)"
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
          <a class="page-link previousBar" href="#" @click="clickPreviousBar">Previous</a>
        </li>
        
        <div v-for="(item, i) in sizeBar" :key="i" style="width: 40px; min-width: 40px;">
          <li class="page-item">
            <a class="page-link disabled barNum" :class="`barNum-${i+beginBar}`"
              @click="clickNumBar(i+beginBar)"
              href="#">{{i+beginBar}}
            </a>
          </li>
        </div>
        
        <li class="page-item">
          <a class="page-link nextBar" href="#" @click="clickNextBar">Next</a>
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
  <!-- connectData : {{ connectData }} <br> -->
  
  
</template>

<script>
import $ from 'jquery';
export default {
  name: "GetListA",
  
  mounted: function () {
    //https://milugarcito.tistory.com/610
    
    // 첨엔 항상 1번페이지
    this.getItem(1)
    
  },
  data() {
    const sizeBar = 5; // 조정가능 1
    return {
      connectData:"",
      connectList:"",
      
      category:this.$route.params.id,
      categoryName:"",
      sizeList:10,  // 조정가능 2
      sortBy:"post_no", 
      sort:"DESC",
      
      currentBar:1, 
      beginBar:1,
      endBar:"" ,
      maxiumBar:"" ,
      sizeBar,
    }
  },

  
  methods: {
    getItem(i){
      this.currentBar = i

      //리스트 가져옴
      this.$axios.post("/post/readListPage/" + this.category,
      {
        currentBar: this.currentBar,
        sizeBar: this.sizeBar,
        
        sizeList: this.sizeList,
        sortBy: this.sortBy,
        sort: this.sort,
      })
      .then(response => {
        // console.log("listItem : " + response.data.list )
        this.connectData = response.data
        this.connectList = response.data.list
        
        this.categoryName = response.data.list[0].category

        this.currentBar = response.data.currentBar
        this.beginBar = response.data.beginBar
        this.endBar = response.data.endBar
        this.maxiumBar = response.data.maxiumBar
        // this.sizeBar = response.data.sizeBar

        this.statusBar()
      })

      //페이지 정보 가져옴
      /*
      this.$axios.post("/post/getPageItem/" + this.category,
      {
        currentBar: this.currentBar,
        sizeList: this.sizeList,
        sizeBar: this.sizeBar,

        sortBy: this.sortBy,
        sort: this.sort,
      })
      .then(response => {
        this.connectPage = response.data
        this.maxiumBar = response.data.maxiumBar
        this.currentBar = response.data.currentBar
        this.sizeBar = response.data.sizeBar
        this.beginBar = response.data.beginBar
        this.endBar = response.data.endBar
        this.statusBar()
      })
       */
    },

    //clickBar
    clickNumBar(i){
      this.currentBar = i
      this.getItem(i)
    },
    clickPreviousBar(){
      this.beginBar -= this.sizeBar
      this.getItem(this.beginBar);
    },
    clickNextBar(){
      this.beginBar += this.sizeBar
      this.getItem(this.beginBar); 
    },

    
    statusBar(){
      //num
      for(let i = this.beginBar; i <= (this.maxiumBar); i++){
        $(".barNum-"+ i).removeClass('disabled'); 
      }

      //begin
      if(this.beginBar == 1){
        $(".previousBar").addClass('disabled'); 
      }else{
        $(".previousBar").removeClass('disabled'); 
      }

      //end
      if(this.endBar == this.maxiumBar){
        $(".nextBar").addClass('disabled');  
      }else{
        $(".nextBar").removeClass('disabled'); 
      }
    },

    
    // detail
    clickTitle:(no)=>{
      console.log("categoryNo : " + no[0]); // categoryNo
      console.log("baordNo : " + no[1]); // baordNo

      // this.$router.push({name:'ReadDetail'})
      this.$router.push('/freeBoard/list')
      // this.$router.replace({ name: "user-view", params: {id:"123"}, query: {q1: "q1"} })
      // location.href= "/post/detail/"+ no[0] + "?no="+ no[1];

      // this.$axios.get("/post/detail/" + no[1])
      // .then(response => {
      //       this.connectData = response.data
      //     })
    }



  },
  
  

}
</script>

<style>
.barNum-1{
  background-color: aqua;
}
</style>