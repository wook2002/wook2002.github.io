<template>
  <div class="box">
    <div class="box-top">
      <header class="container-fluid row nav-box">
        <div class="nav-left col-3">
          <div class="nav-img">img</div>
          <div class="d-none d-md-block nav-text">
            <a href="">textsdfdsf</a>
          </div>
        </div>
        <div class="nav-center col-6 d-none d-sm-block">
          <form action="">
            <input type="text" />
            <input type="submit" />
          </form>
          <!-- <div class="nav-search">search</div>
          <div class="nav-button">button</div>  -->
        </div>
        <div class="nav-right col-3">
          <div class="nav-profile">
            <a href="#"><i class="fas fa-2x fa-user"></i></a>
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
            class="offcanvas offcanvas-start offcanvas-size-sm"
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
              <div>lorem</div>
              <div class="dropdown mt-3">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" 
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: "app",
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
* {box-sizing: border-box;}
.box-top {min-height: 200vh;}
header {
  background: rgb(179, 219, 229);
  position: relative;
}
.main-content {
  background: #c7e5ce;
}
footer {
  background: rgb(179, 176, 192);
}
/* nav */
.nav-box {
  justify-content: space-between;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 6px;
}
.nav-left {
  background-color: rgb(181, 176, 117);
  display: flex;
}
.nav-center {
  background-color: #c7e5ce;
  max-width: 400px;
  padding: 10px;
}
.nav-right {
  background-color: rgb(181, 176, 117);
  padding: 10px 60px;
  display: flex;
  justify-content: flex-end;
}
.nav-profile {
  padding: 0px 20px;
}
.nav-img {
  background-color: rgb(202, 160, 209);
  min-width: 60px;
  min-height: 60px;
}
.nav-text {
  background-color: rgb(202, 148, 148);
  padding: 13px 5px;
}

.nav-search {
  background-color: blue;
  float: left;
}
.nav-button {
  background-color: red;
}
.sidebar {
  height: 100%;
}
.offcanvas-btn{
  position: fixed;
}
</style>