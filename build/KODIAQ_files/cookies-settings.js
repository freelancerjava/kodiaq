(function (w, $) {
    if (w.CookiesManager && $.isArray(w.CookiesManager._cookiesConsentClbk)) {
        var clbk;
        while (clbk = w.CookiesManager._cookiesConsentClbk.pop()) {
            if (typeof clbk === 'function') {
                clbk({"Bid":"654","Culture":"sk-SK","CookiesMode":"ExplicitConsent","CookiesSettingsVersionHash":"04ade8839d52ddd3c2c4502af7d0e5e9","MoreInfoUrl":"/ostatne/cookie-settings","DataPolicyUrl":"/ostatne/ochrana-osobnych-udajov","GlobalAnswer":"Unknown","Token":"272eba71-e3f6-4a98-beb1-46724bdb21f4"});
            }
        }
    }
})(window, jQuery);
