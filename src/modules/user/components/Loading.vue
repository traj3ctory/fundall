<template>
  <div class="loading">
    <div class="loader"></div>
    <h6>Setting up profile page</h6>
  </div>
</template>

<script>
export default {
  name: "LoadingOverlay",
};
</script>

<style lang="scss" scoped>
div.loading {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  div.loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #4de897;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  h6 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #136038;
    margin-top: 1rem;
    &:after {
      content: ".";
      color: #4de897;
      animation: dots 1.25s linear infinite;
      animation-delay: 0.2s;
    }
  }
  @keyframes dots {
    0% {
      content: ".";
    }
    20% {
      content: "..";
    }
    40% {
      content: "...";
    }
    100% {
      content: ".";
    }
  }
}
</style>