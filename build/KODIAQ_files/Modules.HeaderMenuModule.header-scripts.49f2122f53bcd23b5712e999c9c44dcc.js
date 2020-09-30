/// <reference path="~/../Skoda.K2NG.Plugins/SitePrototypes/Skoda.K2NG.Plugins.SitePrototypes.Importer/Pages/Scripts/gtm.js"/>
/// <reference path="~/Assets/js/jquery-1.11.3.js"/>
$(function () {
    "use strict";
    var headerModule = new HeaderModule();
    var searchRequest = null;

    function HeaderModule() {
        var self = this;
        this.SubmenuIsVisible = false;
        this.NavContainer = $("nav.importer-header");
        this.SubmenuContainer = this.NavContainer.find(".submenu-container-holder");
        this.SubmenuIniciator;
        this.anchorNav = this.NavContainer.find(".anchors-subnav");
        this.enabledStickyNavigation = false;
        this.anchorNavIsSticky = false;
        this.anchorsAreDropeddown = false;
        this.toolsShrinkingWidthValues = [];
        this.menuitemsShrinkingWidthValue = 0;
        //this.minStickyFontSize = 8;
        //this.defaultFontSizeSticky = 14;

        $(this.NavContainer).on("reinitStickyMenu", function () {
            reinitModuleAnchors();
        });

        this.searchSuggestionsNumber = 6;
        this.activateSearch = this.NavContainer.find(".activate-search");
        this.searchField = this.NavContainer.find(".search-field");
        this.searchSuggestionsContainer = this.NavContainer.find(".search-suggestions-result");
        this.searchItemTemplate = this.NavContainer.find(".sa-importer-header-search-result-item");
        this.searchOvershadow = this.NavContainer.find(".search-suggestions-large");
        this.resultsCountContainer = this.NavContainer.find("[data-results-count]");
        this.mobileSearchInputContainer = this.NavContainer.find(".sa-mobile-serach-input-container");
        this.linkToAllResults = this.NavContainer.find(".importer-hearder-search-summary");

        var searchHandler = this.NavContainer.attr("data-search-handler");
        this.searchApiUrl = "";
        if (searchHandler && searchHandler.indexOf("?") > 0) {
            self.searchApiUrl = searchHandler + "&";
        } else {
            self.searchApiUrl = searchHandler + "?";
        }

        var rawAllSearchResultUrl = this.NavContainer.attr("data-all-search-results-url");
        if (rawAllSearchResultUrl && rawAllSearchResultUrl.indexOf("?") > 0) {
            this.allSearchResultsPage = rawAllSearchResultUrl + "&";
        } else {
            this.allSearchResultsPage = rawAllSearchResultUrl + "?";
        }

        this.allSearchResultsPage = this.allSearchResultsPage + "action=showallresults&search=";
        this.domainForRequest = this.NavContainer.find("input[data-domain]").attr("data-domain");
        this.searchPhrase = "";
        this.domain = "";

        this.viewportDevice = viewportDevice();
        this.viewportWidth = $(document).width();

        // Calculate submenu's max height to decide whether to display scrollbar or not. Recalculated when window is resized.
        setSubmenuMaxHeight();

        // Calculating navigation links width a deciding whether display links under one tab "menu"; recalculated when window is resized
        this.ulNavList = this.NavContainer.find("ul.nav-list");

        this.NavContainer.find(".navbar-buttons").width();

        var importerHeaderResources = $("#importer-header-resources");
        this.strings = {
            mapsLinkLabel: "Open in Google Maps",  // TODO: Originally, it was strings.mapsLink, which vanished in 06e1f8f3 ("Merged PR 267: Search result redesign", 2017-07-20). Then, for a long time, it was not defined anywhere, which would break the quick search results if GeoPoint property was defined for a page. However, this information is not filled in pages anymore, so the scraper never fills the property (although it still tries). Probably, support for GeoPoint should be dropped altogether.
            newsLinkLabel: importerHeaderResources.attr("data-news-link-label"),
            modelFamilyLinkLabel: importerHeaderResources.attr("data-model-family-link-label"),
            modelDerivativeLinkLabel: importerHeaderResources.attr("data-model-family-link-label"),  // TODO: data-model-derivative-link-label should be here. This copy-paste bug is so old that it might be a feature.
            eventLinkLabel: importerHeaderResources.attr("data-event-link-label"),
            promotionLinklabel: importerHeaderResources.attr("data-promotion-link-label"),
            otherLinklabel: importerHeaderResources.attr("data-other-link-label")
        };

        this.anchorsScrollingFuncionality;

        $.when().then(function () {
            shrinkMenuLinksUnderOneTab();
            initSmallDesktopViewportNavigation();
            initTabletViewportNavigation();
            initMobileViewportNavigation();
            initModuleAnchors(this.anchorNav);  // TODO: The use of the this keyword looks fishy here.
        }).then(function () {
            makeStickyScroll(0); // if I remembered right it equals 12 ms
            activatePageAnchor();
        });


        this.anchorNavWidth = parseInt(this.anchorNav.find(".anchors").css("padding-left")) +
            parseInt(this.anchorNav.find(".anchors").css("padding-right")) +
            this.anchorNav.find(".navbar-buttons").width() +
            parseInt(this.anchorNav.find(".navbar-buttons").css("padding-left")) +
            parseInt(this.anchorNav.find(".navbar-buttons").css("padding-right"));

        $.each(this.anchorNav.find('.anchor'), function (i, link) {
            self.anchorNavWidth += parseInt($(link).css('padding-left'));
            self.anchorNavWidth += parseInt($(link).css('padding-right'));
            self.anchorNavWidth += $(link).width();
        });

        this.languageSelector = new LanguageSelector(this);

        shrinkAnchorSubmenu();
        //textResize();

        //==== Events

        this.SubmenuContainer.on("click", function (event) {
            console.log($(this), event);
            var target = event.target;

            if (target === self.SubmenuContainer[0]) {
                self.CloseSubmenu();
                self.closeSearch();
            };
        });

        this.activateSearch.on("click", function () {
            self.searchField.addClass("active");
            self.activateSearch.hide();
            self.searchField.find("input").focus();
            searchIconClick();  // XXX: Defined in k2static://ImporterAssets/Pages.Scripts.gtm.js.
        });

        this.searchField.find("input").on("keyup", function () {
            if ($(this).val().length >= 3) {
                if ($(this).val() != self.searchPhrase) {
                    self.searchPhrase = $(this).val();
                    self.searchOvershadow.show();
                    self.doSearch($(this).val());
                }
            } else {
                self.searchOvershadow.hide();
            }
        });

        this.NavContainer.find("[data-close-search='true']").on("click", function () {
            self.closeSearch();
        });

        this.mobileSearchInputContainer.find("input").on("keyup", function () {
            if ($(this).val().length >= 3) {
                self.searchPhrase = $(this).val();
                self.searchOvershadow.show();
                self.doSearch($(this).val());
                self.mobileSearchInputContainer.addClass("active");
            } else {
                self.searchOvershadow.hide();
            }
        });

        this.NavContainer.find("[data-toggle-submenu]").on("click", function (event) {
            event.preventDefault();
            if (self.SubmenuIniciator instanceof jQuery) {
                if ($(this)[0] === self.SubmenuIniciator[0] || $(this).hasClass("mobile-hamburger-menu")) {
                    self.CloseSubmenu();
                } else {
                    self.OpenSubmenu($(this));
                }
            } else {
                self.OpenSubmenu($(this));
            }
        });

        this.NavContainer.find("[data-toggle-anchors]").on("click", function (event) {
            self.toggleAnchorsDropdown();
        });

        this.NavContainer.find("[data-close-submenu]").on("click", function (event) {
            event.preventDefault();
            self.CloseSubmenu();
        });

        $(window).ready(function () {
            controlRightMenu();
        });

        $(window).resize(function () {
            var newWidth = $(document).width();
            self.viewportDevice = viewportDevice();
            setSubmenuMaxHeight();

            self.closeAnchorsDropdown();

            if (self.viewportWidth > 999) {
                if (newWidth <= 999) {
                    self.CloseSubmenu();
                    self.closeSearch();
                };
            } else if (self.viewportWidth <= 999 && self.viewportWidth > 659) {
                if (newWidth > 999 || newWidth <= 659) {
                    self.CloseSubmenu();
                    self.closeSearch();
                };
            } else {
                if (newWidth > 659) {
                    self.CloseSubmenu();
                    self.closeSearch();

                    self.NavContainer.find('.nav-button').show();
                    self.toolsShrinkingWidthValues = [];
                    //self.menuitemsShrinkingWidthValue = 0;
                };
            };

            self.viewportWidth = newWidth;

            shrinkMenuLinksUnderOneTab();
            controlRightMenu();
            //textResize();
            shrinkAnchorSubmenu();
            showOrHideAnchNavBasedOnViewDevice();
            setActiveAnchor();
        });

        $(document).keypress(function (e) {
            if (e.keyCode === 27) {
                self.CloseSubmenu();
                self.closeAnchorsDropdown();
            }
        });


        //==== Public functions

        this.OpenSubmenu = function (jqObj) {
            self.closeSearch();
            $(window).scrollTop(0);
            toggleBodyScrollbar();

            if (self.SubmenuIsVisible) {
                self.CloseSubmenu();
            }

            var submenuTab = jqObj.attr("data-toggle-submenu");

            if (self.SubmenuIsVisible) {
                self.CloseSubmenu();
            } else {
                self.SubmenuIniciator = jqObj;
                self.SubmenuContainer.toggle();
                self.SubmenuContainer.find(submenuTab).addClass("active");
                jqObj.addClass("active");
                self.SubmenuIsVisible = !self.SubmenuIsVisible;
                toggleIconIfNeeded();
            }

            $('.masonry').masonry({
                itemSelector: '.col-in-masonry',
                transitionDuration: 0
            });

            self.NavContainer.trigger('opensubmenu');
            //stretchSubmenuToViewportIfNeeded();
        };

        this.CloseSubmenu = function () {
            if (self.SubmenuIniciator instanceof jQuery && self.SubmenuIsVisible === true) {
                self.closeSearch();
                self.SubmenuContainer.toggle();
                self.SubmenuIniciator.removeClass("active");
                self.SubmenuContainer.find(".specific-submenu").removeClass("active");
                self.SubmenuIsVisible = false;
                toggleIconIfNeeded();
                self.SubmenuIniciator = null;
                toggleBodyScrollbar();
                return true;
            };
        };

        this.toggleAnchorsDropdown = function () {
            self.anchorNav.find(".dropdown-icon").toggleClass('icon-arrow-small-down');
            self.anchorNav.find(".dropdown-icon").toggleClass('icon-arrow-small-up');

            if (!self.anchorsAreDropeddown) {
                self.anchorNav.addClass('expanded');
            } else {
                self.anchorNav.removeClass('expanded');
            };

            //toggleBodyScrollbar(); bug fixing 34474

            self.anchorsAreDropeddown = !self.anchorsAreDropeddown;
            setAnchorSubmenuMaxHeight();
        };

        this.closeAnchorsDropdown = function () {
            self.anchorNav.find(".dropdown-icon").addClass('icon-arrow-small-down');
            self.anchorNav.find(".dropdown-icon").removeClass('icon-arrow-small-up');

            self.anchorsAreDropeddown = false;
            self.anchorNav[0].classList.remove("expanded");
            //self.anchorNav.removeClass('expanded');
        };

        this.doSearch = function (phrase) {
            $("body").css("overflow", "hidden");

            if (searchRequest != null) {
                searchRequest.abort();
            }

            searchRequest = $.ajax({
                url: self.searchApiUrl + 'q=' + phrase + '*&t=search&count=' + self.searchSuggestionsNumber,
                dataType: 'json',
                method: "GET",
                beforeSend: function () {
                    self.searchSuggestionsContainer.text(" ");
                    self.linkToAllResults.attr("href", "#");
                },
                success: function (data) {
                    console.log(data);
                    processSearchResponse(data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        };

        this.closeSearch = function () {
            self.searchOvershadow.hide();

            self.searchField.removeClass("active");
            self.mobileSearchInputContainer.removeClass("active");

            self.searchField.find("input").val("");
            self.mobileSearchInputContainer.find("input").val("");
            $("body").css("overflow", "auto");
            self.activateSearch.css('display', 'inline-block');
        };


        //==== Private functions

        function showOrHideAnchNavBasedOnViewDevice() {
            var modulesContainers = $(".k2ng-module[data-moduleid]");
            setEnabledStickyNavigation(modulesContainers);

            if (self.viewportWidth <= 659 && !self.enabledStickyNavigation) {
                self.anchorNav.hide();
            } else if (self.enabledStickyNavigation) {
                self.anchorNav.show();
            }
        }

        function setSubmenuMaxHeight() {
            var container = self.NavContainer;
            var maxHeight = $(window).height() - container.find(".navbar-top").height();
            var compensation = self.viewportDevice === "sm" ? 85 : 15;
            self.submenuMaxHeight = maxHeight;
            container.find(".submenu-mobile-viewport-menu").css("max-height", maxHeight + "px");
            container.find(".submenu-container-holder > .submenu").css("max-height", maxHeight + "px");
            container.find(".search-suggestions-container").css("max-height", (maxHeight - compensation) + "px");
        }

        function computeToolsShrinkingWidthValues() {
            self.toolsShrinkingWidthValues = [];

            var widthSpared = 0;
            var shrinkVal;

            var leftSectionWidth = parseInt(getOuterWidthOfHiddenElement(self.NavContainer.find('.nav-links')));
            var rightSectionWidth = parseInt(getOuterWidthOfHiddenElement(self.NavContainer.find(".right-section")));

            var $toolLinks = self.NavContainer.find('.nav-button');

            $.each($toolLinks, function (i, toolLink) {
                shrinkVal = leftSectionWidth + rightSectionWidth - widthSpared;
                self.toolsShrinkingWidthValues[(($toolLinks.length - 1) - i)] = shrinkVal;
                widthSpared += parseInt($(toolLink).outerWidth(true));
            });
        }

        function computeMenuItemsShrinkWidthValue() {
            var leftSectionWidth = parseInt(getOuterWidthOfHiddenElement(self.NavContainer.find(".nav-links")));
            var rightSectionWidth = parseInt(getOuterWidthOfHiddenElement(self.NavContainer.find(".right-section")));
            //var leftSectionWidth = parseInt(self.NavContainer.find(".nav-links").outerWidth(true))
            //var rightSectionWidth = parseInt(self.NavContainer.find(".right-section").outerWidth(true));
            self.menuitemsShrinkingWidthValue = leftSectionWidth + rightSectionWidth;
        }

        function LanguageSelector(header) {
            var selectorToggler = header.NavContainer.find('.language-selector');

            getLanguageShorthand();

            // Events

            selectorToggler.on('click', header, function (e) {
                e.stopPropagation();
                e.data.CloseSubmenu();
                e.data.NavContainer.find('.language-list').toggle();
                e.data.NavContainer.find('.language-selector').toggleClass('opened');
            });

            $(document).on('click', header, function (e) {
                e.data.NavContainer.find('.language-list').hide();
                e.data.NavContainer.find('.language-selector').removeClass('opened');
            });

            $(window).on('scroll', header, function (e) {
                e.data.NavContainer.find('.language-list').hide();
                e.data.NavContainer.find('.language-selector').removeClass('opened');
            });

            function getLanguageShorthand() {
                var langElements = header.NavContainer.find('[data-culture]');
                var culture = '';
                var ar = [];

                $.each(langElements, function (i, e) {
                    culture = $(e).data('culture');

                    if (culture.indexOf("-") > 0) {
                        ar = culture.split('-');

                        if ($(e).html().length > 0) {
                            $(e).html($(e).html() + ' (' + ar[0].toUpperCase() + ')');
                        } else {
                            $(e).html($(e).html() + ar[0].toUpperCase());
                        }
                    } else {
                        if ($(e).html().length > 0) {
                            $(e).html($(e).html() + ' (' + culture.toUpperCase() + ')');
                        } else {
                            $(e).html($(e).html() + culture.toUpperCase());
                        }
                    }
                });
            }
        }

        function setActiveAnchor() {
            var newActiveAnchor;
            var $activeAnchor = self.anchorNav.find('.active-anchor');

            if (self.viewportWidth <= 659) {
                newActiveAnchor = self.anchorNav.find('.anchor-link').not(".hidden-sm");
            }
            else {
                newActiveAnchor = self.anchorNav.find('.anchor-link');
            }

            $activeAnchor.html(newActiveAnchor.length > 0 ? newActiveAnchor.html() : '');
            return $activeAnchor;
        }

        function AnchorsScrollChecking() {
            var _self = this;
            var posX, offset, idM, closestOffset, $anchor;
            var submenuHeight = self.anchorNav.height();
            var timeOut;

            _self.$activeAnchor = setActiveAnchor();

            this.check = function () {
                closestOffset = 1000;

                var visibleModules = $(".k2ng-module").filter(function (i, mod) {
                    return $(mod).css("display") !== "none";
                });

                $.each(visibleModules, function (i, module) {
                    offset = $(module).offset();
                    posX = offset.top - $(window).scrollTop() - self.anchorNav.height();

                    if (posX <= 0 && $(module).height() > 0) {
                        if (Math.abs(posX) < Math.abs(closestOffset)) {
                            closestOffset = posX;
                            idM = $(module).attr('id');
                        };
                    }
                });

                $anchor = self.anchorNav.find('.anchor-link[data-module-anchor="' + idM + '"]');

                self.anchorNav.find('.anchor-link').removeClass('active');
                $anchor.addClass('active');

                if ($anchor.length > 0) {
                    _self.$activeAnchor.html($anchor.html());
                }
            }

            $(window).on('scroll', function (event) {
                clearTimeout(timeOut);

                timeOut = setTimeout(function () {
                    _self.check();
                }, 100);
            });
        }

        function controlRightMenu() {
            //var windowWidth = $(window).width();

            //if (windowWidth > 982) {
            //    var rightMenuFreeSpace = 30;
            //    var rightMenuWidth = $(".navbar-buttons").width() + rightMenuFreeSpace;

            //    var maxLeftSpace = windowWidth - rightMenuWidth;

            //    $('.anchor').each(function () {
            //        if (($(this).offset().left + $(this).width()) > maxLeftSpace) {
            //            $(this).css("visibility", "hidden");
            //        } else {
            //            $(this).css("visibility", "visible");
            //        }
            //    });
            //} else {
            //    $('.anchor').each(function () {
            //        $(this).css("visibility", "visible");
            //    });
            //}

            //if (windowWidth > 982) {
            //    $('.anchor-link-cta').each(function () {
            //        $(this).parent().parent().css("visibility", "hidden");
            //    });
            //} else {
            //    $('.anchor-link-cta').each(function () {
            //        $(this).parent().parent().css("visibility", "visible");
            //    });
            //}
        }

        function shrinkAnchorSubmenu() {
            var width = self.anchorNav.width();
            var elementsWidth = self.anchorNav.find(".anchors").width() +
                parseInt(self.anchorNav.find(".anchors").css("padding-left")) +
                parseInt(self.anchorNav.find(".anchors").css("padding-right")) +
                self.anchorNav.find(".navbar-buttons").width() +
                parseInt(self.anchorNav.find(".navbar-buttons").css("padding-left")) +
                parseInt(self.anchorNav.find(".navbar-buttons").css("padding-right"));

            if (elementsWidth > width && !self.anchorNav.hasClass('compact-mode')) {
                self.anchorNav.addClass('compact-mode');
            } else if (width > self.anchorNavWidth && self.anchorNav.hasClass('compact-mode')) {
                self.anchorNav.removeClass('compact-mode');
            }
        }

        function setAnchorSubmenuMaxHeight() {
            var windowHeight = $(window).innerHeight();
            var topNavbarHeight = self.NavContainer.find(".navbar-top").height();

            if (self.anchorsAreDropeddown) {
                if (self.anchorNavIsSticky) {
                    if (self.anchorNav.height() > windowHeight) {
                        self.anchorNav.css('max-height', windowHeight + 'px');
                    } else {
                        self.anchorNav.css('max-height', 'none');
                    }
                } else {
                    if ((self.anchorNav.height() + topNavbarHeight) > windowHeight) {
                        self.anchorNav.css('max-height', (windowHeight - topNavbarHeight) + 'px');
                    } else {
                        self.anchorNav.css('max-height', 'none');
                    }
                }
            } else {
                self.anchorNav.css('max-height', 'none');
            }
        }

        function viewportDevice() {
            var windowWidth = $(window).width();
            if (windowWidth >= 1000) {
                return "lg";
            } else if (windowWidth < 1000 && windowWidth >= 600) {
                return "md";
            } else {
                return "sm";
            }
        }

        function processSearchResponse(data) {
            var container = self.searchSuggestionsContainer;
            container.text(" ");

            self.domain = data.ContainerToDomainPairs;

            var moreResultsCount = Math.max(0, data.TotalResults - self.searchSuggestionsNumber);
            self.resultsCountContainer.text(moreResultsCount);

            var allResultsUrl = self.allSearchResultsPage + self.searchPhrase;
            //var allResultsUrl = "http://" + data.ContainerToDomainPairs[0] + self.allSearchResultsPage + self.searchPhrase;
            self.linkToAllResults.attr("href", allResultsUrl);

            var searchResults = data.Pages.$values;
            $.each(searchResults, function (key, val) {
                var template = self.searchItemTemplate.clone();
                fillSearchResultTemplate(template, val.Document);
                template.appendTo(container);
            });
        }

        function fillSearchResultTemplate(element, data) {
            var pageCategory = data.PageCategory;
            element.attr("data-category", pageCategory);

            var pageUrl = "http://" + self.domain[data.ContainerName] + data.AbsolutePath;
            element.attr("href", pageUrl);

            element.click(searchResultClickHandler);

            var linkText = getLinkLabelForPageCategory(pageCategory);
            element.find(".search-text-link").text(linkText);

            element.children("[data-search]").each(function () {
                var field = $(this);

                function isEmpty(val) {
                    // XXX: String "undefined" is treated as empty, too.
                    return val === undefined || val === null || val === "" || val === "undefined";
                }

                function isString(object) {
                    return typeof object === "string" || object instanceof String;
                }

                function hasMethod(object, method) {
                    return object !== undefined && object !== null && typeof object[method] === "function";
                }

                function stringify(object) {
                    if (isString(object)) {
                        // Nothing to be done.
                    } else if (hasMethod(object, "toString")) {
                        object = object.toString();  // XXX: Still may not be a string for broken toString overrides.
                    } else {
                        object = "";
                    }
                    return object;
                }

                function htmlEncode(string) {
                    // XXX: Only strings are supported. Use stringify() to convert other values to string.
                    // Otherwise, null is encoded to "null" in our old jQuery, and to empty string in newer jQuery.
                    return $("<div/>").text(string).html();
                }

                // Use dot notation to access data. Convert the data to string. If it is plaintext, convert it to HTML.
                // HACK: We have no way to generally tell if a property contains HTML or plaintext.
                //       Currently, the only HTML-enabled property is IntroHtml, so let's use "Html" suffix as an indicator.
                var fieldName = field.data("search");
                var value = fieldName.split(".").reduce(function (obj, property) { return isEmpty(obj) ? null : obj[property]; }, data);
                value = stringify(value);
                if (fieldName.substr(-4) !== "Html") {
                    value = htmlEncode(value);
                }

                // Truncate value to specified length. If truncated, append ellipsis.
                // TODO: This is fragile as the cutoff may fall inside HTML tag or otherwise break its structure.
                // TODO: Even for plaintext, characters should be counted, not codepoints.
                if (field.attr("data-max-length")) {
                    var maxInFieldLength = field.data("max-length");
                    if (value.length > maxInFieldLength) {
                        value = value.substring(0, maxInFieldLength) + "...";
                    }
                }

                // Highlight first occurrence of the searched term.
                // TODO: The highlighting is broken when searching for text crossing element boundaries. Entity references are handled by encoding the search phrase.
                if (field.attr("data-bold-search") === "bold") {
                    value = highlightSearchedText(value, htmlEncode(self.searchPhrase));
                }

                field.html(value);
            });

            formatData(element);
        }

        function searchResultClickHandler(e) {
            var element = $(e.currentTarget);
            var headline = element.find(".item-headline").text();
            var position = element.index() + 1;
            var total = element.siblings().length + 1;
            quickResultsClick(headline, position, total);  // XXX: Defined in k2static://ImporterAssets/Pages.Scripts.gtm.js.
        }

        function getLinkLabelForPageCategory(pageCategory) {
            var label;

            switch (pageCategory) {
            case "news":
                label = self.strings.newsLinkLabel;
                break;
            case "event":
                label = self.strings.eventLinkLabel;
                break;
            case "promotions":
                label = self.strings.promotionLinklabel;
                break;
            case "modelderivative":
                label = self.strings.modelDerivativeLinkLabel;
                break;
            case "modelfamily":
                label = self.strings.modelFamilyLinkLabel;
                break;
            default:
                label = self.strings.otherLinklabel;
            }

            return label;
        }

        function highlightSearchedText(text, searchedText) {
            var textToReturn = text;
            var lowerCaseText = text.toLowerCase();
            var begin = lowerCaseText.indexOf(searchedText.toLowerCase());
            if (begin >= 0) {
                textToReturn = textToReturn.substring(0, begin) +
                    "<strong>" +
                    textToReturn.substring(begin, begin + searchedText.length) +
                    "</strong>" +
                    textToReturn.substring(begin + searchedText.length);
            }

            return textToReturn;
        }

        function formatData(searchResult) {
            makeMapLink(searchResult);
            displayImage(searchResult);
            fillCalendar(searchResult);
        }

        function makeMapLink(searchResult) {
            var mapLinkContainer = searchResult.children("[data-field='map']");
            mapLinkContainer.children("a").text("");
            var lat = searchResult.children("[data-search='GeoPoint.Latitude']").text();
            var lon = searchResult.children("[data-search='GeoPoint.Longitude']").text();
            if (lat && lon && lat.length > 0 && lon.length > 0) {
                var link = "http://maps.google.com/maps?q=" + lat + "," + lon + "&ll=" + lat + "," + lon + "&z=17";
                mapLinkContainer.children("a").attr("href", link);
                mapLinkContainer.children("a").text(strings.mapsLinkLabel);
            }
        }

        function displayImage(searchResult) {
            //console.log(searchResult);
            var images = searchResult.find("[data-search].item-picture");
            searchResult.children("[data-field='imageWrapper']").text("");
            var srcset = "";
            //var src = "";
            var size = 0;

            images.each(function (key, val) {
                size = ($(val).attr("data-search")).replace(/[^\d.]/g, "");
                if (size > 10) {
                    size /= 10;
                }
                if (($(val).html()).length > 0) {
                    //if (size == 1) {
                    //    src = $(val).html();
                    //}
                    srcset += $(val).html() + " " + size + "x,";
                }
            });
            if (srcset !== "") {
                //var imgTag = $("<img alt='Search result' />");
                //imgTag.attr({
                //    "srcset": srcset,
                //    "src": src
                //});

                //srcset = srcset.substring(0, srcset.length - 1);
                //searchResult.children("[data-field='imageWrapper']").html(imgTag);
                searchResult.children("[data-field='imageWrapper']").css("background-image", "url('" + searchResult.find("[data-search='Image1x']").text() + "')");
            }
        }

        function fillCalendar(searchResult) {
            var datetimeString = searchResult.find("[data-search='DateTime']").text();
            var calendar = searchResult.children("[data-field='datetime-calendar']");
            calendar.children(".sa-cal-month").children("span").text("");
            calendar.children(".sa-cal-day").children("span").text("");
            if (datetimeString && datetimeString.length > 0) {
                var dateObj = new Date(datetimeString);
                calendar.children(".sa-cal-month").children("span").text((dateObj.toString()).substring(4, 7));
                calendar.children(".sa-cal-day").children("span").text(dateObj.getDate());
                calendar.show();
            } else {
                calendar.hide();
            }
        }

        function toggleIconIfNeeded() {
            if (self.SubmenuIniciator.attr("data-icon-toggle") === "true") {
                self.SubmenuIniciator.find(".icon").toggle();
            }
        }

        function stretchSubmenuToViewportIfNeeded() {
            self.SubmenuContainer.children(".submenu").removeAttr("style");
            if ($(window).height() < (self.SubmenuContainer.children(".submenu").height() + self.SubmenuContainer.offset().top)) {
                self.SubmenuContainer.children(".submenu").css("max-height", ($(window).height() - self.SubmenuContainer.offset().top) + "px");
            }
        }

        function toggleBodyScrollbar() {
            $("body").toggleClass("hidden-scrollbar");
        }

        function initSmallDesktopViewportNavigation() {
            var SmallDesktopSubmenuContainer = self.SubmenuContainer.find(".collapsed-submenu-small-desktop");
            var SmallDesktopSecondaryNavContainer = self.SubmenuContainer.find(".small-desktop-submenu-item-list");
            var SmallDesktopSecondaryLinks = SmallDesktopSubmenuContainer.find("ul.small-desktop-nav-list > li");
            var SmallDesktopLinColumn;
            var clonedLinks;

            function openSmallDesktopSubmenu($menuItem) {
                SmallDesktopSecondaryLinks.find('.active').removeClass('active');
                $menuItem.addClass("active");
                var dataContainerID = $menuItem.attr("data-submenu-id");
                clonedLinks = $(dataContainerID).find(".link-collumn").clone();
                SmallDesktopSecondaryNavContainer.html(clonedLinks);
                SmallDesktopSecondaryNavContainer.find('.col-in-masonry').addClass('col-lg-8');

                $('.masonry').masonry({
                    itemSelector: '.col-in-masonry',
                    transitionDuration: 0
                });

                calculateSubmenuHeight();
            }

            function calculateSubmenuHeight() {
                SmallDesktopLinColumn = SmallDesktopSecondaryNavContainer.find(".link-collumn");
                SmallDesktopLinColumn.css('height', 'auto');
                SmallDesktopLinColumn.css('height', parseInt(SmallDesktopSubmenuContainer.height()) + 'px');
            }

            function openFirstMenuItem() {
                openSmallDesktopSubmenu(SmallDesktopSubmenuContainer.find("ul.small-desktop-nav-list li:first-child > .small-dekstop-menu-item"));
            }

            SmallDesktopSecondaryLinks.find(".small-dekstop-menu-item").on("click", function () {
                openSmallDesktopSubmenu($(this));
            });

            self.NavContainer.on('opensubmenu', function () {
                openFirstMenuItem();
            });
        }

        function initTabletViewportNavigation() {
            var tabletSubmenuContainer = self.SubmenuContainer.find(".submenu-tablet-viewport-menu");
            var tabletSecondaryNavContainer = self.SubmenuContainer.find(".tablet-viewport-secondary-nav-wrapper");
            var tabletSecondaryNavLinksContainer = tabletSecondaryNavContainer.find(".link-collumns-wrapper");
            var tabletSecondaryCTAContainer = tabletSecondaryNavContainer.find(".cta-wrapper");
            var clonedLinks;

            tabletSubmenuContainer.find("ul.tablet-nav-list > li").on("click", function () {
                if ($(this).hasClass('active')) {
                    tabletSubmenuContainer.removeClass('tablet-submenu-opened');
                    tabletSubmenuContainer.find("ul.tablet-nav-list > li").removeClass("active");
                    tabletSecondaryNavLinksContainer.text("");
                } else {
                    tabletSubmenuContainer.addClass('tablet-submenu-opened');
                    var dataContainerID = $(this).attr("data-submenu-id");
                    tabletSubmenuContainer.find("ul.tablet-nav-list > li").removeClass("active");
                    $(this).addClass("active");

                    clonedLinks = $(dataContainerID).find(".link-collumn").clone();
                    tabletSecondaryNavLinksContainer.html(clonedLinks);

                    $('.masonry').masonry({
                        itemSelector: '.col-in-masonry',
                        transitionDuration: 0
                    });
                }
            });
        }

        function initMobileViewportNavigation() {
            var toolsLinksContainer = self.SubmenuContainer.find(".mobile-viewport-tools-submenu");
            var clonedToolsLinks = $(toolsLinksContainer.attr("data-submenu-id")).find(".tools-tiles-wrapper").clone();
            toolsLinksContainer.html(clonedToolsLinks);

            self.SubmenuContainer.find(".navigate-to-mobile-second-level-nav").on("click", function () {
                var dataContainerID = $(this).attr("data-submenu-id");
                var linkLabel = $(this).find(".mobile-nav-label").html();
                var clonedLinks = $(dataContainerID).find(".link-collumn").clone();
                $("#importer-header-mobile-second-level-menu .name-of-section").html(linkLabel);
                $("#importer-header-mobile-second-level-menu .link-list").html(clonedLinks);
            });
        }

        function makeStickyScroll(delay) {
            if (location.href.indexOf('#') > -1) {
                location.href += '';
            }
            if (window.location.href && hasAnchorUrl(window.location.href)) {
                setTimeout(function () {
                    var top = $(window).scrollTop() - 50;
                    $(window).scrollTop(top);
                }, delay);
            }
        }

        function hasAnchorUrl(url) {
            var re = '#anchor-M';
            var found = url.search(re);
            return found;
        }

        function reinitModuleAnchors() {
            var anchorsWrapper = $(".anchors");
            anchorsWrapper.empty();
            initModuleAnchors();
        }

        function setEnabledStickyNavigation(modules) {
            self.enabledStickyNavigation = false;

            // Display navigation only when module with attribtue data-display-in-sticky=true exists and 1. or 2. is true:
            // 1. using device with screen bigger then 659px (no need to check for 'hidden on mobile' attribute)
            // 2. using device with screen smaller or equal to 659px and module doesn't have the 'hidden on mobile' attribute set to true
            $.each(modules, function (i, element) {
                if ($(element).attr("data-display-in-sticky") === "true") {
                    if (self.viewportWidth > 659 || !$(element).hasClass("hidden-sm")) {
                        self.enabledStickyNavigation = true;
                        return false;
                    }
                }
            });
        }

        function initModuleAnchors() {
            //self.enabledStickyNavigation = $('div.wrap-page').hasClass("has-sticky-2nd-level"); bug 36415 fixing
            var modulesContainers = $(".k2ng-module[data-moduleid]");
            setEnabledStickyNavigation(modulesContainers);

            if (self.enabledStickyNavigation) {
                var anchorsSourceContainers = $("[data-insert-anchors='true']");
                var anchorsWrapper = $("<ul class='anchors'></ul>");
                var anchor = $("<li class='anchor'></li>");
                var anch, moduleID;

                $.each(modulesContainers, function (i, element) {
                    if ($(element).attr("data-display-in-sticky") === "true") {
                        self.anchorNav.show();

                        if (
                            $(element).hasClass("k2ng-module-ImporterLatestNewsModule") ||
                                $(element).hasClass("k2ng-module-ImporterLatestAwardsModule") ||
                                $(element).hasClass("k2ng-module-ImporterLatestPromotionsModule") ||
                                $(element).hasClass("k2ng-module-ImporterUpcomingEventsModule")
                        ) {
                            if ((!$(element).find(".container-sticky-enable")) || (!$(element).find(".container-sticky-enable").hasClass("sticky-enabled"))) {
                                $(element).css("display", "none");
                                return true;
                            }
                        }

                        if ($(element).css("display") === "none") {
                            $(element).css("display", "block");
                        }

                        moduleID = $(element).data("moduleid");
                        anch = anchor.clone()
                            .html("<a class='anchor-link' href='#' data-module-anchor='" + moduleID + "'>" + $(element).attr("data-displayname") + "</a>")
                            .on("click", function (event) {
                                event.preventDefault();
                                self.CloseSubmenu();
                                self.closeAnchorsDropdown();
                                var module = $(".k2ng-module[data-moduleid='" + $(this).children("a.anchor-link").attr("data-module-anchor") + "']");
                                $(window).scrollTop(module.offset().top - (self.anchorNav.height() - 5));
                            });

                        if ($(element).hasClass("hidden-sm")) {
                            anch.addClass("hidden-sm");
                            anch.find("a.anchor-link").addClass("hidden-sm");
                        }

                        anchorsWrapper.append(anch);
                    } else if ((
                        $(element).hasClass("k2ng-module-ImporterLatestNewsModule") ||
                            $(element).hasClass("k2ng-module-ImporterLatestAwardsModule") ||
                            $(element).hasClass("k2ng-module-ImporterLatestPromotionsModule") ||
                            $(element).hasClass("k2ng-module-ImporterUpcomingEventsModule"))) {
                        if (!$(element).find(".container-sticky-enable").hasClass("sticky-enabled")) {
                            $(element).css("display", "none");
                            return true;
                        } else {
                            if ($(element).css("display") === "none") {
                                $(element).css("display", "block");
                            }
                        }
                    }
                });

                var tool1 = $("#navbar-button1");
                var tool2 = $("#navbar-button2");

                if (tool1.text() != "" && tool2.text() != "") {
                    anch = "<div class='hidden-lg hidden-sm content-centering'><a class='anchor-link anchor-link-cta btn btn-sa-primary-extra-small navbar-button spacer' href='" + tool1.attr("href") + "'>" + tool1.text() + "</a>";
                    anch += "<a class='anchor-link anchor-link-cta btn btn-sa-secondary-inverted-extra-small' href='" + tool2.attr("href") + "'>" + tool2.text() + "</a></div>";
                    anch += "<div class='hidden-lg hidden-md content-centering'><a class='anchor-link anchor-link-cta btn btn-sa-primary-extra-small navbar-button top-bottom-spacer' href='" + tool1.attr("href") + "'>" + tool1.text() + "</a></div>";
                    anch += "<div class='hidden-lg hidden-md content-centering'><a class='anchor-link anchor-link-cta btn btn-sa-secondary-inverted-extra-small bottom-spacer' href='" + tool2.attr("href") + "'>" + tool2.text() + "</a></div>";
                    anchorsWrapper.append(anch);
                } else if (tool1.text() != "") {
                    tool1 = $("#navbar-button1");  // TODO: This and the condition below are probably unnecessary.

                    if (tool1.text() != "") {
                        anch = "<div class='hidden-lg content-centering'><a class='anchor-link anchor-link-cta btn btn-sa-primary-extra-small navbar-button top-bottom-spacer' href='" + tool1.attr("href") + "'>" + tool1.text() + "</a></div>";
                        //anch = anchor.clone().html("<div class='hidden-lg content-centering'><a class='anchor-link anchor-link-cta btn btn-sa-primary-extra-small navbar-button' href='" + tool1.attr("href") + "'>" + tool1.text() + "</a></div>");
                        anchorsWrapper.append(anch);
                    }
                }

                anchorsSourceContainers.html(anchorsWrapper);
            }

            $(window).on('scroll', function (event) {
                if (($(window).scrollTop() > 70 && $(window).width() >= 660) || ($(window).scrollTop() > 50 && $(window).width() < 660)) {
                    if (self.enabledStickyNavigation && self.anchorNav.find("li").length !== 0) {
                        self.anchorNav.addClass("sticky-anchor-header");
                        self.NavContainer.addClass("nav-is-sticky");
                        self.anchorNavIsSticky = true;
                    }
                } else {
                    self.anchorNav.removeClass("sticky-anchor-header");
                    self.NavContainer.removeClass("nav-is-sticky");
                    self.anchorNavIsSticky = false;
                }

                controlRightMenu();
                //textResize();
            });

            self.anchorNav.find(".back-to-top").on("click", function () {
                self.closeAnchorsDropdown();
                $(window).scrollTop(0);
            });

            self.anchorsScrollingFuncionality = new AnchorsScrollChecking();
        }

        function activatePageAnchor() {
            var modulesContainers = $(".k2ng-module[data-moduleid]");
            $.each(modulesContainers, function (i, element) {
                if (document.location.href.indexOf(element.previousElementSibling.id) !== -1) {
                    $(window).scrollTop($(".k2ng-module[data-moduleid='" + element.id + "']").offset().top);
                }
            });
        }

        function shrinkMenuLinksUnderOneTab() {
            var windowWidth = parseInt($(window).width());

            if (self.menuitemsShrinkingWidthValue === 0) {
                computeMenuItemsShrinkWidthValue();
            }

            if (windowWidth <= self.menuitemsShrinkingWidthValue) {
                self.ulNavList.addClass("tablet-viewport");
                self.NavContainer.addClass('menu-shrinked');
                toolsLinksShrinking();
            } else {
                self.ulNavList.removeClass("tablet-viewport");
                self.NavContainer.removeClass('menu-shrinked');

                if (self.toolsShrinkingWidthValues.length > 0) {
                    toolsLinksShrinking();
                }
            }
        }

        function toolsLinksShrinking() {
            var windowWidth = $(window).width();
            var $toolLinks = self.NavContainer.find('.nav-button');

            if (self.toolsShrinkingWidthValues.length === 0) {
                computeToolsShrinkingWidthValues();
            }

            $.each(self.toolsShrinkingWidthValues, function (i, val) {
                if (windowWidth <= val) {
                    $($toolLinks[i]).hide();
                } else {
                    $($toolLinks[i]).show();
                }
            });
        }

        function getOuterWidthOfHiddenElement($el) {
            var width = 0;

            if ($el.css('display') === 'hidden') {
                $el.css({ position: "absolute", visibility: "hidden", display: "block" });
                width = $el.outerWidth(true);
                $el.css({ position: "", visibility: "", display: "" });
            } else {
                width = $el.outerWidth(true);
            }

            $.each($el.find('hidden-sm'), function (i, e) {
                $(e).css({ position: "absolute", visibility: "hidden", display: "block" });
                width += $el.outerWidth(true);
                $(e).css({ position: "", visibility: "", display: "" });
            });

            return width;
        }

        //function textResize() {
        //    if (self.enabledStickyNavigation) {
        //        var divWidth = $(".anchor-list").width()-150;
        //        var textSize = $(".anchor-link").first().width();
        //        var actualFontSize = parseInt($(".anchor-link").first().css("font-size"), 10);
        //        var maxSteps = self.defaultFontSizeSticky - self.minStickyFontSize;

        //        if (divWidth < textSize && divWidth > 0) {
        //            for (var i = 0; i < maxSteps; i++) {
        //                if (divWidth < textSize) {
        //                    $(".anchor-link").css("font-size", (self.defaultFontSizeSticky - i));
        //                    textSize = $(".anchor-link").first().width();
        //                } else {
        //                    break;
        //                }
        //            }
        //        } else if (actualFontSize < self.defaultFontSizeSticky) {
        //            for (var i = 0; i < maxSteps; i++) {
        //                if (divWidth > textSize && (actualFontSize+i) < self.defaultFontSizeSticky) {
        //                    $(".anchor-link").css("font-size", (actualFontSize + i));
        //                    textSize = $(".anchor-link").first().width();
        //                } else {
        //                    break;
        //                }
        //            }
        //        }
        //    }
        //}
    }
});
