(function (w) {
    "use strict";

    w.CookiesManager = (function () {
        var CookiesState = {
            Allowed: "Allowed",
            Disallowed: "Disallowed",
            Unknown: "Unknown"
        };
        var CookiesMode = {
            NoNotification: "NoNotification",
            ImplicitConsent: "ImplicitConsent",
            ExplicitConsent: "ExplicitConsent",
            SplashScreenWithDetail: "SplashScreenWithDetail",
            InformedConsent: "InformedConsent"
        };
        var CookieAnswers = function (jsonString) {
            var answers = JSON.parse(jsonString || "{}") || {};

            this.isAnswered = function (bid, culture, versionHash) {
                return this.getAnswer(bid, culture, versionHash) != null;
            };

            this.addAnswer = function (bid, culture, versionHash, answer) {
                if (answers[bid] == null) {
                    answers[bid] = {};
                }
                var answersOfBid = answers[bid];
                if (answersOfBid[culture] == null) {
                    answersOfBid[culture] = [];
                }
                var answersOfBidOfCulture = answersOfBid[culture];

                var found = false;
                for (var i = 0; i < answersOfBidOfCulture.length; i++) {
                    if (answersOfBidOfCulture[i].h == versionHash) {
                        answersOfBidOfCulture[i].a = answer;
                        found = true;
                        break;
                    }
                }
                if (found == false) {
                    answersOfBidOfCulture.unshift({ h: versionHash, a: answer });
                }

                while (answersOfBidOfCulture.length > 3) {
                    // shorten it a bit
                    answersOfBidOfCulture.pop();
                }
            };

            this.getAnswer = function (bid, culture, versionHash) {
                if (answers[bid] != null && answers[bid][culture] != null) {
                    for (var i = 0; i < answers[bid][culture].length; i++) {
                        if (answers[bid][culture][i].h == versionHash) {
                            return answers[bid][culture][i].a;
                        }
                    }
                }
                return CookiesState.Unknown;
            };
            this.getJson = function () {
                return JSON.stringify(answers);
            };
        };
        var GetCookie = function (cookieName) {
            return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + cookieName + "\\s*\\=\\s*([^;]*).*$)|^.*$"),
                "$1");
        };
        var SetCookie = function (cookieName, cookieValue, expiresInSeconds) {
            var expiresPart = "";
            if (expiresInSeconds != null && typeof expiresInSeconds === "number" && expiresInSeconds > 0) {
                var expiresDate = new Date(Date.now() + expiresInSeconds * 1000);
                expiresPart = ";expires=" + expiresDate.toUTCString();
            }

            document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + expiresPart + ";path=/";
        };
        var RemoveCookie = function (cookieName) {
            document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        };

        var cmObj = {};
        cmObj.GetCookie = GetCookie;
        cmObj.SetCookie = SetCookie;
        cmObj._cookiesConsentClbk = [];  // Consumed in CookiesSettingsResponse.js

        var _cookieState = CookiesState.Unknown;

        var onNoticeAllow = [];
        cmObj.OnNoticeAllow = function (clbk) {
            if (typeof clbk !== "function") {
                throw new Error("Not a function type.");
            }
            onNoticeAllow.push(clbk);
        };
        var triggerOnNoticeAllow = function () {
            var clbk;
            while (clbk = onNoticeAllow.pop()) {
                if (typeof clbk === "function") {
                    clbk();
                }
            }
        };
        var onNoticeDisallow = [];
        cmObj.OnNoticeDisallow = function (clbk) {
            if (typeof clbk !== "function") {
                throw new Error("Not a function type.");
            }
            onNoticeDisallow.push(clbk);
        };
        var triggerOnNoticeDisallow = function () {
            var clbk;
            while (clbk = onNoticeDisallow.pop()) {
                if (typeof clbk === "function") {
                    clbk();
                }
            }
        };
        var onNoticeMoreInfo = [];
        cmObj.OnNoticeMoreInfo = function (clbk) {
            if (typeof clbk !== "function") {
                throw new Error("Not a function type.");
            }
            onNoticeMoreInfo.push(clbk);
        };
        var triggerOnNoticeMoreInfo = function () {
            var clbk;
            while (clbk = onNoticeMoreInfo.pop()) {
                if (typeof clbk === "function") {
                    clbk();
                }
            }
        };
        var onNoticeDataPolicy = [];
        cmObj.OnNoticeDataPolicy = function (clbk) {
            if (typeof clbk !== "function") {
                throw new Error("Not a function type.");
            }
            onNoticeDataPolicy.push(clbk);
        };
        var triggerOnNoticeDataPolicy = function () {
            var clbk;
            while (clbk = onNoticeDataPolicy.pop()) {
                if (typeof clbk === "function") {
                    clbk();
                }
            }
        };
        var onNoticeOpen = [];
        cmObj.OnNoticeOpen = function (clbk) {
            if (typeof clbk !== "function") {
                throw new Error("Not a function type.");
            }
            onNoticeOpen.push(clbk);
        };
        var triggerOnNoticeOpen = function () {
            var clbk;
            var doOpen = true;
            while (clbk = onNoticeOpen.pop()) {
                if (typeof clbk === "function") {
                    if (false === clbk()) {
                        doOpen = false;
                    }
                }
            }
            return doOpen;
        };
        var onAllowed = [];
        cmObj.OnCookiesAllowed = function (clbk) {
            if (typeof clbk !== "function") {
                throw new Error("Not a function type.");
            }

            if (_cookieState == CookiesState.Allowed) {
                clbk(_cookiesConsentSettings);
            } else {
                onAllowed.push(clbk);
            }
        };
        var triggerOnCookiesAllowed = function () {
            var clbk;
            while (clbk = onAllowed.pop()) {
                if (typeof clbk === "function") {
                    clbk();
                }
            }
        };
        var onDisallowed = [];
        cmObj.OnCookiesDisallowed = function (clbk) {
            if (typeof clbk !== "function") {
                throw new Error("Not a function type.");
            }

            if (_cookieState == CookiesState.Disallowed) {
                clbk(_cookiesConsentSettings);
            } else {
                onDisallowed.push(clbk);
            }
        };
        var triggerOnCookiesDisallowed = function () {
            var clbk;
            while (clbk = onDisallowed.pop()) {
                if (typeof clbk === "function") {
                    clbk();
                }
            }
        };
        var onUnknown = [];
        cmObj.OnCookiesUnknown = function (clbk) {
            if (typeof clbk !== "function") {
                throw new Error("Not a function type.");
            }

            if (_cookieState == CookiesState.Unknown) {
                clbk();
            } else {
                onUnknown.push(clbk);
            }
        };
        var triggerOnCookiesUnknown = function () {
            var clbk;
            while (clbk = onUnknown.pop()) {
                if (typeof clbk === "function") {
                    clbk();
                }
            }
        };
        cmObj.GetCookiesConsentState = function () {
            return _cookieState;
        };
        var _cookieMode = null;
        cmObj.GetCookieConsentMode = function () {
            return _cookieMode;
        };

        var _token = "";
        cmObj.GetCookieToken = function () {
            return _token;
        };

        var _ccDomain = null;

        var SaveRemoteConsent = function (bid, culture, version, cookiesState, token) {
            if (cookiesState == CookiesState.Allowed || cookiesState == CookiesState.Disallowed) {
                (function (d) {
                    var ccst = document.createElement("script");
                    ccst.type = "text/javascript";
                    ccst.async = true;
                    ccst.src = "https://" +
                        d +
                        "/js/save-consent.js?bid=" +
                        encodeURIComponent(bid) +
                        "&culture=" +
                        encodeURIComponent(culture) +
                        "&version=" +
                        encodeURIComponent(version) +
                        "&consent=" +
                        encodeURIComponent(cookiesState) +
                        "&token=" +
                        encodeURIComponent(token);
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(ccst, s);
                })(_ccDomain);
            }
        };

        var _internalSetState = function (state) {
            if (_cookieState != state) {
                switch (state) {
                    case CookiesState.Allowed:
                        _cookieState = state;
                        triggerOnCookiesAllowed();
                        break;
                    case CookiesState.Disallowed:
                        _cookieState = state;
                        triggerOnCookiesDisallowed();
                        break;
                    case CookiesState.Unknown:
                        _cookieState = state;
                        triggerOnCookiesUnknown();
                        break;
                    default:
                        throw new Error("Invalid param. Valid params " +
                            CookiesState.Allowed +
                            " | " +
                            CookiesState.Disallowed +
                            " | " +
                            CookiesState.Unknown);
                }
                return true;
            } else {
                // nothing to change
                return false;
            }
        };

        var SaveLocalConsent = function (bid, culture, versionHash, cookiesState) {
            switch (cookiesState) {
                case CookiesState.Allowed:
                    SetCookie("CookieConsent", [bid, culture, versionHash, cookiesState].join("!"), 60 * 60 * 24 * 365);
                    break;
                case CookiesState.Disallowed:
                    SetCookie("CookieConsent", [bid, culture, versionHash, cookiesState].join("!"));
                    break;
            }
        };

        cmObj.ManualSetState = function (state) {
            if (_internalSetState(state)) {
                // it changes state so save it
                if (state == CookiesState.Allowed) {
                    SaveRemoteConsent(_bid, _culture, cmObj.GetCookieConsentVersion(), state, cmObj.GetCookieToken());
                }
                if (state != CookiesState.Unknown) {
                    SaveLocalConsent(_bid, _culture, cmObj.GetCookieConsentVersion(), state);
                }
            }
        };

        cmObj.UserBrowsing = function () {
            if (cmObj.GetCookieConsentMode() !== CookiesMode.InformedConsent ||
                cmObj.GetCookiesConsentState() === CookiesState.Allowed) return;

            cmObj.ManualSetState(CookiesState.Allowed);
        };
        var _bid = null;
        var _culture = null;
        var _initializing = false;

        // {"Bid":"260","Culture":"cs-cz","CookiesMode":"NoNotification","CookiesSettingsVersionHash":"ea1a6f083aa6668d2f4d3c3d602f2421","MoreInfoUrl":"http://skoda-clg-dev.azurewebsites.net/api/Link?BID=260&Culture=cs-cz&Tool=ImporterWeb&target=cookies","GlobalAnswer":"Unknown"}
        var _cookiesConsentSettings = null;
        var _moreInfoUrl = null;
        var _font = null;
        var _dataPolicyUrl = null;
        var $dialogue = null;

        var _dialogueListener = function (event) {
            var $iframe = $dialogue.find("iframe");
            if ($iframe.attr("src").indexOf(event.origin) === -1) return;
            //console.log("Received message from notice dialogue.", event.data);

            var action = (event.data || { action: "malformed" }).action;
            switch (action) {
                case "allow":
                    triggerOnNoticeAllow();
                    if (cmObj.GetCookiesConsentState() !== CookiesState.Allowed) {
                        cmObj.ManualSetState(CookiesState.Allowed);
                    }
                    cmObj.CloseDialogue($iframe);
                    break;
                case "disallow":
                    triggerOnNoticeDisallow();
                    cmObj.ManualSetState(CookiesState.Disallowed);
                    cmObj.CloseDialogue($iframe);
                    break;
                case "more":
                    triggerOnNoticeMoreInfo();
                    window.open(_cookiesConsentSettings.MoreInfoUrl, "_blank");
                    break;
                case "data-policy":
                    triggerOnNoticeDataPolicy();
                    window.open(_cookiesConsentSettings.DataPolicyUrl, "_blank");
                    break;
                case "resize":
                    $iframe.css("height", event.data.height);
                    $dialogue.css("height", event.data.height);
                    break;
                case "malformed":
                    console.error("Malformed message", JSON.parse(JSON.stringify(event.data)));
                    break;
                default:
                    console.warn("Unknown action", action, JSON.parse(JSON.stringify(event.data)));
                    break;
            }
        };

        var CreateDialoogue = function (actionRoute, dialogueHeight) {
            var dialogueSrc = "https://" +
                _ccDomain +
                "/dialogues/" +
                actionRoute +
                "?culture=" +
                encodeURIComponent(_culture) +
                "&moreInfoUrl=" +
                encodeURIComponent(_moreInfoUrl || "") +
                "&font=" +
                encodeURIComponent(_font) +
                "&dataPolicyUrl=" +
                encodeURIComponent(_dataPolicyUrl || "");
            if (actionRoute === CookiesMode.SplashScreenWithDetail) {
                $dialogue = $("<div />")
                    .append($("<div />",
                        {
                            "class": "sa-modal-window-visibility-control"
                        }).append($("<div />",
                            {
                                "class": "simple-modal-layer"
                            }).append($("<div />",
                                {
                                    "class": "overshadow-container",
                                    "data-bind": "'noTouchAction': true"
                                }).append($("<div />",
                                    {
                                        "class": "sa-modal-window"
                                    }).append($("<div />",
                                        {
                                            "class": "sa-modal-content"
                                        }).append($("<iframe />",
                                            {
                                                src: dialogueSrc,
                                                style: "left: 0; top: 0; width: 100%; height: 100%; border: 0",
                                                scrolling: "no"
                                            })))))));
            } else {
                $dialogue = $("<div />",
                    {
                        "class": "cookie-consent-dialogue",
                        "style": "position: fixed; bottom: 0; left: 0; width: 100%; height: " +
                            dialogueHeight +
                            "; margin: 0; padding: 0; border: none; background-color: transparent; z-index: 9999;"
                    });

                $("<iframe />",
                    {
                        src: dialogueSrc,
                        style: "position: absolute;left: 0; top: 0; width: 100%; height: 100%;",
                        scrolling: "no"
                    }).appendTo($dialogue);
            }

            return $dialogue;
        };
        var _openDialogue = function () {
            if ($dialogue != null) {
                cmObj.CloseDialogue();
            }

            var dialogueHeight = "1px";
            var actionRoute = null;


            switch (cmObj.GetCookieConsentMode()) {
                case CookiesMode.ImplicitConsent:
                    actionRoute = CookiesMode.ImplicitConsent;
                    cmObj.ManualSetState(CookiesState.Allowed);
                    break;
                case CookiesMode.InformedConsent:
                    actionRoute = CookiesMode.InformedConsent;
                    break;
                case CookiesMode.NoNotification:
                    // do nothing; just silently allow
                    cmObj.ManualSetState(CookiesState.Allowed);
                    break;
                case CookiesMode.ExplicitConsent:
                    actionRoute = CookiesMode.ExplicitConsent;
                    break;
                case CookiesMode.SplashScreenWithDetail:
                    actionRoute = CookiesMode.SplashScreenWithDetail;
                    dialogueHeight = "100%";
                    break;
                default:
                    // do nothing
                    break;
            }

            if (actionRoute == null) {
                // no dialogue to show; omitting
                return;
            }

            $dialogue = CreateDialoogue(actionRoute, dialogueHeight);

            $dialogue.appendTo("body");
            window.addEventListener("message", _dialogueListener);
            window.addEventListener("click", cmObj.UserBrowsing);
            window.addEventListener("scroll", cmObj.UserBrowsing);
        };

        cmObj.OpenDialogueIfNeeded = function () {
            if (cmObj.GetCookiesConsentState() == CookiesState.Unknown) {
                var doOpen = triggerOnNoticeOpen();

                if (doOpen) {
                    _openDialogue();
                }
            }
        };

        cmObj.CloseDialogue = function (iframe) {
            $("body div.cookie-consent-dialogue").remove();
            $dialogue = null;
            window.removeEventListener("message", _dialogueListener);

            window.removeEventListener("scroll", cmObj.UserBrowsing);
            window.removeEventListener("click", cmObj.UserBrowsing);

            // Used only for Splash screen
            iframe.closest(".sa-modal-window-visibility-control").hide();
        };

        var LoadLocalConsent = function (bid, culture) {
            var cookieConsent = GetCookie("CookieConsent");
            if (typeof cookieConsent === "string") {
                var parts = cookieConsent.split("!");
                if (parts.length == 4) {
                    var ccBid = parts[0];
                    var ccCulture = parts[1];
                    var ccVersionHash = parts[2];
                    var ccCookiesState = parts[3];

                    if (bid == ccBid && culture == ccCulture) {
                        return { version: ccVersionHash, cookiesState: ccCookiesState };
                    }
                }
            }
            return { version: "", cookiesState: CookiesState.Unknown };
        };


        var RemoveLocalSavedConsent = function () {
            RemoveCookie("CookieConsent");
        };

        var _cookieConsentVersion = "";
        cmObj.GetCookieConsentVersion = function () {
            return _cookieConsentVersion;
        };

        var _answers = new CookieAnswers("{}");
        var _initLocalObject = function (bid, culture) {
            var loadedConsent = LoadLocalConsent(bid, culture);
            if (loadedConsent.version == "" || loadedConsent.cookiesState == CookiesState.Unknown) {
                RemoveLocalSavedConsent();
            } else {
                _answers.addAnswer(bid, culture, loadedConsent.version, loadedConsent.cookiesState);
            }
            _internalSetState(loadedConsent.cookiesState);

            _cookieConsentVersion = loadedConsent.version;
        };

        var _initGlobalObject = function (bid, culture, cookiesConsentDomain, moreInfoUrl, dataPolicyUrl) {
            cmObj._cookiesConsentClbk.push(function (cookiesConsentSettings) {
                _initializing = false;
                _cookiesConsentSettings = cookiesConsentSettings;
                _cookieMode = _cookiesConsentSettings.CookiesMode;
                _cookieConsentVersion = _cookiesConsentSettings.CookiesSettingsVersionHash;
                _token = _cookiesConsentSettings.Token;

                if (_answers.getAnswer(bid, culture, _cookieConsentVersion) != cmObj.GetCookiesConsentState() ||
                    cmObj.GetCookiesConsentState() == CookiesState.Unknown) {
                    _answers.addAnswer(_cookiesConsentSettings.Bid,
                        _cookiesConsentSettings.Culture,
                        _cookiesConsentSettings.CookiesSettingsVersionHash,
                        _cookiesConsentSettings.GlobalAnswer);
                    _internalSetState(_cookiesConsentSettings.GlobalAnswer);

                    if (cmObj.GetCookiesConsentState() == CookiesState.Allowed) {
                        SaveLocalConsent(_cookiesConsentSettings.Bid,
                            _cookiesConsentSettings.Culture,
                            _cookiesConsentSettings.CookiesSettingsVersionHash,
                            CookiesState.Allowed);
                    }
                }

                cmObj.OpenDialogueIfNeeded();
            });
            _initializing = true;

            (function (d) {
                var ccst = document.createElement("script");
                ccst.type = "text/javascript";
                ccst.async = true;
                ccst.src = "https://" +
                    d +
                    "/js/cookies-settings.js?bid=" +
                    encodeURIComponent(bid) +
                    "&culture=" +
                    encodeURIComponent(culture) +
                    "&siteId=" +
                    encodeURIComponent(document.location.host) +
                    "&moreInfoUrl=" +
                    encodeURIComponent(moreInfoUrl || "") +
                    "&dataPolicyUrl=" +
                    encodeURIComponent(dataPolicyUrl || "");
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(ccst, s);
            })(cookiesConsentDomain);
        };

        cmObj.Init = function (bid, culture, cookiesConsentDomain, moreInfoUrl, font, dataPolicyUrl) {
            _bid = bid;
            _culture = culture;
            _moreInfoUrl = moreInfoUrl;
            _font = font;
            _dataPolicyUrl = dataPolicyUrl;
            if (cookiesConsentDomain.substr(cookiesConsentDomain.length - 1) == "/" &&
                cookiesConsentDomain.length > 2) {
                cookiesConsentDomain = cookiesConsentDomain.substr(0, cookiesConsentDomain.length - 1);
            }
            _ccDomain = cookiesConsentDomain;
            if (_initializing) {
                return;
            }
            _initLocalObject(bid, culture);
            _initGlobalObject(bid, culture, cookiesConsentDomain, moreInfoUrl, dataPolicyUrl);

            $(window).trigger("ManagerLoaded");
        };

        $(window).on("ManagerLoaded",
            function () {
                var modalScript = document.createElement("script");
                modalScript.type = "text/javascript";
                modalScript.async = true;
                modalScript.src = "https://" + _ccDomain + "/Scripts/simpleModalWindow/simpleModalWindow.js";
                var scriptElement = document.getElementsByTagName("script")[0];
                scriptElement.parentNode.insertBefore(modalScript, scriptElement);

                var modalWindowStyle = document.createElement("link");
                modalWindowStyle.type = "text/css";
                modalWindowStyle.async = true;
                modalWindowStyle.rel = "stylesheet";
                modalWindowStyle.href = "https://" + _ccDomain + "/Content/simpleModalWindow/simpleModalWindow.css";
                var styleElement = document.getElementsByTagName("link")[0];
                styleElement.parentNode.insertBefore(modalWindowStyle, styleElement);
            });

        return cmObj;
    })();
})(window);
