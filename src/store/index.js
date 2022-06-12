import { createStore } from 'vuex'

import headerModule from './modules/header/index.js'

const store = createStore({
  modules: {
    header: headerModule
  },
  state() {
    return {}
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})

export default store
