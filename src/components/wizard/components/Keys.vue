<template>
  <a-row :gutter="16">
    <a-col :span="8" v-for="(value, index) in mapDataToKeys()" v-bind:key="index">
      <a-statistic :title="value.title" :value="value.value">
        <template v-slot:suffix>
          <a-popover title="Data Insight">
            <template slot="content">
              Found
              <b>{{ value.title }}</b> in the data
              <b>{{ value.value }}</b> times
            </template>
            <a-icon type="question-circle" />
            <!-- <span class="pointer">🤔</span> -->
          </a-popover>
        </template>
      </a-statistic>
    </a-col>
  </a-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
/* eslint-disable no-console */
export default {
  computed: {
    ...mapGetters(["getData"])
  },
  created() {
    console.log(this.mapDataToKeys());
  },
  methods: {
    ...mapActions(["storeOptions"]),
    mapDataToKeys() {
      const countObj = Object.create(null);
      const shouldBeSortedArr = [];
      this.getData.forEach(e =>
        Object.keys(e).forEach(k => (countObj[k] = (countObj[k] || 0) + 1))
      );
      Object.keys(countObj).forEach((k, i) =>
        shouldBeSortedArr.push({
          value: countObj[k],
          orignal: k,
          title: k.toUpperCase()
        })
      );
      this.storeOptions(shouldBeSortedArr);
      return shouldBeSortedArr.sort((a, b) => b.value - a.value);
    }
  }
};
</script>

<style></style>
