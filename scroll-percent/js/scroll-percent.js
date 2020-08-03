'use strict';

$(document).ready(function() { 
    function scrollPercent() {
        let documentHeight = $(document).height();
        let windowHeigtht = $(window).innerHeight();
        $(document).scroll(function(){
            let scroll = $(this).scrollTop();
            let output = (( scroll ) / (documentHeight - windowHeigtht)) * 100;
            $('.scroll-percent').css({'width':output +'%'});
            $('.scroll-text').html(Math.floor(output)+'%');
        });
    }
    scrollPercent();

    $(window).resize(function() { 
        scrollPercent();
    }); 
}); 