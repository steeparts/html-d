"use strict";

$(function() {
    $('.pests-list__item-link').mouseover(function() { 
        $(this).parent().find('.pests-list__item-photo').css('border-color', '#82c044');
    });

    $('.pests-list__item-link').mouseout(function() { 
        $(this).parent().find('.pests-list__item-photo').css('border-color', 'transparent');
    });

    $('.goods-nav__item').click(function() {
        $('.goods-nav__item').each(function() { $(this).removeClass('goods-nav__item_active') });
        $(this).addClass('goods-nav__item_active');
    });

    $('.top-nav__hamburger').click(function() {
        if ($(this).hasClass('top-nav__hamburger_active'))
            $(this).removeClass('top-nav__hamburger_active');
        else
            $(this).addClass('top-nav__hamburger_active');
    });

    $('.youtube').each(function() {
        $(document).delegate('#' + this.id, 'click', function() {  

            var iframe_url = 'https://www.youtube.com/embed/' + this.id + '?autoplay=1&autohide=1';

            if ($(this).data('params')) 
            	iframe_url += '&'+$(this).data('params');
            
            var iframe = $('<iframe/>', {
                'src': iframe_url,
                'width': $(this).width(),
                'height': $(this).height(),
                'frameborder': '0',
                'allowfullscreen': '1'
            });

            $(this).replaceWith(iframe);

        });
    });
 });