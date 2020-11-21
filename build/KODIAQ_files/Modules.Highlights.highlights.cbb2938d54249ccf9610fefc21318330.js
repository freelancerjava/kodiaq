$(document).ready(function () {
    'use strict';

    //$(window).bind("load", function () {
    //    if (window.innerWidth < 1000) {
    //        var x = $(".upper-label").position().top + 5;
    //        $(".slick-dots").css({ 'top': x + 'px' });
    //    }
    //});

    //var id;
    //$(window).resize(function () {
    //    clearTimeout(id);
    //    id = setTimeout(doneResizing, 100);
    //});

    //function doneResizing() {
    //    if (window.innerWidth < 1000) {
    //        var x = $(".upper-label").position().top + 5;
    //        $(".slick-dots").css({ 'top': x + 'px' });
    //    } else {
    //        $(".slick-dots").css('top', '');
    //    }
    //}

    var modules = $("div.k2ng-module-ImporterHighlightsModule");

    $.each(modules, function (i, module) {
        if ($(module).find(".highlights-module.hero-layout").length === 0) {
            initCarousel($(module));
        }
    });

    function initCarousel(module) {
        var carousel = module.find(".highlights-carousel.carousel");
        var carouselItems = carousel.find(".carousel-item");

        var controlsContainer = module.find(".sa-carousel-controls");
        var prevSlide = controlsContainer.find(".sa-carousel-prev");
        var nextSlide = controlsContainer.find(".sa-carousel-next");
        var index = 0;

        $.each(carouselItems, function (i, carouselItem) {
            index = carousel.find(".carousel-item").index($(carouselItem));
        });

        if (carouselItems.length < 2) {
            controlsContainer.hide();
        }

        carousel.slick({
            adaptiveHeight: true,
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: function (slider, i) {
                return '<div class="sa-carousel-bullet-nav-point" data-role="none" data-number="' + (i + 1) + '"></div>';
            }
        });

        var slickDots = module.find(".slick-dots");

        //if (slickDots.length > 0) {
        //    var slickDotsGestures = new Hammer(slickDots[0]);

        //    slickDotsGestures.on('swipeleft', function (ev) {
        //        goNext();
        //    });
        //    slickDotsGestures.on('swiperight', function (ev) {
        //        goPrev();
        //    });
        //}

        prevSlide.on("click", function () {
            goPrev();
        });

        nextSlide.on("click", function () {
            goNext();
        });

        carousel.on("afterChange", function () {
            slickNextClick(carousel);
        });

        function goNext() {
            carousel.slick("slickNext");
        }

        function goPrev() {
            carousel.slick("slickPrev");
        }
    }
})