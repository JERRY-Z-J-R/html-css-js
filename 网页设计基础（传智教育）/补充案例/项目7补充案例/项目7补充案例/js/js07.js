function change(myid,mode){
	document.getElementById(myid).style.display=mode;
	if(mode == 'block'){//显示下拉菜单
		//设置下拉菜单所在div的边框
		document.getElementById(myid).style.border="1px solid #eee";
		document.getElementById(myid).style.backgroundColor="#f9f9f9";
	}
	else{
		//当不显示下拉列表时，鼠标划过的li的边框及背景颜色
		document.getElementById(myid).style.backgroundColor="";
		document.getElementById(myid).style.border="";
	}		
}


//更换导航栏奇数行的背景色
function changeColor(){
		//获取所有行
		var trs  = document.getElementById("banner").getElementsByTagName("li");
		//为奇数行添加class属性
		for(var i=0; i<trs.length; i=i+2){
			trs[i].className="even";
		}
	}
