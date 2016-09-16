$(document).ready(function(){
//	$('.midtown.wrapper').hover(function(){
//			$('.midtown.vidtitle').html('WATCH');},
//			function(){
//			$('.midtown.vidtitle').html('MIDTOWN GREENWAY');
	//		});
//
//	$('.letitdie.wrapper').hover(function(){
//		$('.letitdie.vidtitle').html('WATCH');},
//		function(){
//			$('.letitdie.vidtitle').html('LET IT DIE')();
//		});
//	$('.midtown.vidtitle').click(function(){
//		$('.midtown.vid').show();
//		$('.midtown.vidtitle').html('LOADING...').delay(2000).fadeOut();
//		$('.midtown.pic').delay(4000).fadeOut();
		
//});


//	$('.letitdie.vidtitle').click(function(){
//		$('.letitdie.vid').show();
//		$('.letitdie.vidtitle').html('LOADING...').delay(2000).fadeOut();
//		$('.letitdie.pic').delay(4000).fadeOut();
		
// });

	$('.midtown.link').click(function(){
		$('.midtown.vidtitle').html('MIDTOWN GREENWAY <BR> <img class="play" src="img/play.gif"> ').fadeIn(2000);
		$('.midtown.wrapper').show();
		$('.letitdie.wrapper').hide();
		$('.nick.wrapper').hide();
		
	
	});

	$('.letitdie.link').click(function(){
		$('.letitdie.vidtitle').html('LET IT DIE <BR> <img class="play" src="img/play.gif">').fadeIn(2000);
		$('.letitdie.wrapper').show();
		$('.midtown.wrapper').hide();
		$('.nick.wrapper').hide();
		

		
		
	});

$('.title').click(function(){
		$('.nick.wrapper').show();
		$('.midtown.wrapper').hide();
		$('.letitdie.wrapper').hide();
		
	
	});


});

