import Vue from 'vue'

Vue.config.debug = true;//开启错误提示

import PageContent from "./otherfiles/example.js";

new Vue({
  el: '#page',
  data: {
    currentRoute: window.location.pathname
  },
  render(h){
    return h(PageContent);
  }
});