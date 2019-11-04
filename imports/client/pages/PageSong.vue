<template>
  <v-container fluid>
    <v-card
      tile
      flat
      :loading="loading"
    >
      <v-alert
        v-if="error"
        type="error"
      >
        We were unable to fetch the requested song. Please make sure the url is correct and try again.
      </v-alert>
      <!-- Song profile -->
      <template v-else>
        <v-row>
          <v-col>
            <v-card
              flat
              tile
            >
              <v-img
                :src="song.imageUrl"
                height="200px"
              >
                <v-card-title class="display-2 font-weight-bold">
                  {{ song.name }}
                </v-card-title>
                <v-card-subtitle class="title font-weight-bold">
                  {{ song.artist }}
                </v-card-subtitle>
              </v-img>
              <v-card-text>
                <div>
                  {{ song.description }}
                </div>
                <v-row
                  class="meta flex-column"
                  wrap
                  dense
                  style="max-height: 70px"
                >
                  <v-col sm="2">
                    <span class="font-weight-bold">Runtime: </span>
                    {{ runtime }}
                  </v-col>
                  <v-col sm="2">
                    <span class="font-weight-bold">Release Date: </span>
                    {{ releaseDate }}
                  </v-col>
                  <v-col sm="2">
                    <span class="font-weight-bold">Writer: </span>
                    {{ song.writer }}
                  </v-col>
                </v-row>
              </v-card-text>
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
                        {{ song.lyrics.orig.lang }}
                      </div>
                      <div class="lyrics-wrapper">
                        <div
                          class="my-2"
                          v-for="(line, i) in song.lyrics.orig.lines"
                          :key="i"
                        >
                          {{ line }}
                        </div>
                        <!-- {{ loremIpsum({ count: 10 }) }} -->
                      </div>
                    </v-card>
                  </v-col>
                  <v-divider vertical />
                  <v-col>
                    <v-card flat>
                      <div class="font-weight-bold">
                        {{ song.lyrics.translated.lang }}
                      </div>
                      <div class="lyrics-wrapper">
                        <div
                          class="my-2"
                          v-for="(line, i) in song.lyrics.translated.lines"
                          :key="i"
                        >
                          {{ line }}
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { loremIpsum } from 'lorem-ipsum';

export default {
  name: 'PageSong',
  data() {
    return {
      loading: true,
      error: false,
      song: {
        name: '',
        artist: '',
        writer: '',
        description: '',
        imageUrl: '',
        runtime: null,
        release: null,
        lyrics: {
          orig: {
            lang: 'Punjabi',
            lines: [],
          },
          translated: {
            lang: 'English',
            lines: [],
          },
        },
      },
    };
  },
  computed: {
    runtime() {
      return moment.utc(
        moment.duration(this.song.runtime, 's').asMilliseconds(),
      ).format('mm:ss');
    },
    releaseDate() {
      if (!this.song.release) return 'N/A';
      return moment(this.song.release).format('DD MMM, YYYY');
    },
  },
  created() {
    Meteor.call('findSong', this.$route.params.id, (err, song) => {
      this.loading = false;
      if (err) {
        this.error = true;
        return;
      }
      this.song = song;
    });
  },
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
