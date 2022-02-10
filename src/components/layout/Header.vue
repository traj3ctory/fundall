<template>
  <header class="header">{{ message }}</header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      message: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style lang="scss" scoped>
header.header {
  background-color: #000;
  color: #fff;
  width: 100%;
}
</style>