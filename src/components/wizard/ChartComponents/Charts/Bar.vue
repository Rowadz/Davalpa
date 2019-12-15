<template>
  <a-row type="flex" justify="space-around" align="middle">
    <section class="w-100">
      <a-popover title="Information about the Pie Chart">
        <template slot="content">
          <p>
            <strong>This bar chart shows only 3 dimensional data</strong>,
          </p>
          <p>
            but keep in mind that you need to understand your data, so you can create a
            chart that make sense
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
import { mapGetters } from "vuex";
import ECharts from "vue-echarts";
import bar from "../ChartOptions/bar";
import "echarts/lib/chart/bar/BarSeries";
import "echarts/lib/chart/bar";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
// import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";

export default {
  computed: {
    ...mapGetters(["getModifiedData", "getXYAxis", "getAggCol"])
  },
  created() {
    const { x, y } = this.getXYAxis;
    const aggCol = this.getAggCol;
    const xAxis = Object.keys(this.getModifiedData);
    const mapper = new Map();
    xAxis.forEach((x, i) => {
      mapper.set(x, { search: Object.keys(this.getModifiedData[x]), i });
    });
    const legends = [];
    let holder = [];
    xAxis.forEach(key => {
      Object.keys(this.getModifiedData[key]).forEach(key2 => {
        if (!legends.includes(key2)) {
          legends.push(key2);
        }
        let index = 0;
        if (mapper.has(key)) {
          const { search, i } = mapper.get(key);
          index = search.includes(key2) ? i : 0;
          //   console.log(index);
        }
        const data = Array.from({ length: xAxis.length }).fill(0);
        data[index] = this.getModifiedData[key][key2];
        const ifExists = holder.find(d => d.name === key2);
        if (ifExists) {
          holder = holder.filter(d => d.name !== key2);
          ifExists.data = ifExists.data.map((e, i) =>
            data[i] !== 0 ? data[i] : e
          );
          holder.push(ifExists);
        } else {
          holder.push({
            name: key2,
            type: "bar",
            data,
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: () => Math.random() * 200
          });
        }
      });
    });
    console.log(holder);
    // const series = xAxis.map(key => {
    //   return Object.keys(this.getModifiedData[key]).reduce((o, dd) => {
    //     // console.log(dd);
    //     if (!legends.includes(dd)) {
    //       legends.push(dd);
    //     }
    //     let index = 0;
    //     if (mapper.has(key)) {
    //       const { search, i } = mapper.get(key);
    //       index = search.includes(dd) ? i : 0;
    //       //   console.log(index);
    //     }
    //     const data = Array.from({ length: xAxis.length }).fill(0);
    //     data[index] = this.getModifiedData[key][dd];
    //     return {
    //       ...o,
    //       name: dd,
    //       type: "bar",
    //       data,
    //       animationType: "scale",
    //       animationEasing: "elasticOut",
    //       animationDelay: () => Math.random() * 200
    //     };
    //   }, {});
    // });
    // console.log(legends, xAxis, series);
    // console.log(series);
    this.chart = bar({
      legends,
      xAxis,
      series: holder,
      selected: legends.reduce(
        (obj, k) => ({ ...obj, [k]: Math.random() > 0.5 }),
        {}
      )
    });
    // console.log(this.chart);y
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
.echarts {
  width: 100%;
  /* height: 100%; */
}
</style>