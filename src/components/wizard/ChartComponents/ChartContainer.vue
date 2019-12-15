<template>
  <a-row type="flex" justify="space-around" align="middle">
    <section class="w-100" v-if="chartType === 'pie'">
      <pie></pie>
    </section>
    <section class="w-100" v-if="chartType === 'bar'">
      <bar></bar>
    </section>
  </a-row>
</template>

<script>
/* eslint-disable no-console */
import Pie from "./Charts/Pie";
import Bar from "./Charts/Bar";
export default {
  props: {
    chartType: String
  },
  components: {
    pie: Pie,
    bar: Bar
  }
};
</script>

<style>
</style>