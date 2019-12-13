<template>
  <section id="chart-test" class="min-vh-100"></section>
</template>

<script>
/* eslint-disable no-console */
import { lightningChart, SolidLine } from "@arction/lcjs";
import { mapGetters } from "vuex";
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

    console.log(z);
  }
};
</script>

<style></style>
