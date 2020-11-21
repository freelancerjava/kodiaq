$(function () {
	'use strict';

	var comparisonRibbon = new Ribbon();

	$('[data-compare-mbv]').on('click', function () {
		buttonClickHandler($(this));
	});

	$(document).on('sa-range-filter-was-altered', function (event, parentElement) {
		var newButtons = $(parentElement).find('[data-compare-mbv]');

		newButtons.on('click', function () {
			buttonClickHandler($(this));
		})
	})

	function buttonClickHandler(button) {
		var vehicleInfo = {
			mbv: button.attr('data-compare-mbv'),
			imageUrl: (typeof button.attr('data-compare-image') === "string" && button.attr('data-compare-image').length > 0) ? button.attr('data-compare-image') : button.attr('data-dummy-picture'),
			displayName: button.attr('data-compare-name'),
			carline: button.attr('data-compare-carline')
		};

		comparisonRibbon.addVehicle(vehicleInfo);
	}

	function Ribbon() {
		var self = this;
		var bid = $('.k2ng-page').attr('data-context-bid');
		var culture = $('.k2ng-page').attr('data-context-culture');
		var cookieName = 'sa-compare-module-vehicle';
		var comparisonToolUrl = $('[data-compare-url]').attr('data-compare-url');

		var openedRibbonClass = "sa-comparison-ribbon-opened";

		var resx = {
			compare: $('footer[data-compare]').attr('data-compare'),
			addAnotherCar: $('footer[data-add-car]').attr('data-add-car'),
			cancel: $('footer[data-add-car]').attr('data-cancel')
		}

		var layer = new CompareLayer();

		var ribbonWrapperHTML = $('<aside class="sa-comparison-ribbon"></aside>');
		var bootstrapContainer = $('<div class="ribbon-wrapper"></div>');
		var ribbonContainer = $('<div class="ribbon-container"></div>');
		var closeRibbonIcon = $('<div class="icon icon-close-medium-white hide-ribbon hidden-sm"></div>');
		var comparedVehicle1Container = $('<div class="vehicle-container"></div>');
		var comparedVehicle2Container = $('<div class="vehicle-container"></div>');
		var compareButtonContainer = $('<div class="button-container hidden-sm"></div>');
		var compareButton = $('<button disabled class="btn btn-sa-primary-small compare-button">' + resx.compare + '</button>');
		var compareButtonMobileContainer = $('<div class="button-container-mobile visible-sm col-sm-24"></div>');
		var compareButtonMobile = $('<button disabled class="btn btn-sa-primary-small compare-button">' + resx.compare + '</button>');
		var cancelButtonMobile = $('<button class="btn btn-sa-secondary-inverted-small cancel-button">' + resx.cancel + '</button>');

		var selectVehicleRibbon = $('<div class="select-vehicle-ribbon"></div>');
		var selectVehicleWrapper = $('<div class="select-vehicle-wrapper"></div>');
		var vehicleCarouselWrapper = $('<div class="select-vehicle-carousel-wrapper"></div>');
		var vehicleCarousel = $('<div class="carousel select-vehicle-carousel"></div>');
		var caoruselPrev = $('<span class="icon carousel-control-icon icon-arrow-medium-left carousel-prev hidden-sm"></span>');
		var caoruselNext = $('<span class="icon carousel-control-icon icon-arrow-medium-right carousel-next hidden-sm"></span>');
		var closeSelectVehicleIcon = $('<div class="icon icon-close-medium-white hide-select-vehicle"></div>');

		compareButton.on('click', function () {
			compareVehicles();
		});

		compareButtonMobile.on('click', function () {
			compareVehicles();
		});

		closeRibbonIcon.on('click', function () {
			hideRibbon();
		})

		cancelButtonMobile.on('click', function () {
		    hideRibbon();
		})

		this.vehicles = {
			vehicle1: new vehicle(1),
			vehicle2: new vehicle(2)
		}

		this.ribbonIsVisible = false;
		this.compareLinkEnabled = false;
        this.selectVehicleRibbonIsVisible = false;
        this.windowWidth = window.innerWidth;

		$(window).on('resize', function () {
			if (self.ribbonIsVisible === false)
				hideRibbon();	
		})

		// Public functions

		this.addVehicle = function (vehicleInfo, slot) {
			slot = slot || firstFreeSlot();

			if (!self.ribbonIsVisible)
				showRibbon();

			if (slot >= 0) {
				var vehicle = self.vehicles['vehicle' + slot];
				vehicle.setImage(vehicleInfo.imageUrl);
				vehicle.setDisplayName(vehicleInfo.displayName);
				vehicle.emptyPlaceholder.hide();
				vehicle.mbv = vehicleInfo.mbv;
				vehicle.carline = vehicleInfo.carline;
				vehicle.isFilled = true;

				setVehicleCookies(vehicleInfo, slot);
			} else if (slot = -1) { // if there are no free slots replace the last one
				var lastVehicleSlot = getLastVehicleSlot();
				self.removeVehicle(lastVehicleSlot)
				self.addVehicle(vehicleInfo, lastVehicleSlot);
			}

			if (enoughVehiclesToCompare())
				enableCompareLink();
		}

		this.removeVehicle = function (slot) {
			var vehicle = self.vehicles['vehicle' + slot];
			vehicle.setImage();
			vehicle.setDisplayName();
			vehicle.emptyPlaceholder.show();
			vehicle.mbv = '';
			vehicle.isFilled = false;

			deleteVehicleCookies(slot);

			if (!enoughVehiclesToCompare())
				disableCompareLink();

			if (numberOfVehiclesInComparison() === 0)
				hideRibbon();
		}

		// init calls

		composeHTML();
		checkCookiesAndFillItsData();

		// Private functions

		function showRibbon() {
			$(ribbonWrapperHTML).css('visibility', 'visible');
			$(ribbonWrapperHTML).css('bottom', 0);
			$(ribbonWrapperHTML).addClass(openedRibbonClass);
			self.ribbonIsVisible = true;
		}

		function hideRibbon() {
		    closeVehicleSelectRibbon()
		    $(ribbonWrapperHTML).css('bottom', -(parseInt($(ribbonWrapperHTML).css('height')) + 10)); // Without this addition dropped shadow would be still visible
		    $(ribbonWrapperHTML).removeClass(openedRibbonClass);
			self.ribbonIsVisible = false;
		}

		function vehicleInCarouselRibbon(vehicle) {
		    var _self = this;
		    this.vehicleCarouselItem = $('<div class="vehicle-carousel-item"></div>');
		    this.vehicleCarouselImage = $('<img class="vehicle-carousel-image"></img>');
		    this.vehicleCarouselLabel = $('<span class="vehicle-carousel-label"></span>');

		    initCarouselItem();

		    function initCarouselItem() {
		        _self.vehicleCarouselItem
                .append(
                    _self.vehicleCarouselImage
                )
		        .append(
                    _self.vehicleCarouselLabel
                );

		        _self.vehicleCarouselImage.attr('src', vehicle.imageUrl);
		        _self.vehicleCarouselLabel.html(vehicle.displayName);

		        initCarouselItemEvents();

		        _self.vehicleCarouselItem.appendTo(vehicleCarousel);
		    }

		    function initCarouselItemEvents() {
		        _self.vehicleCarouselItem.on('click', function (event) {
		            self.addVehicle(vehicle);
		            closeVehicleSelectRibbon()
		        });
		    }
		}

		function openVehicleSelectRibbon() {
		    self.selectVehicleRibbonIsVisible = true;
		    selectVehicleRibbon.addClass('select-vehicle-visible');
		    ribbonWrapperHTML.find('.empty-placeholder').addClass('icon-arrow-medium-down');
		    ribbonWrapperHTML.find('.empty-placeholder').removeClass('icon-arrow-medium-up');
		}

		function closeVehicleSelectRibbon() {
		    self.selectVehicleRibbonIsVisible = false;
		    selectVehicleRibbon.removeClass('select-vehicle-visible');
		    ribbonWrapperHTML.find('.empty-placeholder').addClass('icon-arrow-medium-up');
		    ribbonWrapperHTML.find('.empty-placeholder').removeClass('icon-arrow-medium-down');
        }

		function vehicle(orderNumber) {
			var _self = this;
			this.vehicleImageContainer = $('<div class="vehicle-image-container"></div>');
			this.HTMLImage = $('<img data-vehicle-no="' + orderNumber + '" class="vehicle-image vehicle' + orderNumber + '" />');
			this.displayName = $('<span class="vehicle-display-name"></span>');
			this.removeVehicleIcon = $('<span class="icon icon-close-small-white vehicle-remove-icon"></span>');
			this.emptyPlaceholder = $('<div class="empty-placeholder icon icon-arrow-medium-up">' + resx.addAnotherCar + '</div>');
			this.mbv = '';
			this.carline = '';
			this.isFilled = false;

			this.vehicleImageContainer.hide();
			this.displayName.hide();

			this.removeVehicleIcon.on('click', function () {
				self.removeVehicle(orderNumber);
			});

			this.setDisplayName = function (displayName) {
				if (displayName) {
					_self.displayName.html(displayName);
					_self.displayName.show();
				} else {
					_self.displayName.html('');
					_self.displayName.hide();
				}
			}

			this.setImage = function (url) {
				if (typeof url === 'string') {
					_self.HTMLImage.attr('src', url);
					if (url.length === 0)
						_self.vehicleImageContainer.addClass('no-image-available');

					_self.vehicleImageContainer.show();
				} else {
					_self.HTMLImage.attr('src', '');
					_self.vehicleImageContainer.hide();
					_self.vehicleImageContainer.removeClass('no-image-available');
				}
			}
		}

		function checkCookiesAndFillItsData() {
			var vehicleInfo;
			var i = 1;

			while (typeof self.vehicles['vehicle' + i] !== "undefined") {
				if (getCookieForVehicleInSlot(i) !== '') {
					vehicleInfo = getCookieForVehicleInSlot(i);
					self.addVehicle(vehicleInfo, i);
					if (!self.ribbonIsVisible)
						showRibbon();
				};
				i++;
			}
		}

		function CompareLayer() {
			var _self = this;
			var layer = $('<div class="sa-compare-layer"></div>');
			var iframe = $('<iframe class="compare-iframe"></iframe>');
			var closeLayerIcon = $('<div class="layer-close-button"></div>');

			layer.hide();

			closeLayerIcon.on('click', function () {
				closeLayer();
			});

			$('body').append(
				layer
				.append(
					iframe
				)
				.append(
					closeLayerIcon
				)
			);

			this.openLayer = function (url) {
				layer.show();
				$('body').addClass('no-scroll-due-to-opened-layer');

				iframe.attr('src', url);
			}

			setIframeSize();

			$(window).on('resize', function () {
				setIframeSize();
			});
			
			function setIframeSize() {
				var IWidth = parseInt(window.innerWidth);
				var IHeight = parseInt(window.innerHeight);

				iframe.css({
					width: IWidth + 'px',
					height: IHeight + 'px'
				})
			}

			function closeLayer() {
				layer.hide();
				$('body').removeClass('no-scroll-due-to-opened-layer');
			}
		}

		function composeHTML() {
			$('body').append(
				ribbonWrapperHTML
                .append(
                    selectVehicleRibbon
                    .append(
                        selectVehicleWrapper
                        .append(
                            vehicleCarouselWrapper
                            .append(
                                vehicleCarousel
                            )
                            .append(
                                caoruselPrev
                            )
                            .append(
                                caoruselNext
                            )
                        )
                        .append(
                            closeSelectVehicleIcon
                        )
                    )
                )
				.append(
					bootstrapContainer.clone()
                    .append(
                        ribbonContainer.clone()
                        .append(
						    comparedVehicle1Container.clone()
						    .append(
							    self.vehicles.vehicle1.vehicleImageContainer
							    .append(
								    self.vehicles.vehicle1.HTMLImage
							    )
							    .append(
								    self.vehicles.vehicle1.removeVehicleIcon
							    )
						    )
						    .append(
							    self.vehicles.vehicle1.emptyPlaceholder
						    )
						    .append(
							    self.vehicles.vehicle1.displayName
						    )
					    )
					    .append(
						    compareButtonContainer.clone()
						    .append(
							    compareButton
						    )
					    )
					    .append(
						    comparedVehicle2Container.clone()
						    .append(
							    self.vehicles.vehicle2.vehicleImageContainer
							    .append(
								    self.vehicles.vehicle2.HTMLImage
							    )
							    .append(
								    self.vehicles.vehicle2.removeVehicleIcon
							    )
						    )
						    .append(
							    self.vehicles.vehicle2.emptyPlaceholder
						    )
						    .append(
							    self.vehicles.vehicle2.displayName
						    )
					    )
					    .append(
						    compareButtonMobileContainer.clone()
                            .append(
                                cancelButtonMobile
                            )
						    .append(
							    compareButtonMobile
						    )
					    )
                    )
				)
				.append(
					closeRibbonIcon
				)
			);

			if (typeof comparisonVehicleInfo != 'undefined') {
			    composeAndInitVehiclesSelection();
			}
			//responsiveCarouselEventsFix()
		}

		function composeAndInitVehiclesSelection() {
		    bindEventsForDispalyingVehicleSelector()

		    $.each(comparisonVehicleInfo, function (i, vehicle) {
		        new vehicleInCarouselRibbon(vehicle);
		    });

		    initVehicleSelectCarousel();
		    initMobileBehaviourForVehicleSelection();

		    closeSelectVehicleIcon.on('click', function (event) {
		        closeVehicleSelectRibbon();
		    });
		}

		function bindEventsForDispalyingVehicleSelector() {
		    var j = 1;
		    while (typeof self.vehicles['vehicle' + j] !== "undefined") {
		        self.vehicles['vehicle' + j].emptyPlaceholder.on('click', function () {
		            if (!self.selectVehicleRibbonIsVisible) {
		                openVehicleSelectRibbon();
		            } else {
		                closeVehicleSelectRibbon();
		            };

		        });

		        j++;
		    }
		}

		function initMobileBehaviourForVehicleSelection() {
		    if (window.innerWidth <= 659) {
		        selectVehicleRibbon.height(window.innerHeight + 'px');
		    }

		    $(window).on('resize', function (event) {
		        if (window.innerWidth <= 659) {
		            selectVehicleRibbon.height(window.innerHeight + 'px');
		        } else {
                    selectVehicleRibbon.attr('style', '');

                    if (self.windowWidth <= 659) {
                        initVehicleSelectCarousel();
                    }
                }

                self.windowWidth = window.innerWidth;
		    });
		}

		function initVehicleSelectCarousel() {
		    var lg_responsiveSetting, md_responsiveSetting;

		    if (comparisonVehicleInfo.length <= 3) {
		        lg_responsiveSetting = 'unslick';
		        md_responsiveSetting = 'unslick';

		        caoruselPrev.addClass('hidden-lg');
		        caoruselNext.addClass('hidden-lg');
		        caoruselPrev.addClass('hidden-md');
		        caoruselNext.addClass('hidden-md');

		    } else if (comparisonVehicleInfo.length <= 4) {
		        lg_responsiveSetting = 'unslick';

		        md_responsiveSetting = {
		            slidesToShow: 3,
		            slidesToScroll: 1
		        };

		        caoruselPrev.addClass('hidden-lg');
		        caoruselNext.addClass('hidden-lg');
		    } else if (comparisonVehicleInfo.length > 4) {
		        lg_responsiveSetting = {
		            slidesToShow: 4,
		            slidesToScroll: 1
		        };

		        md_responsiveSetting = {
		            slidesToShow: 3,
		            slidesToScroll: 1
		        };
		    }

		    vehicleCarousel.slick({
		        dots: false,
		        autoplay: false,
		        arrows: true,
		        infinite: true,
		        speed: 800,
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        prevArrow: caoruselPrev,
		        nextArrow: caoruselNext,
		        responsive: [
                    {
                        breakpoint: 999999999,
                        /*
                          There is no option in slick carousel to set min-width @media query, it works just with max-width :-(
                          So I set hight number to define desktop version of comparison carousel
                        */
                        settings: lg_responsiveSetting
                    },
                    {
                        breakpoint: 1000,
                        settings: md_responsiveSetting
                    },
                    {
                        breakpoint: 660,
                        settings: 'unslick'
                    }
		        ]
		    });
		}

		function firstFreeSlot() {
			//returns -1 if there is no free slot
			var freeslot = -1;
			var i = 1;
			while (typeof self.vehicles['vehicle' + i] !== "undefined") {
				if (self.vehicles['vehicle' + i].isFilled === false) {
					freeslot = i;
					break;
				}
				i++;
			}

			return freeslot;
		}

		function enoughVehiclesToCompare() {
			return (numberOfVehiclesInComparison() >= 1);
		}

		function enableCompareLink() {
			self.compareLinkEnabled = true;
			compareButton.prop('disabled', false);
			compareButtonMobile.prop('disabled', false);
		}

		function disableCompareLink() {
			self.compareLinkEnabled = false;
			compareButton.prop('disabled', true);
			compareButtonMobile.prop('disabled', true);
		}

		function compareVehicles() {
			var url = '';
			if (self.compareLinkEnabled === true) {

				var i = 1;

				url = comparisonToolUrl.indexOf('?') < 0 ? comparisonToolUrl + '?': comparisonToolUrl + '&';

				while (typeof self.vehicles['vehicle' + i] !== "undefined") {
					url += 'mbv' + i + '=' + self.vehicles['vehicle' + i].mbv + '&carline' + i + '=' + self.vehicles['vehicle' + i].carline + '&';

					i++;
				}

				url = url.slice(0, -1);

				window.location.href = url;

				//layer.openLayer(url);
			}
		}

		function numberOfVehiclesInComparison() {
			var i = 1;
			var counter = 0;
			while (typeof self.vehicles['vehicle' + i] !== "undefined") {
				if (self.vehicles['vehicle' + i].isFilled === true) {
					counter++;
				}
				i++;
			}

			return counter;
		}

		function getLastVehicleSlot() {
			var i = 1;
			while (typeof self.vehicles['vehicle' + i] !== "undefined") {
				i++;
			}

			return (i - 1);
		}

		// Cookies handling functions

		function setVehicleCookies(vehicleInfo, slot) {
			document.cookie = cookieName + slot + '=' + JSON.stringify(vehicleInfo);
		}

		function deleteVehicleCookies(slot) {
			document.cookie = cookieName + slot + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
		}

		function getCookieForVehicleInSlot(slot) {
			var name = cookieName + slot + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return JSON.parse(c.substring(name.length, c.length));
				}
			}
			return "";
		}
	}
});