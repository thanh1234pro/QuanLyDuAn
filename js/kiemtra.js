    // menu
    jQuery(document).ready(function($) {
        pos = $("#mainNav").position();
        $(window).scroll(function() {
            var posScroll = $(document).scrollTop();
            if(parseInt(posScroll) > parseInt(pos.top)){
                $("#mainNav").addClass('fixed');
            }else{
                $("#mainNav").removeClass('fixed');
            }
        });
    });
    
