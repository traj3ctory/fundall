const getters = {
    isAuthenticated: (state) => !!state.token && state.token.length > 0
}

export default getters;