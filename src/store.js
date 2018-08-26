import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firsVx: 'VVVVxxxx',
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getfirstX(state) {
      return state.firsVx;
    }
  }
});
