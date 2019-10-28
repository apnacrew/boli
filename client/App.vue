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

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
