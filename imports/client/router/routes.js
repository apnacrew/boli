import PageHome from '../pages/PageHome.vue';
import PageAbout from '../pages/PageAbout.vue';
import PageSongs from '../pages/PageSongs.vue';
import Song from '../pages/PageSong.vue';
import PageArtists from '../pages/PageArtists.vue';

export default [
  {
    path: '/home',
    component: PageHome,
  },
  {
    path: '/about',
    component: PageAbout,
  },
  {
    path: '/songs',
    component: PageSongs,
  },
  {
    path: '/song/:id',
    component: Song,
  },
  {
    path: '/artists',
    component: PageArtists,
  },
];
