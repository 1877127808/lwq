/*
* @Author: qing
* @Date:   2019-08-26 14:27:28
* @Last Modified by:   qing
* @Last Modified time: 2019-08-28 14:44:53
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
};

//内容区头部综合字体颜色

for(var i=0;i<fn("colo").length;i++){
	fn("colo")[i].onclick = function(){
		for(var k=0;k<fn("colo").length;k++){
			fn("colo")[k].setAttribute("class","colo");
		};
		this.setAttribute("class","red colo");
	};
};

//产品列表
var arr = [
	{
		"Delta":"热卖",
		"Img":"<img src=\"../images/1557216397551.jpg\">",
		"Small":"",
		"H":"超5&nbsp;X55漫威版<span class=\"H-txt\">超5&nbsp;X55漫威版</span><i class=\"H-i\"></i>",
		"Price":"&yen;3699.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/cjds7.jpg\">",
		"Small":"",
		"H":"Zero65漫威版<span class=\"H-txt\">Zero65漫威版</span><i class=\"H-i\"></i>",
		"Price":"&yen;7499.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/cjds7.jpg\">",
		"Small":"",
		"H":"Y55C漫威版<span class=\"H-txt\">Y55C漫威版</span><i class=\"H-i\"></i>",
		"Price":"&yen;1999.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/img2.jpg\">",
		"Small":"",
		"H":"X40N<span class=\"H-txt\">X40N</span><i class=\"H-i\"></i>",
		"Price":"&yen;1699.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/img3.jpg\">",
		"Small":"",
		"H":"X55L<span class=\"H-txt\">X55L</span><i class=\"H-i\"></i>",
		"Price":"&yen;2899.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/img7.jpg\">",
		"Small":"",
		"H":"X65L<span class=\"H-txt\">X65L</span><i class=\"H-i\"></i>",
		"Price":"&yen;3599.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/img7.jpg\">",
		"Small":"",
		"H":"X65N<span class=\"H-txt\">X65N</span><i class=\"H-i\"></i>",
		"Price":"&yen;4599.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/img2.jpg\">",
		"Small":"",
		"H":"X40L<span class=\"H-txt\">X40L</span><i class=\"H-i\"></i>",
		"Price":"&yen;1599.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/img7.jpg\">",
		"Small":"",
		"H":"X43N<span class=\"H-txt\">X43N</span><i class=\"H-i\"></i>",
		"Price":"&yen;1899.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/chao4x55.jpg\">",
		"Small":"",
		"H":"超4&nbsp;X55<span class=\"H-txt\">超4&nbsp;X55</span><i class=\"H-i\"></i>",
		"Price":"&yen;3599.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/img8.jpg\">",
		"Small":"",
		"H":"X65S<span class=\"H-txt\">X65S</span><i class=\"H-i\"></i>",
		"Price":"&yen;4999.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/chao4x75.jpg\">",
		"Small":"",
		"H":"超4&nbsp;X75（挂架版）<span class=\"H-txt\">超4&nbsp;X75（挂架版）</span><i class=\"H-i\"></i>",
		"Price":"&yen;14999.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/img9.jpg\">",
		"Small":"",
		"H":"超级电视uMax85（标配底座版）<span class=\"H-txt\">超级电视uMax85（标配底座版）</span><i class=\"H-i\"></i>",
		"Price":"&yen;3699.00",
		"Tiny":"<i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i class=\"yellow\"></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/cjds2.jpg\">",
		"Small":"<img src=\"../images/cjds2.jpg\">",
		"H":"Y32Sa<span class=\"H-txt\">Y32Sa</span><i class=\"H-i\"></i>",
		"Price":"&yen;999.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y65.jpg\">",
		"Small":"",
		"H":"Y65S<span class=\"H-txt\">Y65S</span><i class=\"H-i\"></i>",
		"Price":"&yen;3799.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/1564045443481.jpg\">",
		"Small":"",
		"H":"Letv&nbsp;超5&nbsp;X55&nbsp;钢铁侠限量纪念版<span class=\"H-txt\">Letv&nbsp;超5&nbsp;X55&nbsp;钢铁侠限量纪念版</span><i class=\"H-i\"></i>",
		"Price":"&yen;3999.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y32H.jpg\">",
		"Small":"",
		"H":"Y32H<span class=\"H-txt\">Y32H</span><i class=\"H-i\"></i>",
		"Price":"&yen;899.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y65.jpg\">",
		"Small":"",
		"H":"Y65<span class=\"H-txt\">Y65</span><i class=\"H-i\"></i>",
		"Price":"&yen;3599.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y55C.jpg\">",
		"Small":"",
		"H":"Y55S<span class=\"H-txt\">Y55S</span><i class=\"H-i\"></i>",
		"Price":"&yen;2599.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y50S.jpg\">",
		"Small":"",
		"H":"Y50S<span class=\"H-txt\">Y50S</span><i class=\"H-i\"></i>",
		"Price":"&yen;2199.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y50.jpg\">",
		"Small":"",
		"H":"Y50<span class=\"H-txt\">Y50</span><i class=\"H-i\"></i>",
		"Price":"&yen;1699.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y43.jpg\">",
		"Small":"",
		"H":"Y43S<span class=\"H-txt\">Y43S</span><i class=\"H-i\"></i>",
		"Price":"&yen;1599.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y43.jpg\">",
		"Small":"",
		"H":"Y43<span class=\"H-txt\">Y43</span><i class=\"H-i\"></i>",
		"Price":"&yen;1299.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y55C.jpg\">",
		"Small":"",
		"H":"Y55C<span class=\"H-txt\">Y55C</span><i class=\"H-i\"></i>",
		"Price":"&yen;1899.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Y32.jpg\">",
		"Small":"<img src=\"../images/Y32.jpg\">",
		"H":"Y32<span class=\"H-txt\">Y32</span><i class=\"H-i\"></i>",
		"Price":"&yen;899.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/X55C.jpg\">",
		"Small":"",
		"H":"X55C<span class=\"H-txt\">X55C</span><i class=\"H-i\"></i>",
		"Price":"&yen;1799.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/X40C.jpg\">",
		"Small":"",
		"H":"X40C<span class=\"H-txt\">X40C</span><i class=\"H-i\"></i>",
		"Price":"&yen;999.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/Zero65.jpg\">",
		"Small":"",
		"H":"Zero65<span class=\"H-txt\">Zero65</span><i class=\"H-i\"></i>",
		"Price":"&yen;6999.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/X50Pro.jpg\">",
		"Small":"",
		"H":"X50&nbsp;Pro<span class=\"H-txt\">X50&nbsp;Pro</span><i class=\"H-i\"></i>",
		"Price":"&yen;2199.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
	{
		"Delta":"",
		"Img":"<img src=\"../images/X55L.jpg\">",
		"Small":"",
		"H":"X55N<span class=\"H-txt\">X55N</span><i class=\"H-i\"></i>",
		"Price":"&yen;3199.00",
		"Tiny":"<i></i><i></i><i></i><i></i><i></i>",
		"Grade":"暂无评价",
		"Btn":"立即购买"
	},
]

for(var i=0;i<arr.length;i++){
	if(i==0){
		fx("ul").children[0].children[0].children[0].innerHTML = arr[i].Delta;
		fx("ul").children[0].children[1].children[0].innerHTML = arr[i].Img;
		fx("ul").children[0].children[2].children[0].innerHTML = arr[i].Small;
		fx("ul").children[0].children[3].children[0].innerHTML = arr[i].H;
		fx("ul").children[0].children[4].innerHTML = arr[i].Price;
		fx("ul").children[0].children[5].children[0].innerHTML = arr[i].Tiny;
		fx("ul").children[0].children[5].children[1].innerHTML = arr[i].Grade;
		fx("ul").children[0].children[6].innerHTML = arr[i].Btn;
	}else{
		var Li = fx("ul").children[0].cloneNode(true);
		Li.children[0].children[0].innerHTML = arr[i].Delta;
		Li.children[1].children[0].innerHTML = arr[i].Img;
		Li.children[2].children[0].innerHTML = arr[i].Small;
		Li.children[3].children[0].innerHTML = arr[i].H;
		Li.children[4].innerHTML = arr[i].Price;
		Li.children[5].children[0].innerHTML = arr[i].Tiny;
		Li.children[5].children[1].innerHTML = arr[i].Grade;
		Li.children[6].innerHTML = arr[i].Btn;
		fx("ul").append(Li);
	};
};
