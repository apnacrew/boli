<template>
  <v-row>
    <v-col cols="12">
      <v-simple-table class="translucent-white">
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
              v-for="n in 5"
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
</template>

<script>
import { loremIpsum } from 'lorem-ipsum';

export default {
  name: 'SongList',
  methods: {
    loremIpsum,
  },
};
</script>
