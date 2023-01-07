<template>
  <div class="box container-fluid">
    <ul class="main-nav nav nav-pills nav-fill">
      <li class="nav-item col-2">
        <img src="./assets/img/astronaut.png" alt="" class="nav-img">
      </li>
      <li class="nav-item col-2 d-none d-sm-block">글씨</li>
      <li class="nav-item col-6 d-none d-sm-block">검색</li>
      <li class="nav-item col-8 d-block d-sm-none"></li>
      <li class="nav-item col-2">로그인</li>
    </ul>

    <div class="main-content">
      <div class="sub-nav">
        <ul class="nav flex-column">
          <li class="mnav-ite">
            <a href="#"><i class="fas fa-2x fa-home"></i></a>
          </li>
          <li class="nav-item">
            <a href="#"><i class="fas fa-2x fa-users"></i></a>
          </li>
          <li class="nav-item">
            <a href="#"><i class="far fa-2x fa-envelope"></i></a>
          </li>
          <li class="nav-item">
            <a href="#"><i class="fas fa-2x fa-signal"></i></a>
            
          </li>
        </ul>
      </div>
      <div class="sub-content vw-100">sub-content</div>
    </div>
    <div>footer</div>

    <!-- <Sidebar></Sidebar> -->
    <!-- contentTest 
    <div class="container-xl content">
      <router-view></router-view>
    </div>-->
  </div>
</template>

<script>
// import MainNavbar from './components/layout/MainNavbar.vue'
// import Sidebar from "./components/layout/Sidebar.vue";
export default {
  name: "app",
  components: {
    // MainNavbar,
    // Sidebar,
  },
};
</script>

<style lang="scss" scoped>

// // Small devices (landscape phones, 576px and up)
@media (max-width: 576px) {
  // .sub-nav {
  //   width: 50px;
  // }
  .sub-content {
    width: 100%;
    // height: 130vw;
  }
}
// // Medium devices (tablets, 768px and up)
// @media (max-width: 768px) {}
// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }
// // X-Large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }
// // XX-Large devices (larger desktops, 1400px and up)
// @media (min-width: 1400px) { ... }
.nav-img {
  width: 70px;
  height: 70px;
  background-size: cover;
}
div {
  box-sizing: border-box;
}
.box {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  background-color: cadetblue;
}
.main-nav {
  background-color: lightpink;
  height: 80px;
  // white-space: nowrap;
 
}
.main-content {
  display: flex;
  height: 80%;
}
.sub-nav {
  background-color: rgb(51, 81, 59);
  flex-shrink: 0.3;
  width: 50px;
  line-height: 4em;
}
.sub-content {
  background-color: antiquewhite;
  flex-shrink: 0.7;
  // max-width: 100vw;
}
</style>
