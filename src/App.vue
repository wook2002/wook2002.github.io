<template>
  
  <!-- nav -->
  <MainNavbar></MainNavbar>
  
  <!-- view -->
  <router-view></router-view>
 
</template>

<script>
import MainNavbar from './components/layout/MainNavbar.vue'
export default {
  name: "app",
  components:{
    MainNavbar,
  }
  
};
</script>

<style>
div, input{box-sizing: border-box;}

.nav-box{
  padding: 0px;
}
/* normalize.css  */

</style>