
function MM_preloadImages(){var d=document;var p=d.MM_p=d.MM_p||[];for(var i=0,a=arguments;i<a.length;i++){var x=new Image();x.src=a[i];p.push(x);}}


$(document).ready(function () {
	MM_preloadImages('img/header_background.jpg');


	// appstore button - google play button hover
	$('a.but-appsto, a.but-g-play, .bot-social a'/*###, .team_member_social_icons a*/).fadeTo('fast', 1.0);
	$('a.but-appsto, a.but-g-play, .bot-social a'/*###, .team_member_social_icons a*/).hover(
	function () {
		$(this).fadeTo('fast', 0.6);
	},
	function () {
		$(this).fadeTo('fast', 1.0);
	});


	$('.sect-1_toy-1, .sect-1_toy-2, .sect-1_toy-3').hover(
	function () {
		$(this).animate({
			marginTop: '0px',
			height: '434px'
		}, 500/*, function () {}*/);
	},
	function () {
		$(this).animate({
			marginTop: '30px',
			height: '404px'
		}, 500/*, function() {}*/);
	});
});


// fadein header
$(window).on('load', function () {
	$('.loading_screen').fadeOut(400);
	$('.pg').delay(800).fadeIn(400);
	$('.pg-top').show().addClass('animated fadeInDownBig');
	//setTimeout(function(){}, 800);
	setTimeout(function(){$('.top-lf').show().addClass('animated fadeInUpBig');}, 1100);
	setTimeout(function(){$('.top-rt').show().addClass('animated fadeInUpBig');}, 1300);
});
