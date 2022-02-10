const actions = {
  SET_USER_TOKEN(context, payload) {
    context.commit("token", payload);
  },
  SET_USER_DETAIL(context, payload) {
    context.commit("details", payload);
  },
  SET_USER_TOKEN_TyPE(context, payload) {
    context.commit("token_type", payload);
  },
};

export default actions;
