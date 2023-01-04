<template>
  ReadDetail <br>
  0 {{ connectDate.title }}
  <br>
  0 {{ connectDate.content }}
  <br>
  1 {{ connectDate.userId }}
<br>
  2 {{ connectDate.no }}
<br>
  3 {{ connectDate.category }}
<br>
 
  {{ connectDate.regDate }}
  {{ connectDate.recommend }}
  {{ connectDate.lookup }}
 <br>
 connectDate : {{ connectDate }} <br>
 <deleteBtn></deleteBtn> <!--삭제임 -> 버튼식으로 바꿀꺼-->
 <button @click="updateBtn(connectDate.no)">수정</button>

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
      }
    },
    
}
</script>

<style>

</style>