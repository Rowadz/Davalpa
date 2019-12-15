<template>
  <a-row type="flex" justify="space-around" align="middle" class="mt-5">
    <a-button
      type="primary"
      icon="download"
      size="large"
      @click="download"
      :loading="loading"
    >Download yor data</a-button>
  </a-row>
</template>

<script>
import { saveAs } from "file-saver";
import { mapGetters } from "vuex";
/* eslint-disable no-console */
export default {
  computed: {
    ...mapGetters(["getModifiedData"])
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    download() {
      this.loading = true;
      try {
        const b = new Blob([JSON.stringify(this.getModifiedData, null, 2)], {
          type: "application/json"
        });
        saveAs(b, Date.now());
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      } catch (e) {
        this.loading = false;
        console.error("ERR..", e);
      }
    }
  }
};
</script>

<style></style>
