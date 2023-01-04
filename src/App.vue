<template>
  <div class="container-fluid">
    <!-- nav -->
    <MainNavbar></MainNavbar>
    <!-- view -->
    <div class="content ">
      <router-view></router-view>
    </div>
  </div>
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

<style lang="scss" scoped>
.container-fluid{
  margin:0px;
  padding: 0px;
}
.content{
  background-color: antiquewhite;
}
</style>
