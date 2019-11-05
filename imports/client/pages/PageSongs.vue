<template>
  <v-container>
    <!-- Template search box for showcase -->
    <v-row>
      <v-col cols="12">
        <v-card
          elevation="1"
          color="rgba(0,0,0,0)"
        >
          <v-toolbar
            dense
            elevation="0"
            class="translucent-white"
          >
            <v-toolbar-title>Search for songs</v-toolbar-title>
            <v-spacer />
            <v-btn icon>
              <v-icon>fa-search</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>fa-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>fa-ellipsis-v</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
    <song-list />
  </v-container>
</template>

<script>
import SongList from '../components/SongList.vue';

export default {
  name: 'PageSongs',
  components: {
    SongList,
  },
};
</script>
