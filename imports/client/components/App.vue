<template>
  <v-app id="app">
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import LayoutMain from '../layouts/LayoutMain.vue';

export default {
  components: {
    LayoutMain,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'LayoutMain';
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.translucent-white {
  background-color: rgba(255,255,255,0.5) !important;
}
</style>
