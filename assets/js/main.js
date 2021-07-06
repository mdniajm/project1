$(document).ready(function () {
    // Sticky nav script Start
    // grab the initial top offset of the navigation
    var stickyNavTop = $("#about").offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
        stickyNav();
    });
    $(function () {
        //caches a jQuery object containing the header element
        var header = $(".bgt");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll > 0) {
                header.removeClass("bgt").addClass("bgd");
            } else {
                header.removeClass("bgd").addClass("bgt");
            }
        });
    });
    // Sticky nav script End.

    // Goto Top Script Start
    $(function () {
        //caches a jQuery object containing the header element
        var header = $(".none");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 600) {
                header.removeClass("none").addClass("go-top");
            } else {
                header.removeClass("go-top").addClass("none");
            }
        });
    });
    // Goto Top Script End.

    //Counterup Script Start
    $(".counter").counterUp({
        delay: 20,
        time: 2000,
    });

    //Counterup Script End.

    // WowJs Script
    new WOW().init();
    
    // OnePage Nav Script
    $("nav").onePageNav();

    // Owl carousel Script Start
    $("#testmonial").owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        nav: true,
        dots: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
            },
        },
    });
    $("#case").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        nav: true,
        dots: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
            },
        },
    });
    $("#banner").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        nav: true,

        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
                loop: true,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
            },
        },
        onTranslated: function () {
            changeNavsThump();
        },
    });
    // Owl carousel Script End.
    
    // mobile menu script
    jQuery("nav .nav-ul").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
    });
   
    
});
