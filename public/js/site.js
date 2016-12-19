
function MM_preloadImages(){var d=document;var p=d.MM_p=d.MM_p||[];for(var i=0,a=arguments;i<a.length;i++){var x=new Image();x.src=a[i];p.push(x);}}


$(document).ready(function () {
	MM_preloadImages('img/header_background.jpg');
});


// fadein header
$(window).on('load', function () {
	$('.loading_screen').fadeOut(400);
	$('.pg').delay(800).fadeIn(400);
	$('.pg-top').show().addClass('animated fadeInDownBig');
	setTimeout(function(){$('.top-pic').show().addClass('animated fadeInUpBig');}, 1100);
	setTimeout(function(){$('.top-txt').show().addClass('animated fadeInUpBig');}, 1300);
});
