<template>
  <section id="chart-test" class="min-vh-100"></section>
</template>

<script>
/* eslint-disable no-console */
import { lightningChart, SolidLine } from "@arction/lcjs";
import { mapGetters } from "vuex";
export default {
  name: "wizard-chart",
  computed: {
    ...mapGetters(["getSelectedOptions", "getData"])
  },
  mounted() {
    const chart = lightningChart().ChartXY({
      containerId: "chart-test",
      height: "600"
    });

    chart.setTitle("Getting Started");

    const lineSeries = chart.addLineSeries();

    lineSeries.setStrokeStyle(style => style.setThickness(5));
    const { xAxis, yAxis } = this.getSelectedOptions;
    console.log(
      this.getData.map(obj => {
        return { x: obj[xAxis], y: obj[yAxis] };
      })
    );
    lineSeries.add(
      this.getData.map(obj => {
        return { x: obj[xAxis], y: obj[yAxis] };
      })
    );
  }
};
</script>

<style></style>
