<template>
    <div>
        <div class="MaxSize">
            <contorls-floatnavmenu></contorls-floatnavmenu>
            <div id="RootContainer"
                 style="height: 100%;width: 100%;overflow: auto;position: relative;">
                <component v-bind:is="currentView">
                    <!-- 组件在 vm.currentview 变化时改变！ -->
                </component>
                <div>
                    <div class="load-container load7"
                         id="UI_Progress">
                        <div class="loader">Loading...</div>
                    </div>
                </div>
            </div>
        </div>
        <contorls-navbar></contorls-navbar>
    </div>
</template>

<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
import JSEXT from "./../../scripts/jsext.js";

import wxconfig from "./scripts/wxconfig.js";
wxconfig();

import { Alert, AlertType } from "./scripts/uipopup.js";
window.Alert = Alert;
window.AlertType = AlertType;

import Vue from 'vue';

Vue.component('contorls-floatnavmenu', require('./controls/FloatNavMenu.vue'));

Vue.component('contorls-navbar', require('./controls/AppNavBar.vue'));

import AjaxRequest from "./scripts/ajax.js";
import ServiceApi from "./scripts/services.js";
window.App = {
    AjaxRequest: AjaxRequest,
    ServiceApi: ServiceApi,
};

import navconfig from "./scripts/navconfig.js";
import loading from "./scripts/loading.js";

export default {
    data() {
        window.addEventListener('load', function (e) {
            let closeBtns = document.getElementsByClassName('Close');
            for (let i = 0; i < closeBtns.length; i++) {
                closeBtns[i].addEventListener('click', function (e) {
                    e.currentTarget.parentNode.parentNode.classList.remove('Active');
                });
            }
        });

        let viewModel = navconfig;

        return viewModel;
    }
};
</script>


<style>
@import "./../../Styles/Symbol.css";
@import "./../../Styles/SharedStyles.css";
@import "./../../Styles/loading/load7.css";

@import "./Styles/Page.css";
@import "./Styles/UIPop.css";

#UI_Progress {
    position: fixed;
    z-index: 10000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    max-width: 300px;
    max-height: 200px;
    text-shadow: 0 0 3px #ccc;
}
</style>