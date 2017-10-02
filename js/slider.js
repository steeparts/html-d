"use strict";

$(function() {
    var slider_speed = 700;
    var slider_duration = 3000;
    var slider_controls = true;
     
    $(function(e) {
        var slide_id = 0;
        var slide_time;
        var slider_size = $('.slider .slider__item').length;
        
        var slide_animation = function(direction) {
            clearTimeout(slide_time);
            $('.slider .slider__item').eq(slide_id).fadeOut(slider_speed);

            if (direction == 'next') 
                slide_id = (slide_id == (slider_size-1)) ? 0: (slide_id+1);
            else if (direction == 'prev')
                slide_id = (slide_id == 0) ? (slider_size-1) : (slide_id-1);
            else
                slide_id = direction;

            $('.slider .slider__item').eq(slide_id).fadeIn(slider_speed, slide_rotator);

            $('.slider__ctrl_nav-elem').each(function() { $(this).removeClass('slider__ctrl_nav-elem_active') });
            $('.slider__ctrl_nav-elem[rel=' + slide_id + ']').addClass('slider__ctrl_nav-elem_active');
        }

        $('.slider__ctrl_prev').click(function() { slide_animation('prev'); });
        $('.slider__ctrl_next').click(function() { slide_animation('next'); });

        var pause = false;

        var slide_rotator = function() { 
            if (!pause) 
                slide_time = setTimeout(function() { slide_animation('next') }, slider_duration); };

        $('.slider').hover(    
            function(){ clearTimeout(slide_time); pause = true; },
            function(){ pause = false; slide_rotator(); }
        );

        slide_rotator();
    });
});