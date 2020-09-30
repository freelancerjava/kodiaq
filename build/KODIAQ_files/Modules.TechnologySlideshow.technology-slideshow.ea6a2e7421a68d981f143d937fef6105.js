$(function () {
    'use strict';
    var techologySlideshowModule = $("div.k2ng-module-ImporterTechnologySlideshowModule");

    var mainCarouselSetting = {};

    var equipmentCarouselSetting = {
        adaptiveHeight: false,
        dots: false,
        autoplay: false,
        arrows: false,
        infinite: false,
        speed: 600,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
    };


    $.each(techologySlideshowModule, function (i, module) {
        mainCarouselSetting = {
            adaptiveHeight: false,
            dots: true,
            autoplay: false,
            arrows: true,
            infinite: false,
            speed: 800,
            prevArrow: '<div class="sa-carousel-control desktop-control visible-lg sa-carousel-prev"></div>',
            nextArrow: '<div class="sa-carousel-control desktop-control visible-lg sa-carousel-next"></div>',
            appendArrows: $(module).find('.sa-carousel-controls'),
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: function (slider, i) {
                return '<div class="sa-carousel-bullet-nav-point" data-role="none" data-number="' + (i + 1) + '"></div>';
            }
        };

        initTSCarousel($(module));
    });

    function initTSCarousel($module) {
        var $mainCarousel = $module.find('.carousel.main-carousel');
        var $enginesFilter = $module.find('[data-engine-filter]');
        var $enginesFilterMobile = $module.find('.mobile-subengines-filter-mobile');
        var slickObject;
        var equipmentCode = "";

        $mainCarousel.slick(mainCarouselSetting);
        slickObject = $mainCarousel.slick('getSlick');

        $module.find('.before-slick-load').removeClass('before-slick-load');

        if (typeof slickObject.$slides != 'undefined') {
            carouselArrowsHidingDecision();

            if ($enginesFilter.length > 1) {
                InitEngineTypesFilters();
            }

            mobileDotsToNumberConversionDecision();
        }

        // =====================================================================

        function carouselArrowsHidingDecision() {
            if (slickObject.$slides.length < 2) {
                setArrowVisibility(slickObject.$nextArrow, false);
            };

            $mainCarousel.on('afterChange', function () {
                slickObject = $mainCarousel.slick('getSlick');

                if (slickObject.currentSlide > 0 && slickObject.$slides.length > 1) {
                    setArrowVisibility(slickObject.$prevArrow, true);
                } else {
                    setArrowVisibility(slickObject.$prevArrow, false);
                }

                if ((slickObject.currentSlide + 1) < slickObject.$slides.length && slickObject.$slides.length > 1) {
                    setArrowVisibility(slickObject.$nextArrow, true);
                } else {
                    setArrowVisibility(slickObject.$nextArrow, false);
                }
            })
        }

        function setArrowVisibility($element, visibilityBool) {
            //Due to css transition, visibility is set by opacity 0 OR 1
            var opacity = visibilityBool ? 1 : 0;
            $element.css('opacity', opacity);
        }

        function InitEngineTypesFilters() {
            $enginesFilter.on('click', function () {
                var filterValue = $(this).attr('data-engine-filter') || "";

                $enginesFilter.removeClass('active');
                $(this).addClass('active');

                $mainCarousel.slick('slickUnfilter');

                $mainCarousel.slick('slickGoTo', 0, true);

                if (filterValue === '' || filterValue === 'undefined' || filterValue === null) {
                    return false;
                }

                $mainCarousel.slick('slickFilter', '[data-engine-cat=' + $(this).attr('data-engine-filter') + ']');

                $enginesFilterMobile.val(filterValue);
                $enginesFilterMobile.trigger('sa.slectbox.change');
                $mainCarousel.trigger('afterChange');
            });

            $enginesFilterMobile.saFormElements();

            $enginesFilterMobile.on('change', function () {
                var filterValue = $(this).val() || "";

                $enginesFilter.removeClass('active');
                $enginesFilter.filter('[data-engine-filter="' + filterValue + '"]').addClass('active');

                $mainCarousel.slick('slickUnfilter');
                $mainCarousel.slick('slickGoTo', 0, true);

                if (filterValue === '' || filterValue === 'undefined' || filterValue === null) {
                    return false;
                }

                $mainCarousel.slick('slickFilter', '[data-engine-cat=' + filterValue + ']');
                $mainCarousel.trigger('afterChange');
            });
        }

        function mobileDotsToNumberConversionDecision() {
            var DecisionFunction = function() {
                var mobileSlidesCounter = $module.find('.mobile-slides-counter');
                var maxNavDotsForMobile = 7;
                var slick = $mainCarousel.slick('getSlick');

                if (slick.$slides.length > maxNavDotsForMobile) {
                    slick.$dots.addClass('hidden-sm');
                    mobileSlidesCounter.removeClass('hidden-sm');
                } else if (slick.$dots != null) {
                    slick.$dots.removeClass('hidden-sm');
                    mobileSlidesCounter.addClass('hidden-sm');
                }

                mobileSlidesCounter.html('&nbsp;' + (slick.currentSlide + 1) + '&nbsp;/&nbsp;' + slick.$slides.length + '&nbsp;');
            }

            DecisionFunction();
            $mainCarousel.on('afterChange', DecisionFunction);
        }
    }
});