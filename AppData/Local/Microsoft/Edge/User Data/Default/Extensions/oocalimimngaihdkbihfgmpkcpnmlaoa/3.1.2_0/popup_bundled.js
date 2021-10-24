(() => {
    "use strict";
    const EXTENSION_ID = chrome.runtime.id, UNSUPPORTED_SITES = [ ".hotstar.", ".hbogola.", ".hboespana." ], SERVICE_SITES = [ ".netflix.", ".disneyplus.", ".hbonow.", ".hbomax.", ".hulu.", ".amazon." ], GenericErrorMessage = "An unexpected error occured. Please refresh the page and try again.";
    function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj;
    }
    class StreamingSerivce {
        constructor(requiredPermissions, contentScripts, serverName, name, syncFromEnd) {
            _defineProperty(this, "requiredPermissions", void 0), _defineProperty(this, "contentScripts", void 0), 
            _defineProperty(this, "serverName", void 0), _defineProperty(this, "name", void 0), 
            _defineProperty(this, "syncFromEnd", void 0), this.requiredPermissions = requiredPermissions, 
            this.serverName = serverName, this.name = name, this.contentScripts = contentScripts, 
            this.syncFromEnd = syncFromEnd;
        }
        urlWithSessionId(sessionId) {
            return `https://redirect.teleparty.com/join/${sessionId}`;
        }
    }
    let StreamingServiceName, HboVideoType;
    function isHuluParty(url) {
        return url.hostname.includes(".hulu.") && url.pathname.includes("/watch");
    }
    function isDisneyPlusParty(url) {
        return url.hostname.includes(".disneyplus.") && url.pathname.includes("/video");
    }
    function isNetflixParty(url) {
        return url.hostname.includes(".netflix.") && url.pathname.includes("/watch");
    }
    function getHBOVideoType(url) {
        return url.includes("urn:hbo:feature") ? (console.log("this is an hbo feature"), 
        HboVideoType.HBO_FEATURE) : url.includes("urn:hbo:episode") || url.includes("urn:hbo:page:") && url.includes(":type:episode") ? (console.log("this is an hbo episode"), 
        HboVideoType.HBO_EPISODE) : url.includes("urn:hbo:extra") ? (console.log("this is an hbo extra"), 
        HboVideoType.HBO_EXTRA) : HboVideoType.NONE;
    }
    function delay(milliseconds) {
        return function(result) {
            return new Promise((function(resolve, reject) {
                setTimeout((function() {
                    resolve(result);
                }), milliseconds);
            }));
        };
    }
    function getURLParameter(url, key, queryIndex) {
        const searchString = "?" + url.split("?")[queryIndex];
        if (void 0 === searchString) return;
        const escapedKey = key.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), match = new RegExp("[?|&]" + escapedKey + "=([^&]*)(&|$)").exec(searchString);
        return null === match || match.length < 2 ? void 0 : decodeURIComponent(match[1]);
    }
    !function(StreamingServiceName) {
        StreamingServiceName.NETFLIX = "NETFLIX", StreamingServiceName.HULU = "HULU", StreamingServiceName.DISNEY_PLUS = "DISNEY_PLUS", 
        StreamingServiceName.HBO_MAX = "HBO_MAX", StreamingServiceName.HBO_NOW = "HBO_NOW", 
        StreamingServiceName.YOUTUBE = "YOUTUBE", StreamingServiceName.AMAZON = "AMAZON";
    }(StreamingServiceName || (StreamingServiceName = {})), function(HboVideoType) {
        HboVideoType.HBO_EPISODE = "episode", HboVideoType.HBO_FEATURE = "feature", HboVideoType.HBO_EXTRA = "extra", 
        HboVideoType.NONE = "none";
    }(HboVideoType || (HboVideoType = {}));
    const Netflix = new class extends StreamingSerivce {
        isValidUrl(url) {
            return isNetflixParty(url);
        }
        getVideoId(url) {
            const match = url.pathname.match(/^.*\/([0-9]+)\??.*/);
            return match && match.length > 0 ? match[1] : void 0;
        }
        getFullscreenScript() {
            return '\n            (function() {\n                var sizingWrapper = document.getElementsByClassName("sizing-wrapper")[0];\n                    if (sizingWrapper) {\n                        sizingWrapper.requestFullscreen = function() {}\n                        document.getElementsByClassName(\'button-nfplayerFullscreen\')[0].onclick = function() {\n                            var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];\n                            fullScreenWrapper.webkitRequestFullScreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);\n                        }\n                    }\n            })();\n        ';
        }
    }([], [ "content_scripts/netflix/netflix_content_bundled.js" ], "netflix", StreamingServiceName.NETFLIX, !1);
    Object.freeze(Netflix);
    const Services_Netflix = Netflix;
    const Hulu = new class extends StreamingSerivce {
        isValidUrl(url) {
            return isHuluParty(url);
        }
        getVideoId(url) {
            const match = url.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
            return match && match.length > 0 ? match[1] : void 0;
        }
    }([], [ "content_scripts/hulu/hulu_content_bundled.js" ], "hulu", StreamingServiceName.HULU, !1);
    Object.freeze(Hulu);
    const Services_Hulu = Hulu;
    const DisneyPlus = new class extends StreamingSerivce {
        isValidUrl(url) {
            return isDisneyPlusParty(url);
        }
        getVideoId(url) {
            const match = url.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
            return match && match.length > 0 ? match[1] : void 0;
        }
    }([], [ "content_scripts/disney/disney_content_bundled.js" ], "disney", StreamingServiceName.DISNEY_PLUS, !1);
    Object.freeze(DisneyPlus);
    const Disney = DisneyPlus;
    const HboMax = new class extends StreamingSerivce {
        isValidUrl(url) {
            return function(url) {
                return url.hostname.includes(".hbomax.") && "none" !== getHBOVideoType(url.pathname) || url.pathname.includes("urn:hbo:page");
            }(url);
        }
        getVideoId(url) {
            const videoUrnType = "urn:hbo:" + getHBOVideoType(url.pathname) + ":", hboQueryString = url.pathname.split(videoUrnType);
            let hboParseIds = null != hboQueryString && hboQueryString.length > 1 && null != hboQueryString[1] ? hboQueryString[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
            const hboMatch = null != hboParseIds && 0 !== hboParseIds.length ? hboQueryString[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
            let hboVideoId = hboMatch && hboMatch.length > 0 ? hboMatch[1] : void 0;
            return hboVideoId || (hboParseIds = url.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/), 
            hboVideoId = null != hboParseIds && 3 == hboParseIds.length ? hboParseIds[2] : void 0), 
            hboVideoId;
        }
        getVideoType(url) {
            return getHBOVideoType(url.pathname);
        }
    }([], [ "content_scripts/hbo_max/hbo_max_browse_bundled.js", "content_scripts/hbo_max/hbo_max_content_bundled.js" ], "hbomax", StreamingServiceName.HBO_MAX, !1);
    Object.freeze(HboMax);
    const Services_HboMax = HboMax;
    const HboNow = new class extends StreamingSerivce {
        isValidUrl(url) {
            return function(url) {
                return url.hostname.includes(".hbonow.") && "none" !== getHBOVideoType(url.pathname);
            }(url);
        }
        getVideoId(url) {
            const videoUrnType = "urn:hbo:" + getHBOVideoType(url.pathname) + ":", hboQueryString = url.pathname.split(videoUrnType);
            let hboParseIds = null != hboQueryString && hboQueryString.length > 1 && null != hboQueryString[1] ? hboQueryString[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
            const hboMatch = null != hboParseIds && 0 !== hboParseIds.length ? hboQueryString[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
            let hboVideoId = hboMatch && hboMatch.length > 0 ? hboMatch[1] : void 0;
            return hboVideoId || (hboParseIds = url.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/), 
            hboVideoId = null != hboParseIds && 3 == hboParseIds.length ? hboParseIds[2] : void 0), 
            hboVideoId;
        }
        getVideoType(url) {
            return getHBOVideoType(url.pathname);
        }
    }([], [ "content_scripts/hbo_now/hbo_now_browse_bundled.js", "content_scripts/hbo_now/hbo_now_content_bundled.js" ], "hbonow", StreamingServiceName.HBO_NOW, !1);
    Object.freeze(HboNow);
    const Services_HboNow = HboNow;
    const Amazon = new class extends StreamingSerivce {
        isValidUrl(url) {
            return function(url) {
                return url.hostname.includes(".amazon.") || url.hostname.includes(".primevideo.");
            }(url);
        }
        getVideoId(url) {
            const match = url.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
            return null != match && match.length > 0 ? match[1] : void 0;
        }
    }([], [ "content_scripts/amazon/amazon_content_bundled.js" ], "amazon", StreamingServiceName.AMAZON, !1);
    Object.freeze(Amazon);
    const Services_Amazon = Amazon;
    function ExtensionTab_defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj;
    }
    class ExtensionTab {
        constructor(url, id) {
            var _getURLParameter;
            ExtensionTab_defineProperty(this, "id", void 0), ExtensionTab_defineProperty(this, "videoId", void 0), 
            ExtensionTab_defineProperty(this, "url", void 0), ExtensionTab_defineProperty(this, "serviceName", void 0), 
            ExtensionTab_defineProperty(this, "streamingService", void 0), ExtensionTab_defineProperty(this, "sessionIdFromUrl", void 0), 
            this.id = id, this.videoId, this.url = url;
            const validServices = [ Services_Netflix, Services_Hulu, Disney, Services_HboMax, Services_HboNow, Services_Amazon ];
            for (const service of validServices) if (service.isValidUrl(this.url)) {
                this.streamingService = service, this.serviceName = service.name, this.videoId = service.getVideoId(url);
                break;
            }
            this.sessionIdFromUrl = null !== (_getURLParameter = getURLParameter(this.url.href, "npSessionId", 1)) && void 0 !== _getURLParameter ? _getURLParameter : void 0;
        }
        urlWithSessionId(sessionId) {
            return this.streamingService ? this.streamingService.urlWithSessionId(sessionId) : void 0;
        }
    }
    let PopupMessageType;
    function Message_defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj;
    }
    !function(PopupMessageType) {
        PopupMessageType.CREATE_SESSION = "createSession", PopupMessageType.GET_INIT_DATA = "getInitData", 
        PopupMessageType.IS_CONTENT_SCRIPT_READY = "isContentScriptReady", PopupMessageType.SET_CHAT_VISIBLE = "setChatVisible", 
        PopupMessageType.DISCONNECT = "teardown", PopupMessageType.CLOSE_POPUP = "closePopup";
    }(PopupMessageType || (PopupMessageType = {}));
    class Message {
        constructor(sender, target, type) {
            Message_defineProperty(this, "sender", void 0), Message_defineProperty(this, "target", void 0), 
            Message_defineProperty(this, "type", void 0), this.sender = sender, this.target = target, 
            this.type = type;
        }
    }
    class PopupMessage extends Message {
        constructor(sender, target, type) {
            var obj, key, value;
            super(sender, target, type), value = void 0, (key = "type") in (obj = this) ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, this.type = type;
        }
    }
    class CreateSessionMessage extends PopupMessage {
        constructor(sender, target, data) {
            var obj, key, value;
            super(sender, target, PopupMessageType.CREATE_SESSION), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, this.data = data;
        }
    }
    var debug = console.log.bind(window.console);
    const Messaging_MessagePasser = new class {
        addListener(listener) {
            chrome.runtime.onMessage.addListener(listener);
        }
        removeListener(listener) {
            chrome.runtime.onMessage.removeListener(listener);
        }
        sendMessageToTabAsync(message, tabId) {
            let timeout = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e4;
            return new Promise(((resolve, reject) => {
                const sendTimeout = setTimeout((() => {
                    reject();
                }), timeout);
                try {
                    chrome.tabs.sendMessage(tabId, message, (response => {
                        chrome.runtime.lastError && debug(chrome.runtime.lastError.message + JSON.stringify(message)), 
                        clearTimeout(sendTimeout), resolve(response);
                    }));
                } catch (error) {
                    clearTimeout(sendTimeout), reject(error);
                }
            }));
        }
        sendMessageToExtension(message, timeout) {
            return new Promise(((resolve, reject) => {
                let sendTimeout = null;
                timeout && (sendTimeout = setTimeout((() => {
                    reject({
                        error: "Send Message Timeout"
                    });
                }), timeout));
                try {
                    chrome.runtime.sendMessage(EXTENSION_ID, message, (response => {
                        chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(message)), 
                        sendTimeout && clearTimeout(sendTimeout), resolve(response);
                    }));
                } catch (error) {
                    sendTimeout && clearTimeout(sendTimeout), reject(error);
                }
            }));
        }
    };
    class GetInitDataMessage extends PopupMessage {
        constructor(sender, target) {
            super(sender, target, PopupMessageType.GET_INIT_DATA);
        }
    }
    class IsContentSriptReadyMessage extends PopupMessage {
        constructor(sender, target) {
            super(sender, target, PopupMessageType.IS_CONTENT_SCRIPT_READY);
        }
    }
    class SetChatVisibleMessage extends PopupMessage {
        constructor(sender, target, data) {
            var obj, key, value;
            super(sender, target, PopupMessageType.SET_CHAT_VISIBLE), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, this.data = data;
        }
    }
    class BackgroundMessage extends Message {
        constructor(sender, target, type) {
            var obj, key, value;
            super(sender, target, type), value = void 0, (key = "type") in (obj = this) ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, this.type = type;
        }
    }
    let BackgroundMessageType;
    !function(BackgroundMessageType) {
        BackgroundMessageType.JOIN_SESSION = "joinSession", BackgroundMessageType.GET_VIDEO_DATA = "getVideoData", 
        BackgroundMessageType.LOAD_SESSION = "loadSession", BackgroundMessageType.NO_SESSION_DATA = "noSessionData", 
        BackgroundMessageType.TEARDOWN = "teardown", BackgroundMessageType.ON_VIDEO_UPDATE = "onVideoUpdate", 
        BackgroundMessageType.SOCKET_LOST_CONNECTION = "socketLostConnection", BackgroundMessageType.REBOOT = "socketReconnect", 
        BackgroundMessageType.PING = "ping", BackgroundMessageType.LOG_EVENT = "logEvent", 
        BackgroundMessageType.LOG_EXPERIMENT = "logExpirement";
    }(BackgroundMessageType || (BackgroundMessageType = {}));
    class LogEventMessage extends BackgroundMessage {
        constructor(sender, target, data) {
            var obj, key, value;
            super(sender, target, BackgroundMessageType.LOG_EVENT), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, this.data = data;
        }
    }
    class PopupDisconnectMessage extends PopupMessage {
        constructor(sender, target) {
            super(sender, target, PopupMessageType.DISCONNECT);
        }
    }
    const _gaq = [];
    let permId;
    _gaq.push([ "_setAccount", "UA-71812070-2" ]), _gaq.push([ "_trackPageview" ]), 
    function() {
        var _s$parentNode;
        const ga = document.createElement("script");
        ga.type = "text/javascript", ga.async = !0, ga.src = "https://ssl.google-analytics.com/ga.js";
        const s = document.getElementsByTagName("script")[0];
        null === (_s$parentNode = s.parentNode) || void 0 === _s$parentNode || _s$parentNode.insertBefore(ga, s);
    }(), chrome.runtime.onUpdateAvailable.addListener((function(details) {
        _gaq.push([ "_trackEvent", "auto-update ->" + details.version, "clicked" ]), chrome.runtime.reload();
    })), chrome.storage.local.get([ "userId" ], (function(data) {
        data.userId && (permId = data.userId);
    }));
    const $ = jQuery;
    function showError(errorMessage) {
        let showButton = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        $(".some-error").removeClass("hidden"), $(".no-error").addClass("hidden"), $("#error-msg").html(errorMessage), 
        showButton ? $("#close-error").removeClass("hidden") : $("#close-error").addClass("hidden");
    }
    function startSpinning() {
        $("#control-lock").prop("disabled", !0), $("#create-session").prop("disabled", !0), 
        $("#leave-session").prop("disabled", !0), $("#create-session").html('Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>');
    }
    function stopSpinning() {
        $("#control-lock").prop("disabled", !1), $("#create-session").prop("disabled", !1), 
        $("#leave-session").prop("disabled", !1), $("#create-session").text("Start the party");
    }
    $((function() {
        startSpinning(), async function() {
            return new Promise(((resolve, reject) => {
                chrome.tabs.query({
                    active: !0,
                    currentWindow: !0
                }, (function(tabs) {
                    tabs.length ? resolve(tabs[0]) : reject();
                }));
            }));
        }().then((activeTab => {
            let extensionTab;
            if (debug("Setting up popup event listeners"), $("#create-session").click(createSessionAsync), 
            $("#close-error").click(closeErrorClicked), $("#reviewLink").click(reviewLinkClicked), 
            $("#learn-more").click(learnMore), $("#learn-more-teleparty").click(learnMoreTeleparty), 
            $("#leave-session").click(leaveSessionAsync), $("#show-chat").change(showChat), 
            $("#share-url").click(onShareUrlClicked), $("#copy-btn").click(onCopybuttonClicked), 
            !activeTab.url || !activeTab.id) return $(".wrongSite").removeClass("hidden"), void $(".disconnected").addClass("hidden");
            {
                const url = new URL(activeTab.url);
                if (extensionTab = new ExtensionTab(url, activeTab.id), !extensionTab.serviceName) return !function(url) {
                    return UNSUPPORTED_SITES.some((str => url.hostname.includes(str)));
                }(url) ? !function(url) {
                    return SERVICE_SITES.some((str => url.hostname.includes(str)));
                }(url) ? $(".wrongSite").removeClass("hidden") : $(".serviceSite").removeClass("hidden") : $(".unsupportedSite").removeClass("hidden"), 
                void $(".disconnected").addClass("hidden");
                Messaging_MessagePasser.addListener((function(message, sender, sendResponse) {
                    "Service_Background" == message.sender && "Popup" == message.target && message.type == PopupMessageType.CLOSE_POPUP && window.close();
                    return !1;
                })), initContentScriptsAsync().then((async function() {
                    const isContentScriptReadyMessage = new IsContentSriptReadyMessage("Popup", "Content_Script"), response = await Messaging_MessagePasser.sendMessageToTabAsync(isContentScriptReadyMessage, extensionTab.id);
                    response ? response.error ? (showError(response.error.message, response.error.showButton), 
                    stopSpinning()) : (stopSpinning(), async function() {
                        startSpinning();
                        const getInitDataMessage = new GetInitDataMessage("Popup", "Content_Script"), response = await Messaging_MessagePasser.sendMessageToTabAsync(getInitDataMessage, extensionTab.id);
                        if (response.inSession && response.partyUrl) {
                            var _response$isChatVisib;
                            showConnected(response.partyUrl), $("#show-chat").prop("checked", null !== (_response$isChatVisib = response.isChatVisible) && void 0 !== _response$isChatVisib && _response$isChatVisib), 
                            response.showReviewMessage;
                        }
                        stopSpinning();
                    }(), debug("Content Script Ready")) : (showError(GenericErrorMessage, !1), stopSpinning());
                }));
            }
            function handleResponseError(response) {
                response && response.error ? showError(response.error, !1) : showError(GenericErrorMessage, !1);
            }
            function showConnected(partyUrl) {
                $(".disconnected").addClass("hidden"), $(".connected").removeClass("hidden"), $("#show-chat").prop("checked", !0), 
                $("#share-url").val(partyUrl).focus().select();
            }
            async function createSessionAsync() {
                startSpinning(), await initContentScriptsAsync(), await delay(500)(), debug("Sending create session");
                const createSessionMessage = new CreateSessionMessage("Popup", "Service_Background", {
                    createSettings: {
                        controlLock: $("#control-lock").is(":checked")
                    },
                    extensionTabData: extensionTab
                });
                try {
                    const response = await Messaging_MessagePasser.sendMessageToExtension(createSessionMessage);
                    if (response && response.sessionId) {
                        const sessionId = response.sessionId;
                        showConnected(function(sessionId) {
                            return `https://redirect.teleparty.com/join/${sessionId}`;
                        }(sessionId));
                    } else handleResponseError(response);
                    stopSpinning();
                } catch (error) {
                    stopSpinning(), handleResponseError(error);
                }
            }
            function closeErrorClicked() {
                $(".no-error").removeClass("hidden"), $(".some-error").addClass("hidden");
            }
            function reviewLinkClicked() {
                window.open("https://chrome.google.com/webstore/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews"), 
                chrome.storage.local.set({
                    reviewClicked: !0
                });
                const logEventMessage = new LogEventMessage("Popup", "Service_Background", {
                    eventType: "review-clicked-chrome"
                });
                Messaging_MessagePasser.sendMessageToExtension(logEventMessage);
            }
            function onCopybuttonClicked(e) {
                console.log("click");
                const sessionIdFromShareUrl = getURLParameter($("#share-url").val(), "npSessionId", 1);
                sessionIdFromShareUrl && showConnected(sessionIdFromShareUrl), e.stopPropagation(), 
                e.preventDefault(), $("#share-url").select(), document.execCommand("copy"), $("#copy-btn").parent().css("background", "#24D154"), 
                $("#copy-btn").text("Copied!");
            }
            function onShareUrlClicked(e) {
                e.stopPropagation(), e.preventDefault(), $("#share-url").select();
            }
            async function initContentScriptsAsync() {
                if (extensionTab.streamingService) {
                    const streamingService = extensionTab.streamingService;
                    await new Promise((resolve => {
                        chrome.tabs.executeScript(extensionTab.id, {
                            file: "lib/tp_libraries_min.js"
                        }, resolve);
                    })), await Promise.all(streamingService.contentScripts.map((script => new Promise((resolve => {
                        chrome.tabs.executeScript(extensionTab.id, {
                            file: script
                        }, (() => {
                            resolve();
                        }));
                    }))))), console.log("Content Scripts ready");
                }
            }
            function learnMore() {
                chrome.tabs.create({
                    url: "https://www.netflixparty.com/support"
                });
            }
            function learnMoreTeleparty() {
                chrome.tabs.create({
                    url: "https://www.netflixparty.com/introducing-teleparty"
                });
            }
            async function leaveSessionAsync() {
                const disconnectMessage = new PopupDisconnectMessage("Popup", "Content_Script");
                await Messaging_MessagePasser.sendMessageToTabAsync(disconnectMessage, extensionTab.id), 
                window.close();
            }
            function showChat() {
                const visibleData = {
                    visible: $("#show-chat").is(":checked")
                }, setVisibleMessage = new SetChatVisibleMessage("Popup", "Content_Script", visibleData);
                Messaging_MessagePasser.sendMessageToTabAsync(setVisibleMessage, extensionTab.id);
            }
            $("#reviewLink").attr("href", "https://chrome.google.com/webstore/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews");
        })).catch((() => {}));
    }));
})();