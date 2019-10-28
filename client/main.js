import Vue from 'vue';
import App from './App.vue';

Meteor.startup(() => {
  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    ...App,
  });
});
