import Vue from 'vue'

Vue.config.debug = true;//开启错误提示

//路由信息
const routes = {
  '/': {
    template: '<div>A custom component!</div>'
  }
};


new Vue({
  el: '#page',
  data: {
    currentRoute: window.location.pathname
  }
  /*,
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound;
    }
  }
  ,render (h) { return h(this.ViewComponent) }
  */
});