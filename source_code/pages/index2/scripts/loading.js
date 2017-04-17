let process = null;
let onload = false;
window.addEventListener('ajaxloadbegin', function (e) {
    if (process == null)
        process = document.getElementById("UI_Progress");
    onload = true;
    //延迟显示load动画，300ms，避免闪烁
    setTimeout(function () {
        if (onload)
            process.style.display = "block";
    }, 300);
}, false);
window.addEventListener('ajaxloadend', function (e) {
    if (process == null)
        process = document.getElementById("UI_Progress");
    if (process.style.display == "none") {
        onload = false;
    }
    else //延迟隐藏load动画，300ms，避免闪烁
        setTimeout(function () {
            process.style.display = "none";
            onload = false;
        }, 300);
}, false);