<template>
 
  {{quillContent}}

<header>header</header>

  <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active">
      <router-link to="/">home</router-link>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <router-link to="/List">List</router-link>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <router-link to="/List2">List2</router-link>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>


<router-view></router-view>
<button type="button" class="btn btn-success">Success</button>
  
<footer>footer</footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  data(){
    return{
      blogData:'test',
      
    }
  },
  components:{
   
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