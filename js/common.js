
//放弃本次兑换
function fangqi(){
	var r = new Date().getTime()*2;
	window.location.href='index.html?r='+r;
}

$('body').height($('body')[0].clientHeight);