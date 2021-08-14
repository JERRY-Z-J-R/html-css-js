// 1.获取元素 
var miniImg1 = document.getElementById('img1');
var miniImg2 = document.getElementById('img2');
var miniImg3 = document.getElementById('img3');
var miniImg4 = document.getElementById('img4');
var miniImg5 = document.getElementById('img5');
var miniImg6 = document.getElementById('img6');
var miniImg7 = document.getElementById('img7');
var miniImg8 = document.getElementById('img8');
var miniImg9 = document.getElementById('img9');
var bigImg = document.querySelector('.bigImg');
var imgBig = document.getElementById('imgBig');
var maxImg1 = './images/post/more/1.jpeg';
var maxImg2 = './images/post/more/2.jpeg';
var maxImg3 = './images/post/more/3.jpeg';
var maxImg4 = './images/post/more/4.jpeg';
var maxImg5 = './images/post/more/5.jpeg';
var maxImg6 = './images/post/more/6.jpeg';
var maxImg7 = './images/post/more/7.jpeg';
var maxImg8 = './images/post/more/8.jpeg';
var maxImg9 = './images/post/more/9.jpeg';
// 2.注册事件 程序处理
// 点击缩略图，展开图片
miniImg1.onclick = function () {
    bigImg.style.display = 'block';
    imgBig.src = maxImg1;
    imgBig.style.width = '96%';
    imgBig.style.left = '2%';
    imgBig.style.top = '10%';
}

miniImg2.onclick = function () {
    bigImg.style.display = 'block';
    imgBig.src = maxImg2;
    imgBig.style.width = '70%';
    imgBig.style.left = '15%';
    imgBig.style.top = '9%';
}

miniImg3.onclick = function () {
    bigImg.style.display = 'block';
    imgBig.src = maxImg3;
    imgBig.style.width = '80%';
    imgBig.style.left = '10%';
    imgBig.style.top = '8%';
}

miniImg4.onclick = function () {
    bigImg.style.display = 'block';
    imgBig.src = maxImg4;
    imgBig.style.width = '82%';
    imgBig.style.left = '9%';
    imgBig.style.top = '10%';
}


miniImg5.onclick = function () {
    bigImg.style.display = 'block';
    imgBig.src = maxImg5;
    imgBig.style.width = '70%';
    imgBig.style.left = '15%';
    imgBig.style.top = '5%';
}

miniImg6.onclick = function () {
    bigImg.style.display = 'block';
    imgBig.src = maxImg6;
    imgBig.style.width = '70%';
    imgBig.style.left = '15%';
    imgBig.style.top = '13%';
}

miniImg7.onclick = function () {
    bigImg.style.display = 'block';
    imgBig.src = maxImg7;
    imgBig.style.width = '70%';
    imgBig.style.left = '15%';
    imgBig.style.top = '7%';
}

miniImg8.onclick = function () {
    bigImg.style.display = 'block';
    imgBig.src = maxImg8;
    imgBig.style.width = '80%';
    imgBig.style.left = '10%';
    imgBig.style.top = '14%';
}

miniImg9.onclick = function () {
    bigImg.style.display = 'block';
    imgBig.src = maxImg9;
    imgBig.style.width = '86%';
    imgBig.style.left = '7%';
    imgBig.style.top = '10%';
}

// 再次点击，隐藏图片
bigImg.onclick = function () {
    bigImg.style.display = 'none';
}