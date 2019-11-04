<template>
  <v-bottom-navigation
    shift
    style="box-shadow: none"
    background-color="rgba(255,255,255,0.2)"
  >
    <v-btn
      v-for="item in items"
      :key="item.path"
      :to="item.path"
    >
      <span>{{ item.text }}</span>
      <v-icon>
        {{ item.icon }}
      </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    items: {
      type: Array,
      default() {
        return [{
          text: 'Home',
          path: '/home',
          icon: 'fa-home',
        }];
      },
    },
  },
};
</script>
