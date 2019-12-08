<template>
  <section class="container mt-5">
    <a-row type="flex" justify="space-around" class="magictime foolishIn">
      <h1>🧙‍♂️ Welcome to Davalpa's wizard 🧙</h1>
    </a-row>
    <a-row type="flex" justify="space-around" class="min-vh-100 magictime swashIn">
      <a-tabs defaultActiveKey="1" class="w-100">
        <a-tab-pane tab="👁️ Give me some info 👁️" key="1">
          <!-- <wizard-info :json="JSON.stringify(getData)"></wizard-info> -->
        </a-tab-pane>
        <a-tab-pane tab="Chart and options" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
      </a-tabs>
    </a-row>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import WizardInfo from "../components/wizard/WizardInfo";
/* eslint-disable no-console */
export default {
  name: "wizard",
  computed: {
    ...mapGetters(["getData"])
  },
  components: {
    // "wizard-info": WizardInfo
  }
};
</script>

<style lang="scss">
</style>
