<template>
  <div class="page">
    <nav-bar />
    <div>
      <p>Welcome to Boli: the richest collection of music history</p>
      <p>Explore what you love!</p>
      <p><ui-button>Start</ui-button></p>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'PageHome',
  components: {
    NavBar,
  },
};
</script>
<style>
  p {
    font-size: 1.5em;
    text-align: center;
  }
</style>
