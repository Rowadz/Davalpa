<template>
  <section class="container mt-5">
    <a-row type="flex" justify="space-around">
      <h1>🧙‍♂️ Welcome to Davalpa's wizard 🧙</h1>
    </a-row>
    <a-row type="flex" justify="space-around" class="mb-2 min-vh-100">
      <a-tabs defaultActiveKey="1" class="w-100">
        <a-tab-pane tab="Insights" key="1">
          <wizard-info></wizard-info>
        </a-tab-pane>
        <a-tab-pane
          tab="Charts"
          key="2"
          forceRender
          v-if="getXYAxis.y && getXYAxis.x && getAggCol && getAggFun"
        >
          <wizard-chart></wizard-chart>
        </a-tab-pane>
        <a-tab-pane
          tab="Download your data"
          key="3"
          forceRender
          v-if="getXYAxis.y && getXYAxis.x && getAggCol && getAggFun"
        >
          <wizard-download></wizard-download>
        </a-tab-pane>
        <!-- <a-tab-pane tab="See your Data" key="3" forceRender v-if="getXYAxis.y && getXYAxis.x"> -->
        <!-- <wizard-chart></wizard-chart> -->
        <!-- <wizard-json></wizard-json> -->
        <!-- </a-tab-pane> -->
      </a-tabs>
    </a-row>
  </section>
</template>

<script>
// @ is an alias to /src
import WizardInfo from "../components/wizard/WizardInfo";
import WizardChart from "../components/wizard/Chart";
// import WizardJson from "../components/wizard/Json";
import { mapGetters } from "vuex";
import WizardDownload from "../components/wizard/Download";
/* eslint-disable no-console */
export default {
  name: "wizard",
  computed: {
    ...mapGetters(["getXYAxis", "getAggFun", "getAggCol"])
  },
  components: {
    "wizard-info": WizardInfo,
    "wizard-chart": WizardChart,
    "wizard-download": WizardDownload
    // "wizard-json": WizardJson
  }
};
</script>

<style lang="scss"></style>
