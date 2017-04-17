<template>
    <div
         class="Home">
        <div class="SearchBar">
            <input type="search" maxlength="30"
                   v-bind:placeholder="placeholder" />
            <span class="Scan"
                  v-on:click="scanQRCode"><span class="Symbol"></span></span>
        </div>
        <div class="Block">
            <div class="Image FlexRB">
                <span class="Text">
                    <span class="Vue">Vue.js</span><small>&nbsp;＋&nbsp;</small><span class="VertX">Vert.X</span>
                </span>
            </div>
        </div>
        <div class="Block UserInfos">
            <div class="BitIcon UserHeadImage"></div>
            <div>
                <div><small><cite class="Uppercase">-- current logined user --</cite></small></div>
                <div><b>{{userState.nickName}}</b></div>
                <div><small class="Uppercase">ID　{{userState.uid}}</small></div>
                <div><span class="TextBtn">个人资料</span><span class="TextBtn">退出</span></div>
            </div>
        </div>
    
        <div class="Block OrderInfos"
             v-for="order in orderStatus">
            <div class="BitIcon Product"></div>
            <div>
                <div class="Text">
                    <label>{{order.prodName}}</label>
                </div>
                <div class="Text"><small>{{order.info}}</small></div>
            </div>
        </div>
        <div class="Block Padding-All Text-Center">
            <a class="Vue"
               href="/about.html">关于</a>　｜
            <a class="VertX"
               href="/feedback.html">反馈</a> ｜
            <a class="Vue"
               href="https://github.com/helloklf/webpack.vue_multiple_pages_sample/">GitHub</a>
        </div>
    </div>
</template>

<style scoped>
@import '../styles/pages/home.css';
</style>

<script>
export default {
    data() {
        let viewModel = {
            placeholder: "找找看 你喜欢的 ...",
            scanQRCode() {
                alert("你点了二维码扫描！");
            },
            userState: {
                "nickName": "八十分先生",
                "uid": "mongo2017"
            },
            orderStatus: [
                {
                    "prodName": "创意扑克牌 防水 塑料耐用 定制",
                    "info": "最新物流：正在准备派送 电话 13178638515"
                },
                {
                    "prodName": "Type-C 数据线 快充3.0A 乐视小米华为",
                    "info": "最新物流：正在广州集散中心，准备发往下一站"
                }
            ]
        };
        return viewModel;
    }
}
</script>