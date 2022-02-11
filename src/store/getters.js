export const getters = {
    isAuthenticated: (state) => !!state.token && state.token.length > 0,
    isLoading: (state) => state.loading,
}
