import { createStore } from 'vuex'

import headerModule from './modules/header/index.js'
import heroModule from './modules/hero/index.js'

const store = createStore({
  modules: {
    header: headerModule,
    hero: heroModule
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
