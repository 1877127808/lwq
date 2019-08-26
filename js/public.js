/*
* @Author: qing
* @Date:   2019-08-26 10:33:24
* @Last Modified by:   qing
* @Last Modified time: 2019-08-26 14:23:22
*/

//二维码
$(".header-center .hc-btn").click(function(){
	$(".hc-img").css("display","none");
	$(".hc-right .a1").css("display","none");
	$(".hc-right .a2").css("display","block");
});

//banner隐藏菜单
$(".lit").mouseover(function() {
	var h = $(this).index() + 1;
	console.log($(".box" + h))
	$(".box" + h).css("display", "block");
});
$(".lit").mouseout(function() {
	var h = $(this).index() + 1;
	$(".box" + h).css("display", "none");
});
//banner完

//右侧边栏

//购物车
$(".r-aside .cart").mouseover(function(){
	$(".cart-i,.cart-span").css("display","block");
});
$(".r-aside .cart").mouseout(function(){
	$(".cart-i,.cart-span").css("display","none");
});

//分享
$(".r-aside .share").mouseover(function(){
	$(".share-i,.share-span").css("display","block");
});
$(".r-aside .share").mouseout(function(){
	$(".share-i,.share-span").css("display","none");
});

//客服
$(".r-aside .service").mouseover(function(){
	$(".service-i,.service-span").css("display","block");
});
$(".r-aside .service").mouseout(function(){
	$(".service-i,.service-span").css("display","none");
});

//返回顶部
var tops = $(window).scrollTop();
	if(tops>50){
		$(".gotop").css("display","block");
	}else{
		$(".gotop").css("display","none");
	}
$(window).scroll(function(){
	tops = $(window).scrollTop();
	if(tops>50){
		$(".gotop").css("display","block");
	}else{
		$(".gotop").css("display","none");
	}
});
$(".gotop").click(function(){
	$("html,body").animate({scrollTop: 0},0);
});
