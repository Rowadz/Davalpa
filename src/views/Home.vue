<template>
  <a-row type="flex" justify="space-around" align="middle" class="min-vh-100">
    <section hidden>
      <form>
        <input type="file" ref="fileInput" @change="previewFiles" />
      </form>
    </section>
    <a-button
      class="height-100 magictime vanishIn"
      type="primary"
      shape="circle"
      icon="download"
      :size="'large'"
      :loading="loading"
      :class="{ 'magictime swashOut': navigate }"
      @click="openFileUpload"
    />
  </a-row>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import router from "../router";
/* eslint-disable no-console */
export default {
  name: "Home",
  data: () => ({
    loading: false,
    navigate: false
  }),
  methods: {
    ...mapActions(["storeData"]),
    openFileUpload() {
      this.$refs.fileInput.click();
    },
    previewFiles() {
      try {
        this.loading = true;
        const [file] = this.$refs.fileInput.files;
        const reader = new FileReader();
        reader.onload = e => {
          try {
            console.log(e.type);
            this.storeData(JSON.parse(e.target.result));
            this.navigate = true;
            this.not(
              "Read your file successfully",
              "Now Davalpa will do some calculation, this might take some time plz wait",
              <a-icon type="smile" style="color: #108ee9" />
            );
            setTimeout(() => {
              router.push({ path: "wizard" });
            }, 1000);
          } catch {
            this.err();
          }
        };
        reader.readAsText(file, "UTF-8");
      } catch {
        this.err();
      }
    },
    err() {
      this.loading = false;
      this.not(
        "Oops!",
        "Davalpa is not powerful or smart enough to process that",
        <a-icon type="frown" style="color: #108ee9" />
      );
    },
    not(message, description, icon) {
      this.$notification.open({ message, description, icon });
    }
  }
};
</script>

<style lang="scss">
</style>
