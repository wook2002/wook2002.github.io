<template>


<header>header2</header>

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

export default {
  name: 'app',
  data(){
    return{
      blogData:'test',
    }
  },
  components:{
    
  }
}
</script>

<style>

</style>