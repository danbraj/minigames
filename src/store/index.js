import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: true, // zabrania bezpośredniej edycji danych w store
  state: {
    assetsPath: null
  },
  getters: {
    currentAssetsUrl: state => {
      return state.assetsPath;
    },
  },
  mutations: {
    setAssetsUrl: (state, assetsUrl) => {
      state.assetsPath = assetsUrl;
    },
  },
  actions: {

  },
});