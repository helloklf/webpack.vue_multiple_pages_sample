/* 接收导航事件
window.addEventListener('ajaxloadbegin', function (e) {
    alert("Ajax开始："+e.url);
}, false);
window.addEventListener('ajaxloadend', function (e) {
    alert("Ajax结束："+e.url);
}, false);
*/

let module = {
    AjaxRequest(url, method = "GET", datas = { dt: Date.parse(new Date()) }, callback = null) {
        let ajaxClient = new XMLHttpRequest();

        ajaxClient.onreadystatechange = function () {
            let resultInfo = null;
            if (ajaxClient.readyState == 4) {
                if (!callback) {
                    console.log("请求响应：");
                    console.log(ajaxClient.response);
                    return;
                }

                if (ajaxClient.status == 200) {
                    try {
                        resultInfo = module.result(JSON.parse(ajaxClient.response));
                    }
                    catch (e) {
                        resultInfo = module.result({ msg: "无法解析请求结果！" });
                    }
                }

                else if (ajaxClient.status == 404)
                    resultInfo = module.result({ msg: "请求的接口或页面不存在！" });

                else if (ajaxClient.status == 500)
                    resultInfo = module.result({ msg: "接口异常，请稍后重试！" });

                else {
                    console.log("请求异常：" + ajaxClient.status);
                    resultInfo = module.result({ msg: "未知异常，请重试！" });
                }


                //发布导航事件
                let ajaxloadendEvent = new Event('ajaxloadend');
                ajaxloadendEvent.url = url;
                window.dispatchEvent(ajaxloadendEvent);

                callback(resultInfo);
            }
        };

        let jsonString = JSON.stringify(datas ? datas : { dt: Date.parse(new Date()) });

        console.log("Ajax请求 " + method + "：" + url);
        console.log(datas);


        //发布导航事件
        let ajaxloadbeginEvent = new Event('ajaxloadbegin');
        ajaxloadbeginEvent.url = url;
        window.dispatchEvent(ajaxloadbeginEvent);

        ajaxClient.open(method.toUpperCase(), url);
        ajaxClient.send(jsonString);
    },
    result({ data, result, msg }) {
        if (data == "[]")
            data = [];
        if (data == "{}")
            data = {};

        if (msg == "" || msg == "null" || msg == "undefined")
            msg = null;

        let obj = {
            success: result == "success",
            message: msg,
            datas: data || []
        };

        return obj;
    }
};

export default module.AjaxRequest;