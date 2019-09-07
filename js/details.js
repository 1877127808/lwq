/*
 * @Author: qing
 * @Date:   2019-09-04 10:57:38
 * @Last Modified by:   qing
 * @Last Modified time: 2019-09-04 10:59:52
 */
function fx(a) {
	return document.getElementById(a);
};

function fn(b) {
	return document.getElementsByClassName(b);
};

//隐藏菜单

fx("barBtn").onmouseover = function() {
	fx("barNav").style.display = "block";
};
fx("barBtn").onmouseout = function() {
	fx("barNav").style.display = "none";
};

//小轮播图
var i = 0;
//左
$("#cmlbtn1").click(function() {
	if(i > 0) {
		i--;
		$("#ul").animate({
			"margin-left": -77 * i + "px"
		}, 1000);
	} else if(i == 0) {

		i = 6;
		$("#ul").animate({
			"margin-left": -77 * i + "px"
		}, 0);
		i = 5;
		$("#ul").animate({
			"margin-left": -77 * i + "px"
		}, 1000);
	}

	console.log(i)

});
//右
$("#cmlbtn2").click(function() {
	if(i < 6) {
		i++;
		$("#ul").animate({
			"margin-left": -77 * i + "px"
		}, 1000);
	} else if(i > 5) {
		i = 0
		$("#ul").animate({
			"margin-left": -77 * i + "px"
		}, 0);
		i = 1
		$("#ul").animate({
			"margin-left": -77 * i + "px"
		}, 1000);
	}
	console.log(i)
});

//鼠标悬浮切换图片

$("#ul li").mouseover(function() {
	for(var i = 0; i < 6; i++) {
		$("#ul li").removeClass("red");
	}
	$(this).addClass("red");
	var Index = $("#ul li").index(this);
	if(Index > 5) {
		Index = Index - 6;
	} else {
		Index = Index + 6;
	}
	$("#ul li").eq(Index).addClass("red");
	$(".cml-top img").attr("src", $(this).children(0).attr("src"));
});
//导航栏
var Tops = $(window).scrollTop();
if(Tops > 876) {
	$(".c-subnav").css({
		"position": "fixed",
		"top": "-30px"
	});
	$(".cs-btn").css({
		"position": "fixed",
		"top": "0px",
		"display": "block",
		"right": "190px"
	});
} else {
	$(".c-subnav").css({
		"position": "",
		"top": ""
	});
	$(".cs-btn").css({
		"position": "",
		"top": "",
		"display": "none"
	});
}
$(window).scroll(function() {
	Tops = $(window).scrollTop();
	console.log(Tops)
	if(Tops > 876) {
		$(".c-subnav").css({
			"position": "fixed",
			"top": "-30px"
		});
		$(".cs-btn").css({
			"position": "fixed",
			"top": "0px",
			"display": "block",
			"right": "190px"
		});
	} else {
		$(".c-subnav").css({
			"position": "",
			"top": ""
		});
		$(".cs-btn").css({
			"position": "",
			"top": "",
			"display": "none"
		});
	}
});