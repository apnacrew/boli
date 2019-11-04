<template>
  <v-card
    flat
    tile
  >
    <v-img
      src="/images/background.jpg"
      aspect-ratio="1.5"
    >
      <HeaderBar />
      <v-content>
        <slot />
      </v-content>
    </v-img>
  </v-card>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';

export default {
  components: {
    HeaderBar,
  },
};
</script>
