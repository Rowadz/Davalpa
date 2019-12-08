<template>
  <section>
    <levels></levels>
  </section>
</template>

<script>
/* eslint-disable no-console */
import Levels from "./components/Levels";
export default {
  name: "wizard-info",
  props: ["json"],
  components: {
    levels: Levels
  },
  created() {
    console.log(this.json);
  }
};
</script>