// ------------------------------------------------

// 左上角视频模块
var video5 = document.getElementById("video5");
var video5Flag = 1;
video5.addEventListener('ended', function () {
    if (video5Flag == 0) {
        video5.src = "./video/5-1.mp4";
        video5.play();
        video5Flag = 1;
    } else if (video5Flag == 1) {
        video5.src = "./video/5-2.mp4";
        video5.play();
        video5Flag = 2;
    } else if (video5Flag == 2) {
        video5.src = "./video/5-3.mp4";
        video5.play();
        video5Flag = 3;
    } else if (video5Flag == 3) {
        video5.src = "./video/5-4.mp4";
        video5.play();
        video5Flag = 4;
    } else if (video5Flag == 4) {
        video5.src = "./video/5-5.mp4";
        video5.play();
        video5Flag = 5;
    } else if (video5Flag == 5) {
        video5.src = "./video/5-6.mp4";
        video5.play();
        video5Flag = 6;
    } else {
        video5.src = "./video/5-7.mp4";
        video5.play();
        video5Flag = 0;
    }
}, false)

// ------------------------------------------------