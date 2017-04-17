let inited = false;

function _wxconfig(config) {
    try {
        wx.ready(function () {
            inited = true;

            wx.onMenuShareTimeline({
                title: '我的第一个页面', // 分享标题
                link: location.href, // 分享链接
                imgUrl: '', // 分享图标
                success: function () {
                    alert(1);
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    alert(0);
                    // 用户取消分享后执行的回调函数
                }
            });

            console.log(">>> JSSDK OK!");
            //document.write(">>> JSSDK OK!");
        });

        wx.config(config);
    }
    catch (ex) {
        console.log(ex);
    }
}


function wxconfig() {
    if (inited)
        return;
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = (request) => {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                _wxconfig(JSON.parse(ajax.response));
            }
            else {
            }
            window.dispatchEvent(new Event("ajaxloadend"));
        }
    };
    ajax.open("GET", "http://helloklf.iok.la:13168/wechat/jssdk/wxconfig");
    ajax.send();
}

export default wxconfig;