<template>
  <v-card
    flat
    tile
    style="background: rgba(255,255,255,0.5)"
    :loading="!$subReady.songList"
  >
    <v-row>
      <v-col cols="12">
        <v-simple-table style="background: rgba(0,0,0,0)">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Rank
                </th>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Artist
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(song, i) in songList"
                :key="i"
              >
                <td>{{ song.rank }}</td>
                <td>
                  <router-link :to="`/songs/${song._id}`">
                    {{ song.name }}
                  </router-link>
                </td>
                <td><a>{{ song.artist }}</a></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { loremIpsum } from 'lorem-ipsum';
import Songs from '../../collections/songs';

export default {
  name: 'SongList',
  meteor: {
    $subscribe: {
      songList: [],
    },
    songList() {
      return Songs.find({});
    },
  },
  methods: {
    loremIpsum,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
