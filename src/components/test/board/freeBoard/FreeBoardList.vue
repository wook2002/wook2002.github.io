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
      <!-- "titleClick(`${item.no}`)" 
      $router.push('/freeBoardDetail/'+ i)-->
      <tbody>
        <tr v-for="(item,i) in connectData" :key="i">
          <th>{{item.no}}</th>
          <td class="Boardtitle" 
            @click="titleClick(`${item.no}`)"
          >
              {{item.title}}
          </td>
          <td>{{item.writer}}</td>
          <td>{{item.freeDate}}</td>
          <td>{{item.recommend}}</td>
          <td>{{item.lookup}}</td>
        </tr>
      </tbody>
    </table>

   <pagingNav></pagingNav>
    
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

  
  야{{$store.state.navBarNum }}
</template>

<script>
import freeBoardJson  from "@/json/freeBoard.json"
// import freeBoardJson from "@/json/freeBoard.js"
import pagingNav from "../Paging.vue"
import { mapMutations } from 'vuex'

export default {
    name:"freeBoardA",
    components:{
      pagingNav,
    },
    mounted: function () {
        this.$axios.get("/freeBoard/list")
          .then(response => {
            this.connectData = response.data
          })
    },
    data(){
      return{
        freeBoardData:freeBoardJson,
        connectData:"",

      }
    },
    computed:{
      
      //임시 데이터
      categorys(){
        return freeBoardJson.map((items)=>{
          return items;
        })
      },
      
      

    },
    methods: {
      titleClick:(no)=>{
        console.log(no);

        // this.$axios.get('/detail').then((response)=>{
        //   console.log(response)
        // })
        
        // this.$router.push({ path: 'home' })
        
        
        
        // this.router.push("/detail"); 

        // 페이지이동(1)
        location.href="detail/"+ no;

        // 새창
        // window.open("http://localhost:8081/freeBoard/detail/"+ no);  
        

        // this.$router.push({
        //  name: "Params",
        //   params: { name: "Params 프로그래밍 방식", age: 2 },
      // });
      },
      ...mapMutations(['getNavBarNum']),
      
    },
}
</script>

<style>

.Boardtitle:hover{
  cursor: pointer;
  text-decoration : underline;
}

</style>