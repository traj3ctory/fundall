export const getters = {
    isAuthenticated: (state) => !!state.token && state.token.length > 0
}
