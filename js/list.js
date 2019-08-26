/*
* @Author: qing
* @Date:   2019-08-26 14:27:28
* @Last Modified by:   qing
* @Last Modified time: 2019-08-26 20:21:20
*/
function fx(a){
	return document.getElementById(a);
};
function fn(b){
	return document.getElementsByClassName(b);
};

//隐藏菜单
 
fx("barBtn").onmouseover = function(){
	fx("barNav").style.display = "block";
};
fx("barBtn").onmouseout = function(){
	fx("barNav").style.display = "none";
}

//内容区头部综合字体颜色

for(var i=0;i<fn("colo").length;i++){
	fn("colo")[i].onclick = function(){
		for(var k=0;k<fn("colo").length;k++){
			fn("colo")[k].setAttribute("class","colo");
		}
		this.setAttribute("class","red colo");
	}
}
