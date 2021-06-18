window.onload = function () {
    var increase = document.getElementById('increase');
    var information = document.getElementById('information');
    var label = document.getElementsByClassName("label")[0];
    // 按钮绑定事件
    increase.onclick = function () {
        // 获取弹窗
        information.style.display = "block";
    }
    label.onclick = function () {
        information.style.display = "none";
    }
};
