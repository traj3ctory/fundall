<template>
  <main class="SectionOne">
    <div class="card bg-transparent border-0">
      <div class="section_one">
        <div class="container_img">
          <img :src="img" alt="user avatar" width="20px" class="avatar" />
        </div>
        <div class="details">
          <h4>Babatunde Fashola</h4>
          <p>baba2@gmail.com</p>
        </div>
      </div>
      <div class="section_two">
        <p>Target Monthly Expenses</p>
        <h5>&#8358;{{ amount }}</h5>
        <ProgressBar :value="30" :showValue="false" />
        <Table />
      </div>
    </div>
  </main>
</template>

<script>
import ProgressBar from "primevue/progressbar";
import Table from "./SectionOneTable.vue";

const img = require("@/assets/user.svg");

export default {
  name: "SectionOne",
  components:{
    ProgressBar,
    Table,
  },
  data() {
    return {
      img,
      amount: new Intl.NumberFormat().format(596000),
    };
  },
};
</script>

<style lang="scss" scoped>
main.SectionOne {
  div.section_one {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin-bottom: 3rem;
    div.container_img {
      position: relative;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 1.25rem;
      background-color: #C4C4C4;
      img.avatar {
        position: absolute;
        min-height: 100%;
        display: flex;
        align-items: center;
        left: 35%;
      }
    }
    div.details {
      h4,p {
        margin-bottom: 0.2rem;
        font-weight: 500;
      }
      h4{
        font-size: 1.3rem
      }
      p{
        font-size: 0.9rem
      }
    }
  }
  div.section_two{
    font-weight: 500;
  }
  p{
    margin-bottom: 0.1rem;
  }
  h5{
    margin-bottom: 0.8rem;
    font-weight: bold;
  }
}
</style>