<template>
    <div page-key="home"
         class="Home">
        <div class="SearchBar">
            <input type="search"
                   placeholder="type-c to type-c 公对公 usb3.1 ..." />
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
                <div><b>八十分先生</b></div>
                <div><small class="Uppercase">ID　mongo2017</small></div>
                <div><span class="TextBtn">个人资料</span><span class="TextBtn">退出</span></div>
            </div>
        </div>
    
        <div class="Block OrderInfos">
            <div class="BitIcon Product"></div>
            <div>
                <div class="Text">
                    <label>创意扑克牌 防水 塑料耐用 定制</label>
                </div>
                <div class="Text"><small>最新物流：正在准备派送 电话 13178638515</small></div>
            </div>
        </div>
        <div class="Block OrderInfos">
            <div class="BitIcon Product"></div>
            <div>
                <div class="Text">
                    <label>Type-C 数据线 快充3.0A 乐视小米华为</label>
                </div>
                <div class="Text"><small>最新物流：正在广州集散中心，准备发往下一站</small></div>
            </div>
        </div>
    </div>
</template>

<style lang="" scoped>
@import '../styles/pages/home.css';
</style>

<script>
export default {
    data() {
        let viewModel = {
            scanQRCode() {
                wx.scanQRCode(
                    {
                        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                        success: function (res) {
                            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                        }
                    });
            }
        };
        return viewModel;
    }
}
</script>