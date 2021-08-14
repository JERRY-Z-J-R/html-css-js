// 切换播放软件
// 1.获取元素 
var player = document.querySelector('.player');
var twoMusic = document.querySelector('.twoMusic');
// 2.注册事件 程序处理
var playerFlag = 0;
player.onclick = function () {
    if (playerFlag == 0) {
        twoMusic.src = "https://music.163.com/#/artist?id=2116";
        player.src = "./images/post/logo/qqMusic.png";
        player.title = "点击切换QQ音乐";
        playerFlag = 1;
    } else {
        twoMusic.src = "https://y.qq.com/n/ryqq/singer/003Nz2So3XXYek";
        player.src = "./images/post/logo/wyy.png";
        player.title = "点击切换网易云音乐";
        playerFlag = 0;
    }
}