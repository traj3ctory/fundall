<template>
  <main class="login_form">
    <form @submit="handleLogin">
      <div class="row">
        <div class="col-12 mb-3">
          <BaseInput :data="emailUsernameProp" v-model="user.email" />
        </div>
        <div class="col-12 mb-3">
          <BaseInput :data="passwordProp" v-model="user.password" />
        </div>
      </div>
      <button
        :disabled="this.$store.getters.isLoading"
        :class="{ submitting: this.$store.getters.isLoading }"
        class="btn btn_fundall w-100 py-3"
      >
        LOGIN
      </button>
    </form>
  </main>
</template>

<script>
import { emailUsernameProp, passwordProp } from "@/components/props";

export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      emailUsernameProp,
      passwordProp,
    };
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
      //?? Call the login dispatch function
      this.$store.dispatch("LOGIN_USER", JSON.stringify(this.user));
    },
  },
};
</script>

<style lang="scss" scoped>
main.login_form {
  button {
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.042rem;
  }
}
</style>