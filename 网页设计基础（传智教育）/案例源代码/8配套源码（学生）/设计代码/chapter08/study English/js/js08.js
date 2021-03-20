// JavaScript Document
//焦点图轮播
window.onload=function(){	
	//顶部的焦点图切换
	function hotChange(){
		var current_index=0;
		var timer=window.setInterval(autoChange, 3000);
		var button_li=document.getElementById("button").getElementsByTagName("li");
		var pic_li=document.getElementById("banner_pic").getElementsByTagName("li");
		for(var i=0;i<button_li.length;i++){
			button_li[i].onmouseover=function(){
				if(timer){
					clearInterval(timer);
				}
				for(var j=0;j<pic_li.length;j++){
					if(button_li[j]==this){
						current_index=j;
						button_li[j].className="current";
						pic_li[j].className="current";
					}else{
						pic_li[j].className="pic";
						button_li[j].className="but";
					}
				}
			}
			button_li[i].onmouseout=function(){
				timer=setInterval(autoChange,3000);			
			}
		}
		function autoChange(){
			++current_index;
			if (current_index==button_li.length) {
				current_index=0;
			}
			for(var i=0;i<button_li.length;i++){
				if(i==current_index){
					button_li[i].className="current";
					pic_li[i].className="current";
				}else{
					button_li[i].className="but";
					pic_li[i].className="pic";
				}
			}
		}
	}
	hotChange();
	
	//校园环境展示
	function school(){
		//定义滚动速度
		var speed = 50;
		//获取<div id="imgbox">元素
		var imgbox = document.getElementById("imgbox");
		//复制一个<span>，用于无缝滚动
		imgbox.innerHTML += imgbox.innerHTML;
		//获取两个<span>元素
		var span = imgbox.getElementsByTagName("span");
		//启动定时器，调用滚动函数
		var timer1 = window.setInterval(marquee,speed);
		//鼠标移入时暂停滚动，移出时继续滚动
		imgbox.onmouseover = function(){
			clearInterval(timer1);
		}
		imgbox.onmouseout = function(){
			timer1=setInterval(marquee,speed);
		};
		//滚动函数
		function marquee(){
			//当第1个<span>被完全卷出时
			if(imgbox.scrollLeft > span[0].offsetWidth){
				//将被卷起的内容归0
				imgbox.scrollLeft = 0;
			}else{
				//否则向左滚动
				++imgbox.scrollLeft;
			}
		}
	}
	school();
	
	
	function tableChange(){
		//Table栏
		//获得#SwitchNav中所有的<li>元素
		var lis = document.getElementById("SwitchNav").getElementsByTagName("li");
		//获得#SwitchBigPic中所有的<a>元素
		var spans=document.getElementById("SwitchBigPic").getElementsByTagName("span");
		//保存当前焦点元素的索引
		var current_index=0;
		//启动定时器
		var timer = setInterval(autoChange,3000);
		//遍历lis，为各<li>元素添加事件
		for(var i=0;i<lis.length;i++){
			//<li>的鼠标移入事件
			lis[i].onmouseover = function(){
				//定时器存在时清除定时器
				if(timer){
					clearInterval(timer);
				}
				//遍历lis
				for(var i=0;i<lis.length;i++){
					//设置当前焦点元素的样式
					if(lis[i]==this){
						spans[i].className = "sp";					
						//保存当前索引，当恢复自动切换时继续切换
						current_index = i;
					//设置非当前焦点元素的样式
					}else{
						spans[i].className = "";	
					}
				}
			}
			//<li>的鼠标移出事件
			lis[i].onmouseout = function(){
				//启动定时器，恢复图片自动切换
				timer = setInterval(autoChange,3000);
			}
		}
		//定时器周期函数-图片自动切换
		function autoChange(){
			//自增索引
			++current_index;
			//当索引自增达到上限时，索引归0
			if (current_index == lis.length) {
				current_index=0;
			}
			//遍历lis，将所有元素取消焦点样式
			for (var i=0; i<lis.length; i++) {
				spans[i].className = "";	
			}
			//为当前索引元素添加焦点样式
			spans[current_index].className = "sp";
		}	
	}
	tableChange();
}
