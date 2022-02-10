<template>
  <div class="not_found">
    <h4><i class="bi bi-alarm-fill"></i> 404</h4>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  data() {
    return {
      message: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style lang="scss" scoped>
div.not_found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>