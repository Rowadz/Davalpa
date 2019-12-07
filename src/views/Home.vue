<template>
  <a-row type="flex" justify="space-around" align="middle" class="min-vh-100">
    <section hidden>
      <form>
        <input type="file" ref="fileInput" @change="previewFiles" />
      </form>
    </section>
    <a-button
      class="height-100"
      type="primary"
      shape="circle"
      icon="download"
      :size="'large'"
      :loading="loading"
      @click="openFileUpload"
    />
  </a-row>
</template>

<script>
// @ is an alias to /src
/* eslint-disable no-console */
export default {
  name: "Home",
  data: () => ({
    loading: false
  }),
  methods: {
    openFileUpload() {
      this.$refs.fileInput.click();
    },
    previewFiles() {
      try {
        this.loading = true;
        const [file] = this.$refs.fileInput.files;
        const reader = new FileReader();
        reader.onload = e => {
          console.log(e.target.result);
        };
        reader.readAsText(file, "UTF-8");
        this.not(
          "Read your file successfully",
          "Now Davalpa will do some calculation, this might take some time plz wait",
          <a-icon type="smile" style="color: #108ee9" />
        );
      } catch (error) {
        this.loading = false;
        this.not(
          "Oops!",
          "Davalpa is not powerful or smart enough to process that",
          <a-icon type="frown" style="color: #108ee9" />
        );
      }
    },
    not(message, description, icon) {
      this.$notification.open({ message, description, icon });
    }
  }
};
</script>

<style lang="scss">
</style>
