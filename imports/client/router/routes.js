import PageHome from '../pages/PageHome.vue';
import PageAbout from '../pages/PageAbout.vue';
import PageSongs from '../pages/PageSongs.vue';
import PageSong from '../pages/PageSong.vue';
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
    path: '/songs/:id',
    component: PageSong,
  },
  {
    path: '/artists',
    component: PageArtists,
  },
  {
    path: '*',
    redirect: '/home',
  },
];
