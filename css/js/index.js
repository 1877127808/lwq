/*
 * @Author: qing
 * @Date:   2019-08-24 15:20:36
 * @Last Modified by:   qing
 * @Last Modified time: 2019-08-26 14:23:15
 */



//轮播图
var i = 0;
//左按钮
$("#btn1").click(function() {
	if(i > 0) {
		i--;
	} else if(i = 4) {
		i = 5;
		$("#Ul").animate({
			"margin-left": -100 * i + "vw"
		}, 0);
		i = 4
	} else {
		i = 5;
	}
	$("#Ul").animate({
		"margin-left": -100 * i + "vw"
	}, 500);
	//小点点
	var k = i;
	$("#Ol li").eq(k).addClass("icon").siblings("").removeClass("icon");
});
//右按钮
$("#btn2").click(function() {
	if(i < $("#Ul li").length - 1) {
		i++;
	} else if(i = $("#Ul li").length - 2) {
		i = 0;
		$("#Ul").animate({
			"margin-left": -100 * i + "vw"
		}, 0);
		i = 1;
	} else {
		i = 0;
	}
	$("#Ul").animate({
		"margin-left": -100 * i + "vw"
	}, 500);
	//小点点
	var k = i;
	if(i == 5) {
		k = 0;
	}
	$("#Ol li").eq(k).addClass("icon").siblings("").removeClass("icon");
});
//定时器
var time;
var ani = function() {
	time = setInterval(function() {
		if(i < $("#Ul li").length - 1) {
			i++;
		} else if(i = $("#Ul li").length - 1) {
			i = 0;
			$("#Ul").animate({
				"margin-left": -100 * i + "vw"
			}, 0);
			i = 1;
		} else {
			i = 0;
		}
		$("#Ul").animate({
			"margin-left": -100 * i + "vw"
		}, 1000);
		//小点点
		var k = i;
		if(i == 5) {
			k = 0;
		}
		$("#Ol li").eq(k).addClass("icon").siblings("").removeClass("icon");
	}, 5000)
};
clearInterval(time);
ani();
//鼠标移入时清除定时器
$(".bn-box").mouseover(function() {
	clearInterval(time);
	$("#btn1,#btn2").css("display", "block");
});
//鼠标移除时重新执行定时器
$(".bn-box").mouseout(function() {
	ani();
	$("#btn1,#btn2").css("display", "none");
});


//生活家加载列表
var add = [
	{
		"Img":"<img src=\"images/list1.jpg\">",
		"H5":"黎师优品蛋黄酥",
		"Txt":"&yen;39.9",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list2.jpg\">",
		"H5":"901-180斤莫代尔大码短袖清凉V领及膝裙家居外穿简约百搭",
		"Txt":"&yen;59",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list3.jpg\">",
		"H5":"90-180斤莫代尔大码长袖睡裙亲肤舒适宽松显瘦家居外穿",
		"Txt":"&yen;69",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list4.jpg\">",
		"H5":"【中藝堂】袁广如、袁霖、孟庆东、郭鸣、冯超 《建国大印》玉玺 收藏品",
		"Txt":"&yen;4980",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list5.jpg\">",
		"H5":"90-160斤冰感女式休闲裤莫代尔百搭哈伦裤女家居外穿防蚊裤",
		"Txt":"&yen;49",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list6.jpg\">",
		"H5":"小清新纯棉全棉四件套卡通儿童三件套",
		"Txt":"&yen;198",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list7.jpg\">",
		"H5":"双人时尚印花四件套学生卡通套件",
		"Txt":"&yen;79",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list8.jpg\">",
		"H5":"加厚榻榻米床垫时尚印花简约床褥子",
		"Txt":"&yen;78",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list9.jpg\">",
		"H5":"山水玻璃电热水壶SK-1882G",
		"Txt":"&yen;129",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list10.jpg\">",
		"H5":"纯色色织四件套全棉水洗棉刺绣套件",
		"Txt":"&yen;358",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list11.jpg\">",
		"H5":"松下&nbsp;智能马桶盖快速加热日本品牌5209",
		"Txt":"&yen;1739",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list12.jpg\">",
		"H5":"山水无线便携星果杯（粉色）SJ-M35",
		"Txt":"&yen;129",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list13.jpg\">",
		"H5":"法兰绒毛毯夏季单人薄款小毯子",
		"Txt":"&yen;58",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list14.jpg\">",
		"H5":"戴梦得异形珍珠银项链（带国检证书",
		"Txt":"&yen;299",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list15.jpg\">",
		"H5":"戴梦得18K金(红色）钻石玛瑙项链DZ51479",
		"Txt":"&yen;2999",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list16.jpg\">",
		"H5":"戴梦得18K素金项链",
		"Txt":"&yen;999",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list17.jpg\">",
		"H5":"90-180斤清凉莫代尔圆领开叉连衣裙睡裙短袖大码女装宽松睡衣长裙外穿百搭",
		"Txt":"&yen;69",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list18.jpg\">",
		"H5":"珍天源蜂巢蜜家庭组",
		"Txt":"&yen;198",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list19.jpg\">",
		"H5":"英得尔车载冰箱便携迷你小冰箱APP无线温控德国制冷可达-18℃ T12S",
		"Txt":"&yen;2999",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list20.jpg\">",
		"H5":"【中藝堂】熊建军 瓷器 万瓷之母《中华瓷王》",
		"Txt":"&yen;29800",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list21.jpg\">",
		"H5":"【中藝堂】熊建军 饶晓晴 瓷器《复兴尊》收藏品",
		"Txt":"&yen;19800",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list22.jpg\">",
		"H5":"苏娜国际北欧简约纯色空调被子撞色宽边全棉夏被四件套纯棉薄被芯",
		"Txt":"&yen;138",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list23.jpg\">",
		"H5":"苏娜国际时尚印花四件套",
		"Txt":"&yen;79",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list24.jpg\">",
		"H5":"苏娜国际全棉枕头立体枕芯学生单人成人护颈枕纯棉酒店颈椎枕头芯",
		"Txt":"&yen;78",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list25.jpg\">",
		"H5":"苏娜国际ins空调被夏凉水洗棉夏被可机洗双人春秋单人学生薄被子",
		"Txt":"&yen;78",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list26.jpg\">",
		"H5":"100%桑蚕丝性感蕾丝分体长袖两件套套装睡裙睡袍套装",
		"Txt":"&yen;599",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list27.jpg\">",
		"H5":"【特价】全棉条纹短袖短裤家居服女套装",
		"Txt":"&yen;49",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list28.jpg\">",
		"H5":"当妮护衣留香珠清新舒畅200克",
		"Txt":"&yen;42.9",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list29.jpg\">",
		"H5":"当妮护衣留香珠红玫瑰香200克",
		"Txt":"&yen;42.9",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list30.jpg\">",
		"H5":"当妮护衣留香珠粉红茉莉香200克",
		"Txt":"&yen;42.9",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list31.jpg\">",
		"H5":"方家铺子&nbsp;奶香味碧根果190g",
		"Txt":"&yen;29.9",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list32.jpg\">",
		"H5":"科尔德庄园红葡萄酒6支装",
		"Txt":"&yen;398",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list33.jpg\">",
		"H5":"HENNYRUE&nbsp;5双装笑脸刺绣细针中性彩色拼接罗口弹力女袜纯棉女袜运动袜",
		"Txt":"&yen;19.9",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list34.jpg\">",
		"H5":"赫特家用手持无线拖地机HHC5",
		"Txt":"&yen;799",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list35.jpg\">",
		"H5":"半高领中袖女神范儿家居打底外穿T恤衫简约百搭",
		"Txt":"&yen;59",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list36.jpg\">",
		"H5":"【中藝堂】张同禄、王习三景泰蓝与内画结合《天下吉祥》 收藏品",
		"Txt":"&yen;59800",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list37.jpg\">",
		"H5":"半高领无袖T恤衫背心优雅女神范简约百搭打底外穿",
		"Txt":"&yen;49",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list38.jpg\">",
		"H5":"双立人TWIN&nbsp;Point&nbsp;刀具两件套32329-300-722",
		"Txt":"&yen;319",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list39.jpg\">",
		"H5":"双立人Minimale&nbsp;Polished&nbsp;西餐具四件套装",
		"Txt":"&yen;129",
		"Button":"立即购买"
	},
	{
		"Img":"<img src=\"images/list40.jpg\">",
		"H5":"TWIN Point&nbsp;插刀架四件套&nbsp;ZW-K14",
		"Txt":"&yen;612",
		"Button":"立即购买"
	},
]
for(var n = 0;n<add.length;n++){
	if(n==0){
		$(".cf-box .cb-li").children().eq(0).children().eq(0).html(add[n].Img)
		$(".cf-box .cb-li").children().eq(0).children().eq(1).html(add[n].H5)
		$(".cf-box .cb-li").children().eq(0).children().eq(2).html(add[n].Txt)
		$(".cf-box .cb-li").children().eq(0).children().eq(3).html(add[n].Button)
	}else{
		var tag = $(".cf-box .cb-li").children().eq(0).clone(true)
		tag.children().eq(0).html(add[n].Img)
		tag.children().eq(1).html(add[n].H5)
		tag.children().eq(2).html(add[n].Txt)
		tag.children().eq(3).html(add[n].Button)
		$(".cf-box .cb-li").append(tag)
	};
};
//生活家加载列表完

//超级电视,精选配件，鼠标悬停滑动显示购买按钮
var arr = {};
arr = $(".btn-list")
arr.mouseover(function() {
	var h = arr.index(this);
	console.log(h)
	$(".ct-btn1").eq(h).css({
		"bottom": "-5px",
		"transition": "all 500ms"
	});
	$(".ct-btn2").eq(h).css({
		"bottom": "-5px",
		"transition": "all 500ms"
	});
	$(".ct-btn2").eq(h).css({
		"bottom": "-5px",
		"transition": "all 500ms"
	});
	$(".spans").eq(h).css("display", "none");
});
//超级电视,精选配件，鼠标悬停滑动隐藏购买按钮
$(".btn-list").mouseout(function() {
	var h = arr.index(this);
	$(".ct-btn1").eq(h).css({
		"bottom": "-75px",
		"transition": "all 500ms"
	});
	$(".ct-btn2").eq(h).css({
		"bottom": "-75px",
		"transition": "all 500ms"
	});
	$(".ct-btn3").eq(h).css({
		"bottom": "-75px",
		"transition": "all 500ms"
	});
	$(".spans").eq(h).css("display", "block");
});

