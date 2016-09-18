import $ from '../../node_modules/jquery/dist/jquery.min';
import css from '!css!resolve-url!sass?sourceMap!../../node_modules/fancybox/dist/scss/jquery.fancybox.scss';
import fancyBox from '../../node_modules/fancybox/dist/js/jquery.fancybox.cjs';
import fancyBoxMediaPlugin from '../../node_modules/fancybox/dist/helpers/js/jquery.fancybox-media.cjs';

// Instantiate the fancyBox jquery plugins.
fancyBox($);
fancyBoxMediaPlugin($);

export default function() {
    $(document).ready(function () {
        $('head').append('<style>' + css + '</style>');
        $('.fancybox-media').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            height: 562,
            width: 960,
            padding: 0,
            helpers: {
                media: true,
                overlay: {
                    css: {
                        'background': 'rgba(0,0,0,.9)'
                    }
                },
            }
        });
    });
};



