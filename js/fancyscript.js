$(document).ready(function() {
    $('.fancybox').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        height:  562 ,
        width: 960 ,
        padding: 0 ,  
        helpers : {

               overlay : {
                css : {
                    'background' : 'rgba(0,0,0,.9)'
                }
            },
            media : {}
        }
    });
});

