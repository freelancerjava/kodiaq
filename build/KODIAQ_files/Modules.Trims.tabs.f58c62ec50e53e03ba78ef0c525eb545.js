$(function () {
    'use strict';
    var modules = $("div.k2ng-module-ImporterTrimsModule");

    $.each(modules, function (i, module) {
        new TrimsModule($(module)).initCarousels();
    });


    function TrimsModule(module) {
        var self = this;
        this.carouselWrapper = module.find(".sa-trims-carousels-wrapper");
        this.imagesSlick = module.find("[data-slick='images-slider'] .carousel");
        this.dataTableSlick = module.find("[data-slick='datatables-slider'] .carousel");
        this.tabContainer = module.find(".tab-container");
        this.tabs = module.find("ul.sa-tabs").children("li");

        //== Casrousels settings

        this.datatablesSlickSettings = {
            dots: false,
            autoplay: false,
            arrows: false,
            infinite: true,
            speed: 400,
            slidesToShow: 2,
            slidesToScroll: 1,
            customPaging: function (slider, i) {
                return '<div class="sa-carousel-bullet-nav-point" data-role="none" data-number="' + (i + 1) + '"></div>';
            },
            responsive: [
              {
                  breakpoint: 660,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
            ]
        };

        this.imagesSlickSettings = {
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
        };

        //== Public functions

        this.initCarousels = function () {
            makeSlicks();
            trimsTabs();
            slickRefresh();
        };


        //== Private functions

        function makeSlicks() {
            var carousel;
            var prevSlide;
            var nextSlide;

            $.each(self.carouselWrapper, function (i, carouselWrapper) {
                carousel = $(carouselWrapper).find(".carousel");
                if (!carouselIsInitialized(carousel)) {
                    if ($(carouselWrapper).attr("data-slick") === "images-slider") {
                        carousel.slick(self.imagesSlickSettings);
                        
                    } else if ($(carouselWrapper).attr("data-slick") === "datatables-slider") {
                        carousel.slick(self.datatablesSlickSettings);
                    }

                    $(carouselWrapper).find(".sa-carousel-prev").on("click", function () {
                        $(carouselWrapper).find(".carousel").slick("slickPrev");
                    });

                    $(carouselWrapper).find(".sa-carousel-next").on("click", function () {
                        $(carouselWrapper).find(".carousel").slick("slickNext");
                    });

                    $(carouselWrapper).on("afterChange", function () {
                    	slickNextClick($(carouselWrapper).find(".sa-trims-carousel"));
                    });
                };
            });
        };

        function trimsTabs() {
            var tabs = self.tabs;
            var mobileSelectbox = module.find("select.mobile-categories");

            tabs.on("click", function () {
                tabs.removeClass("active");
                $(this).addClass("active");

                var a = $(this);
                $.each(self.tabContainer, function (i, element) {
                    if ($(element).attr("data-tab-id") == a.attr("data-tab-id")) {
                        slickRefresh();
                    };
                });
            });

            mobileSelectbox.on("change", function () {
                var optVal = $(this).val();
                tabs.removeClass("active");
                tabs.parent().find("[data-tab-id='" + $(this).val() + "']").addClass("active");
                $.each(self.tabContainer, function (i, element) {
                    if ($(element).attr("data-tab-id") == optVal) {
                        slickRefresh();
                    };
                });
            });
        };

        function slickRefresh() {
            var activeTab = self.tabs.filter('.active');
            var carouselControls = self.carouselWrapper.filter("[data-slick='images-slider']").find(".sa-carousel-controls");

            self.imagesSlick.slick('slickUnfilter');
            self.imagesSlick.slick("slickFilter", '[data-tab-id="' + activeTab.attr('data-tab-id') + '"]');

            self.tabContainer.addClass("sa-trims-hidden");
            self.tabContainer.filter("[data-tab-id=" + activeTab.attr('data-tab-id') + "]").removeClass("sa-trims-hidden");

            self.dataTableSlick.slick('unslick');

            if (self.imagesSlick.find('[data-tab-id="' + activeTab.attr('data-tab-id') + '"]').length > 1) {
                carouselControls.show();
            } else {
                carouselControls.hide();
            }

            makeSlicks();
        };

        function carouselIsInitialized(carousel) {
            if (carousel.hasClass("slick-initialized")) {
                return true;
            } else {
                return false;
            }
        };
    };
});