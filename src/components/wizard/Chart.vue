<template>
  <section id="chart-test" class="min-vh-100"></section>
</template>

<script>
/* eslint-disable no-console */
import { lightningChart, SolidLine } from "@arction/lcjs";
import { mapGetters } from "vuex";
import { chain, zipObject, mapValues, groupBy, omit, sumBy } from "lodash";
export default {
  name: "wizard-chart",
  computed: {
    ...mapGetters(["getSelectedOptions", "getData", "getXYAxis"])
  },
  mounted() {
    const chart = lightningChart().ChartXY({
      containerId: "chart-test",
      height: "600"
    });
    const { x, y } = this.getXYAxis;
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
      z[key] = mapValues(groupBy(z[key], "month"), d =>
        d.map(vizData => omit(vizData, "month"))
      );
      Object.keys(z[key]).forEach(k => {
        z[key][k] = sumBy(z[key][k], o => o.number);
      });
    });

    console.log(z);

    chart.setTitle("Getting Started");

    const lineSeries = chart.addLineSeries();

    lineSeries.setStrokeStyle(style => style.setThickness(5));
    const { xAxis, yAxis } = this.getSelectedOptions;
    Window.x = lineSeries.add(
      this.getData.map(obj => {
        return { x: obj[xAxis], y: obj[yAxis] };
      })
    );
  }
};
</script>

<style></style>
