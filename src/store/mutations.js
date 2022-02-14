export const mutations = {
  token: (state, data) => {
    state.token = data;
  },
  token_type: (state, data) => {
    state.token_type = data;
  },
  details: (state, data) => {
    state.details = data;
  },
  expenses: (state, data) => {
    state.expenses.push(data);
  },
  target: (state, data) => {
    state.target = data;
  },
  loading: (state, data) => {
    state.loading = data;
  },
  profile_loading: (state, data) => {
    state.profile_loading = data;
  },
  logout: (state) => {
    state.token = "";
    state.detail = {};
    state.token_type = "";
  },
};
