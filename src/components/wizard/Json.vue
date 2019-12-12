<template>
  <json-view :data="d" />
</template>

<script>
import { JSONView } from "vue-json-component";

export default {
  components: { "json-view": JSONView },
  data() {
    return {
      d: window.x
    };
  }
};
</script>

<style>
</style>