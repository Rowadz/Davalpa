<template>
  <a-row type="flex" justify="space-around" align="middle">
    <section class="w-100" v-if="chartType === 'pie'">
      <pie></pie>
    </section>
  </a-row>
</template>

<script>
/* eslint-disable no-console */
import Pie from "./Charts/Pie";
export default {
  props: {
    chartType: String
  },
  components: {
    pie: Pie
  }
};
</script>

<style>
</style>