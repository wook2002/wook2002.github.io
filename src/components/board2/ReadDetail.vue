<template>
  <div class="container">
   {{ connectDate.category }}
  </div>
  <div class="container border border-1 border-secondary">
    <div class="btnBox d-flex justify-content-between bd-highlight">
      <div class="boxBtn btn">
        <button
          class="boxBtn"><h3>{{connectDate.userId }}</h3></button>
      </div>
      <div class="p-2">
        <deleteBtn class="boxBtn"></deleteBtn>
        <button @click="updateBtn(connectDate.no)"
          class="boxBtn">수정</button>
      </div>
    </div>
    <div class="contentBox border-top">
      <div class="content-top"
        style="height: 250px">
        <div>
          <h4>{{ connectDate.title }}</h4>
        </div>
        <div>
          <!-- html코드 출력 -->
          <span v-html="connectDate.content"></span>
        </div>
      </div>
    </div>

    <div class="content-bottom">
      <button type="button" class="btn btn-outline-secondary btn-sm"
        @click="recommendAdd">
          추천해요 {{ connectDate.recommend }}
      </button>
    </div>
  </div>
    {{ connectDate.no }}
    
    
</template>

<script>
import deleteBtn from './DeleteBoard.vue'
export default {
    name: "ReadDetailA",
    mounted() {
      this.$axios.get("/post/detail/" + this.categoryNo,
        {params: {bno: this.$route.query.bno}}, 
      )
        .then(response => {
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
    components:{
      deleteBtn,
    },
    methods: {
      updateBtn(no){
        this.$router.push({
          name:'updateBoard',
          query:{bno:no},
        })
      },
      recommendAdd(){
        this.connectDate.recommend++;
      }
    },
    
}
</script>

<style>
.boxBtn{
  border: 10px;
  margin: 3px;
}
.contentBox{
  padding: 10px;
}
.content-top, .content-bottom{
  padding: 11px 5px;
}
.content-bottom{
}
</style>