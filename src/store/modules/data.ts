/* eslint-disable no-console */
const state = {
  data: []
};

const actions = {
  storeData(d: any, data: any) {
    d.commit('setData', data);
  },
  clearData(d: any) {
    d.commit('clear');
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
  },
  clear(state: any) {
    Object.assign(state, { data: [] });
  }
};

export default { state, getters, actions, mutations };
