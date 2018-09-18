
var $openid = $('#openid');
var openid = getURLParameter('openid');

$(function(){
	
	$openid.val(openid);
	
});

//去兑换纪念品
function next(){
	var r = new Date().getTime()*2;
	window.location.href='duihuan1.html?r='+r;
}

//去参加活动
function toJoinActivity(){
	var r = new Date().getTime()*2;
	window.location.href='post.html?r='+r;
}
