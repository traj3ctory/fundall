export const getters = {
    isAuthenticated: (state) => !!state.token && state.token.length > 0,
    target: (state) => state.details.monthly_target || 0,
    isLoading: (state) => state.loading,
}
