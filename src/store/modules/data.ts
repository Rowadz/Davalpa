/* eslint-disable no-console */
const state = {
  data: []
};

const actions = {
  storeData(d: any, data: any) {
    d.commit('setData', data);
  }
};

const getters = {
  getData(state: any) {
    return state.data;
  }
};

const mutations = {
  setData(state: any, data: Array<any>) {
    state.data = data;
  }
};

export default { state, getters, actions, mutations };
