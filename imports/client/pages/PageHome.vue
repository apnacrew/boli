<template>
  <v-container>
    <v-row>
      <span class="display-1 font-weight-bold">Top Stories</span>
    </v-row>
    <v-row>
      <v-col class="mr-2">
        <v-row>
          <v-card
            outlined
            flat
            tile
            class="pa-2 display-2 translucent-white"
          >
            <v-card-title>
              {{ loremIpsum({ count: 2, units: 'words'}) }}
            </v-card-title>
            <v-card-text>
              {{ loremIpsum({ count: 30, units: 'words'}) }}
            </v-card-text>
          </v-card>
        </v-row>
        <v-row />
        <v-row>
          <v-card
            outlined
            flat
            tile
            class="pa-2 display-2 translucent-white"
          >
            <v-card-title>
              {{ loremIpsum({ count: 3, units: 'words'}) }}
            </v-card-title>
            <v-card-text>
              {{ loremIpsum({ count: 60, units: 'words'}) }}
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-card
            outlined
            flat
            tile
            class="pa-2 display-2 translucent-white"
          >
            <v-card-title>
              {{ loremIpsum({ count: 2, units: 'words'}) }}
            </v-card-title>
            <v-card-text>
              {{ loremIpsum({ count: 50, units: 'words'}) }}
            </v-card-text>
          </v-card>
        </v-row>
        <v-row>
          <v-card
            outlined
            flat
            tile
            class="pa-2 display-2 translucent-white"
          >
            <v-card-title>
              {{ loremIpsum({ count: 3, units: 'words'}) }}
            </v-card-title>
            <v-card-text>
              {{ loremIpsum({ count: 60, units: 'words'}) }}
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <span class="py-3 display-1 font-weight-bold">Charts</span>
    </v-row>
    <song-list />
    <v-row justify="center">
      <span class="display-1 font-weight-bold">Videos</span>
    </v-row>
    <v-row justify="center">
      <span class="display-3 font-weight-bold">...</span>
    </v-row>
    <v-row justify="center">
      <span class="display-1 font-weight-bold">Community</span>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-simple-table class="translucent-white">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  User
                </th>
                <th class="text-right">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="n in 5"
                :key="n"
              >
                <td><a>{{ loremIpsum({ count: 2, units: 'words'}) }}</a></td>
                <td class="text-right">
                  {{ n }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { loremIpsum } from 'lorem-ipsum';
import SongList from '../components/SongList.vue';

export default {
  name: 'PageHome',
  methods: {
    loremIpsum,
  },
  components: {
    SongList,
  },
};
</script>
