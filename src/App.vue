<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" 
              data-bs-toggle="dropdown" href="#" 
              role="button" aria-expanded="false">게시판</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/freeBoardList">자유게시판</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/List">게시판테스트</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<router-view></router-view>
approuter



<br><br><br><br><br><br><br><br><br><br>

<router-link to="/">home</router-link><br>
<router-link to="/List">List</router-link><br>
<router-link to="/List2">List2</router-link><br>
  



  
<footer>footer</footer>

<h1>test</h1>
<p>
  {{quillContent}}
</p>

<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>


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