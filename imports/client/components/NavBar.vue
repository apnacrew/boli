<template>
  <v-bottom-navigation
    style="box-shadow: none"
    elevation-0
    shift
  >
    <v-btn>
      <span>Home</span>
      <v-icon>
        fa-home
      </v-icon>
    </v-btn>

    <v-btn>
      <span>Songs</span>
      <v-icon>fa-music</v-icon>
    </v-btn>

    <v-btn>
      <span>Artists</span>
      <v-icon>fa-headset</v-icon>
    </v-btn>

    <v-btn>
      <span>Community</span>
      <v-icon>fab fa-forumbee</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>
