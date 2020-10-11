(function ($) {
    $.fn.iframeResizer = function (options) {
        
        return this.filter("iframe").each(function () {
            var $this = $(this);

            window.addEventListener('message', function (event) {
                if ($this.attr("src").indexOf(event.origin) != -1 && event.data.url == $this.attr("src")) {
                    console.log("Received message to resize iframe.", event.data);
                    if (event.data != null && event.data.height != null) {
                        $this.css("height", event.data.height + "px");
                    }
                } 
            });
        });
    };

    $("iframe.resize-height").iframeResizer();
})(jQuery);
