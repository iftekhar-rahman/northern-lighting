jQuery(document).ready(function($){

    // $(".header-area").sticky({ topSpacing: 0 });

    // $('select').niceSelect();

    // Sticky Header with smooth animation
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 300) {
            $('.header-area').addClass('fixed');
        } else {
            $('.header-area').removeClass('fixed');
        }
    })

    // homepage-slides
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
        autoplay: false,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>']
	});

        // perfectScrollbar
        // $(".nice-select .list").perfectScrollbar();

    // $("#range_49").ionRangeSlider({
    //     type: "single",
    //     min: 150,
    //     max: 250,
    //     from: 200,
    //     to: 250,
    //     prefix: "£",
    //     step: 1,
    //     onFinish: function(data) {
    //         maxValue = data.from;
    //         alert("Your Value: " + maxValue);
    //     }
    // });


    $(".products-carousel").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 15,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2,
                margin: 15,
                nav: false
            },
            580: {
                items: 3,
                margin: 3,
                nav: false
            },
            720: {
                items: 4,
                margin: 3,
                nav: false
            },
            960: {
                items: 4
            },
            1140: {
                items: 4
            }

        }
    });

    $(".customers-carousel").owlCarousel({
        items: 6,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 15,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 3,
                margin: 0,
                nav: false
            },
            481: {
                items: 4,
                margin: 15,
                nav: false
            },
            720: {
                items: 5,
                margin: 15,
                nav: false
            },
            960: {
                items: 6,
                margin: 15,
            },
            1140: {
                items: 6
            }

        }
    });

    AOS.init();

    // Scroll To Top starts
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollTop').addClass('scrollBtn');
        } else {
            $('.scrollTop').removeClass('scrollBtn');
        }
    });
    $(".scrollTop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    }); // click() scroll top ENDS



	// $(".bodytype-carousel-wrap").magnificPopup({
	// 	type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
	// });




    

    

});