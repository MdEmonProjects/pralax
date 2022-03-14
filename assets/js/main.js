(function ($) {
	"use strict";

    jQuery(document).ready(function($){
              
        $(".web__active").owlCarousel({
            items:3,
            nav:true,
            dot:false,
            navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
            loop:true,
            margin:30,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                   
                },
                768:{
                    items:2,
                   
                },
                1000:{
                    items:3,
                   
                }
            }
            
          
        });
       
              
        $(".galary__active").owlCarousel({
            items:1,
            nav:true,
            dot:false,
            navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
            loop:true,
            margin:30,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                   
                },
                768:{
                    items:1,
                   
                },
                1000:{
                    items:1,
                   
                }
            }
            
          
        });



        $(window).scroll(function() {
            if ($(this).scrollTop() >= 2300) {        // If page is scrolled more than 50px
                $('.this_is_unick').addClass('animate__animated');  
                $('.this_is_unick').addClass('animate__rotateIn');  
            } 
            //console.log($(this).scrollTop());
          });


        //   $('.test_div').parallax({imageSrc: '../img/h3.png'});
    });


    jQuery(window).load(function(){


    });


}(jQuery));	


