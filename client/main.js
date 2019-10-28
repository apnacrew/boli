import Vue from 'vue';
import './plugins/keen-ui';
import App from './App.vue';

Meteor.startup(() => {
  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    ...App,
  });
});
