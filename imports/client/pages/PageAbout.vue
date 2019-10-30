<template>
  <v-container>
    <v-row justify="center">
      <span class="py-3 display-2 font-weight-bold">Who are we</span>
    </v-row>
    <v-row justify="center">
      {{ loremIpsum({ count: 10 }) }}
    </v-row>
  </v-container>
</template>

<script>
import { loremIpsum } from 'lorem-ipsum';

export default {
  name: 'PageAbout',
  methods: {
    loremIpsum,
  },
};
</script>
