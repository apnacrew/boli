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
    <v-row>
      <v-col cols="12">
        <v-simple-table>
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
                v-for="n in 20"
                :key="n"
              >
                <td>{{ n }}</td>
                <td><a>{{ loremIpsum({ count: 5, units: 'words'}) }}</a></td>
                <td><a>{{ loremIpsum({ count: 2, units: 'words'}) }}</a></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
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
