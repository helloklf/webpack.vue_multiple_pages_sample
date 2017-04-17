import Vue from 'vue'

Vue.config.debug = true;//开启错误提示

var Home = {
    template: '<p>Welcome home!</p>'
}

let data = {
    currentView: Home
};
new Vue({
    el: '#page',
    data: data
});

