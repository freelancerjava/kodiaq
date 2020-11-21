$(function () {
    'use strict';
    $("div.k2ng-module-ImporterFeaturesModule").each(function (i, el) {
        var moduleContainer = $(el);
        var isToTrack = false;
        var technologyTabs = new techTabs(moduleContainer);

        function techTabs(moduleContainer) {
            $.each(moduleContainer, function (i, element) {
                var tabs = $(element).find("ul.sa-tabs").children("li");
                var mobileSelectbox = $(element).find("select.mobile-categories");
                var tabContainer = $(element).find(".tab-container");
                var triggerComboChange = true;

                tabs.on("click", function () {
                    var a = $(this);
                    triggerComboChange = true;

                    setCategory(moduleContainer, $(this).attr("data-tab-id"), triggerComboChange);

                    if (isToTrack) {
                        processGtmItems($(".sa-features-category[data-label-cip='" + a.text() + "']:visible"));
                    }

                    isToTrack = true;
                });

                $(element).find("ul.sa-tabs li.active").trigger("click");

                mobileSelectbox.on("change", function () {
                    triggerComboChange = false;
                    var optVal = $(this).val();
                    setCategory(moduleContainer, optVal);
                    processGtmItems($(this).find("[value='" + optVal + "']"), triggerComboChange);
                });

                addDetailLayerLinkSlideParams(tabContainer);
            });

            function setCategory(moduleContainer, newCatID, triggerComboChange) {
                var tabs = $(moduleContainer).find("ul.sa-tabs").children("li");
                var mobileSelectbox = $(moduleContainer).find("select.mobile-categories");
                var tabContainer = $(moduleContainer).find(".tab-container");

                mobileSelectbox.val(newCatID);

                if (triggerComboChange) {
                    mobileSelectbox.trigger('change');
                }

                tabs.removeClass("active");
                $(tabs.filter(function (index, item) {
                    return $(item).attr('data-tab-id') == newCatID;
                })[0]).addClass("active");

                tabContainer.hide();
                $.each(tabContainer, function (i, element) {
                    if ($(element).attr("data-tab-id") == newCatID) {
                        $(element).show();
                    };
                });
            }

            function addDetailLayerLinkSlideParams(tabContainer) {
                var featuresInCategory;
                $.each(tabContainer, function (i, tab) {
                    featuresInCategory = $(tab).find('.sa-features-item');
                    if (allFeaturesInCategoryHasSameLayerLink($(tab))) {
                        $.each(featuresInCategory, function (i, feature) {
                            if (typeof $(feature).attr('data-layer-href') != 'undefined' && $(feature).attr('data-layer-href').length > 0)
                                $(feature).attr('data-layer-params', $(feature).attr('data-layer-params') + i);
                        })
                    } else {
                        featuresInCategory.removeAttr('data-layer-params');
                    }
                })
            }

            function allFeaturesInCategoryHasSameLayerLink(tab) {
                var allTheSame = true;
                var featuresInCategory = tab.find('.sa-features-item');
                var layerlink = '';

                $.each(featuresInCategory, function (j, feature) {
                    if (typeof $(feature).attr('data-layer-href') != 'undefined') {
                        if ($(feature).attr('data-layer-href') != layerlink && layerlink != '' && $(feature).attr('data-layer-href').length > 0) {
                            allTheSame = false;
                        } else if ($(feature).attr('data-layer-href').length > 0) {
                            layerlink = $(feature).attr('data-layer-href');
                        }
                    }
                })

                return allTheSame;
            }
        };

        function processGtmItems(items) {
            for (var i = 0; i < items.length; i++) {
                collectionItemPreviewClick($(items[i]));
            }
        }
    });
});