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
        <tr v-for="(item,i) in freeBoardData" :key="i">
          <th>{{item.no}}</th>
          <td>
            <a @click="titleClick(`${item.no}`)">
              {{item.title}}
            </a>
          </td>
          <td>{{item.writer}}</td>
          <td>{{item.data}}</td>
          <td>{{item.recommend}}</td>
          <td>{{item.lookup}}</td>
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
        console.log(no)
      }
    },
}
</script>

<style>

</style>