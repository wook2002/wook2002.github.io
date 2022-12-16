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
        <tr v-for="(item,i) in freeBoardData" :key="i">
          <th>{{item.no}}</th>
          <td class="Boardtitle" 
            @click="titleClick(`${item.no}`)"
          >
              {{item.title}}
          </td>
          <td>{{item.writer}}</td>
          <td>{{item.data}}</td>
          <td>{{item.recommend}}</td>
          <td>{{item.lookup}}</td>
        </tr>
      </tbody>
    </table>

    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    
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
import freeBoardJson  from "@/json/freeBoard.json"
// import freeBoardJson from "@/json/freeBoard.js"

export default {
    name:"freeBoardA",
    
    data(){
      return{
        freeBoardData:freeBoardJson,
      }
    },
    computed:{
      categorys(){
        return freeBoardJson.map((items)=>{
          return items;
        })
      }
    },
    methods: {
      titleClick:(no)=>{
        console.log(no);
    
        
        // this.$router.push({
        //  name: "Params",
        //   params: { name: "Params 프로그래밍 방식", age: 2 },
      // });
      },
      
    },
}
</script>

<style>

.Boardtitle:hover{
  cursor: pointer;
  text-decoration : underline;
}

</style>