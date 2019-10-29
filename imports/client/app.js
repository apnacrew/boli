import './startup';

import Vue from 'vue';
import App from './components/App.vue';
import vuetify from './plugins/vuetify';

export default new Vue({
  vuetify,
  ...App,
});
