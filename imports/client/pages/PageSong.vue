<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card flat>
          <v-img
            src="/images/kismet-cover.jpg"
            height="200px"
          >
            <v-card-title class="display-2 font-weight-bold">
              Top western road trips
            </v-card-title>
            <v-card-subtitle class="title font-weight-bold">
              By Artist Name
            </v-card-subtitle>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card flat>
          <v-card-title class="headline font-weight-bold">
            Lyrics
          </v-card-title>
          <v-card-text class="pb-0">
            <v-row>
              <v-col>
                <v-card flat>
                  <div class="font-weight-bold">
                    Punjabi
                  </div>
                  <div class="lyrics-wrapper">
                    {{ loremIpsum({ count: 10 }) }}
                  </div>
                </v-card>
              </v-col>
              <v-divider vertical />
              <v-col>
                <v-card flat>
                  <div class="font-weight-bold">
                    English
                  </div>
                  <div class="lyrics-wrapper">
                    {{ loremIpsum({ count: 10 }) }}
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { loremIpsum } from 'lorem-ipsum';

export default {
  name: 'PageSong',
  methods: {
    loremIpsum,
  },
};
</script>

<style scoped>
.lyrics-wrapper {
  font-size: 1.2rem;
}
</style>
