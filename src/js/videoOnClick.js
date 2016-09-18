import $ from '../../node_modules/jquery/dist/jquery';

export default function () {

    class PlayElement {
        constructor(title) {
            this.el = $("<div>" + title + '<br><img class="play" src="src/img/play.gif"></div>');
        }
    }

    $(document).ready(function () {
        let letItDiePlay = new PlayElement('LET IT DIE');
        let midTownPlay = new PlayElement('MIDTOWN GREENWAY');
        let nickWrapper = $('.wrapper.nick');
        let letItDieWrapper = $('.wrapper.letitdie');
        let midtownWrapper = $('.wrapper.midtown');
        const fadeInMs = 2000;

        $('.midtown.link').click(function () {
            $('.midtown.vidtitle').html(midTownPlay.el).fadeIn(fadeInMs);
            midtownWrapper.show();
            $('.wrapper').not('.midtown').hide();
        });

        $('.letitdie.link').click(function () {
            $('.letitdie.vidtitle').html(letItDiePlay.el).fadeIn(fadeInMs);
            letItDieWrapper.show();
            $('.wrapper').not('.letitdie').hide();
        });

        $('.title').click(function () {
            nickWrapper.show();
            midtownWrapper.hide();
            letItDieWrapper.hide();
        });
    });
};
