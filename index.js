import videoOnClick from './src/js/videoOnClick';
import fancyBoxCustom from './src/js/fancyBoxCustom';
import css from '!css!resolve-url!sass?sourceMap!./src/scss/style.scss';
import $ from './node_modules/jquery/dist/jquery.js';
$('head').append('<style>' + css + '</style>');
videoOnClick();
fancyBoxCustom();