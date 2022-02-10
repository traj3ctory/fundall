import Vue from 'vue'
import Vuex from 'vuex'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
import { state } from './state'

// Create a new store instance.
Vue.use(Vuex)

export const store = new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
})
