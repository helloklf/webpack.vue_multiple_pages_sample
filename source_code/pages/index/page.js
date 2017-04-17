import Vue from 'vue'

import Page from './Page.vue'

Vue.config.debug = true;//开启错误提示

new Vue({
  el: '#page',
  data: {
    currentRoute: window.location.pathname
  },
  render(h) { return h(Page) }
});