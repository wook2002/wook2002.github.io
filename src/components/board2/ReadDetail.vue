<template>
  <div class="template">
    <div>
      <div>{{ connectDate.userId }}</div>
      <div class=" w-100 border border-1 border-secondary">
        {{ connectDate.title }}
      </div>
      <div style="height: 250px"
        class="border border-1 border-secondary">
        {{ connectDate.content }}
      </div>
      
      {{ connectDate.no }}
      {{ connectDate.category }}
      {{ connectDate.regDate }}
      {{ connectDate.recommend }}
      {{ connectDate.lookup }}
    </div>
    <div>
      <deleteBtn></deleteBtn>
      <button @click="updateBtn(connectDate.no)">수정</button>
    </div>
  </div>
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