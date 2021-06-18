window.onload = function () {
    //获取弹窗按钮
    var registered = document.getElementById("registered");
    var close = document.getElementsByClassName("close")[0];
    var registeredpage = document.getElementById("registeredpage");
    //按钮绑定事件
    registered.onclick = function () {
        //获取弹窗
        registeredpage.style.display = "block";
    }
    close.onclick = function () {
        registeredpage.style.display = "none";
    }
    //用户点击其他地方关闭弹窗
    window.onclick = function (event) {
        if (event.target == registeredpage) {
            registeredpage.style.display = "none";
        }
    }
}