<template>
  <main class="register_form">
      <form @submit="handleRegister">
        <div class="row">
          <div class="col-md-6 col-12 mb-3">
            <BaseInput :data="firstnameProp" v-model="user.firstname" />
          </div>
          <div class="col-md-6 col-12 mb-3">
            <BaseInput :data="lastnameProp" v-model="user.lastname" />
          </div>
          <div class="col-12 mb-3">
            <BaseInput :data="emailProp" v-model="user.email" />
          </div>
          <div class="col-12 mb-3">
            <BaseInput :data="passwordProp" v-model="user.password" />
          </div>
          <div class="col-12 mb-3">
            <BaseInput
              :data="confirmPasswordProp"
              v-model="user.password_confirmation"
            />
          </div>
        </div>
        <button
          :disabled="this.$store.getters.isLoading"
          :class="{ submitting: this.$store.getters.isLoading }"
          class="btn btn_fundall w-100 py-2"
        >
          SIGN UP
        </button>
      </form>
  </main>
</template>

<script>
import Toast from "@/utils/Toast";
const image = require("@/assets/signup.svg");
import {
  firstnameProp,
  lastnameProp,
  emailProp,
  passwordProp,
  confirmPasswordProp,
} from "@/components/props";

export default {
  name: "RegForm",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      image,
      firstnameProp,
      lastnameProp,
      emailProp,
      passwordProp,
      confirmPasswordProp,
    };
  },
  methods: {
    handleRegister(e) {
      e.preventDefault();
      if (this.user.password !== this.user.password_confirmation) {
        Toast("Error", "Password and ConfirmPassword must be same", "error");
        return;
      }
      //?? Call the register dispatch function
      this.$store.dispatch("REGISTER_USER", JSON.stringify(this.user));
    },
  },
};
</script>

<style lang="scss" scoped>
main.register_form {
  button {
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.042rem;
  }
}
</style>