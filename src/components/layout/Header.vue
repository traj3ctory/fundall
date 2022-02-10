<template>
  <header class="header">
    <nav class="navbar navbar-expand-md navbar-light bg_fundall">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            :src="logo"
            alt="Fundall"
            width="60"
            height="auto"
            class="img-fluid"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav w-100 justify-content-end mb-2 mb-lg-0">
            <li class="nav-item">
              <button class="btn" @click="gotoLogin">LOG IN</button>
            </li>
            <li class="nav-item">
              <button class="btn btn_signup" @click="gotoRegister">
                SIGN UP
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
const logo = require("@/assets/logo.svg");

export default {
  name: "Header",
  data() {
    return {
      logo,
      message: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    gotoRegister() {
      this.$router.push({ name: "Register", path: "/register" });
    },
    gotoLogin() {
      this.$router.push({ name: "Login", path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
header.header {
  nav.bg_fundall {
    background-color: #fcfbfc;
  }
  button {
    color: #000000;
    font-size: 0.9rem;
    font-weight: 500;
    margin-right: 0.5rem;
    &.btn_signup {
      background-color: #4ce895;
      border-radius: 10px;
      color: #000000;
      font-size: 0.9rem;
      font-weight: 500;
    }
    &:hover,
    &:focus {
      box-shadow: none;
    }
  }
}
</style>