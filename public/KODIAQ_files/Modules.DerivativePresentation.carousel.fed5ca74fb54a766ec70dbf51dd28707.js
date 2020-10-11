$(function () {
    'use strict';
    $.each($("div.k2ng-module-ImporterDerivativePresentationModule"), function (i, element) {
        var carouselWrapper = $(element).find(".sa-derivativepresentation-carousels-wrapper");

        $.each(carouselWrapper, function (i, element) {
            makeSlick(i, $(element));
        });
    });
});

function makeSlick(i, element) {
    var module = $(element);
    var carousel = module.find(".carousel");
    var slides = carousel.find(".sa-carousel-slick-item");
    var carouselControls = module.find(".sa-carousel-controls");
    var prevSlide = module.find(".sa-carousel-prev");
    var nextSlide = module.find(".sa-carousel-next");
    var tabs = module.find("ul.sa-tabs");
    var galleryCategories = categoriesFromSlides(slides);

    var showArrowForcategory = [];
    $.each(galleryCategories, function (i, cat) {
        showArrowForcategory[cat] = (carousel.find('[data-slide-cat="' + cat + '"]').length < 2) ? false : true;
    });

    initCarousel();

    // Private functions

    function initCarousel() {
        carousel.slick({
            adaptiveHeight: true,
            dots: true,
            autoplay: false,
            arrows: false,
            infinite: true,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: function (slider, i) {
                return '<div class="sa-carousel-bullet-nav-point" data-role="none" data-number="' + (i + 1) + '"></div>';
            }
        });

        tabs.children("li").on("click", function () {
            tabs.children().removeClass("active");
            $(this).addClass("active");
            filterCarouselByCurrentRule();
        });

        prevSlide.on("click", function () {
            carousel.slick("slickPrev");
        });

        nextSlide.on("click", function () {
            carousel.slick("slickNext");
        });

        carousel.on("afterChange", function () {
        	slickNextClick(carousel);
        });

        filterCarouselByCurrentRule();
    }

    function filterCarouselByCurrentRule() {
        var category = tabs.find('.active').attr("data-slide-cat");

        carousel.slick('slickUnfilter');
        carousel.slick('slickFilter', '[data-slide-cat="' + category + '"]');
        carousel.slick('slickGoTo', 0, true);

        if (showArrowForcategory[category] === true) {
            carouselControls.show();
        } else {
            carouselControls.hide();
        }
    }

    function categoriesFromSlides(slides) {
        var categories = [];
        var catIsNew = true;
        $.each(slides, function (i, slide) {
            catIsNew = true;
            $.each(categories, function (j, cat) {
                if (cat === $(slide).attr("data-slide-cat")) {
                    catIsNew = false;
                };
            });

            if (catIsNew === true) {
                categories.push($(slide).attr("data-slide-cat"));
            }
        });

        return categories;
    };
}