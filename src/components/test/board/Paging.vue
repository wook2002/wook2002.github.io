<template>

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
import $ from 'jquery';
import { mapMutations } from 'vuex';
export default {
    name:"pagingA",
    created() {
      
    },
    // mounted: function () {
    //     this.$axios.get("/paging")
    //       .then(response => {
    //         this.connectData = response.data
    //       })
    // },
    props:{
      
    },
    data() {
       const barTotal = 5;
        return {
          barTotal,
          
          barStart:barTotal - (barTotal-1),
          // 1,6,11, ... 
          // 1+(x-1)5
          

        }
    },
    methods: {
      barNext(){
         this.barStart += this.barTotal;

         if( this.barStart != 1){
          $(".previousBar").removeClass("disabled")
        }

      },
      barPrevious(){
        this.barStart -= this.barTotal;

        if( this.barStart == 1){
          $(".previousBar").addClass("disabled")
        }
        
      },
      clickNavBar(i){
        console.log(i)
        this.setNavBarNum(i)

        //this.$axios.get("/paging/" + i)
        
      },
      ...mapMutations(['setNavBarNum']),

    },
 
    
}
</script>

<style>

</style>