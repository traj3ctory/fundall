export const mutations = {
  token: (state, data) => {
    state.token = data;
  },
  user_details: (state, data) => {
    state.details = {...data};
  },
  token_type: (state, data) => {
    state.token_type = data;
  },
  logout: (state) => {
    state.token = "";
    state.detail = {};
    state.token_type = "";
  },
};
