/*
* @Author: qing
* @Date:   2019-09-05 18:24:59
* @Last Modified by:   qing
* @Last Modified time: 2019-09-06 10:37:56
*/
function fx(a){
	return document.getElementById(a);
}
function fn(b){
	return document.getElementsByClassName(b)
}

// 登录界面表单判断
fx("sint").onfocus = function(){   //表单获得焦点时执行
	fx("sint").style.borderColor = "#419ce3";
}
fx("pad").onfocus = function(){   //表单获得焦点时执行
	fx("pad").style.borderColor = "#419ce3";
}
fx("sint").oninput = function(){  //当value值改变时执行
	var val = fx("sint").value
	var parseint = /\d/.exec(val)   //查找val里的数字
	if(parseint != null){
		fx("fimg").style.display = "none";
		fx("fimg2").style.display = "block";
		fx("tips").style.opacity = "0";
	}else{
		fx("fimg").style.display = "block";
		fx("fimg2").style.display = "none";
		fx("tips").style.opacity = "1";
	}
}
fx("sint").onblur = function(){      //表单失去焦点时执行
	fx("sint").style.borderColor = "#ccc";
}
fx("pad").onblur = function(){      //表单失去焦点时执行
	fx("pad").style.borderColor = "#ccc";
}
fx("pad").onclick = function(){
	var val = fx("sint").value
	console.log(val)
	var del = /^[1]{1}[3,4,5,7,8]{1}[0-9]{9}$/
	var dal = del.test(val)
	if(val == ""){
		fx("tips").innerHTML = "请输入账号";
		fx("tips").style.opacity = "1";
		fx("sint").style.borderColor = "red";
	}else if(dal){
		fx("tips").style.opacity = "0";
		fx("tips").innerHTML = "请输入密码";
	}else{
		fx("tips").style.opacity = "1";
		fx("sint").style.borderColor = "red";
		fx("tips").innerHTML = "此账号尚未注册";
	}
}
// 点击登录按钮时，判断账号密码是否符合条件
fx("boxbtn").onclick = function(){
	var sintval = fx("sint").value
	var padval = fx("pad").value
	console.log(padval)
	if(padval == ""){
		fx("tips").style.opacity = "1";
		fx("tips").innerHTML = "请输入密码";
		return false
	}else if(padval.length<6||padval.length>16){
		fx("tips").style.opacity = "1";
		fx("tips").innerHTML = "密码格式错误，密码格式为6-16位字母/数字/符号，不可设置为常见简单弱密码";
		return false
	}else{
		fx("tips").style.opacity = "0";
		fx("tips").innerHTML = "请输入密码";
		return true
	}
}

//手机号登陆表单判断
fx("user").onfocus = function(){   //表单获得焦点时执行
	fx("user").style.borderColor = "#419ce3";
}
fx("code").onfocus = function(){   //表单获得焦点时执行
	fx("code").style.borderColor = "#419ce3";
}
fx("mess").onfocus = function(){   //表单获得焦点时执行
	fx("mess").style.borderColor = "#419ce3";
}
fx("user").onblur = function(){   //表单失去焦点时执行
	fx("user").style.borderColor = "#ccc";
}
fx("code").onblur = function(){   //表单失去焦点时执行
	fx("code").style.borderColor = "#ccc";
}
fx("mess").onblur = function(){   //表单失去焦点时执行
	fx("mess").style.borderColor = "#ccc";
}
//判断手机号
fx("code").onclick = function(){
	var val = fx("user").value
	console.log(val)
	var del = /^[1]{1}[3,4,5,7,8]{1}[0-9]{9}$/
	var dal = del.test(val)
	if(val == ""){
		fx("box3p").innerHTML = "请输入账号";
		fx("box3p").style.opacity = "1";
		fx("sint").style.borderColor = "red";
	}else if(dal){
		fx("box3p").style.opacity = "0";
	}else{
		fx("box3p").style.opacity = "1";
		fx("user").style.borderColor = "red";
		fx("box3p").innerHTML = "此账号尚未注册";
	}
}
//点击登录按钮判断所有表单
fx("login").onclick = function(){
	var codeval = fx("code").value;
	var messval = fx("mess").value;
	if(codeval == ""){
		fx("box3p").style.opacity = "1";
		fx("code").style.borderColor = "red";
		fx("box3p").innerHTML = "请输入验证码";
		return false;
	}else if(messval == ""){
		fx("box3p").style.opacity = "1";
		fx("mess").style.borderColor = "red";
		fx("box3p").innerHTML = "请输入六位验证码";
		return false;
	}else if(messval.length !=6){
		fx("box3p").style.opacity = "1";
		fx("mess").style.borderColor = "red";
		fx("box3p").innerHTML = "六位数验证码格式不正确";
		return false;
	}else{
		fx("box3p").style.opacity = "0";
		return true;
	}
}

//切换短信登录
fx("dx").onclick = function(){
	fx("box").style.display = "none";
	fx("box3").style.display = "block";
}
//切换二维码登录
fx("fimg").onclick = function(){
	fx("box").style.display = "none";
	fx("box2").style.display = "block";
}
//二维码登录返回用户登录
fx("goback").onclick = function(){
	fx("box").style.display = "block";
	fx("box2").style.display = "none";
}
//短信登录返回用户登录
fx("goback2").onclick = function(){
	fx("box").style.display = "block";
	fx("box3").style.display = "none";
	fx("fimg").style.display = "none";
	fx("fimg2").style.display = "block";
}
//用户登录界面展开其他登录方式
fx("back").onclick = function(){
	fx("boximg").style.display = "none";
	fx("boximg2").style.display = "block";
}
fx("backup").onclick = function(){
	fx("boximg").style.display = "block";
	fx("boximg2").style.display = "none";
}
//二维码登录界面展开其他登录方式
fx("back2").onclick = function(){
	fx("box2img").style.display = "none";
	fx("box2img2").style.display = "block";
}
fx("backup2").onclick = function(){
	fx("box2img").style.display = "block";
	fx("box2img2").style.display = "none";
}