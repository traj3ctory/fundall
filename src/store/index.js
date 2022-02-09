import { createStore } from 'vuex'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
import { state } from './state'

// Create a new store instance.
const store = createStore({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
})

export default store;