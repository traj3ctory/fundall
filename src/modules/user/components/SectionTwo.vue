<template>
  <main class="SectionTwo p-3">
    <div class="card bg-transparent border-0">
      <div class="card-header bg-white">
        <div>
          <h4><span>Welcome back,</span> {{ firstname }}</h4>
          <p>Now, let’s get your expenses for this month</p>
        </div>
        <div class="img_container">
          <img
            :src="img"
            alt="user_profile"
            width="100%"
            height="250%"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="card-body bg-transparent">
        <SectionTwoForm />
      </div>
    </div>
  </main>
</template>

<script>
import SectionTwoForm from "./SectionTwoForm.vue";
const img = require("@/assets/dashboard.svg");

export default {
  name: "SectionTwo",
  components: {
    SectionTwoForm,
  },
  data() {
    return {
      img,
      SectionTwoForm,
      firstname: "",
    };
  },
  methods: {
    setUserData() {
      if (this.$store.getters.isAuthenticated) {
        this.firstname = this.$store.state.details.firstname;
        return;
      }
    },
  },
  mounted() {
    this.setUserData();
  },
};
</script>

<style lang="scss" scoped>
main.SectionTwo {
  background-color: #f2f3f7;
  div.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 0.5rem;
    h4 {
      font-size: 1.3rem;
      font-weight: bold;
      span {
        color: #4de897;
      }
    }
    div.img_container {
      margin-top: -4rem;
      img {
        min-height: 5rem;
      }
    }
  }
}
</style>