<template>
  <h1>Detail</h1>
  <div>
    <div><button>목록</button></div>
    <!-- <div><button>답글</button></div>
    <div><button>수정</button></div>
    <div><button>삭제</button></div> -->
    <deleteBtn></deleteBtn>
    <p>-----------------</p>
    <div>{{connectData.title}}</div> 
    <div>{{connectData.writer}}</div>
    <div>{{connectData.content}}</div>
    <div>{{connectData.freeDate}}</div>
    <div>{{connectData.recommend}}</div>
    <div>{{connectData.lookup}}</div>
    
    <p>-----------------</p>
    <div><button>댓글</button></div>
    <div><button>추천해요</button></div>
    <div>[댓글창]</div>
  </div>
<!-- 테스트
  {{$route.params.id}} -->
  {{connectData}}
</template>

<script>
import deleteBtn from './FreeBoardDelete.vue'
export default {
    name:"FreeBoardDetailA",
    mounted: function () {
        this.$axios.get("/freeBoard/detail/"+ this.connectData)
          .then(response => {
            this.connectData = response.data[0]
          })
    },
    data() {
      return {
        connectData:this.$route.params.id,
      }
    },
    components:{
      deleteBtn,
    }
    
    
}
</script>

<style>

</style>