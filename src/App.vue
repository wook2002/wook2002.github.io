<template>
  <!-- style="height:500px"=>겹쳐서 임시로 지정해둠  -->
  <div class="container-fluid" style="height:500px">
    <nav>
      <NavbarVue></NavbarVue>
    </nav>

    <div>
      <router-view></router-view>
    </div>

  </div>

  <!-- test -->
  <div class="container-fluid">
    <p>
      {{quillContent}}
      <!-- {{freeBoardData}} -->
    </p>
  </div>

<!-- <router-link to="/List">List</router-link><br>
<router-link to="/List2">List2</router-link><br> -->
  

  
<footer>footer</footer>





</template>

<script>
import { mapState } from 'vuex'
import NavbarVue from './components/Navbar.vue';
// import freeBoardData from './json/freeBoard';

export default {
  name: 'app',
  data(){
    return{
      blogData:'test',
      // freeBoardData,
      
    }
  },
  components:{
    NavbarVue,
  },
  computed:{
    ...mapState(['quillContent']),
  },
  methods: {
    
  },
}
</script>

<style>

</style>