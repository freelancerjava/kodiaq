/// <reference path="~/Pages/Scripts/gtm.js"/>

$(function () {
    'use strict';

    // history api detection
    var historyApiSupported = window.history && window.history.pushState;

    (function ($) {
        // jquery plugin for layers
        $.fn.layerLink = function () {
            this.each(function () {
                $(this).on("click", function (evt) {
                    evt.preventDefault();

                    var $clickedLink = $(this);

                    var href = $clickedLink.attr("href") ? $clickedLink.attr("href") : $clickedLink.attr("data-layer-href")

                    var params = $clickedLink.attr('data-layer-params');

                    if (params && params != "" && typeof params != 'undefined') {
                        href.indexOf("?") < 0 ? (href += '?' + params) : (href += '&' + params);
                    }

                    if (historyApiSupported) {
                        history.pushState({ "type": "layer" }, $clickedLink.attr("data-layer-title"), href);
                    }
                    var id = $(this).data("id");
                    openLayer(href, id);

                });
            });

            return this;
        };
    }(jQuery));

    // initializes layerLink plugin to all a.layer-link
    $(".layer-link").layerLink();

    // detects URL chages via History API to open/close layer
    window.addEventListener("popstate", function (event) {
        if (event.state != null && event.state.type === "layer") {
            openLayer(document.location);
        } else {
            closeLayer();
        }
    }, false);

    var srcsetElements = function (input) {
        $("img").each(function () {
            var $localCss = $(this);
            if ($localCss.attr("href") == remoteCssLink) {
                found = true;
                return false;
            }
        });
    }

    var openLayer = function (url, id) {
        $("body").addClass("no-scroll-due-to-opened-layer");
        //checkSize(id);

        var layerContainer = $("<div/>", {
            "class": "k2ng-layer"
        }).prependTo("div.k2ng-page");
        layerContainer.addClass("loading");

        var closeButton = $("<div/>", {
            "class": "layer-close-button"
        }).appendTo(layerContainer);

        closeButton.click(function () {
            if (historyApiSupported) {
                history.back();
            }

            closeLayer();
        });

        var layerContent = $("<div/>", {
            "class": "layer-content"
        }).appendTo(layerContainer);

        $.ajax({
            url: url,
            dataType: "html",
            success: function (response, status, jqXHR) {
                var html = $(response);

                var freeZone = html.find("div.k2ng-zone-name-Free");

                freeZone.find(".k2ng-module").each(function () {
                    processModule($(this), layerContent);
                });

                //#region this part should be generalized
                var htmlWrapper = document.createElement("div");
                htmlWrapper.innerHTML = response;
                var pageElement = $(htmlWrapper.getElementsByClassName("k2ng-page"));
                if (pageElement.data("implementation") === "ImporterLayerTableComparison") {
                    var footerZone = html.find("div.k2ng-zone-name-Footer");
                    footerZone.find(".k2ng-module").each(function () {
                        var module = $(this);
                        if (module.data("implementation") === "ImporterDisclaimersModule" || module.data("implementation") === "ImporterFootnotesModule") {
                            processModule(module, layerContent);
                        }
                    });
                }
                //#endregion

                gtmTracking.registerEventClickDownload(layerContainer.find(".gtm-download"));
                layerContainer.removeClass("loading");

                // stylesheed includes
                var cssParserRegex = /link rel="stylesheet" type="text\/css" href="([^"]+)"/mg;
                var parsedCss = null;
                while (parsedCss = cssParserRegex.exec(response)) {
                    var remoteCssLink = parsedCss[1];
                    var found = false;
                    $("link[rel=stylesheet]").each(function () {
                        var $localCss = $(this);
                        if ($localCss.attr("href") == remoteCssLink) {
                            found = true;
                            return false;
                        }
                    });
                    if (found == false) {
                        $("<link/>", {
                            rel: "stylesheet",
                            href: remoteCssLink,
                            "type": "text/css"
                        }).appendTo("head");
                    }
                }

                // javascript includes
                var jsParserRegex = /script type="[^"]+" src="([^"]+)"/mg;
                var parsedJs = null;
                while (parsedJs = jsParserRegex.exec(response)) {
                    var remoteJsLink = parsedJs[1];
                    var found = false;
                    $("script").each(function () {
                        var $localJs = $(this);
                        if ($localJs.attr("src") == remoteJsLink) {
                            found = true;
                            return false;
                        }
                    });
                    if (found == false) {
                        $("<script/>", {
                            src: remoteJsLink,
                            "type": "text/javascript"
                        }).appendTo("body");
                    }
                }

                if (detectIE()) {
                    addSrc("img:not([src='']");
                }

                $(window).trigger('resize');
            }
        });

        setTimeout(function () {

            $(".detail-layer-carousel-item.slick-slide").css("visibility", "hidden");
        }, 200);

        setTimeout(function () {
            $(".detail-layer-carousel-item.slick-slide.slick-active").css("visibility", "visible");
            layerContainer.addClass("opened");
        }, 350);

        setTimeout(function () {
            $(".detail-layer-carousel-item.slick-slide").css("visibility", "visible");
            var clientHeight = $(window).height();
            $(".layer-content").css("max-height", clientHeight);
        }, 1000);
    };

    function processModule(module, layerContent) {
        module.appendTo(layerContent);

        var moduleId = module.attr("id");
        if (moduleId) {
            $(window).trigger("moduleinit", moduleId);
        }
    }

    $(window).resize(function () {
        var clientHeight = $(window).height();
        $(".layer-content").css("max-height", clientHeight);
    });

    function checkSize(id) { //This function turned out to destroy some carousel modules, why it was here? Now it is (hopefully) never called and should be removed in the future.
        var highlight = $("div .k2ng-module-instance-" + id + "").find("div.slick-active");
        var width = highlight.width() + 20;
        highlight.css("width", "" + width + "");
    }

    var addSrc = function (input) {
        if (input) {
            $(input).each(function () {
                var $localJs = $(this);
                var imgurl = $(this).attr("srcset");
                if (imgurl) {
                    var urlatt = imgurl.split(',');
                    if (urlatt && urlatt[0]) {
                        $localJs.attr("src", urlatt[0]);
                    }
                }
            });
        }
    };

    var detectIE = function () {
        var ua = window.navigator.userAgent;

        // Test values; Uncomment to check result …

        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

        // Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

        // Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    };

    var closeLayer = function () {
        $("body").removeClass("no-scroll-due-to-opened-layer");

        $("div.k2ng-page div.k2ng-layer").each(function () {
            var $layer = $(this);
            if (!$layer.hasClass("closing")) {
                $layer.removeClass("opened");
                $layer.addClass("closing");
                setTimeout(function () {
                    $layer.remove();
                }, 1000);
            }
        });
    };


    /*

    $("[data-layerlink]").on("click", function (event) {
        event.preventDefault();
        var layerModuleId = $(this).attr("data-layerlink");

        if ($("#" + layerModuleId).length != 0) {
            openLayer(layerModuleId);
        } else {
            if (window.history && window.history.pushState) {
                layerPageLoader($(this).attr("data-layer-href"), layerModuleId);
            } else {
                window.location = $(this).attr("data-layer-href");
            }
        }
    });

    function openLayer(layerID) {
        $("#" + layerID).show();
        $("#" + layerID).trigger("sa.layer.open");
        $("body").css("overflow", "hidden");
    };

    function initOpenLayer(response) {
        var moduleId = $(response).find(("#free-zone")).children().attr('id');

        if (moduleId.length != 0) {
            setTimeout(function () {
                openLayer(moduleId);
            }, 100);   
        }
    };

    $(document).on('sa.layer.close', function () {
        $("body").css("overflow", "visible");
    });

    function layerPageLoader(layerPageUrl, layerModuleId) {
        if (layerPageUrl != null) {
            var url = layerPageUrl + " #free-zone";
            
            layerModuleId = "ImporterDetailLayerModule-8a328d9d";

            $.ajax({
                url: layerPageUrl,
                dataType: "html",
                beforeSend  : function(XHR) {
                    XHR.selfData = layerModuleId;
                },
                success: function (response, status, jqXHR) {
                    var html = $(response);
                    var moduleName = jqXHR.selfData;
                    var moduleId = $(response).find(("#free-zone")).children().attr('id');
                    if ($("body #free-zone").find("#" + moduleId).length != 0) {
                        openLayer(moduleId);
                    } else {
                        var content = html.find(("div.k2ng-zone-name-Free")).children()[0];
                        $(content.children[0]).remove();
                        $("body #free-zone").append(content);

                        var substring = ['DetailLayer', 'SpecificationLayer', 'TableLayer', 'TableComparison'];

                        $.each(substring, function (key, value) {
                            var linkCss = $(response).filter("link[href*=" + value + "]");
                            var linkJs = $(response).filter("script[src*=" + value + "]");

                            if (linkCss.length != 0) {
                                if ($('link[href*=' + value + ']').length == 0) {
                                    $('head').append('<link rel="stylesheet" href="' + linkCss.attr("href") + '" type="text/css" />');
                                }
                            }

                            if (linkJs.length != 0) {
                                if ($('script[src*=' + value + ']').length == 0) {
                                    $.getScript("" + linkJs.attr('src') + "", function () {
                                        initOpenLayer(response);
                                    });
                                } else {
                                    $('script[src="' + linkJs.attr('src') + '"]').remove();
                                    $.getScript("" + linkJs.attr('src') + "", function () {
                                        initOpenLayer(response);
                                    });
                                }
                            }
                        });
                    }
                 }
            });
        }
    }*/
});