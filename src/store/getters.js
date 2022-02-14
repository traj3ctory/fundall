export const getters = {
    isAuthenticated: (state) => !!state.token && state.token.length > 0,
    target: (state) => state.details.monthly_target || state.target,
    isLoading: (state) => state.loading,
    profileLoading: (state) => state.profile_loading,
    getExpenses: (state) => state.expenses,
}
