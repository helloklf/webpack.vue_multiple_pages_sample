export default {
    _baseUrl: __CONFIGS__.API,
    _baseUrl_ws: __CONFIGS__.WEBSOCKET,

    configuration_get: {
        method: "get",
        action: "configuration",
        params() { }
    },
    configuration_post: {
        method: "post",
        action: "configuration",
        params({ keywords = "", appname = "", packagename = "", configId = "", isdefault = false, bindids = [] }) {
            return {
                data: {
                    isDefault: isdefault,
                    keyword: keywords,
                    appName: appname,
                    packageName: packagename,
                    configId: configId,
                    bindIds: bindids
                }
            };
        }
    },
    configuration_delete:{
        method: "post",
        action: "discardconfiguration",
        params({configId}) {
            return {
                data: { "configId": configId }
            };
         }
    },


    warning_get: {
        method: "get",
        action: "warning",
        params() { }
    },
    warning_update: {
        method: "post",
        action: "warning",
        params({ mailbox = "", rate = 0 }) {
            return {
                data: {
                    mailbox: mailbox,
                    rate: rate
                }
            };
        }
    },
    warningstate_post: {
        method: "post",
        action: "warningstate",
        params({ alertdisabled,timeout }) {
            return {
                data: { "enabled": !alertdisabled,setTime:timeout }
            };
        }
    },
    warningstate_socket: {
        method: "websocket",
        action: "warningsocket",
        params(datas) {
            return {
                data: datas
            };
        },
        result(datas) {
            let result = JSON.parse(datas);
            //{ data, result, msg }
            let obj = {
                success: result.result == "success",
                message: result.msg,
                datas: result.data
            };

            return obj;
        }
    },
    aggregation_get: {
        method: "get",
        action: "aggregation",
        params() {
            return {};
        }
    },
    history_get: {
        method: "get",
        action: "history",
        params() { }
    },
    deviceconfig_get: {
        method: "get",
        action: "mobileconfig",
        params() { }
    },
    deviceconfig_delete: {
        method: "POST",
        action: "discardmobileconfig",
        params({ configId }) {
            return {
                data: { configId }
            };
        }
    },
    deviceconfig_post: {
        method: "post",
        action: "mobileconfig",
        params({ id, configId, bindConfigId, model }) {
            id = (id || "") + "";
            if (configId && configId != "")
                return {
                    data: { id, configId, bindConfigId, model }
                };

            return {
                data: { id, bindConfigId, model }
            };
        }
    }
};