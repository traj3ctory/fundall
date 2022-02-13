<template>
  <main class="login container-lg container-fluid">
    <div class="row">
      <div class="col-md-5 col-12 d-md-block d-none mb-3 img_container shadow">
        <img
          :src="image"
          alt="register image"
          width="280px"
          height="auto"
          class="img-fluid"
        />
        <h4>
          <span class="text_fundall">Welcome back!</span><br />We miss you
        </h4>
      </div>
      <div class="col-md-7 col-12 mb-3">
        <div class="card border-0 shadow-sm px-4 p-lg-4 p-md-3 px-sm-2">
          <h4>Holla</h4>
          <p>Sign in to the vibe!</p>
          <LoginForm />
          <p class="login">
            Don’t have an account?
            <router-link to="/register">Register Here</router-link>
          </p>
          <p class="copyright">
            By clicking on Login, you agree to our
            <router-link to="#"
              >Terms & Conditions and Privacy Policy</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
const image = require("@/assets/login.svg");

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  data() {
    return {
      image,
    };
  },
};
</script>

<style lang="scss" scoped>
main.login {
  min-height: calc(100vh - 70px);
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
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 2rem;
  }
  p.copyright {
    font-size: 0.8rem;
    text-align: center;
    // margin-top: 3rem;
    color: #97a19d;
  }
  p.login {
    font-size: 0.8rem;
    text-align: center;
    margin-top: 2rem;
  }
}
</style>