<template>
  <main class="section_one_table">
    <div class="loading_container container" v-if="data.length <= 0">
      <div class="d-flex justify-content-between w-100">
        <h5>Date</h5>
        <h5>Amount</h5>
      </div>
      <img
        :src="img"
        alt="search for data..."
        class="img-fluid"
        width="40%"
        height="auto"
      />
    </div>
    <div class="card card-body bg-transparent border-0 pt-3 mt-4" v-else>
      <p>Daily Expenses Summary</p>
      <DataTable :value="data" responsiveLayout="scroll">
        <Column field="" header="" :headerStyle="{ width: '1rem' }">
          <template #body="slotProps">
            <div :id="slotProps.data.amount" class="bullet"></div>
          </template>
        </Column>
        <Column field="date" header="Date"></Column>
        <Column field="amount" header="Amount">
          <template #body="slotProps">
            <div :id="slotProps.data.amount">
              &#8358;{{ slotProps.data.amount }}
            </div>
          </template>
        </Column>
      </DataTable>
      <div class="footer">
        <span> <span class="select">1</span> of 5 </span>
        <span class="mx-2"></span>
        <span>
          <i class="bi bi-chevron-left icon"></i
          ><i class="bi bi-chevron-right icon"></i>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const img = require("@/assets/find.svg");

export default {
  name: "SectionOneTable",
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      img,
      data: [
        {
          date: "30 Nov, 2018",
          amount: "30,000",
        },
        { date: "25 Nov, 2018", amount: "30,000" },
        { date: "28 Oct, 2018", amount: "30,000" },
      ],
      amount: new Intl.NumberFormat().format(596000),
    };
  },
};
</script>

<style lang="scss" scoped>
main.section_one_table {
  p {
    font-size: 0.9rem;
  }
  div.footer {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    span.select {
      border: 1px solid #a4b0a3;
      border-radius: 3px;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
    }
    i.icon {
      font-size: 0.7rem;
      color: #ffffff;
      background-color: #4de897;
      border-radius: 50%;
      padding: 0.15rem 0.2rem;
      margin-right: 0.2rem;
      cursor: pointer;
    }
  }
  div.loading_container {
    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 22px;
      color: #30443c;
    }
    margin-top: 3rem;
    min-height: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>