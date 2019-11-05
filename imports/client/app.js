import './startup';
import './plugins';

import Vue from 'vue';
import App from './components/App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

export default new Vue({
  vuetify,
  router,
  ...App,
});
