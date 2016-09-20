import $ from '../../node_modules/jquery/dist/jquery.min';
import css from '../../node_modules/fancybox/dist/scss/jquery.fancybox.scss';
import fancyBox from '../../node_modules/fancybox/dist/js/jquery.fancybox.cjs';
import fancyBoxMediaPlugin from '../../node_modules/fancybox/dist/helpers/js/jquery.fancybox-media.cjs';


export default function () {
    // Instantiate the fancyBox jquery plugins.
    fancyBox($);
    fancyBoxMediaPlugin($);

    var styleId = 'fancybox-styles';

    var addFancyBoxStyle = function () {
        if ($('#' + styleId).length == 0) {
            $('head').append('<style type="text/css" id="' + styleId + '">' + css + '</style>');
        }
    }

    $(document).ready(function () {
        addFancyBoxStyle();
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



