$(document).ready( function() {
	var $submenu = $('.submenu');
	var $mainmenu = $('.mainmenu');
	$submenu.hide();
	$submenu.first().delay(400).slideDown(700);
	$submenu.on('click','li', function() {
		$submenu.siblings().find('li').removeClass('chosen');
		$(this).addClass('chosen');
	});
	$mainmenu.on('click', 'li', function() {
		$(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
	});
	$mainmenu.children('li:last-child').on('click', function() {
		$mainmenu.fadeOut().delay(500).fadeIn();
	});
});
function startTime(){
		var today= new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		m= checkTime(m);
		s= checkTime(s);
		document.getElementById("timetext").innerHTML="时间"+":"+h+":"+m+":"+s;
		t=setTimeout(function(){
			startTime();
		},1000);

	}
	function checkTime(i){
		if (i<10){
			i="0"+i;
		}
		return i;
		
	}