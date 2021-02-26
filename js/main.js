$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
    // testimonial
    $('.owl-carousel-testimonial').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        items:1
    })

    // counter-js
    $('.counter-number').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    
    // portfolio
    var mixer = mixitup('.portfolio-content');
    // magnific-popup
    $('.image-link').magnificPopup({type:'image'});

    // progress-bar
    $('.skillbar').skillBars({
        // options here
      });

    //   scroll-top-----
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 ) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".top").offset().top},"1000");return false})});

    //1. bgcolor-scroll-change
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled',$(this).scrollTop() >50);
    });


    // 2.scroll-change
    // $(function () {
    //     $(document).scroll(function () {
    //       var $nav = $(".navbar-fixed-top");
    //       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    //     });
    //   });
   

}(jQuery));

