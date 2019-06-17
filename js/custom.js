$(function () {

    "use strict";

    //==================Preloader Start==================

    $(window).on("load", function () {
        $(".preloader").delay(1000).fadeOut(300);

        //===============Newsletter Modal fadeIn fadeOut===============

        $(".bg3").delay(3000).fadeIn(300);

        $(".news-modal").delay(3000).slideDown(300);

    });

    //==================Preloader End==================

    //==================Sticky Menu Start==================

    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling >= 250) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    //==================Sticky Menu Part End==================


    //==============Closes responsive menu when a scroll link is clicked Start===========

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //==============Closes responsive menu when a scroll link is clicked End===========

    //==================Chat Slide Start==================

    $('.chat-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        infinite:true,
        vertical:true,
        speed: 1000,
    });

    //==================Chat Slide End==================

    //==================Animated Scroll Start==================

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });

    //==================Animated Scroll End==================

    //==================Experience Part Slider Start==================

    $('.exper-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 1000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //==================Experience Part Slider End==================

    //==================Testimonial Part Slider Start==================

    $('.test-slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 1000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //==================Testimonial Part Slider End==================


    //===============Newsletter Modal Js Start===============


    $(".cross-icon").on("click", function () {
        $(".news-modal").fadeOut(300);
    });

    $(".cross-icon").on("click", function () {
        $(".bg3").fadeOut(300);
    });

    $(".bg3").on("click", function () {
        $(".news-modal").fadeOut(300);
    });

    $(".bg3").on("click", function () {
        $(".bg3").fadeOut(300);
    });

    //===============Newsletter Modal Js End===============

    //===============Banner Chatbox Js Start=================

    $(".banner-chat").on("click", function () {
        $(".bg2").fadeToggle(300);
    })

    $(".banner-chat").on("click", function () {
        $(".banner-modal2").toggle(300);
    });

    $(".banner-chat").on("click", function () {
        $(".bchat-close").toggle(300);
    });
    $(".bg2").on("click", function () {
        $(".banner-modal2").hide(300);
    });

    $(".banner-chat").on("click", function () {
        $(".bchat-sign").toggle(300);
    });
    $(".bg2").on("click", function () {
        $(".bg2").fadeOut(300);
    });
    $(".bg2").on("click", function () {
        $(".bchat-close").hide(300);
    });
    $(".bg2").on("click", function () {
        $(".bchat-sign").show(300);
    });

    //===============Banner Chatbox Js End=================


    //===============Bottom Chatbox Js Start=================

    $(".footer-chat").on("click", function () {
        $(".bg").fadeToggle(300);
    })

    $(".footer-chat").on("click", function () {
        $(".banner-modal").toggle(300);
    });

    $(".footer-chat").on("click", function () {
        $(".chat-close").toggle(300);
    });
    $(".bg").on("click", function () {
        $(".banner-modal").hide(300);
    });

    $(".footer-chat").on("click", function () {
        $(".chat-sign").toggle(300);
    });
    $(".bg").on("click", function () {
        $(".bg").fadeOut(300);
    });
    $(".bg").on("click", function () {
        $(".chat-close").hide(300);
    });
    $(".bg").on("click", function () {
        $(".chat-sign").show(300);
    });

    //===============Bottom Chatbox Js End=================

    //==================Footer Chat Start==================

    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling >= 300) {
            $(".footer-chat").fadeIn();
        } else {
            $(".footer-chat").fadeOut();
        }
    });

    //==================Footer Chat End==================

    //==================Typed JS Start==================

    var typed = new Typed(".type", {
        strings: ["Tahsan Michalvin", "Web Designer", "Web Developer"],
        typeSpeed: 65,
        backSpeed: 65,
        loop: true
    });

    //==================Typed JS End==================



});