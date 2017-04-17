import Vue from 'vue'

Vue.config.debug = true;//开启错误提示

import pages from './config/nav.js';


let state = {
    currentView: pages['p1']
};

new Vue({
    el: '#page',
    data: state
});

setTimeout(() => {
    state.currentView = pages['p2'];
}, 3000);

