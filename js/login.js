function yanz(){
	var user = document.getElementById("user").value
	var pwd = document.getElementById("pwd").value
	if(pwd!=""&&user!=""){
		alert("正在登录")
	}else{
		alert("请输入正确的账号密码")
	}
}