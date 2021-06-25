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