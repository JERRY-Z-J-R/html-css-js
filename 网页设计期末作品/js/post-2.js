// 焦点图轮播
// window.onload() 方法用于在网页加载完毕后立刻执行的操作
window.onload = function () {
    // 顶部的焦点图切换
    function hotChange() {
        var current_index = 0;
        // setInterval() 方法可按照指定的周期（ 以毫秒计） 来调用函数或计算表达式
        var timer = window.setInterval(autoChange, 6666);
        var button_li = document.getElementById("button").getElementsByTagName("li");
        var pic_li = document.getElementById("banner_pic").getElementsByTagName("li");
        for (var i = 0; i < button_li.length; i++) {
            // onmouseover 事件会在鼠标指针移动到指定的元素上时发生
            button_li[i].onmouseover = function () {
                if (timer) {
                    // clearInterval() 方法可取消由 setInterval() 函数设定的定时执行操作
                    clearInterval(timer);
                }
                for (var j = 0; j < pic_li.length; j++) {
                    if (button_li[j] == this) {
                        current_index = j;
                        button_li[j].className = "current";
                        pic_li[j].className = "current";
                    } else {
                        pic_li[j].className = "pic";
                        button_li[j].className = "but";
                    }
                }
            }
            // onmouseout 事件会在鼠标指针移出指定的对象时发生
            button_li[i].onmouseout = function () {
                timer = setInterval(autoChange, 3000);
            }
        }

        function autoChange() {
            ++current_index;
            if (current_index == button_li.length) {
                current_index = 0;
            }
            for (var i = 0; i < button_li.length; i++) {
                if (i == current_index) {
                    button_li[i].className = "current";
                    pic_li[i].className = "current";
                } else {
                    button_li[i].className = "but";
                    pic_li[i].className = "pic";
                }
            }
        }
    }

    hotChange();
}