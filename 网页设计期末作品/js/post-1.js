// ------------------------------------------------

// 左上角视频模块
var video1 = document.getElementById("video1");
var video1Flag = 1;
video1.addEventListener('ended', function () {
    if (video1Flag == 0) {
        video1.src = "./video/1-5.mp4";
        video1.play();
        video1Flag = 1;
    } else if (video1Flag == 1) {
        video1.src = "./video/1-6.mp4";
        video1.play();
        video1Flag = 2;
    } else if (video1Flag == 2) {
        video1.src = "./video/1-11.mp4";
        video1.play();
        video1Flag = 3;
    } else if (video1Flag == 3) {
        video1.src = "./video/1-10.mp4";
        video1.play();
        video1Flag = 4;
    } else if (video1Flag == 4) {
        video1.src = "./video/1-7.mp4";
        video1.play();
        video1Flag = 5;
    } else if (video1Flag == 5) {
        video1.src = "./video/1-8.mp4";
        video1.play();
        video1Flag = 6;
    } else {
        video1.src = "./video/1-9.mp4";
        video1.play();
        video1Flag = 0;
    }
}, false)

// ------------------------------------------------