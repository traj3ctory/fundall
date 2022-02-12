<template>
  <div>
    <LoadingOverlay v-if="loading" />
    <div v-else>
      <Header />
      <main class="user_profile container">
        <div class="row">
          <div class="col-md-5 mb-3 col-12"><SectionOne /></div>
          <div class="col-md-7 mb-3 col-12"><SectionTwo /></div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import SectionOne from "./components/SectionOne.vue";
import SectionTwo from "./components/SectionTwo.vue";
import LoadingOverlay from "./components/Loading.vue";

export default {
  name: "Profile",
  components: {
    Header,
    SectionOne,
    SectionTwo,
    LoadingOverlay,
  },
  data() {
    return {
      loading: this.$store.getters.isLoading,
    };
  },
};
</script>

<style lang="scss" scoped>
main.user_profile {
  padding-top: 1.5rem;
  // min-height: calc(100vh - 60px);
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
}
</style>