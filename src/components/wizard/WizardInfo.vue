<template>
  <section>
    <keys></keys>

    <selectors></selectors>
  </section>
</template>

<script>
/* eslint-disable no-console */
import Keys from "./components/Keys";
import Selectors from "./components/Selectors";
export default {
  name: "wizard-info",
  components: {
    keys: Keys,
    selectors: Selectors
  }
};
</script>
