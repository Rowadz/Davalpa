import Vue from 'vue';
import Vuex from 'vuex';
import Data from './modules/data';
import Options from './modules/options';
import ModifiedData from './modules/modifiedData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Data, Options, ModifiedData }
});
