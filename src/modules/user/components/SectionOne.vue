<template>
  <main class="SectionOne">
    <div class="card bg-transparent border-0">
      <div class="section_one">
        <div>
          <!-- User Avatar -->
          <div class="container_img">
            <img
              :src="avatar || img"
              alt="user avatar"
              :width="[avatar !== '' ? '40%' : '20px']"
              class="avatar img-fluid rounded-3"
              :class="[avatar !== '' ? 'avatar' : 'avatar_placeholder']"
            />
            <label for="file"><i class="bi bi-pencil"></i></label>
            <input
              type="file"
              id="file"
              @change="handleFile"
              accept="image/*"
            />
          </div>
        </div>
        <div class="details">
          <h4>{{ fullname }}</h4>
          <p>{{ email }}</p>
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
      avatar: "",
      target: Number(0).toFixed(2),
      fullname: "",
      email: "",
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
      const value = this.$store.getters.target;
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
    setUserData() {
      if (this.$store.getters.isAuthenticated) {
        const { firstname, lastname, email, avatar } =
          this.$store.state.details;
        this.fullname = `${lastname} ${firstname}`;
        this.email = email;
        this.avatar = avatar;
        return;
      }
    },
    clearUserData() {
      this.fullname = "";
      this.email = "";
      this.avatar = "";
    },
  },
  watch: {
    "$store.state.target": {
      immediate: true,
      handler() {
        this.setTarget();
      },
    },
    "$store.state.details": {
      immediate: true,
      handler() {
        this.avatar = this.$store.state.details.avatar;
        console.log("changed");
      },
    },
  },
  mounted() {
    this.setTarget();
    this.setUserData();
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
      img.avatar_placeholder {
        position: absolute;
        min-height: 100%;
        display: flex;
        align-items: center;
        left: 35%;
      }
      img.avatar {
        border-radius: 1.25rem;
        width: 100%;
        height: 100%;
      }
      label {
        cursor: pointer;
        position: absolute;
        left: -0.7rem;
        bottom: -0.7rem;
        border: 1px solid #ffffff;
        padding: 0.1rem 0.3rem;
        border-radius: 50%;
        background-color: #4de897;
        color: #fff;
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