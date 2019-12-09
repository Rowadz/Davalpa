<template>
  <a-row :gutter="16">
    <a-col :span="24">
      <a-divider orientation="left">Select Options please</a-divider>
    </a-col>
    <a-col :span="8">
      <b>X-axis</b>
      <a-select
        class="w-100"
        id="xAxis"
        placeholder="choose X-axis from your data"
        @change="onXAxisChange"
      >
        <a-select-option
          :value="value.orignal"
          v-for="(value, index) in getOptions"
          v-bind:key="index"
        >{{ value.title }}</a-select-option>
      </a-select>
    </a-col>
    <a-col :span="8">
      <b>Y-axis</b>
      <a-select
        class="w-100"
        id="yAxis"
        placeholder="choose Y-axis from your data"
        @change="onYAxisChange"
      >
        <a-select-option
          :value="value.orignal"
          v-for="(value, index) in getOptions"
          v-bind:key="index"
        >{{ value.title }}</a-select-option>
      </a-select>
    </a-col>
  </a-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
/* eslint-disable no-console */
export default {
  computed: {
    ...mapGetters(["getOptions"])
  },
  created() {
    console.log(this.getOptions);
  },
  methods: {
    ...mapActions(["storeSelectedOptions"]),
    onYAxisChange(y) {
      this.storeSelectedOptions({ yAxis: y });
    },
    onXAxisChange(x) {
      this.storeSelectedOptions({ xAxis: x });
    }
  }
};
</script>

<style></style>
