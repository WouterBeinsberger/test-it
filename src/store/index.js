import { createStore } from 'vuex'

import headerModule from './modules/header/index.js'
import heroModule from './modules/hero/index.js'
import aboutModule from './modules/about/index.js'

const store = createStore({
  modules: {
    header: headerModule,
    hero: heroModule,
    about: aboutModule
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
