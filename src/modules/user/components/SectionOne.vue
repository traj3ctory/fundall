<template>
  <main class="SectionOne">
    <div class="card bg-transparent border-0">
      <div class="section_one">
        <div>
          <label for="file">
            <div class="container_img">
              <img :src="img" alt="user avatar" width="20px" class="avatar" />
            </div>
          </label>
          <input type="file" id="file" @change="handleFile" accept="image/*" />
        </div>
        <div class="details">
          <h4>Babatunde Fashola</h4>
          <p>baba2@gmail.com</p>
        </div>
      </div>
      <div class="section_two">
        <p>Target Monthly Expenses</p>
        <h5>&#8358;{{ target }}</h5>
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
  components: {
    ProgressBar,
    Table,
  },
  data() {
    return {
      img,
      target: Number(0).toFixed(2),
    };
  },
  methods: {
    // formatProgress(value) {
    //   const data = value;
    //   const divideBy = Math.pow(10, data.length - 1);
    //   console.log((data / divideBy).toFixed(), data, divideBy);
    //   // exponent of 10 by 3
    // },
    setTarget() {
      const value = this.$store.state.target;
      if (value !== 0) {
        const data = new Intl.NumberFormat("en-NG").format(
          this.$store.getters.target
        );
        this.target = data;
      }
      // this.formatProgress(value);
    },
    async handleFile(e) {
      const file = e.target.files;
      var data = new FormData();
      data.append("avatar", file[0]);
      await this.$store.dispatch("UPDATE_AVATAR", data);
    },
  },
  watch: {
    "$store.state.target": {
      immediate: true,
      handler() {
        this.setTarget();
      },
    },
  },
  mounted() {
    this.setTarget();
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
      background-color: #c4c4c4;
      img.avatar {
        position: absolute;
        min-height: 100%;
        display: flex;
        align-items: center;
        left: 35%;
      }
    }
    div.details {
      h4,
      p {
        margin-bottom: 0.2rem;
        font-weight: 500;
      }
      h4 {
        font-size: 1.3rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  div.section_two {
    font-weight: 500;
  }
  p {
    margin-bottom: 0.1rem;
  }
  h5 {
    margin-bottom: 0.8rem;
    font-weight: bold;
  }
  input[type="file"] {
    opacity: 0; /* make transparent */
    z-index: -1; /* move under anything else */
    position: absolute; /* don't let it take up space */
  }
  input[type="file"]:focus + label {
    outline: 2px solid; /* example focus style */
  }
}
</style>