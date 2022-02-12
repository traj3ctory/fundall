<template>
  <header class="header">
    <nav class="navbar navbar-expand-md navbar-light bg_fundall">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img
            :src="logo"
            alt="Fundall"
            width="80"
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
          <ul
            class="navbar-nav w-100 justify-content-end mb-2 mb-lg-0"
            v-if="!this.$store.getters.isAuthenticated"
          >
            <li class="nav-item">
              <button class="btn" @click="gotoLogin">LOG IN</button>
            </li>
            <li class="nav-item">
              <button class="btn btn_signup" @click="gotoRegister">
                SIGN UP
              </button>
            </li>
          </ul>
          <ul
            class="navbar-nav w-100 justify-content-end mb-2 mb-lg-0"
            v-if="this.$store.getters.isAuthenticated"
          >
            <li class="nav-item">
              <button class="btn btn_logout" @click="logout">
                <i class="bi bi-door-closed-fill"></i>&nbsp;LOG OUT
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
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
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
    &.btn_logout {
      background-color: #e84c4c;
      border-radius: 10px;
      color: #eeeeee;
      font-size: 0.9rem;
      font-weight: 500;
    }
    &.btn_signup {
      background-color: #4de897;
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