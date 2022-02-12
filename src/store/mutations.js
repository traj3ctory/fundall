export const mutations = {
  token: (state, data) => {
    state.token = data;
  },
  details: (state, data) => {
    state.details = data;
  },
  token_type: (state, data) => {
    state.token_type = data;
  },
  target: (state, data) => {
    state.target = data;
  },
  loading: (state, data) => {
    state.loading = data;
  },
  logout: (state) => {
    state.token = "";
    state.detail = {};
    state.token_type = "";
  },
};
