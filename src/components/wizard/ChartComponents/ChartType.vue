<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-select
      class="w-25 m-4"
      :tokenSeparators="[',']"
      @change="handleChange"
      :disabled="!!chart"
      placeholder="select chart type"
    >
      <a-select-option v-for="(chart, index) in charts" :key="index" :value="chart">{{ chart }}</a-select-option>
    </a-select>
    <a-col :span="24">
      <chart-container :chartType="chart"></chart-container>
    </a-col>
  </a-row>
</template>

<script>
import ChartContainer from "./ChartContainer";
export default {
  data() {
    return {
      charts: ["pie", "bar", "bubble"],
      chart: null
    };
  },
  components: {
    "chart-container": ChartContainer
  },
  methods: {
    handleChange(value) {
      this.chart = value;
    }
  }
};
</script>

<style>
</style>