/* eslint-disable no-console */
const state = {
  options: [],
  selectedOptions: {
    xAxis: null,
    yAxis: null
  }
};

const actions = {
  storeOptions(d: any, options: any) {
    d.commit('setOptions', options);
  },
  storeSelectedOptions(d: any, options: any) {
    d.commit('setSelectedOptions', options);
  }
};

const getters = {
  getOptions(state: any) {
    return state.options;
  },
  getSelectedOptions(state: any) {
    return state.selectedOptions;
  },
  getXYAxis(state: any) {
    const { xAxis, yAxis } = state.selectedOptions;
    return { x: xAxis, y: yAxis };
  }
};

const mutations = {
  setOptions(state: any, options: Array<any>) {
    state.options = options;
  },
  setSelectedOptions(state: any, selectedOptions: any) {
    state.selectedOptions = {
      ...state.selectedOptions,
      ...selectedOptions
    };
  }
};

export default { state, getters, actions, mutations };
