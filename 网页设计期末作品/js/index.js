// 主页
// 获取小卡片
var wrap = document.getElementsByClassName('wrap')[0];
var cards = wrap.getElementsByClassName('card');
console.log(wrap);
console.log(cards);

// 遍历节点给 cards 添加移入事件，并添加 active 类名即可实现手风琴收缩效果
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', function () {
        // 事前先清除下
        removeActive();
        // 给当前的添加 active 类名
        this.className = "card active"
    })
}

function removeActive() {
    for (var i = 0; i < cards.length; i++) {
        cards[i].className = "card";
    }
}
// 主页结束

// -------------------------------------------------------

// 作者简介
// 1.获取元素 
var readmeImg = document.querySelector('.readme-img');
var readmePage = document.querySelector('.readmePage');
// 2.注册事件 程序处理
readmeImg.onmouseover = function () {
    readmePage.style.display = 'block';
}
readmeImg.onmouseout = function () {
    readmePage.style.display = 'none';
}
// 作者简介结束

// -------------------------------------------------------

// 个人账号外链模块
var link = document.querySelector('.mylink');
var linkFlag = 0;
readmeImg.onclick = function () {
    if (linkFlag == 0) {
        link.style.display = 'block';
        readmeImg.title = "单击关闭个人账号";
        linkFlag = 1;
    } else {
        link.style.display = 'none';
        readmeImg.title = "单击查看个人账号";
        linkFlag = 0;
    }
}
// 个人账号外链模块结束

// -------------------------------------------------------

// 交个朋友模块
var jgpy = document.querySelector('.jgpy');
var friend = document.querySelector('.friend');
var jgpyFlag = 0;
jgpy.onclick = function () {
    if (jgpyFlag == 0) {
        friend.style.display = 'block';
        jgpy.title = "关闭";
        jgpyFlag = 1;
    } else {
        friend.style.display = 'none';
        jgpy.title = "交个朋友";
        jgpyFlag = 0;
    }
}
// 交个朋友模块结束

// -------------------------------------------------------

// 交个朋友模块
var lyfx = document.querySelector('.lyfx');
var letter = document.querySelector('.letter');
var lyfxFlag = 0;
lyfx.onclick = function () {
    if (lyfxFlag == 0) {
        letter.style.display = 'block';
        lyfx.title = "关闭";
        lyfxFlag = 1;
    } else {
        letter.style.display = 'none';
        lyfx.title = "留一封信";
        lyfxFlag = 0;
    }
}
// 交个朋友模块结束

// -------------------------------------------------------

// 音乐模块
var music = document.getElementById("music");
var musicLogo = document.querySelector('.music-logo');
var yy1 = './music/桂程 - 老街.flac';
var yy2 = './music/張子铭 - 谁愿放手.mp3';
var yy3 = './music/余超颖 - 富士山下.flac';
var yy4 = './music/張子铭 - 春夏秋冬.mp3';
var yy5 = './music/張子铭 - 风继续吹.mp3';
var yy6 = './music/張子铭 - 一生中最爱.flac';
var yy7 = './music/刘德华 - 17岁.mp3';
var yyArr = [yy1, yy2, yy3, yy4, yy5, yy6, yy7];

// 播放音乐旋转按钮
function inPlay() {
    // 判断如果音乐停止播放中，就让音乐按钮停止旋转，否则持续旋转
    if (music.paused) {
        musicLogo.className = "music-logo music-play";
    } else {
        musicLogo.className = "music-logo";
    }
}
var x = 0;
// 切换歌曲（单击右键）
musicLogo.oncontextmenu = function (e) {
    // 阻止默认的右键菜单
    e.preventDefault();
    // 如果音乐没有在播放，那么禁用右键
    if (music.paused) {} else {
        for (; x < yyArr.length; x++) {
            // 如果为最后一首音乐，那么下一首为第一首
            if (x == yyArr.length - 1) {
                x = 0;
                music.src = yyArr[x];
                music.play();
                break;
            } else {
                ++x;
                music.src = yyArr[x];
                music.play();
                break;
            }
        }
    }
}

// 播放音乐（单击左键）
musicLogo.onclick = function () {
    if (music.paused) {
        inPlay();
        music.play();
    } else {
        inPlay();
        music.pause();
    }
}

var postFlag = 0;

// 音乐播放完毕，自动切换音乐
music.addEventListener('ended', function () {
    // 如果页面窗口单独打开，则开启单曲循环，否则就自动下一首
    if (postFlag == 0) {
        for (; x < yyArr.length; x++) {
            if (x == yyArr.length - 1) {
                x = 0;
                music.src = yyArr[x];
                music.play();
                inPlay();
                break;
            } else {
                ++x;
                music.src = yyArr[x];
                music.play();
                inPlay();
                break;
            }
        }
    } else {
        music.play();
        inPlay();
    }
}, false)

// ---------------------------------------------------

// 窗口控制
// 窗口1
var card1 = document.querySelector('.card-1');
var post1 = document.querySelector('.post-1');
var closeIcon1 = document.querySelector('.close-icon1');
// 点击卡片时显示
card1.onclick = function () {
    post1.style.display = 'block';
    // 调用相应的音乐
    x = 2;
    music.src = yyArr[x];
    inPlay();
    music.play();
    postFlag = 1;
}
// 点击×时隐藏
closeIcon1.onclick = function () {
    post1.style.display = 'none';
    // 关闭相应的音乐
    inPlay();
    music.pause();
    postFlag = 0;
}

// 窗口2
var card2 = document.querySelector('.card-2');
var post2 = document.querySelector('.post-2');
var closeIcon2 = document.querySelector('.close-icon2');
// 点击卡片时显示
card2.onclick = function () {
    post2.style.display = 'block';
    // 调用相应的音乐
    x = 0;
    music.src = yyArr[x];
    inPlay();
    music.play();
    postFlag = 1;
}
// 点击×时隐藏
closeIcon2.onclick = function () {
    post2.style.display = 'none';
    // 关闭相应的音乐
    inPlay();
    music.pause();
    postFlag = 0;
}

// 窗口3
var card3 = document.querySelector('.card-3');
var post3 = document.querySelector('.post-3');
var closeIcon3 = document.querySelector('.close-icon3');
// 点击卡片时显示
card3.onclick = function () {
    post3.style.display = 'block';
    // 调用相应的音乐
    x = 1;
    music.src = yyArr[x];
    inPlay();
    music.play();
    postFlag = 1;
}
// 点击×时隐藏
closeIcon3.onclick = function () {
    post3.style.display = 'none';
    // 关闭相应的音乐
    inPlay();
    music.pause();
    postFlag = 0;
}

// 窗口4
var card4 = document.querySelector('.card-4');
var post4 = document.querySelector('.post-4');
var closeIcon4 = document.querySelector('.close-icon4');
// 点击卡片时显示
card4.onclick = function () {
    post4.style.display = 'block';
    // 调用相应的音乐
    x = 3;
    music.src = yyArr[x];
    inPlay();
    music.play();
    postFlag = 1;
}
// 点击×时隐藏
closeIcon4.onclick = function () {
    post4.style.display = 'none';
    // 关闭相应的音乐
    inPlay();
    music.pause();
    postFlag = 0;
}

// 窗口5
var card5 = document.querySelector('.card-5');
var post5 = document.querySelector('.post-5');
var closeIcon5 = document.querySelector('.close-icon5');
// 点击卡片时显示
card5.onclick = function () {
    post5.style.display = 'block';
    // 调用相应的音乐
    x = 4;
    music.src = yyArr[x];
    inPlay();
    music.play();
    postFlag = 1;
}
// 点击×时隐藏
closeIcon5.onclick = function () {
    post5.style.display = 'none';
    // 关闭相应的音乐
    inPlay();
    music.pause();
    postFlag = 0;
}

// 窗口6
var card6 = document.querySelector('.card-6');
var post6 = document.querySelector('.post-6');
var closeIcon6 = document.querySelector('.close-icon6');
// 点击卡片时显示
card6.onclick = function () {
    post6.style.display = 'block';
    // 调用相应的音乐
    x = 5;
    music.src = yyArr[x];
    inPlay();
    music.play();
    postFlag = 1;
}
// 点击×时隐藏
closeIcon6.onclick = function () {
    post6.style.display = 'none';
    // 关闭相应的音乐
    inPlay();
    music.pause();
    postFlag = 0;
}

// 窗口7
var card7 = document.querySelector('.card-7');
var post7 = document.querySelector('.post-7');
var closeIcon7 = document.querySelector('.close-icon7');
// 点击卡片时显示
card7.onclick = function () {
    post7.style.display = 'block';
    // 调用相应的音乐
    x = 6;
    music.src = yyArr[x];
    inPlay();
    music.play();
    postFlag = 1;
}

// 点击×时隐藏
closeIcon7.onclick = function () {
    post7.style.display = 'none';
    // 关闭相应的音乐
    inPlay();
    music.pause();
    postFlag = 0;
}