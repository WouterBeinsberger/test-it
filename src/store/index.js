import { createStore } from 'vuex'

import headerModule from './modules/header/index.js'
import heroModule from './modules/hero/index.js'
import aboutModule from './modules/about/index.js'
import servicesModule from './modules/services/index.js'

const store = createStore({
  modules: {
    header: headerModule,
    hero: heroModule,
    about: aboutModule,
    services: servicesModule
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
