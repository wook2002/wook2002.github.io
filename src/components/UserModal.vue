<template>
  <div class="modal-bg" @click="modalOutside">
    <div class="modal-wrap" @click.stop="">
      <form>
        <h2>tifx</h2>
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="text" id="form2Example1" class="form-control" placeholder="Identification"/>
          <!-- <label class="form-label" for="form2Example1">Identification</label> -->
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" placeholder="Password" />
          <!-- <label class="form-label" for="form2Example2">Password</label> -->
        </div>

        <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <!-- Checkbox -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label class="form-check-label" for="form2Example31">
                Remember me
              </label>
            </div>
          </div>

          <div class="col">
            <!-- Simple link -->
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <!-- Submit button -->
        <button type="button" class="btn btn-primary btn-block mb-4 submitBtn" style="width: 100%;">
          Sign in
        </button>
        <button type="button" class="btn btn-primary btn-block mb-4 submitBtn" style="width: 100%;" 
          @click="clickNLogin">
          비회원으로 바로시작
        </button>


        <!-- Register buttons -->
        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>


      

    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "ModalUser",
  methods: {
    clickClose() {
      $(".user-modal").css("visibility", "hidden");
      console.log("closeModal");
    },
    modalOutside() {
      console.log("modalOutside");
      this.clickClose();
    },
    clickNLogin(){
      console.log("clickNLogin");
      this.clickClose();

      this.$axios.get("/member/login")
    },

  },
};
</script>

<style>
.modal-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.modal-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 530px;
  background: #fff;
  z-index: 1000;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
}


</style>