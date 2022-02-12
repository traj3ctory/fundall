<template>
  <main class="profile_form">
    <form @submit="handleExpense">
      <div class="row">
        <div class="col-12 mb-3">
          <BaseInput :data="targetProps" v-model="target" />
        </div>
        <div class="col-12 mb-3">
          <BaseInput :data="dateProp" v-model="date" />
        </div>
      </div>
      <h6>Today’s Expenses</h6>
      {{ expense }}
      <div>
        <div class="row" v-for="(el, i) in 3" :key="i">
          <div class="col-md-6 col-12 mb-3">
            <input
              type="text"
              :name="`item-${el}`"
              :id="`item-${el}`"
              class="form-control"
              v-model="expense[i][0]"
              placeholder="Enter item"
            />
          </div>
          <div class="col-md-6 col-12 mb-3">
            <input
              type="text"
              :name="`amount-${el}`"
              :id="`amount-${el}`"
              class="form-control"
              @input="expense[i][1] = formatNaira($event.target.value)"
              v-model="expense[i][1]"
              placeholder="Enter Amount"
            />
          </div>
        </div>
      </div>
      <div class="total">
        <h6>Total Actual Expenses:&ensp;&#8358;</h6>
        <input
          type="text"
          name="result"
          id="result"
          disabled
          :value="TotalExpense"
          class="form-control w-25 push_left"
        />
      </div>
      <div class="text-center">
        <button
          :disabled="this.$store.getters.isLoading"
          :class="{ submitting: this.$store.getters.isLoading }"
          class="btn btn_fundall"
        >
          SAVE TODAY’S EXPENSES
        </button>
      </div>
    </form>
  </main>
</template>

<script>
import { targetProps, dateProp } from "@/components/props";

export default {
  name: "SectionTwoForm",
  data() {
    return {
      target: "",
      date: "",
      targetProps,
      dateProp,
      expense: [
        ["", ""],
        ["", ""],
        ["", ""],
      ],
      TotalExpense: "0.00",
    };
  },
  methods: {
    handleExpense(e) {
      e.preventDefault();
      //?? Call the login dispatch function
      //   this.$store.dispatch("LOGIN_USER", JSON.stringify(this.user));
    },
    // format value to naira currency
    formatNaira(value) {
      const data = new Intl.NumberFormat("en-NG");
      return data.format(value);
    },
  },
};
</script>

<style lang="scss" scoped>
$text: #30443c;
$bg_white: #ffffff;
$text_green: #4de897;
$border_grey: 1px solid #cad0c9;
$border_green: 1px solid #4de897;

main.profile_form {
  button {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 0.9rem;
    text-align: center;
    letter-spacing: 0.042rem;
    background: #4de897;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 0.9rem;
  }
  input.form-control {
    background: $bg_white;
    border: border_grey;
    border-radius: 4px;
    font-size: 0.9rem;
    &:active,
    &:focus {
      border: $border_green;
      box-shadow: none;
    }
    &::placeholder {
      color: #6c7973;
    }
  }
  &:focus,
  &:focus-within label.label {
    color: $text_green;
  }
  div.total {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: bold;
    h6 {
      font-size: 1rem;
      padding-top: 0.2rem;
    }
    input.push_left {
      margin-left: 0.7rem;
      background: #ffffff;
      border: 1px solid #4de897;
      border-radius: 4px;
      color: #000000;
      font-weight: inherit;
    }
  }
}
</style>