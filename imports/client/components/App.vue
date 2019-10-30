<template>
  <page-home />
</template>

<script>
import PageHome from '../pages/PageHome.vue';

export default {
  data() {
    return {
      date: new Date(),
    };
  },
  components: {
    PageHome,
  },
};
</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-size: 100%;
}

body {
  margin: 0;
}
</style>
