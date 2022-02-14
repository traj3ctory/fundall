<template>
  <main class="profile_form">
    <form @submit="handleSaveExpense">
      <div class="row mb-3">
        <div class="col-12 mb-3">
          <BaseInput :data="targetProps" v-model="target" @input="setTarget" />
        </div>
        <div class="col-12 mb-3">
          <BaseInput :data="dateProp" v-model="date" />
        </div>
      </div>
      <h6 class="title">Today’s Expenses</h6>
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
              @input="handleInput"
            />
          </div>
          <div class="col-md-6 col-12 mb-3">
            <!-- <input
              type="text"
              :name="`amount-${el}`"
              :id="`amount-${el}`"
              class="form-control"
              @input="expense[i][1] = formatNaira($event.target.value)"
              v-model="expense[i][1]"
              placeholder="Enter Amount"
            /> -->
            <input
              type="number"
              :name="`amount-${el}`"
              :id="`amount-${el}`"
              class="form-control"
              @input="handleExpense"
              v-model="expense[i][1]"
              placeholder="Enter Amount"
              disabled
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
          readOnly
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
import Toast from "@/utils/Toast";

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
      TotalExpense: parseInt(0).toFixed(2),
    };
  },
  methods: {
    handleExpense() {
      if (this.expense.length > 0) {
        const data = this.expense
          .map((el) => Number(el[1]))
          .reduce((a, b) => a + b);
        const format = new Intl.NumberFormat("en-NG");
        const datar = format.format(data);
        this.TotalExpense = datar;
      } else {
        this.TotalExpense = parseInt(0).toFixed(2);
      }
    },
    formatNaira(value) {
      const data = new Intl.NumberFormat("en-NG");
      const datar = data.format(value);
      this.handleExpense();
      return datar;
    },
    //on fill of the first input make the second input editable
    handleInput(e) {
      const itemId = e.target.id;
      const id = itemId.split("-")[1];
      const amountId = document.getElementById(`amount-${id}`);
      if (e.target.value.length > 0) {
        amountId.disabled = false;
      } else {
        amountId.value = "";
        this.expense[id][1] = "";
        amountId.disabled = true;
      }
    },
    setTarget() {
      this.$store.dispatch("SET_TARGET", this.target);
    },
    handleSaveExpense(e) {
      e.preventDefault();
      if(this.date === ""){
        Toast("Error", "Please enter date", "warning");
        return;
      }
      if(this.TotalExpense === parseInt(0).toFixed(2)){
        Toast("Error", "Expense cannot be zero", "warning");
        return;
      }
      const data = {
        date: this.date,
        amount: this.TotalExpense,
      };
      this.$store.dispatch("SAVE_EXPENSE", data);
      // Reset input
      this.expense = [
        ["", ""],
        ["", ""],
        ["", ""],
      ];
      this.TotalExpense = parseInt(0).toFixed(2);
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
      &.title {
        font-size: 0.9rem;
        color: #30443c;
        font-weight: 500;
      }
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