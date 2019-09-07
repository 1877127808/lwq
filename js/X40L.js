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

//轮播图
var left = [144, -250, 0, 346, 144]
var tops = [110, 56, 27, 56, 110]
var width = [576, 768, 864, 768, 576]
var height = [324, 432, 486, 432, 324]
var index = [1, 2, 3, 2, 1]
/*第一个轮播图*/
fn("slist")[0].style.cssText = "left:" + left[0] + "px;" + "width:" + width[0] + "px;" + "height:" + height[0] + "px;" + "top:" + tops[0] + "px;" + "z-index:" + index[0];

fn("slist")[1].style.cssText = "left:" + left[1] + "px;" + "width:" + width[1] + "px;" + "height:" + height[1] + "px;" + "top:" + tops[1] + "px;" + "z-index:" + index[1];

fn("slist")[2].style.cssText = "left:" + left[2] + "px;" + "width:" + width[2] + "px;" + "height:" + height[2] + "px;" + "top:" + tops[2] + "px;" + "z-index:" + index[2];

fn("slist")[3].style.cssText = "left:" + left[3] + "px;" + "width:" + width[3] + "px;" + "height:" + height[3] + "px;" + "top:" + tops[3] + "px;" + "z-index:" + index[3];

/*第二个轮播图*/
fn("slist2")[0].style.cssText = "left:" + left[0] + "px;" + "width:" + width[0] + "px;" + "height:" + height[0] + "px;" + "top:" + tops[0] + "px;" + "z-index:" + index[0];

fn("slist2")[1].style.cssText = "left:" + left[1] + "px;" + "width:" + width[1] + "px;" + "height:" + height[1] + "px;" + "top:" + tops[1] + "px;" + "z-index:" + index[1];

fn("slist2")[2].style.cssText = "left:" + left[2] + "px;" + "width:" + width[2] + "px;" + "height:" + height[2] + "px;" + "top:" + tops[2] + "px;" + "z-index:" + index[2];

fn("slist2")[3].style.cssText = "left:" + left[3] + "px;" + "width:" + width[3] + "px;" + "height:" + height[3] + "px;" + "top:" + tops[3] + "px;" + "z-index:" + index[3];

fn("slist2")[4].style.cssText = "left:" + left[4] + "px;" + "width:" + width[4] + "px;" + "height:" + height[4] + "px;" + "top:" + tops[4] + "px;" + "z-index:" + index[4];

//第一个轮播图的左按钮
var goleft = function() {
	var one = 0;
	var two = 1;
	var three = 2;
	var four = 3;
	var five = 4;
	var maxImg = 2;
	fx("sprev").onclick = function() {
		if(one < fn("slist").length - 1) { //第0张图片的下标
			one++;
		} else {
			one = 0;
		}

		if(two < fn("slist").length - 1) { //第1张图片的下标
			two++;
		} else {
			two = 0;
		}

		if(three < fn("slist").length - 1) { //第2张图片的下标
			three++;
		} else {
			three = 0;
		}

		if(four < fn("slist").length - 1) { //第3张图片的下标
			four++;
		} else {
			four = 0;
		}

		if(maxImg != 0) { //获取中间大图片的下标
			maxImg--;
		} else {
			maxImg = fn("slist").length - 1;
		}
		fn("slist")[0].style.cssText = "left:" + left[one] + "px;" + "width:" + width[one] + "px;" + "height:" + height[one] + "px;" + "top:" + tops[one] + "px;" + "z-index:" + index[one];

		fn("slist")[1].style.cssText = "left:" + left[two] + "px;" + "width:" + width[two] + "px;" + "height:" + height[two] + "px;" + "top:" + tops[two] + "px;" + "z-index:" + index[two];

		fn("slist")[2].style.cssText = "left:" + left[three] + "px;" + "width:" + width[three] + "px;" + "height:" + height[three] + "px;" + "top:" + tops[three] + "px;" + "z-index:" + index[three];

		fn("slist")[3].style.cssText = "left:" + left[four] + "px;" + "width:" + width[four] + "px;" + "height:" + height[four] + "px;" + "top:" + tops[four] + "px;" + "z-index:" + index[four];

		for(var i = 0; i < fn("slist").length; i++) {
			if(i == maxImg) {
				fn("slist")[i].setAttribute("class", "slist mohu");
			} else {
				fn("slist")[i].setAttribute("class", "slist");
			}
		}
	}
}
goleft();
/*右边按钮*/
var goright = function() {
	var one = 0;
	var two = 1;
	var three = 2;
	var four = 3;
	var five = 4;
	var maxImg = 2;
	fx("snext").onclick = function() {
		if(one == 0) { //第0张图片的下标
			one = fn("slist").length - 1;
		} else {
			one--;
		}

		if(two != 0) { //第1张图片的下标
			two--;
		} else {
			two = fn("slist").length - 1;
		}

		if(three != 0) { //2
			three--;
		} else {
			three = fn("slist").length - 1;
		}

		if(four > 0) { //3
			four--;
		} else if(four == 0) {
			four = fn("slist").length - 1;
		}
		// console.log(h)
		if(maxImg != fn("slist").length - 1) {
			maxImg++;
		} else {
			maxImg = 0;
		}
		fn("slist")[0].style.cssText = "left:" + left[one] + "px;" + "width:" + width[one] + "px;" + "height:" + height[one] + "px;" + "top:" + tops[one] + "px;" + "z-index:" + index[one];

		fn("slist")[1].style.cssText = "left:" + left[two] + "px;" + "width:" + width[two] + "px;" + "height:" + height[two] + "px;" + "top:" + tops[two] + "px;" + "z-index:" + index[two];

		fn("slist")[2].style.cssText = "left:" + left[three] + "px;" + "width:" + width[three] + "px;" + "height:" + height[three] + "px;" + "top:" + tops[three] + "px;" + "z-index:" + index[three];

		fn("slist")[3].style.cssText = "left:" + left[four] + "px;" + "width:" + width[four] + "px;" + "height:" + height[four] + "px;" + "top:" + tops[four] + "px;" + "z-index:" + index[four];

		for(var i = 0; i < fn("slist").length; i++) {
			if(i == maxImg) {
				fn("slist")[i].setAttribute("class", "slist mohu");
			} else {
				fn("slist")[i].setAttribute("class", "slist");
			}
			console.log(fn("slist").length)
		}
	}
}
goright();

//第二个轮播图的左按钮
var goleft2 = function() {
	var one = 0;
	var two = 1;
	var three = 2;
	var four = 3;
	var five = 4;
	var maxImg = 2;
	fx("golast").onclick = function() {
		if(one < fn("slist2").length - 1) { //第0张图片的下标
			one++;
		} else {
			one = 0;
		}
		if(two < fn("slist2").length - 1) { //第1张图片的下标
			two++;
		} else {
			two = 0;
		}

		if(three < fn("slist2").length - 1) { //第2张图片的下标
			three++;
		} else {
			three = 0;
		}

		if(four < fn("slist2").length - 1) { //第3张图片的下标
			four++;
		} else {
			four = 0;
		}

		if(five < fn("slist2").length - 1) { //第4张图片的下标
			five++;
		} else {
			five = 0;
		}
		if(maxImg != 0) { //获取中间大图片的下标
			maxImg--;
		} else {
			maxImg = fn("slist2").length - 1;
		}
		console.log(maxImg)
		fn("slist2")[0].style.cssText = "left:" + left[one] + "px;" + "width:" + width[one] + "px;" + "height:" + height[one] + "px;" + "top:" + tops[one] + "px;" + "z-index:" + index[one];

		fn("slist2")[1].style.cssText = "left:" + left[two] + "px;" + "width:" + width[two] + "px;" + "height:" + height[two] + "px;" + "top:" + tops[two] + "px;" + "z-index:" + index[two];

		fn("slist2")[2].style.cssText = "left:" + left[three] + "px;" + "width:" + width[three] + "px;" + "height:" + height[three] + "px;" + "top:" + tops[three] + "px;" + "z-index:" + index[three];

		fn("slist2")[3].style.cssText = "left:" + left[four] + "px;" + "width:" + width[four] + "px;" + "height:" + height[four] + "px;" + "top:" + tops[four] + "px;" + "z-index:" + index[four];

		fn("slist2")[4].style.cssText = "left:" + left[five] + "px;" + "width:" + width[five] + "px;" + "height:" + height[five] + "px;" + "top:" + tops[five] + "px;" + "z-index:" + index[five];

		for(var i = 0; i < fn("slist2").length; i++) {
			if(i == maxImg) {
				fn("slist2")[i].setAttribute("class", "slist2 mohu2");
			} else {
				fn("slist2")[i].setAttribute("class", "slist2");
			}
		}
	}
}
goleft2();
/*右边按钮*/
var goright2 = function() {
	var one = 0;
	var two = 1;
	var three = 2;
	var four = 3;
	var five = 4;
	var maxImg = 2;
	fx("gonext").onclick = function() {

		if(one == 0) { //第0张图片的下标
			one = fn("slist2").length - 1;
		} else {
			one--;
		}

		if(two != 0) { //第1张图片的下标
			two--;
		} else {
			two = fn("slist2").length - 1;
		}

		if(three != 0) { //第2张图片的下标
			three--;
		} else {
			three = fn("slist2").length - 1;
		}

		if(four != 0) { //第3张图片的下标
			four--;
		} else {
			four = fn("slist2").length - 1;
		}

		if(five > 0) { //第4张图片的下标
			five--;
		} else if(five == 0) {
			five = fn("slist2").length - 1;
		}
		// console.log(h)
		if(maxImg != fn("slist2").length - 1) {
			maxImg++;
		} else {
			maxImg = 0;
		}
		fn("slist2")[0].style.cssText = "left:" + left[one] + "px;" + "width:" + width[one] + "px;" + "height:" + height[one] + "px;" + "top:" + tops[one] + "px;" + "z-index:" + index[one];

		fn("slist2")[1].style.cssText = "left:" + left[two] + "px;" + "width:" + width[two] + "px;" + "height:" + height[two] + "px;" + "top:" + tops[two] + "px;" + "z-index:" + index[two];

		fn("slist2")[2].style.cssText = "left:" + left[three] + "px;" + "width:" + width[three] + "px;" + "height:" + height[three] + "px;" + "top:" + tops[three] + "px;" + "z-index:" + index[three];

		fn("slist2")[3].style.cssText = "left:" + left[four] + "px;" + "width:" + width[four] + "px;" + "height:" + height[four] + "px;" + "top:" + tops[four] + "px;" + "z-index:" + index[four];

		fn("slist2")[4].style.cssText = "left:" + left[five] + "px;" + "width:" + width[five] + "px;" + "height:" + height[five] + "px;" + "top:" + tops[five] + "px;" + "z-index:" + index[five];

		for(var i = 0; i < fn("slist2").length; i++) {
			if(i == maxImg) {
				fn("slist2")[i].setAttribute("class", "slist2 mohu2");
			} else {
				fn("slist2")[i].setAttribute("class", "slist2");
			}
			console.log(fn("slist2").length)
		}
	}
}
goright2();

fx("play").onclick = function() {
	fn("video")[0].play()
	fx("play").style.display = "none";

	fn("video")[0].onended = function() { //视频结束时触发
		fx("play").style.display = "block";
	}
}
//视频按钮动画
fx("play").onmouseover = function() {
	fn("playbtn")[0].style = "animation: go 1s linear";
}
fx("play").onmouseout = function() {
	fn("playbtn")[0].style = "animation: anim 1s linear";
}

/*底部轮播图*/
var wid, time, amit;
wid = $(window).width();
$(window).resize(function() {
	wid = $(window).width();
});
console.log(wid)
$("#c-ul img").css("width", wid + "px");
n = 0;
amit = function() {
	time = setInterval(function() {

		if(n < $("#c-ul li").length - 1) {
			n++;
			$("#c-ul").animate({
				"margin-left": -wid * n + "px"
			}, 1000);
		} else if(n == $("#c-ul li").length - 1) {
			$("#c-ul").animate({
				"margin-left": 0 + "px"
			}, 0);
			n = 1;
			$("#c-ul").animate({
				"margin-left": -wid * n + "px"
			}, 1000);
		}
	}, 3000)
}
amit()

//获取屏幕滚动高度 
var tops = $(window).scrollTop();
console.log(tops)
$(window).scroll(function() {
	tops = $(window).scrollTop();
	console.log(tops)
	//子导航
	if(tops > 194 ) {
		$(".subnav").css({
			"position": "fixed",
			"z-index": "999",
			"top": "0px",
			"transition": "1s"
		});
		$(".header").css(
			"margin-bottom","70px"
		);
	} else {
		$(".subnav").css({
			"position": "",
			"z-index": "",
			"top": ""
		});
		$(".header").css(
			"margin-bottom","0px"
		);
	}
	//文字特效
	if(tops > 870) {
		$(".s-h1").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".s-p").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
	}
	if(tops > 1840) {
		$(".sl-h1").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".sl-p").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
	}
	if(tops > 2970) {
		$(".sl-h2").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".sl-p2").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
		$(".sl-img2").css({
			"opacity": "1",
			"transition-duration": "2s",
			"transition-delay":"1.5s"
		});
	}
	if(tops > 4260) {
		$(".sc-h3").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".sc-p3").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
	}
	if(tops > 5070) {
		$(".ss-h4").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".ss-p4").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
	}
	if(tops > 5970) {
		$(".c-h5").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".c-p5").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
	}
	if(tops > 6770) {
		$(".c-h6").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".c-p6").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
	}
	if(tops > 8000) {
		$(".c-h7").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".c-p7").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
	}
	if(tops > 9800) {
		$(".cc-h8").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".cc-p8").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
	}
	if(tops > 10760) {
		$(".cc-h9").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".cc-p9 p").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});

	}
	if(tops > 12300) {
		$(".c-h10").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".c-p10").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
		$(".c-img3").css({
			"opacity": "1",
			"transition-duration": "2s",
			"transition-delay":"1.5s"
		});
	}
	if(tops > 13540) {
		$(".c-h11").css({
			"top": "0",
			"opacity": "1",
			"transition": "1.5s"
		});
		$(".c-p11").css({
			"top": "0px",
			"opacity": "1",
			"transition": "2s"
		});
	}
});