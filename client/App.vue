<template>
  <page-home />
</template>

<script>
import PageHome from './pages/PageHome.vue';

console.log();
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
/* Recommended css overrides by https://github.com/JosephusPaye/Keen-UI */
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-size: 100%;
  }
</style>
