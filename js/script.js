$(document).ready(function () {

    $('.midtown.link').click(function () {
        $('.midtown.vidtitle').html('MIDTOWN GREENWAY <BR> <img class="play" src="img/play.gif"> ').fadeIn(2000);
        $('.midtown.wrapper').show();
        $('.letitdie.wrapper').hide();
        $('.nick.wrapper').hide();
    });

    $('.letitdie.link').click(function () {
        $('.letitdie.vidtitle').html('LET IT DIE <BR> <img class="play" src="img/play.gif">').fadeIn(2000);
        $('.letitdie.wrapper').show();
        $('.midtown.wrapper').hide();
        $('.nick.wrapper').hide();
    });

    $('.title').click(function () {
        $('.nick.wrapper').show();
        $('.midtown.wrapper').hide();
        $('.letitdie.wrapper').hide();
    });


});

