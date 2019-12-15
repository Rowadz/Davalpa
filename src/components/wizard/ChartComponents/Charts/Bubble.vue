<template>
  <a-row type="flex" justify="space-around" align="middle">
    <section class="w-100">
      <a-popover title="Information about the bubble Chart">
        <template slot="content">
          <p>
            <strong>This bubble chart shows only 2 dimensional data</strong>,
          </p>
        </template>
        <a-button shape="circle" icon="exclamation-circle"></a-button>
      </a-popover>
      <v-chart :options="chart" />
    </section>
  </a-row>
</template>

<script>
/* eslint-disable no-console */
import ECharts from "vue-echarts";
import { mapGetters } from "vuex";
import bubble from "../ChartOptions/bubble";
import "echarts";
export default {
  computed: {
    ...mapGetters(["getModifiedData", "getXYAxis", "getAggCol"])
  },
  created() {
    this.initChart();
  },
  methods: {
    initChart() {
      const x = Object.keys(this.getModifiedData).map(key => {
        return Object.keys(this.getModifiedData[key]).reduce((o, key2) => {
          return {
            ...o,
            name: key,
            type: "scatter",
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: idx => idx * 5,
            data: [this.getModifiedData[key][key2], key2, key],
            label: {
              emphasis: {
                show: true,
                formatter: param => `${param.seriesName}: ${param.data}`,
                position: "top"
              }
            },
            symbolSize: data => (isNaN(data) ? 10 : Math.sqrt(data))
          };
        }, {});
      });
      this.chart = bubble({
        legends: Object.keys(this.getModifiedData),
        series: x
      });
      // the data should be as [...aggCol(s), y, x]
    }
  },
  data() {
    return {
      chart: null
    };
  },
  components: {
    "v-chart": ECharts
  }
};
</script>

<style>
</style>