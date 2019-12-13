<template>
  <a-row :gutter="16">
    <a-col :span="24">
      <a-divider orientation="left">Select Options please</a-divider>
    </a-col>
    <a-col :span="8">
      <b>Group by</b>
      <a-select class="w-100" id="xAxis" placeholder="choose an option" @change="onXAxisChange">
        <a-select-option
          :value="value.orignal"
          v-for="(value, index) in getOptions"
          v-bind:key="index"
        >{{ value.title }}</a-select-option>
      </a-select>
    </a-col>
    <a-col :span="8" v-if="getXYAxis.x">
      <b class="magictime swashIn">Then Group by..</b>
      <a-select class="w-100" id="yAxis" placeholder="choose an option" @change="onYAxisChange">
        <template v-for="(value, index) in getOptions">
          <a-select-option
            :value="value.orignal"
            v-if="value.orignal !== getXYAxis.x"
            v-bind:key="index"
          >{{ value.title }}</a-select-option>
        </template>
      </a-select>
    </a-col>
    <a-col :span="8" v-if="getXYAxis.x && getXYAxis.y">
      <b class="magictime swashIn">Choose an aggrigation function</b>
      <a-select class="w-100" id="yAxis" placeholder="choose an option" @change="onAggFuncChange">
        <a-select-option value="sumBy">SUM</a-select-option>
        <a-select-option value="meanBy">AVG</a-select-option>
      </a-select>
    </a-col>
    <a-col :span="8" v-if="getXYAxis.x && getXYAxis.y && getAggFun">
      <b class="magictime swashIn">Choose an aggrigation column</b>
      <a-select class="w-100" id="yAxis" placeholder="choose an option" @change="onAggColumnChange">
        <template v-for="(value, index) in getOptions">
          <a-select-option
            :value="value.orignal"
            v-if="value.orignal !== getXYAxis.x && value.orignal !== getXYAxis.y"
            v-bind:key="index"
          >{{ value.title }}</a-select-option>
        </template>
      </a-select>
    </a-col>
  </a-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
/* eslint-disable no-console */
export default {
  computed: {
    ...mapGetters(["getOptions", "getXYAxis", "getAggFun"])
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
      this.storeSelectedOptions({ xAxis: null });
      setTimeout(() => this.storeSelectedOptions({ xAxis: x, yAxis: null }), 0);
    },
    onAggFuncChange(aggFun) {
      this.storeSelectedOptions({ aggFun });
    },
    onAggColumnChange(aggCol) {
      this.storeSelectedOptions({ aggCol });
    }
  }
};
</script>

<style></style>
