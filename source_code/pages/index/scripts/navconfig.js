import viewstate from "../../../scripts/viewstate.js";

let navConfig = {
    _RootPanle: "RootContainer",
    PageToggle(pageKey) {
        this.pages.forEach(item => item.Selected = false);
        let menu = (this.pages.where(item => item.Key == pageKey)[0] || {});
        menu.Selected = true;
        this.currentView = menu.Page || require("../pages/404.vue");

        viewstate.pushState(pageKey, "此参数似乎没什么用", window.location.href);
    },
    pages: [
        {
            Icon: '', //使用了符号字体字符
            Key: "home",
            Title: "首页",
            Selected: true,
            Page: require("../pages/Home.vue")
        },
        {
            Icon: "",
            Key: "play",
            Title: "好玩",
            Page: require("../pages/Play.vue")
        },
        {
            Icon: "",
            Key: "subscription",
            Title: "关注",
            Page: require("../pages/Subscription.vue")
        },
        {
            Icon: "",
            Key: "shopcart",
            Title: "购物车",
            Group: "l1",
            Page: require("../pages/ShopCart.vue")
        },
        {
            Icon: "",
            Key: "user",
            Title: "个人",
            Page: require("../pages/UserCenter.vue")
        }
    ]
};

//设置页面选中状态
navConfig.pages.forEach(item => item.Selected = false);
//自动导航到home页
navConfig.PageToggle("home");

viewstate.onPopState((pageKey) => {
    navConfig.currentView = navConfig.pages.where(item => item.Key == pageKey)[0].Page;
});

export default navConfig;