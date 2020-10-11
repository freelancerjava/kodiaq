$(function () {
    var viewportWidth = $(document).width();
    var module = $("footer");

    $(window).resize(function () {
        var destkopBreakpoint = 1000;
        if (viewportWidth < destkopBreakpoint && $(document).width() >= destkopBreakpoint) {
            //module.find(".footer-links-sector").hide();
        }
    });

    module.find(".toggle-links").on('click', function () {
        $(this).find(".icon").toggleClass("icon-arrow-medium-up");
        $(this).find(".icon").toggleClass("icon-arrow-medium-down");
        $("footer .footer-links-sector").slideToggle("fast", function () {
            //(NICE TO HAVE) I suppose there will be requirement to scroll when the menu is revealed
        });
    });

    //module.find(".hotline-button .btn").on('click', function () {
    //    if ($(this).parent().hasClass("active")) {
    //    	$(this).parent().children().toggle();
    //    	$(this).parent().removeClass("active");
    //    }
    //});

    new LanguagesToggle(module);

    function LanguagesToggle(module) {
        var self = this;
        this.toggleIniciator = module.find("[data-toggle-langs]");
        this.allLanguagesContainer = module.find(".all-langs");
        this.otherLanguages = module.find(".other-languages");
        this.isExpanded = false;

        this.toggleIniciator.on("click", function () {
            self.toggleLanguages();
        });

        this.toggleLanguages = function () {
            self.isExpanded = !self.isExpanded;
            self.otherLanguages.toggleClass("expanded").toggleClass("collapsed");
            self.allLanguagesContainer.slideToggle();
        };
    };
});