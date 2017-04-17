/**
 * 一套拓展的历史状态管理机制，便于实现h5界面中无刷新的页面导航
 */
export default (function () {
    let popstateCallbacks = [];
    let pagebackCallback = {};

    let viewstate = {
        pushState(obj, title, url) {
            if (window.history.state == null) {
                viewstate.setState();
            }
            window.history.pushState(
                {
                    "obj": obj || {},
                    "title": title || "",
                    "symbol": "sads"
                },
                title || "",
                url || ""
            );
        },
        replaceState(obj, title, url) {
            window.history.replaceState(
                {
                    "obj": obj || {},
                    "title": title || "",
                    "symbol": " Symbol()"
                },
                title || "",
                url || ""
            );
        },
        setState(obj, title) {
            viewstate.replaceState({}, "", window.location.href);
        },
        getState() {
            if (window.history.state && window.history.state.symbol)
                return window.history.state.obj;
            else
                return window.history.state;
        },
        onPopState(callback) {
            if (!popstateCallbacks.includes(callback)) {
                popstateCallbacks.push(callback);
            }
        },
        onGoBack(callback) {
            if (window.history.state == null) {
                viewstate.setState();
            }

            let symbol = window.history.state.symbol;
            if (pagebackCallback[symbol] == null)
                pagebackCallback[symbol] = [];

            pagebackCallback[symbol].push(callback);
        }
    };
    window.addEventListener("popstate", function (e) {
        let symbol = (e.state) ? (e.state.symbol) : Symbol();
        let onceCallback = pagebackCallback[symbol];
        if (onceCallback != null) {
            onceCallback.forEach(callback => {
                callback((e.state.obj));
            });
        }
        pagebackCallback[symbol] = null;
        popstateCallbacks.forEach(callback => {
            callback((e.state.obj));
        });
    });
    return viewstate;
})();