<template>
  <div>
    <Header />
    <router-view />
    <Footer class="d-none" />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "Guest",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss"></style>
