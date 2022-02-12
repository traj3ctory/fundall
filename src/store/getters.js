export const getters = {
    isAuthenticated: (state) => !!state.token && state.token.length > 0,
    target: (state) => state.target,
    isLoading: (state) => state.loading,
}
