import { createStore } from 'vuex'

export default createStore({
  state: {
    assetsPath: null
  },
  // Mutations are functions that effect the STATE.
  mutations: { // TODO: ALL CAP VAR
    setAssetsUrl: (state, assetsUrl) => {
      state.assetsPath = assetsUrl;
    },
  },
  // Actions are functions that you call throughout your app that call mutations.
  actions: {
  },
  modules: {
  },
  getters: {
    currentAssetsUrl: state => {
      return state.assetsPath;
    },
  },
})
