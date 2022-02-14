<template>
  <main class="register container-lg container-fluid px-lg-5 px-md-3">
    <div class="row">
      <div class="col-md-5 col-12 d-md-block d-none mb-3">
        <div class="img_container">
          <img
            :src="image"
            alt="register image"
            width="220px"
            height="auto"
            class="img-fluid mb-3"
          />
        </div>
        <div class="text_shift">
          <h4>
            <span class="text_fundall">Welcome!</span>&ensp;Let's get<br />to
            know you.
          </h4>
          <p>
            Your first step toward a better financial<br />lifestyle starts
            here.
          </p>
        </div>
      </div>
      <div class="col-md-7 col-12 mb-3">
        <div class="card border-0 shadow-sm px-lg-5 px-md-3 px-1 py-4 ">
          <RegForm />
          <p class="login">
            Already have an account?
            <router-link to="/login">Login Here</router-link>
          </p>
        </div>
        <p class="copyright">
          By clicking on Login, you agree to our
          <router-link to="#"
            >Terms &<br />
            Conditions and Privacy Policy</router-link
          >
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import RegForm from "../components/RegForm.vue";
const image = require("@/assets/signup.svg");

export default {
  name: "Register",
  components: {
    RegForm,
  },
  data() {
    return {
      image,
    };
  },
};
</script>

<style lang="scss" scoped>
main.register {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h4,
  p {
    color: #000000;
  }
  h4 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 1.5rem;
    text-align: left;
  }
  p {
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 1.5rem;
  }
  p.copyright {
    font-size: 0.8rem;
    text-align: center;
    margin-top: 3rem;
    color: #97a19d;
  }
  p.login {
    font-size: 0.8rem;
    text-align: center;
    margin-top: 2rem;
  }
  div.img_container {
    display: flex;
    align-items: center;
    justify-content: center;
    // flex-direction: column;
    margin-top: 2rem;
  }
  div.text_shift{
    margin-left: 5rem;
  }
}
</style>