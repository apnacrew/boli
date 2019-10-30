<template>
  <v-container fluid>
    <v-row
      no-gutters
      align="center"
    >
      <v-col :cols="(12-navSize)/2">
        <!-- <v-card>Boli</v-card> -->
        <div class="wrapper-title">
          <span class="title-text">Boli</span>
        </div>
      </v-col>
      <v-col>
        <nav-bar />
      </v-col>
      <v-col
        :cols="(12-navSize)/2"
        style="text-align: right"
      >
        <v-btn icon>
          <v-icon>
            fa-user
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'HeaderBar',
  data() {
    return {
      navSize: 8,
    };
  },
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.title-text {
  font: bold 4rem fantasy;
}
</style>
