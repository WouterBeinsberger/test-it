import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  modules: {
  },
  state() {
    return {
      hero: null,
      color: "green"
    }
  },
  mutations,
  actions,
  getters
}