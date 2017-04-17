let AlertType = {
    Default:0,      //默认
    Success:1,      //成功
    Exception:-1,   //异常
    Warn:2          //警告
};

let uiPopupTimeout = 2000; //提示超时时间

let Alert = function(msgText,alertType,timeout){
    alertType = alertType == null?0:alertType;

    let id = `UIPop${Date.parse(new Date())}`;
    let template = `<div id="${id}" poptype='${alertType}' class="UIPop"><span class="Icon"></span><span>${msgText}</span></dvi>`;
 
    /*
    <!-- beforebegin -->
    <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
    </p>
    <!-- afterend -->
    */
    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterend",template.toString());
    setTimeout(function() {
        document.getElementById(id).remove();
    },timeout?timeout:uiPopupTimeout);
};

export {  Alert,AlertType  };