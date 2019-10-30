<template>
  <v-app id="app">
    <layout-main />
  </v-app>
</template>

<script>
import LayoutMain from '../layouts/LayoutMain.vue';

export default {
  components: {
    LayoutMain,
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
