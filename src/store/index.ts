import Vue from 'vue';
import Vuex from 'vuex';
import Data from './modules/data';
import Options from './modules/options';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Data, Options }
});
