<template>
    <div class="MaxSize AppRoot">
        <div id="RootContainer"
             style="height: 100%;width: 100%;overflow: auto;position: relative;">
            <component v-bind:is="currentView">
                <!-- 组件在 vm.currentview 变化时改变！ -->
            </component>
        </div>
        <contorls-navbar></contorls-navbar>
    </div>
</template>

<script>
import JSEXT from "./../../scripts/jsext.js";

import Vue from 'vue';

Vue.component('contorls-navbar', require('./controls/AppNavBar.vue'));
import navconfig from "./scripts/navconfig.js";

export default {
    data() {
        return navconfig;
    }
};
</script>


<style>
.AppRoot {
    background: #f8f8f8;
    padding-bottom: 50px;
    position: relative;
    height: 100%;
    width: 100%;
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
}

/*这是一个符号字体库*/
@import "./../../Styles/Symbol.css";


/*一些通用的样式*/
@import "./../../Styles/SharedStyles.css";
</style>