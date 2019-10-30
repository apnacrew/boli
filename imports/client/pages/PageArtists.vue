<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          color="grey lighten-4"
          elevation="1"
        >
          <v-toolbar
            dense
            elevation="0"
          >
            <v-toolbar-title>Search for artists</v-toolbar-title>
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
    <v-row>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Artist
                </th>
                <th class="text-right">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="n in 8"
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

export default {
  name: 'PageSongs',
  methods: {
    loremIpsum,
  },
};
</script>
