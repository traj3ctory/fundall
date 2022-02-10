<template>
  <div class="home_page">
    <img :src="image1" alt="Home page" width="" height="" class="img-fluid" />
    <div>
      <h4 class="text">{{ title }}</h4>
      <h6 class="text">{{ subtitle }}</h6>
      <p class="text">by {{ author }}</p>
    </div>
  </div>
</template>

<script>
const image1 = require("@/assets/signup.svg");
export default {
  name: "Home",
  data() {
    return {
      image1,
      message: "Welcome to Your Vue.js App",
      title: 'Fundall Expense Tracker',
      subtitle: 'Mini Project Frontend',
      author: 'Babatunde Fashola'
    };
  },
};
</script>

<style lang="scss" scoped>
div.home_page {
  background-color: #FCFBFC;
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .text{
    color: #000000;
    text-align: center;
  }
  h4{
    font-size: 2rem;
    margin-top: 2rem;
  }
  h6{
    font-size: 1.8rem;
    margin-top: 0.5rem;
    font-weight: 400;
  }
  p{
    font-size: 1rem;
    font-weight: bold;
    margin-top: 3rem;
  }
}
</style>