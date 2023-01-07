<template>
  <div class="container-fluid">

    <div class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <div class="error-img">
                <!-- <img src="@/assets/img/astronaut.png" alt=""> -->
              </div>  
              <div>
                <span class="display-1 d-block">404</span>
                <div class="mb-4 lead">The page you are looking for was not found.</div>
                <a class="btn btn-link" @click="backToHome">
                  Back to Home
                </a>
              </div>
            </div>
        </div>
    </div>
</div>

</div>
</template>

<script>
export default {
    name:"404Pageasdfas",
    methods: {
      backToHome(){
        this.$router.push({
          name:'home',
        })
      },
    },
}
</script>

<style>
body {
    background: #dedede;
}
.page-wrap {
    min-height: 100vh;
}
</style>