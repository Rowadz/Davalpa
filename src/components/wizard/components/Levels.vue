<template>
  <a-row :gutter="16" class="w-100">
    <a-col :span="12">
      <a-radio-group buttonStyle="solid" @change="onChange" v-model="lvl">
        <a-radio-button value="lvl1">Level 1</a-radio-button>
        <a-radio-button value="lvl2">Level 2</a-radio-button>
        <a-radio-button value="lvl3">Level 3</a-radio-button>
      </a-radio-group>
    </a-col>
    <a-col :span="12">
      <section v-if="lvl === 'lvl1'">
        Level 1 means the data could br represented in the X/Y axis, for example
        the json could be an array of objects (Array[objects]), and each object could contains
        as much property it can have.
        <a-collapse :bordered="false">
          <a-collapse-panel header="Show example Image" key="1">
            <img src="/img/lvl1.png" width="400" />
          </a-collapse-panel>
        </a-collapse>
      </section>

      <!-- <img v-if="lvl === 'lvl2'" src="/img/lvl1.png" width="400" /> -->
      <!-- <img v-if="lvl === 'lvl3'" src="/img/lvl1.png" width="400" /> -->
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "levels",
  data() {
    return {
      lvl: "lvl1"
    };
  }
};
</script>

<style>
</style>