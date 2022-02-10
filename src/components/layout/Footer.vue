<template>
  <footer class="footer">{{ message }}</footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      message: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style lang="scss" scoped>
footer.footer {
  background-color: #000;
  color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>