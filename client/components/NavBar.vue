<template>
  <div class="nav">
    <ui-button class="nav-item">
      Home
    </ui-button>
    <ui-button class="nav-item">
      Community
    </ui-button>
    <ui-button class="nav-item">
      About
    </ui-button>
    <ui-button class="nav-item">
      Account
    </ui-button>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
};
</script>
<style scoped>
.nav {
  text-align: right;
}
.nav-item {
  height: 4rem;
}
</style>
