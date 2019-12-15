/* eslint-disable no-console */
const state = {
  options: [],
  selectedOptions: {
    xAxis: null,
    yAxis: null,
    aggFun: null,
    aggCol: null
  }
};

const actions = {
  storeOptions(d: any, options: any) {
    d.commit('setOptions', options);
  },
  storeSelectedOptions(d: any, options: any) {
    d.commit('setSelectedOptions', options);
  },
  clearOptions(d: any) {
    d.commit('clearOptions');
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
  },
  getAggFun(state: any) {
    const { aggFun } = state.selectedOptions;
    return aggFun;
  },
  getAggCol(state: any) {
    const { aggCol } = state.selectedOptions;
    return aggCol;
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
  },
  clearOptions(state: any) {
    Object.assign(state, {
      options: [],
      selectedOptions: {
        xAxis: null,
        yAxis: null,
        aggFun: null,
        aggCol: null
      }
    });
  }
};

export default { state, getters, actions, mutations };
