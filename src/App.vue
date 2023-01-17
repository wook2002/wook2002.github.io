<template>

<button @click="clickTest1">test1</button>
  <button @click="clickTest2">test2</button>
 

  <bcryTest></bcryTest>
  <h2>test</h2>
  <br>
  <div class="user-modal">
    <UserModal></UserModal>
  </div>
  <div class="wrap">
    <div class="box-top">
      <header class="container-fluid row nav-box">
        <div class="nav-left col-3">
          <div class="nav-img">
            <a href="/">
              <img src="./assets/img/astronaut.png" alt="" />
            </a>
          </div>
          <div class="d-none d-md-block nav-text">
            <p>asdfsfaasfasfasfsa</p>
          </div>
        </div>
        <div class="nav-center col-6 d-none d-md-block">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="구성원 검색"
              aria-label="Search for..."
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >검색
            </button>
          </div>
        </div>
        <div class="nav-right col-3">
          <div class="nav-profile">
            <a href="#" @click="clickModal"><i class="fas fa-2x fa-user"></i></a>
            <i class="fa-solid fa-magnifying-glass"></i>
            <!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> -->
          </div>
          <div class="nav-offcanvas">
            <a
              class="btn btn-primary offcanvas-btn"
              data-bs-toggle="offcanvas"
              href="#offcanvas-sidebar"
              role="button"
              aria-controls="offcanvas-sidebar"
            >
              <i class="fas fa-2x fa-bars"></i>
            </a>
          </div>
        </div>
      </header>
      <div class="main-content">
        <div class="sidebar">
          <div
            class="offcanvas offcanvas-start offcanvas-size-sm offcanvas-box" 
            data-bs-scroll="true"  
            data-bs-backdrop="false"
            tabindex="-1"
            id="offcanvas-sidebar"
            aria-labelledby="offcanvasLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="dropdown mt-3">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                >
                  게시판
                </button>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <li>
                    <a class="dropdown-item" href="/post/readListPage/2"
                      >공지사항</a
                    >
                  </li>
                  <li><a class="dropdown-item" href="/post/readListPage/1">자유게시판</a></li>
                  <li>
                    <a class="dropdown-item" href="/post/readListPage/3">Qna</a>
                  </li>
                </ul>
                <ul class="nav">
                  <li class="nav-item">1</li>
                  <li class="nav-item">2</li>
                  <li class="nav-item">3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer>footer</footer>
  </div>
</template>

<script>
import UserModal from './components/UserModal.vue'
import bcryTest from './components/bcrypt/BcryptTest.vue'
// import { useCookies } from "vue3-cookies"


// axios.defaults.withCredentials = true;
export default {
  name: "app",
  components:{
    UserModal,
    bcryTest,
  },
  methods: {
    // https://stackoverflow.com/questions/60449746/vue-js-and-axios-using-but-unable-to-receive-set-cookie-in-response-headers
    clickTest1(){
      // ,{withCredentials: true}
      this.$axios.get("/member/all1")
      .then(response => {
        // console.log("response : " + response.headers);
        // withcredential : true
        console.log("123  : " + response)

        console.log(`status code: ${response.status}`); 
        console.log(`headers: ${response.headers}`) 
        console.log(`data: ${response.headers['set-cookie']}`)
      })
    
      
      console.log("test1");
    }
    },
    clickTest2(){
      this.$axios.get("/member/all2")
      console.log("test2");
    }
};
</script>

<style lang="scss" scoped>
// // Medium devices (tablets, 768px and up)
@media (max-width: 768px) {
  .box {
    min-width: 515px;
  }
}
.offcanvas-size-sm {
  --bs-offcanvas-width: min(95vw, 250px) !important;
}
// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }
// // X-Large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }
// // XX-Large devices (larger desktops, 1400px and up)
// @media (min-width: 1400px) { ... }
* {
  box-sizing: border-box;
}
.box-top {
  min-height: 100vh;
  // position: relative;
}
header {
  background: #ffffff;
  // position: relative;
  z-index: 1;
}
.main-content {
  background: #f2f3f6;
  height: 100%;
  top: 100px;
  position: relative;
  top: 60px;
}
footer {
  background: #4e73df;
  color: #ffffff;
}
/* nav */
.nav-box {
  justify-content: space-between;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  height: 80px;
  // max-height: 90px ;
  border-bottom: 2px solid red;
  position: fixed;
  min-width: 300px;
}
.nav-left {
  // background-color: rgb(181, 176, 117);
  display: flex;
}
.nav-center {
  // background-color: #c7e5ce;
  max-width: 400px;
  padding: 10px;
}
.nav-right {
  // background-color: rgb(181, 176, 117);
  padding: 10px;
  display: flex;
  justify-content: flex-end;
}
.nav-profile {
  padding: 5px 20px 0px 0px;
}
.nav-img {
  // background-color: rgb(202, 160, 209);
  // min-width: 60px;
  // min-height: 60px;
  height: 60px;
  min-width: 60px;
  border-radius: 10px;
}
.nav-text {
  // background-color: rgb(202, 148, 148);
  padding: 13px 5px;
  width: 100px;
}
.offcanvas-box {
  background-color: #4e73df;
  color: #ffffff;
}
.nav-text > p {
  overflow: hidden;
  text-overflow: ellipsis;
}
.nav-search {
  float: left;
}
.nav-button {
}
.sidebar {
  height: 100%;
}
.offcanvas-btn {
  // position: fixed;
}

//
img {
  width: 100%;
  height: 100%;
}
.user-modal{
  visibility: hidden;
}
</style>