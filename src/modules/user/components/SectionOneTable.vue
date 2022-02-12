<template>
  <main class="section_one_table">
    <div class="card card-body shadow-sm border-0 pt-3 mt-4">
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

export default {
  name: "SectionOneTable",
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
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
}
</style>