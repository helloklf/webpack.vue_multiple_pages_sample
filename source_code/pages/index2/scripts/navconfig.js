import viewstate from "../../../scripts/viewstate.js";

let navEvent = new Event('navigateto');
navEvent.pagekey = "/";

/* 接收导航事件
window.addEventListener('navigateto', function (e) {
    alert("当前页面："+e.pagekey);
}, false);
*/

import Vue from 'vue';
let navConfig = {
    _RootPanle: "RootContainer",
    PageToggle(pageKey) {
        this.menus.forEach(item => item.Selected = false);
        let menu = (this.menus.where(item => item.Key == pageKey)[0] || {});
        menu.Selected = true;
        this.currentView = menu.Page || require("../controls/404.vue");

        viewstate.pushState(pageKey, "", window.location.href);

        //发布导航事件
        navEvent.pagekey = pageKey;
        window.dispatchEvent(navEvent);
    },
    menus: [
        {
            Icon: '',
            Key: "home",
            Title: "首页",
            Group: "l1",
            Selected: true,
            Page: require("../controls/Home.vue")
        },
        {
            Icon: "",
            Key: "play",
            Title: "好玩",
            Group: "l1",
            Page: require("../controls/Play.vue")
        },
        {
            Icon: "",
            Key: "subscription",
            Title: "关注",
            Group: "l1",
            Page: require("../controls/Subscription.vue")
        },
        {
            Icon: "",
            Key: "shopcart",
            Title: "购物车",
            Group: "l1",
            Page: require("../controls/ShopCart.vue")
        },
        {
            Icon: "",
            Key: "user",
            Title: "个人",
            Group: "l1",
            Page: require("../controls/User.vue")
        }
    ]
};

navConfig.menus.forEach(item => item.Selected = false);
navConfig.currentView = navConfig.menus[0].Page;

//加载起始页面
window.addEventListener("load", function (e) {
    window.navigateto = navConfig.PageToggle;
    if (navConfig.menus && navConfig.menus.length > 0)
        navConfig.PageToggle(navConfig.menus[0].Key);
});

viewstate.onPopState((pageKey) => {
    navConfig.currentView = navConfig.menus.where(item => item.Key == pageKey)[0].Page;
    //发布导航事件
    navEvent.pagekey = pageKey;
    window.dispatchEvent(navEvent);
});

export default navConfig;