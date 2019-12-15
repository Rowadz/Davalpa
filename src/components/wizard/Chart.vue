<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-popover title="Adding Chart section">
      <template
        slot="content"
      >Clicking this icon will add a chart section, so you can have as many charts as you like</template>
      <a-button type="dashed" icon="pie-chart" size="large" @click="addChart" shape="circle"></a-button>
    </a-popover>

    <a-col
      :span="24"
      v-for="(chartNum, index) in chartNum"
      :key="index"
      class="m-2"
      style="min-height: 200px;"
    >
      <a-divider orientation="right">
        <a-button type="danger" icon="close" @click="deleteChart(chartNum)" />
      </a-divider>
      <chart-type></chart-type>
    </a-col>
  </a-row>
</template>

<script>
/* eslint-disable no-console */
import { mapGetters, mapActions } from "vuex";
import ChartType from "./ChartComponents/ChartType";

import {
  chain,
  zipObject,
  mapValues,
  groupBy,
  omit,
  sumBy,
  meanBy
} from "lodash";
export default {
  name: "wizard-chart",
  computed: {
    ...mapGetters([
      "getSelectedOptions",
      "getData",
      "getXYAxis",
      "getAggFun",
      "getAggCol"
    ])
  },
  methods: {
    ...mapActions(["storeModifiedData"]),
    addChart() {
      this.chartNum.push(Date.now());
    },
    deleteChart(dateNow) {
      this.chartNum = this.chartNum.filter(d => d !== dateNow);
    }
  },
  created() {},
  mounted() {
    const { x, y } = this.getXYAxis;
    const aggFunc = this.getAggFun;
    // console.log(
    //   chain(this.getData)
    //     .groupBy(x)
    //     .toPairs()
    //     .map(pair => zipObject([x, y], pair))
    //     .value()
    // );
    const z = mapValues(groupBy(this.getData, x), d =>
      d.map(vizData => omit(vizData, x))
    );
    Object.keys(z).forEach(key => {
      z[key] = mapValues(groupBy(z[key], y), d =>
        d.map(vizData => omit(vizData, y))
      );
      Object.keys(z[key]).forEach(k => {
        z[key][k] =
          aggFunc === "sumBy"
            ? sumBy(z[key][k], o => o[this.getAggCol])
            : meanBy(z[key][k], o => o[this.getAggCol]);
      });
    });
    this.storeModifiedData(z);
    console.log(z);
  },
  components: {
    "chart-type": ChartType
  },
  data() {
    return {
      chartNum: []
    };
  }
};
</script>

<style></style>
