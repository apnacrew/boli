<template>
  <div>
    <HeaderBar />
    <v-content>
      <slot />
    </v-content>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';

export default {
  components: {
    HeaderBar,
  },
};
</script>
