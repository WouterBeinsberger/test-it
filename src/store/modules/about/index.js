import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  modules: {
  },
  state() {
    return {
      about: null,
      color: "blue"
    }
  },
  mutations,
  actions,
  getters
}