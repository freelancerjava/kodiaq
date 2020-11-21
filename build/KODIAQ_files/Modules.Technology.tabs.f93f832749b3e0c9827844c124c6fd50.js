$(function () {
    'use strict';
    var moduleContainer = $("div.k2ng-module-ImporterTechnologyModule");
    var technologyTabs = new techTabs(moduleContainer);

    function techTabs(moduleContainer) {
        $.each(moduleContainer, function (i, element) {
            var tabs = $(element).find("ul.sa-tabs").children("li");
            var mobileSelectbox = $(element).find("select.mobile-categories");
            var tabContainer = $(element).find(".tab-container");
                
            tabs.on("click", function () {
                tabContainer.hide();
                var a = $(this);
                $.each(tabContainer, function (i, element) {
                    if ($(element).attr("data-tab-id") == a.attr("data-tab-id")) {
                        $(element).show();
                    };
                });

                tabs.removeClass("active");
                $(this).addClass("active");

                tabNextClick($(element).find("ul.sa-tabs").children(), $(element).find("ul.sa-tabs").children(".active")[0]);
            });

            mobileSelectbox.on("change", function () {
                var optVal = $(this).val();
                tabContainer.hide();
                $.each(tabContainer, function (i, element) {
                    if ($(element).attr("data-tab-id") == optVal) {
                        $(element).show();
                    };
                });

                tabNextClick($(this).children(), $(this).children("[value='" + optVal + "']"));
            });
        });
    };
});