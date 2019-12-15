<template>
  <a-row type="flex" justify="space-around" align="middle">
    <section class="w-100">
      <a-popover title="Information about the Pie Chart">
        <template slot="content">
          <p>
            <strong>This pie chart shows only 2 dimensional data</strong>,
            so even if you have 2 lvls of group, you will see only data with x/y axis only
          </p>
          <p>
            for example if you have a music data set and you grouped data by genre
            and artist name the summed the data by length,
            the chart will only show you genere by length (summed)
          </p>
        </template>
        <a-button shape="circle" icon="exclamation-circle"></a-button>
      </a-popover>
      <a-select defaultValue="normal" style="width: 220px" @change="handleChange" class="ml-2">
        <a-select-option value="normal">
          Rose Type
          <b>Normal</b>
        </a-select-option>
        <a-select-option value="radius">
          Rose Type
          <b>Radius</b>
        </a-select-option>
      </a-select>
      <v-chart :options="chart" />
    </section>
  </a-row>
</template>

<script>
/* eslint-disable no-console */
import pie from "../ChartOptions/pie";
import { mapGetters } from "vuex";
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
// import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";
export default {
  computed: {
    ...mapGetters(["getModifiedData", "getXYAxis", "getAggFun", "getAggCol"])
  },
  created() {
    this.initChart();
  },
  components: {
    "v-chart": ECharts
  },
  methods: {
    handleChange(value) {
      if (value === "radius") {
        this.initChart(value);
      } else {
        this.initChart();
      }
    },
    initChart(roseType) {
      const { x } = this.getXYAxis;
      const aggFun = this.getAggFun;
      const aggCol = this.getAggCol;
      const legendData = Object.keys(this.getModifiedData);
      let seriesData = [];
      legendData.forEach(key => {
        const holder = {
          name: key,
          value: Object.keys(this.getModifiedData[key]).reduce(
            (sum, key2) =>
              sum + parseFloat(this.getModifiedData[key][key2] || 0),
            0
          )
        };
        seriesData.push(holder);
      });
      seriesData = seriesData.sort((a, b) => b.value - a.value);

      const selected = seriesData
        .map(({ name }, i) =>
          i < 9 ? { name, show: true } : { name, show: false }
        )
        .reduce((o, { name, show }) => ({ ...o, [name]: show }), {});
      this.chart = pie({
        legendData,
        seriesData,
        selected,
        tooltip: `${aggFun}(${aggCol})`,
        roseType
      });
    }
  },
  data() {
    return {
      chart: null
    };
  }
};
</script>

<style>
.echarts {
  width: 100%;
  /* height: 100%; */
}
</style>