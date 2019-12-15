/* eslint-disable no-console */
const state = {
  modifiedData: null
};

const actions = {
  storeModifiedData(d: any, data: any) {
    d.commit('setModifiedData', data);
  },
  clearModifiedData(d: any) {
    d.commit('clear');
  }
};

const getters = {
  getModifiedData(state: any) {
    return state.modifiedData;
  }
};

const mutations = {
  setModifiedData(state: any, data: Array<any>) {
    state.modifiedData = data;
  },
  clear(state: any) {
    Object.assign(state, { modifiedData: null });
  }
};

export default { state, getters, actions, mutations };
