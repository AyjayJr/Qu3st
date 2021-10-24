(() => {
    "use strict";
    var __webpack_modules__ = {
        289: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                Z: () => Background_BackgroundService
            });
            var debug = console.log.bind(window.console);
            const SocketPool = new class {
                constructor() {
                    var obj, key, value;
                    value = void 0, (key = "_socketMap") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this._socketMap = new Map;
                }
                setSocketForTabId(tabId, socket) {
                    this._socketMap.set(tabId, socket);
                }
                getSocketForTabId(tabId) {
                    return this._socketMap.get(tabId);
                }
                containsSocketForTabId(tabId) {
                    return this._socketMap.has(tabId);
                }
                removeSocketForTabId(tabId) {
                    this._socketMap.delete(tabId);
                }
                teardown() {
                    this._socketMap.forEach((wrapper => {
                        wrapper.teardown();
                    })), delete this._socketMap;
                }
            };
            Object.freeze(SocketPool);
            const Socket_SocketPool = SocketPool;
            let BackgroundMessageType;
            !function(BackgroundMessageType) {
                BackgroundMessageType.JOIN_SESSION = "joinSession", BackgroundMessageType.GET_VIDEO_DATA = "getVideoData", 
                BackgroundMessageType.LOAD_SESSION = "loadSession", BackgroundMessageType.NO_SESSION_DATA = "noSessionData", 
                BackgroundMessageType.TEARDOWN = "teardown", BackgroundMessageType.ON_VIDEO_UPDATE = "onVideoUpdate", 
                BackgroundMessageType.SOCKET_LOST_CONNECTION = "socketLostConnection", BackgroundMessageType.REBOOT = "socketReconnect", 
                BackgroundMessageType.PING = "ping", BackgroundMessageType.LOG_EVENT = "logEvent", 
                BackgroundMessageType.LOG_EXPERIMENT = "logExpirement";
            }(BackgroundMessageType || (BackgroundMessageType = {}));
            const ChromeStorageReadError = "Failed to read chrome storage. Please refresh the page and try again";
            const ChromeStorageReader = new class {
                async getItemsAsync(items) {
                    return new Promise(((resolve, reject) => {
                        chrome.storage.local.get(items, (result => {
                            chrome.runtime.lastError ? reject(new Error(ChromeStorageReadError)) : resolve(result);
                        }));
                    }));
                }
                async getAllItemsAsync() {
                    return new Promise(((resolve, reject) => {
                        chrome.storage.local.get(null, (result => {
                            chrome.runtime.lastError ? reject(new Error(ChromeStorageReadError)) : resolve(result);
                        }));
                    }));
                }
            };
            Object.freeze(ChromeStorageReader);
            const ChromeStorage_ChromeStorageReader = ChromeStorageReader, oldIcons = (chrome.extension.getURL("img/x-circle.svg"), 
            [ "Batman.svg", "DeadPool.svg", "CptAmerica.svg", "Wolverine.svg", "IronMan.svg", "Goofy.svg", "Alien.svg", "Mulan.svg", "Snow-White.svg", "Poohbear.svg", "Sailormoon.svg", "Sailor Cat.svg", "Pizza.svg", "Cookie.svg", "Chocobar.svg", "hotdog.svg", "Hamburger.svg", "Popcorn.svg", "IceCream.svg", "ChickenLeg.svg" ]), defaultIcons = [ "General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg" ], newIcons = [ "General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg", "Christmas/angel.svg", "Christmas/bell.svg", "Christmas/box.svg", "Christmas/cane.svg", "Christmas/flake.svg", "Christmas/gingerbread.svg", "Christmas/gingerbread_F.svg", "Christmas/gingerbread_M.svg", "Christmas/gloves_blue.svg", "Christmas/gloves_red.svg", "Christmas/hat.svg", "Christmas/ornament.svg", "Christmas/raindeer.svg", "Christmas/reef.svg", "Christmas/santa_F.svg", "Christmas/santa_M.svg", "Christmas/snowglobe.svg", "Christmas/snowman.svg", "Christmas/sock.svg", "Christmas/tree.svg", "Halloween/bats.svg", "Halloween/candy_corn.svg", "Halloween/cat_black.svg", "Halloween/cat_white.svg", "Halloween/coffin.svg", "Halloween/eye_ball.svg", "Halloween/face_angry.svg", "Halloween/face_evil.svg", "Halloween/face_silly.svg", "Halloween/face_smile.svg", "Halloween/frankenstein.svg", "Halloween/ghost_F.svg", "Halloween/ghost_M.svg", "Halloween/gravestone.svg", "Halloween/lollipop.svg", "Halloween/moon.svg", "Halloween/mummy.svg", "Halloween/potion.svg", "Halloween/pumpkin.svg", "Halloween/pumpkin_witch.svg", "Halloween/skull_brain.svg", "Halloween/skull_candy.svg", "Halloween/skull_girl.svg", "Halloween/witch_hat.svg", "Thanksgiving/acorn.svg", "Thanksgiving/bread.svg", "Thanksgiving/candles.svg", "Thanksgiving/corn.svg", "Thanksgiving/drinks.svg", "Thanksgiving/maple_leaf.svg", "Thanksgiving/plate_chicken.svg", "Thanksgiving/pumpkin.svg", "Thanksgiving/pumpkin_pie.svg", "Thanksgiving/slice_pie.svg", "Thanksgiving/sun_flower.svg", "Thanksgiving/turkey_face.svg" ];
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    enumerableOnly && (symbols = symbols.filter((function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    }))), keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function ChromeStorageValidator_defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, obj;
            }
            const ChromeStorageValidator = new class {
                isUserIconValid(userIcon) {
                    return !!userIcon && (userIcon.includes("?newIconUrl=") ? newIcons.includes(userIcon.split("?newIconUrl=")[1]) && oldIcons.includes(userIcon.split("?newIconUrl=")[0]) : newIcons.includes(userIcon));
                }
                isUserIdValid(userId) {
                    return "string" == typeof userId && 16 === userId.length;
                }
                isUserNickNameValid(userNickname) {
                    return userNickname && "string" == typeof userNickname && userNickname.length < 20;
                }
                getDefaultUserIcon() {
                    return defaultIcons[Math.floor(Math.random() * defaultIcons.length)];
                }
                getDefaultUserNickName() {
                    return "";
                }
                validateStorageData(storageData) {
                    const userNickame = storageData.userNickame, validatedStorageData = function(target) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                                ChromeStorageValidator_defineProperty(target, key, source[key]);
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                            }));
                        }
                        return target;
                    }({}, storageData);
                    return storageData.userIcon && storageData.userIcon.includes("?newIconUrl=") && (validatedStorageData.userIcon = storageData.userIcon.split("?newIconUrl=")[1]), 
                    this.isUserIconValid(storageData.userIcon) || (validatedStorageData.userIcon = this.getDefaultUserIcon()), 
                    this.isUserNickNameValid(userNickame) || (validatedStorageData.userNickame = this.getDefaultUserNickName()), 
                    validatedStorageData;
                }
            };
            Object.freeze(ChromeStorageValidator);
            const ChromeStorage_ChromeStorageValidator = ChromeStorageValidator;
            const ChromeStorageWriter = new class {
                async setItemsAsync(items) {
                    return new Promise(((resolve, reject) => {
                        chrome.storage.local.set(items, (() => {
                            chrome.runtime.lastError ? reject(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : resolve();
                        }));
                    }));
                }
            };
            Object.freeze(ChromeStorageWriter);
            const ChromeStorage_ChromeStorageWriter = ChromeStorageWriter;
            const EXTENSION_ID = chrome.runtime.id;
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
            function Message_defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, obj;
            }
            class Message {
                constructor(sender, target, type) {
                    Message_defineProperty(this, "sender", void 0), Message_defineProperty(this, "target", void 0), 
                    Message_defineProperty(this, "type", void 0), this.sender = sender, this.target = target, 
                    this.type = type;
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
            class LoadSessionMessage extends BackgroundMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, BackgroundMessageType.LOAD_SESSION), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            let SocketMessageTypes, StreamingServiceName, HboVideoType;
            function StreamingService_defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, obj;
            }
            !function(SocketMessageTypes) {
                SocketMessageTypes.CREATE_SESSION = "createSession", SocketMessageTypes.JOIN_SESSION = "joinSession", 
                SocketMessageTypes.UPDATE_SESSION = "updateSession", SocketMessageTypes.NEXT_EPISODE_MESSAGE = "nextEpisode", 
                SocketMessageTypes.REBOOT_MESSAGE = "reboot", SocketMessageTypes.SEND_MESSAGE = "sendMessage", 
                SocketMessageTypes.JUMP_TO_NEXT_EPISODE = "jumpToNextEpisode", SocketMessageTypes.BUFFERING_MESSAGE = "buffering", 
                SocketMessageTypes.TYPING_MESSAGE = "typing", SocketMessageTypes.SET_BUFFERING_PRESENCE = "setBufferingPresence", 
                SocketMessageTypes.SET_TYPING_PRESENCE = "setTypingPresence", SocketMessageTypes.BROADCAST_USER_SETTINGS = "broadcastUserSettings", 
                SocketMessageTypes.UPDATE_SETTINGS_MESSAGE = "updateSettings", SocketMessageTypes.SET_ADS_PRESENCE = "setAdsPresence", 
                SocketMessageTypes.GET_SERVER_TIME = "getServerTime", SocketMessageTypes.LEAVE_SESSION = "leaveSession";
            }(SocketMessageTypes || (SocketMessageTypes = {}));
            class StreamingSerivce {
                constructor(requiredPermissions, contentScripts, serverName, name, syncFromEnd) {
                    StreamingService_defineProperty(this, "requiredPermissions", void 0), StreamingService_defineProperty(this, "contentScripts", void 0), 
                    StreamingService_defineProperty(this, "serverName", void 0), StreamingService_defineProperty(this, "name", void 0), 
                    StreamingService_defineProperty(this, "syncFromEnd", void 0), this.requiredPermissions = requiredPermissions, 
                    this.serverName = serverName, this.name = name, this.contentScripts = contentScripts, 
                    this.syncFromEnd = syncFromEnd;
                }
                urlWithSessionId(sessionId) {
                    return `https://redirect.teleparty.com/join/${sessionId}`;
                }
            }
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
                    this.sessionIdFromUrl = null !== (_getURLParameter = function(url, key, queryIndex) {
                        const searchString = "?" + url.split("?")[queryIndex];
                        if (void 0 === searchString) return;
                        const escapedKey = key.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), match = new RegExp("[?|&]" + escapedKey + "=([^&]*)(&|$)").exec(searchString);
                        return null === match || match.length < 2 ? void 0 : decodeURIComponent(match[1]);
                    }(this.url.href, "npSessionId", 1)) && void 0 !== _getURLParameter ? _getURLParameter : void 0;
                }
                urlWithSessionId(sessionId) {
                    return this.streamingService ? this.streamingService.urlWithSessionId(sessionId) : void 0;
                }
            }
            class SocketCallbackManager {
                constructor() {
                    var obj, key, value;
                    obj = this, key = "_callbackMap", value = new Map, key in obj ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value;
                }
                makeId() {
                    let result = "";
                    for (let i = 0; i < 16; i += 1) result += "0123456789abcdef"[Math.floor(16 * Math.random())];
                    return result;
                }
                executeCallback(callbackId, data) {
                    const callback = this._callbackMap.get(callbackId);
                    callback && (callback(data), this._callbackMap.delete(callbackId));
                }
                addCallback(callback) {
                    let newId = this.makeId();
                    for (;this._callbackMap.has(newId); ) newId = this.makeId();
                    return this._callbackMap.set(newId, callback), newId;
                }
            }
            function SocketWrapper_defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, obj;
            }
            class SocketWrapper {
                constructor(socketUrl, socketEventHandler) {
                    SocketWrapper_defineProperty(this, "_socketEventHandler", void 0), SocketWrapper_defineProperty(this, "_socketUrl", void 0), 
                    SocketWrapper_defineProperty(this, "_socket", void 0), SocketWrapper_defineProperty(this, "_keepAlive", void 0), 
                    SocketWrapper_defineProperty(this, "_callbackManager", void 0), SocketWrapper_defineProperty(this, "_userId", void 0), 
                    SocketWrapper_defineProperty(this, "_sessionId", void 0), SocketWrapper_defineProperty(this, "_reconnectTimeOut", void 0), 
                    SocketWrapper_defineProperty(this, "_reconnectAttempts", void 0), this._socketEventHandler = socketEventHandler, 
                    this._socketUrl = socketUrl, this._reconnectAttempts = 0, this._callbackManager = new SocketCallbackManager, 
                    this._socket = new WebSocket(this._socketUrl), this._handleSocketEvents();
                }
                loadSessionData(data, userSetting) {
                    this._sessionId = data.sessionId, this._socketEventHandler.loadSessionData(data, userSetting);
                }
                clearSessionData() {
                    this._sessionId = void 0, this._socketEventHandler.clearSessionData();
                }
                _handleSocketEvents() {
                    this._socket.onmessage = this._onMessage.bind(this), this._socket.onclose = this._onClose.bind(this), 
                    this._socket.onerror = this._onError.bind(this), this._socket.onopen = this._onOpen.bind(this);
                }
                _sendPing() {
                    this._socket.send(JSON.stringify("ping"));
                }
                _onOpen() {
                    this._reconnectTimeOut && (clearTimeout(this._reconnectTimeOut), this._socketEventHandler.onReconnect()), 
                    this._resetReconnectTimeout(), this._keepAlive = setInterval(this._sendPing.bind(this), 3e4);
                }
                _resetReconnectTimeout() {
                    this._reconnectTimeOut && clearTimeout(this._reconnectTimeOut), this._reconnectTimeOut = void 0, 
                    this._reconnectAttempts = 0;
                }
                _onClose(event) {
                    if (this._keepAlive && clearInterval(this._keepAlive), 4500 !== event.code) {
                        debug("Websocket lost connection" + event);
                        const logData = {
                            sessionId: this._sessionId,
                            eventType: "socket-close-" + event.code
                        };
                        Background_BackgroundService.logEventAsync(logData), this._doReconnect();
                    } else debug("Websocket connection closed manually");
                }
                _getReconnectTimeoutInterval() {
                    return 1e3 * Math.pow(2, this._reconnectAttempts);
                }
                _doReconnect() {
                    if (this._reconnectAttempts++, this._reconnectAttempts > 10) this._socketEventHandler.onReconnectFailed(); else {
                        const timeoutDelay = this._getReconnectTimeoutInterval();
                        debug("Recreating socket with delay: " + timeoutDelay), this._reconnectTimeOut = setTimeout(this._recreateSocket.bind(this), timeoutDelay);
                    }
                }
                _recreateSocket() {
                    try {
                        this._socket = new WebSocket(this._socketUrl), this._handleSocketEvents();
                    } catch (error) {
                        console.warn("Failed to recreate socket: " + (10 - this._reconnectAttempts) + " attempts remaining");
                    }
                }
                _onError(event) {
                    debug("WebSocket error observed:", event), this._socket.close();
                }
                _onMessage(event) {
                    try {
                        const message = JSON.parse(event.data);
                        "userId" === message.type ? this._onUserId(message.data.userId) : message.callbackId ? this._callbackManager.executeCallback(message.callbackId, message.data) : this._socketEventHandler.onMessage(message);
                    } catch (error) {
                        debug("An error occured while parsing a message from the server");
                    }
                }
                _onUserId(userId) {
                    debug("User id:  " + userId), null == this._userId && (this._userId = userId, this._socketEventHandler.setUserId(userId));
                }
                teardown() {
                    try {
                        this._socket.close(4500);
                    } catch (e) {}
                    this._userId = "", this._keepAlive && clearInterval(this._keepAlive), this._reconnectTimeOut && clearTimeout(this._reconnectTimeOut);
                }
                sendMessage(type, data, callback) {
                    if (1 == this._socket.readyState) {
                        let callbackId = "null";
                        callback && (callbackId = this._callbackManager.addCallback(callback));
                        const socketMessage = this._formatMessage(type, data, callbackId);
                        this._socket.send(JSON.stringify(socketMessage));
                    } else callback && callback();
                }
                _formatMessage(type, data, callbackId) {
                    return {
                        type,
                        data,
                        callbackId
                    };
                }
                async getUserIdAsync() {
                    debug("user Id promise called: "), this._reconnectTimeOut && (this._resetReconnectTimeout(), 
                    this._recreateSocket());
                    try {
                        var _this$_userId;
                        return await function(condition, maxDelay) {
                            let delayStep = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;
                            return function(result) {
                                const startTime = (new Date).getTime();
                                return function checkForCondition() {
                                    return condition() ? Promise.resolve(result) : null !== maxDelay && (new Date).getTime() - startTime > maxDelay ? Promise.reject(new Error("delayUntil timed out" + condition)) : delay(delayStep)().then(checkForCondition);
                                }();
                            };
                        }((() => null != this._userId), 2e4)(), null !== (_this$_userId = this._userId) && void 0 !== _this$_userId ? _this$_userId : "";
                    } catch (error) {
                        const logData = {
                            sessionId: this._sessionId,
                            eventType: "connection-fail"
                        };
                        throw Background_BackgroundService.logEventAsync(logData), new Error("Could not get a response from the socket in time. Please refresh the page and try again.");
                    }
                }
            }
            class ChatApiMessage extends Message {
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
            let ChatApiMessageType, VideoApiMessageType;
            !function(ChatApiMessageType) {
                ChatApiMessageType.INIT_CHAT = "initChat", ChatApiMessageType.ON_MESSAGE = "onMessage", 
                ChatApiMessageType.ON_BUFFER = "onBuffer", ChatApiMessageType.ON_TYPING = "onTyping", 
                ChatApiMessageType.ON_WATCHING_ADS = "onWatchingAds", ChatApiMessageType.UPDATE_SETTINGS = "updateSettings";
            }(ChatApiMessageType || (ChatApiMessageType = {}));
            class OnSendMessage extends ChatApiMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, ChatApiMessageType.ON_MESSAGE), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            class UpdateSettingsMessage extends ChatApiMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, ChatApiMessageType.UPDATE_SETTINGS), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            class BufferingMessage extends ChatApiMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, ChatApiMessageType.ON_BUFFER), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            class TypingMessage extends ChatApiMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, ChatApiMessageType.ON_TYPING), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            class WatchingAdsMessage extends ChatApiMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, ChatApiMessageType.ON_WATCHING_ADS), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            class VideoApiMessage extends Message {
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
            !function(VideoApiMessageType) {
                VideoApiMessageType.UPDATE_SESSION = "updateSession", VideoApiMessageType.NEXT_EPISODE = "nextEpisode", 
                VideoApiMessageType.REBOOT_SESSION = "rebootSession", VideoApiMessageType.GET_SERVER_TIME = "getServerTime";
            }(VideoApiMessageType || (VideoApiMessageType = {}));
            class UpdateSessionMessage extends VideoApiMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, VideoApiMessageType.UPDATE_SESSION), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            class TeardownMessage extends BackgroundMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, BackgroundMessageType.TEARDOWN), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            class SessionDataManager {
                constructor() {
                    var obj, key, value;
                    value = void 0, (key = "_redirectData") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value;
                }
                loadSessionData(sessionData, userSettings) {
                    this._redirectData = sessionData, this._redirectData && (this._redirectData.userSettings = userSettings, 
                    this._redirectData.messages || (this._redirectData.messages = []));
                }
                get sessionData() {
                    return this._redirectData;
                }
                set sessionData(redirectData) {
                    this._redirectData = redirectData;
                }
            }
            class NextEpisodeMessage extends VideoApiMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, VideoApiMessageType.NEXT_EPISODE), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            class RebootSessionMessage extends VideoApiMessage {
                constructor(sender, target, data) {
                    var obj, key, value;
                    super(sender, target, VideoApiMessageType.REBOOT_SESSION), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this.data = data;
                }
            }
            const lostBackgroundConnectionModal = {
                title: "Teleparty | Disconnected from party",
                content: "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
                buttonTitle: "Return to Party"
            };
            function BackgroundSocketEventHandler_defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, obj;
            }
            class BackgroundSocketEventHandler {
                constructor(tabId) {
                    BackgroundSocketEventHandler_defineProperty(this, "_tabId", void 0), BackgroundSocketEventHandler_defineProperty(this, "_userId", void 0), 
                    BackgroundSocketEventHandler_defineProperty(this, "_dataManager", void 0), this._tabId = tabId, 
                    this._dataManager = new SessionDataManager;
                }
                setUserId(userId) {
                    this._userId = userId;
                }
                onMessage(message) {
                    switch (message.type) {
                      case SocketMessageTypes.SEND_MESSAGE:
                        this._onSendMessage(message);
                        break;

                      case SocketMessageTypes.SET_BUFFERING_PRESENCE:
                        this._onBufferPresence(message);
                        break;

                      case SocketMessageTypes.SET_TYPING_PRESENCE:
                        this._onTypingPresence(message);
                        break;

                      case SocketMessageTypes.SET_ADS_PRESENCE:
                        this._onAdsPresence(message);
                        break;

                      case SocketMessageTypes.UPDATE_SETTINGS_MESSAGE:
                        this._updateSettings(message);
                        break;

                      case SocketMessageTypes.UPDATE_SESSION:
                        this._updateSession(message);
                        break;

                      case SocketMessageTypes.JUMP_TO_NEXT_EPISODE:
                        this._onNextEpisode(message);
                    }
                }
                clearSessionData() {
                    this._dataManager.sessionData = void 0;
                }
                loadSessionData(data, userSettings) {
                    this._dataManager.loadSessionData(data, userSettings);
                }
                setDataManager(dataManager) {
                    this._dataManager = dataManager;
                }
                onConnect() {
                    debug("Connected to server");
                }
                onReconnectFailed() {
                    const lostConnectionMessage = new TeardownMessage("Service_Background", "Content_Script", {
                        showAlert: !0,
                        alertModal: lostBackgroundConnectionModal
                    });
                    Socket_SocketPool.removeSocketForTabId(this._tabId), Messaging_MessagePasser.sendMessageToTabAsync(lostConnectionMessage, this._tabId);
                }
                onReconnect() {
                    if (this._dataManager.sessionData) {
                        const socketWrapper = Socket_SocketPool.getSocketForTabId(this._tabId);
                        null == socketWrapper || socketWrapper.sendMessage(SocketMessageTypes.REBOOT_MESSAGE, this._dataManager.sessionData, (rebootResponse => {
                            if (!rebootResponse || rebootResponse.errorMessage) rebootResponse && console.log(rebootResponse.errorMessage), 
                            this.onReconnectFailed(); else {
                                const rebootCompleteMessage = new RebootSessionMessage("Service_Background", "Content_Script", rebootResponse);
                                Messaging_MessagePasser.sendMessageToTabAsync(rebootCompleteMessage, this._tabId).then((success => {
                                    success || this.onReconnectFailed();
                                }));
                            }
                        }));
                    }
                }
                _onSendMessage(message) {
                    var _this$_dataManager$se;
                    const sessionChatMessage = new OnSendMessage("Service_Background", "Content_Script", message.data);
                    Messaging_MessagePasser.sendMessageToTabAsync(sessionChatMessage, this._tabId), 
                    null === (_this$_dataManager$se = this._dataManager.sessionData) || void 0 === _this$_dataManager$se || _this$_dataManager$se.messages.push(sessionChatMessage.data);
                }
                _onBufferPresence(message) {
                    const bufferMessage = new BufferingMessage("Service_Background", "Content_Script", message.data);
                    bufferMessage.data.usersBuffering = bufferMessage.data.usersBuffering.filter((user => user != this._userId)), 
                    Messaging_MessagePasser.sendMessageToTabAsync(bufferMessage, this._tabId);
                }
                _onTypingPresence(message) {
                    const typingMessage = new TypingMessage("Service_Background", "Content_Script", message.data);
                    typingMessage.data.usersTyping = typingMessage.data.usersTyping.filter((user => user != this._userId)), 
                    Messaging_MessagePasser.sendMessageToTabAsync(typingMessage, this._tabId);
                }
                _onAdsPresence(message) {
                    const adsMessage = new WatchingAdsMessage("Service_Background", "Content_Script", message.data);
                    adsMessage.data.usersWatchingAds = adsMessage.data.usersWatchingAds.filter((user => user != this._userId)), 
                    Messaging_MessagePasser.sendMessageToTabAsync(adsMessage, this._tabId);
                }
                _updateSettings(message) {
                    const updateMessage = new UpdateSettingsMessage("Service_Background", "Content_Script", message.data);
                    Messaging_MessagePasser.sendMessageToTabAsync(updateMessage, this._tabId), this._dataManager.sessionData && this._dataManager.sessionData.permId == updateMessage.data.permId && (this._dataManager.sessionData.userSettings, 
                    updateMessage.data.userSettings);
                }
                _updateSession(message) {
                    const updateMessage = new UpdateSessionMessage("Service_Background", "Content_Script", message.data);
                    Messaging_MessagePasser.sendMessageToTabAsync(updateMessage, this._tabId), this._dataManager.sessionData && (this._dataManager.sessionData.state = updateMessage.data.state, 
                    this._dataManager.sessionData.lastKnownTime = updateMessage.data.lastKnownTime, 
                    this._dataManager.sessionData.lastKnwonTimeUpdatedAt = updateMessage.data.lastKnownTimeUpdatedAt);
                }
                _onNextEpisode(message) {
                    const nextEpisodeMessage = new NextEpisodeMessage("Service_Background", "Content_Script", message.data);
                    Messaging_MessagePasser.sendMessageToTabAsync(nextEpisodeMessage, this._tabId), 
                    this._dataManager.sessionData && (this._dataManager.sessionData.videoId = nextEpisodeMessage.data.videoId);
                }
            }
            class SocketCreator {
                constructor(tabId) {
                    var obj, key, value;
                    value = void 0, (key = "_tabId") in (obj = this) ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, this._tabId = tabId;
                }
                createSocketForTab() {
                    const socketEventHandler = new BackgroundSocketEventHandler(this._tabId), socketWrapper = new SocketWrapper("wss://ws.teleparty.com/", socketEventHandler);
                    return debug("Created Socket with url: wss://ws.teleparty.com/"), socketWrapper;
                }
            }
            let PopupMessageType, ClientMessageType;
            !function(PopupMessageType) {
                PopupMessageType.CREATE_SESSION = "createSession", PopupMessageType.GET_INIT_DATA = "getInitData", 
                PopupMessageType.IS_CONTENT_SCRIPT_READY = "isContentScriptReady", PopupMessageType.SET_CHAT_VISIBLE = "setChatVisible", 
                PopupMessageType.DISCONNECT = "teardown", PopupMessageType.CLOSE_POPUP = "closePopup";
            }(PopupMessageType || (PopupMessageType = {})), function(ClientMessageType) {
                ClientMessageType.BROADCAST = "brodadcast", ClientMessageType.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode", 
                ClientMessageType.SEND_MESSAGE = "sendMessage", ClientMessageType.CONTENT_SCRIPT_READY = "contentScriptReady", 
                ClientMessageType.CONTENT_SCRIPT_ERROR = "contentScriptError", ClientMessageType.TEARDOWN = "teardown", 
                ClientMessageType.GET_SESSION_DATA = "getSessionData", ClientMessageType.SET_TYPING = "setTyping", 
                ClientMessageType.SET_BUFFERING = "setBuffering", ClientMessageType.SET_WATCHING_ADS = "setWatchingAds", 
                ClientMessageType.BROADCAST_USER_SETTINGS = "brodadcastUserSettings";
            }(ClientMessageType || (ClientMessageType = {}));
            const SessionMap = new class {
                async getRedirectDataForTabAsync(tabId) {
                    const redirectDataMap = (await ChromeStorage_ChromeStorageReader.getItemsAsync([ "redirectDataMap" ])).redirectDataMap, sessionDataKey = this._getKeyForSessionData(tabId);
                    if (redirectDataMap && redirectDataMap[sessionDataKey]) {
                        const redirectData = redirectDataMap[sessionDataKey];
                        if (this._isRedirectDataValid(redirectData)) return redirectData;
                    }
                }
                async deleteRedirectDataForTabAsync(tabId) {
                    const redirectDataMap = (await ChromeStorage_ChromeStorageReader.getItemsAsync([ "redirectDataMap" ])).redirectDataMap, redirectDataKey = this._getKeyForSessionData(tabId);
                    redirectDataMap && redirectDataMap[redirectDataKey] && delete redirectDataMap[redirectDataKey], 
                    await ChromeStorage_ChromeStorageWriter.setItemsAsync({
                        redirectDataMap
                    });
                }
                _getKeyForSessionData(tabId) {
                    return tabId;
                }
                filterPhaseScriptData(phaseData) {
                    return this._removeInvalidSessionDataInMap(phaseData);
                }
                async storeRedirectDataForTabAsync(redirectData, tabId) {
                    const dataKey = this._getKeyForSessionData(tabId);
                    let redirectDataMap = await ChromeStorage_ChromeStorageReader.getItemsAsync([ "redirectDataMap" ]);
                    redirectDataMap[dataKey] = redirectData, redirectDataMap = this._removeInvalidSessionDataInMap(redirectDataMap), 
                    await ChromeStorage_ChromeStorageWriter.setItemsAsync({
                        redirectDataMap
                    });
                }
                _removeInvalidSessionDataInMap(sessionMap) {
                    return function(obj, predicate) {
                        const result = {};
                        let key;
                        for (key in obj) obj.hasOwnProperty(key) && predicate(obj[key]) && (result[key] = obj[key]);
                        return result;
                    }(sessionMap, this._isRedirectDataValid);
                }
                _isRedirectDataValid(redirectData) {
                    const storedDate = redirectData.date;
                    return void 0 !== storedDate && "number" == typeof storedDate && storedDate <= Date.now() && Date.now() - storedDate < 108e5;
                }
            };
            Object.freeze(SessionMap);
            const ChromeStorage_SessionMap = SessionMap;
            class BackgroundSocketMessageForwarder {
                constructor() {
                    debug("Message forwarder"), this._registerChromeListeners();
                }
                _receiveMessage(message, sender, sendResponse) {
                    const messageTarget = message.target, messageSender = message.sender;
                    if ("Service_Background" === messageTarget) if ("Content_Script" === messageSender) {
                        if (message.type == ClientMessageType.BROADCAST) {
                            const castMessage = message;
                            return this._sendToSocket(SocketMessageTypes.UPDATE_SESSION, castMessage.data, sender, sendResponse), 
                            !0;
                        }
                        if (message.type == ClientMessageType.SEND_MESSAGE) {
                            const castMessage = message;
                            return this._sendToSocket(SocketMessageTypes.SEND_MESSAGE, castMessage.data, sender, sendResponse), 
                            !0;
                        }
                        if (message.type == ClientMessageType.SET_TYPING) {
                            const castMessage = message;
                            return this._sendToSocket(SocketMessageTypes.SET_TYPING_PRESENCE, castMessage.data, sender, sendResponse), 
                            !0;
                        }
                        if (message.type == ClientMessageType.SET_BUFFERING) {
                            const castMessage = message;
                            return this._sendToSocket(SocketMessageTypes.SET_BUFFERING_PRESENCE, castMessage.data, sender, sendResponse), 
                            !0;
                        }
                        if (message.type == ClientMessageType.SET_WATCHING_ADS) {
                            const castMessage = message;
                            return this._sendToSocket(SocketMessageTypes.SET_ADS_PRESENCE, castMessage.data, sender, sendResponse), 
                            !0;
                        }
                        if (message.type === ClientMessageType.BROADCAST_USER_SETTINGS) {
                            const castMessage = message;
                            return this._sendToSocket(SocketMessageTypes.BROADCAST_USER_SETTINGS, castMessage.data, sender, sendResponse), 
                            !0;
                        }
                        if (message.type === ClientMessageType.BROADCAST_NEXT_EPISODE) {
                            const castMessage = message;
                            return this._sendToSocket(SocketMessageTypes.NEXT_EPISODE_MESSAGE, castMessage.data, sender, sendResponse), 
                            !0;
                        }
                        if (message.type === VideoApiMessageType.GET_SERVER_TIME) return this._sendToSocket(SocketMessageTypes.GET_SERVER_TIME, {}, sender, sendResponse), 
                        !0;
                    } else if ("Service_Background" == messageSender && message.type == BackgroundMessageType.REBOOT) {
                        const castMessage = message, socketWrapper = Socket_SocketPool.getSocketForTabId(castMessage.data.tabId);
                        return null == socketWrapper || socketWrapper.sendMessage(SocketMessageTypes.REBOOT_MESSAGE, castMessage.data.sessionData, sendResponse), 
                        debug("Attempted to reboot session"), !0;
                    }
                    return !1;
                }
                _sendToSocket(type, data, sender, callback) {
                    const socketWrapper = this._getSocketForSender(sender);
                    null == socketWrapper || socketWrapper.sendMessage(type, data, callback);
                }
                _getSocketForSender(sender) {
                    var _sender$tab;
                    const tabId = null === (_sender$tab = sender.tab) || void 0 === _sender$tab ? void 0 : _sender$tab.id;
                    return tabId ? Socket_SocketPool.getSocketForTabId(tabId) : void 0;
                }
                _registerChromeListeners() {
                    Messaging_MessagePasser.addListener(this._receiveMessage.bind(this));
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
            class ClosePopup extends PopupMessage {
                constructor(sender, target) {
                    super(sender, target, PopupMessageType.CLOSE_POPUP);
                }
            }
            class IsContentSriptReadyMessage extends PopupMessage {
                constructor(sender, target) {
                    super(sender, target, PopupMessageType.IS_CONTENT_SCRIPT_READY);
                }
            }
            function BackgroundDataManager_defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, obj;
            }
            class BackgroundDataManager {
                constructor(eventLogger) {
                    BackgroundDataManager_defineProperty(this, "_gaq", void 0), BackgroundDataManager_defineProperty(this, "_eventLogger", void 0), 
                    this._eventLogger = eventLogger, this._gaq = [], this.setupListeners(), this.initGAQ(), 
                    this.loadUserId();
                }
                initGAQ() {
                    !function() {
                        var _s$parentNode;
                        const ga = document.createElement("script");
                        ga.type = "text/javascript", ga.async = !0, ga.src = "https://ssl.google-analytics.com/ga.js";
                        const s = document.getElementsByTagName("script")[0];
                        null === (_s$parentNode = s.parentNode) || void 0 === _s$parentNode || _s$parentNode.insertBefore(ga, s);
                    }(), this._gaq.push([ "_setAccount", "UA-71812070-2" ]), this._gaq.push([ "_trackPageview" ]);
                }
                onUpdateAvailable(details) {
                    this._gaq.push([ "_trackEvent", "auto-update ->" + details.version, "clicked" ]), 
                    chrome.runtime.reload();
                }
                setupListeners() {
                    chrome.tabs.onUpdated.addListener(this.tabListener.bind(this)), chrome.runtime.onInstalled.addListener(this.onInstall.bind(this)), 
                    chrome.storage.onChanged.addListener(((changes, areaName) => {
                        console.log("storage change: " + JSON.stringify(changes) + " for " + JSON.stringify(areaName));
                    })), chrome.runtime.onUpdateAvailable.addListener(this.onUpdateAvailable.bind(this));
                }
                onInstall(details) {
                    if ("install" == details.reason) {
                        console.log("This is a first install!");
                        const thisVersion = chrome.runtime.getManifest().version;
                        this._gaq.push([ "_trackEvent", "install: " + thisVersion, "clicked" ]), this._eventLogger.logEventAsync({
                            eventType: "install"
                        }), chrome.tabs.create({
                            url: "https://redirect.teleparty.com/welcome"
                        });
                    } else if ("update" == details.reason) {
                        chrome.runtime.sendMessage("test");
                        const thisVersion = chrome.runtime.getManifest().version;
                        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!"), 
                        this._gaq.push([ "_trackEvent", "update: " + details.previousVersion + " -> " + thisVersion, "clicked" ]), 
                        this._eventLogger.logEventAsync({
                            eventType: "update-" + thisVersion
                        });
                    }
                }
                validateId(id) {
                    return 16 === id.length;
                }
                setUserId() {
                    const browser = navigator.userAgent.toLowerCase().indexOf("edg") > -1 ? "edge" : "chrome";
                    console.log("browser: " + browser);
                    const queryParams = "?browser=" + browser, xhr = new XMLHttpRequest;
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState == XMLHttpRequest.DONE) {
                            const userId = xhr.responseText, date = new Date;
                            this.validateId(userId) && (chrome.storage.local.set({
                                userId,
                                recentlyUpdated: !0,
                                recentlyUpdated3: !0,
                                date: date.toString()
                            }, (function() {
                                console.log("Settings saved");
                            })), chrome.runtime.setUninstallURL("https://www.netflixparty.com/uninstall?userId=" + userId));
                        }
                    }, xhr.open("GET", "https://data3.netflixparty.com/create-userId" + queryParams, !0), 
                    xhr.send(null);
                }
                loadUserId() {
                    try {
                        chrome.storage.local.get(null, (data => {
                            data.userId || (console.log("userId undefined in local storage -> now setting"), 
                            this.setUserId());
                        }));
                    } catch (e) {
                        console.log("user auth error");
                    }
                }
                tabListener(tabId, changeInfo, tab) {
                    if ("complete" == changeInfo.status) {
                        const url = tab.url;
                        if (url && tab.id) {
                            const extensionTab = new ExtensionTab(new URL(url), tab.id), streamingService = extensionTab.streamingService;
                            streamingService && streamingService.name === Services_Netflix.name && this.initContentScriptsAsync(extensionTab);
                        } else if (chrome.runtime.lastError) return;
                    }
                }
                async initContentScriptsAsync(extensionTab) {
                    if (extensionTab.streamingService) {
                        const redirectData = await ChromeStorage_SessionMap.getRedirectDataForTabAsync(extensionTab.id);
                        if (redirectData && redirectData.autoJoin) {
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
                            const readyMessage = new IsContentSriptReadyMessage("Service_Background", "Content_Script");
                            await Messaging_MessagePasser.sendMessageToTabAsync(readyMessage, extensionTab.id);
                        }
                    }
                }
            }
            const BackgroundDebugger = new class {
                logStorageData() {
                    ChromeStorage_ChromeStorageReader.getAllItemsAsync().then(console.log);
                }
            };
            Object.freeze(BackgroundDebugger);
            const Background_BackgroundDebugger = BackgroundDebugger;
            function BackgroundService_ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    enumerableOnly && (symbols = symbols.filter((function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    }))), keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function BackgroundService_objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? BackgroundService_ownKeys(Object(source), !0).forEach((function(key) {
                        BackgroundService_defineProperty(target, key, source[key]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : BackgroundService_ownKeys(Object(source)).forEach((function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    }));
                }
                return target;
            }
            function BackgroundService_defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, obj;
            }
            const BackgroundService = new class {
                constructor() {
                    BackgroundService_defineProperty(this, "dataManager", void 0), BackgroundService_defineProperty(this, "debugger", Background_BackgroundDebugger), 
                    this.dataManager = new BackgroundDataManager(this), this.registerChromeListeners(), 
                    debug("Service Background");
                }
                receiveMessage(message, sender, sendResponse) {
                    if ("Service_Background" === message.target) {
                        if (message.type == PopupMessageType.CREATE_SESSION) {
                            const createMessage = message;
                            debug("Got create Session Message");
                            const data = createMessage.data;
                            return this.createSessionAsync(data).then(sendResponse).catch(this.receiveMessageOnError(sendResponse)), 
                            !0;
                        }
                        if (message.type == ClientMessageType.GET_SESSION_DATA) {
                            const getSessionMessage = message;
                            return this.getSessionAsync(getSessionMessage.data, sender).then(sendResponse).catch(this.receiveMessageOnError(sendResponse)), 
                            !0;
                        }
                        if (message.type == BackgroundMessageType.TEARDOWN) {
                            const teardownMessage = message;
                            return this.teardownSessionAsync(teardownMessage, sender).then(sendResponse), !0;
                        }
                        if (message.type == BackgroundMessageType.LOG_EVENT) {
                            const logEventMessage = message;
                            return this.logEventAsync(logEventMessage.data), sendResponse(), !0;
                        }
                        if (message.type == BackgroundMessageType.LOG_EXPERIMENT) {
                            const logExpMessage = message;
                            return this.logExperimentAsync(logExpMessage.data), sendResponse(), !0;
                        }
                    }
                }
                async increaseUsesAsync() {
                    var _res$extensionUses;
                    const uses = null !== (_res$extensionUses = (await ChromeStorage_ChromeStorageReader.getItemsAsync([ "extensionUses" ])).extensionUses) && void 0 !== _res$extensionUses ? _res$extensionUses : 0;
                    await ChromeStorage_ChromeStorageWriter.setItemsAsync({
                        extensionUses: uses + 1
                    });
                }
                async logExperimentAsync(data) {
                    try {
                        const logData = {
                            permId: await this.waitForPermId(),
                            event: data.eventType,
                            name: data.experimentName,
                            version: data.experimentVersion
                        };
                        console.log("event: " + JSON.stringify(logData));
                        const xmlhttp = new XMLHttpRequest;
                        xmlhttp.open("POST", "https://data3.netflixparty.com/log-experiment"), xmlhttp.setRequestHeader("Content-Type", "application/json"), 
                        xmlhttp.send(JSON.stringify(logData));
                    } catch (e) {
                        console.log("log event error : " + e);
                    }
                }
                async logEventAsync(data) {
                    try {
                        const logData = {
                            userId: await this.waitForPermId(),
                            eventType: data.eventType,
                            sessionId: data.sessionId
                        };
                        console.log("event: " + JSON.stringify(logData));
                        const xmlhttp = new XMLHttpRequest;
                        xmlhttp.open("POST", "https://data3.netflixparty.com/log-event"), xmlhttp.setRequestHeader("Content-Type", "application/json"), 
                        xmlhttp.send(JSON.stringify(logData));
                    } catch (e) {
                        console.log("log event error : " + e);
                    }
                }
                async teardownSessionAsync(teardownMessage, sender) {
                    if (sender.tab && sender.tab.id) {
                        const tabId = sender.tab.id;
                        teardownMessage.sender = "Service_Background", teardownMessage.target = "Content_Script", 
                        await Messaging_MessagePasser.sendMessageToTabAsync(teardownMessage, tabId), await this.deleteSocketForTabAsync(tabId);
                        const closePopupMessage = new ClosePopup("Service_Background", "Popup");
                        Messaging_MessagePasser.sendMessageToExtension(closePopupMessage);
                    }
                }
                async getSessionAsync(requestData, sender) {
                    if (!(sender.tab && sender.tab.id && sender.url)) throw new Error("Invalid Request");
                    {
                        const url = sender.url, tabId = sender.tab.id, extensionTabData = new ExtensionTab(new URL(url), tabId);
                        await this.deleteSocketForTabAsync(tabId);
                        const redirectData = await this.loadRedirectDataAsync(tabId);
                        let sessionId;
                        if (redirectData ? (sessionId = redirectData.sessionId, await this.deleteRedirectDataAsync(tabId)) : sessionId = extensionTabData.sessionIdFromUrl, 
                        sessionId) {
                            isNetflixParty(new URL(url)) && (extensionTabData.videoId = requestData.videoId);
                            const joinData = {
                                extensionTab: extensionTabData,
                                sessionId
                            };
                            return await this.joinSessionAsync(joinData);
                        }
                    }
                }
                getUserSettingsForStorageData(storageData) {
                    var _storageData$userIcon, _storageData$userNick;
                    return {
                        userIcon: null !== (_storageData$userIcon = storageData.userIcon) && void 0 !== _storageData$userIcon ? _storageData$userIcon : "",
                        userNickname: null !== (_storageData$userNick = storageData.userNickname) && void 0 !== _storageData$userNick ? _storageData$userNick : ""
                    };
                }
                async joinSessionAsync(joinSessionData) {
                    const extensionTabData = joinSessionData.extensionTab, streamingService = extensionTabData.streamingService, socket = await this.getSocketForTabAsync(extensionTabData.id);
                    socket.clearSessionData();
                    const storageData = await this.getValidatedChromeStorageDataAsync(), socketUserId = await socket.getUserIdAsync(), permId = storageData.userId ? storageData.userId : socketUserId;
                    storageData.userId || (await this.setPermIdAsync(socketUserId), storageData.userId = socketUserId);
                    const userSettings = this.getUserSettingsForStorageData(storageData), joinData = {
                        videoId: extensionTabData.videoId,
                        sessionId: joinSessionData.sessionId,
                        videoService: null == streamingService ? void 0 : streamingService.serverName,
                        permId,
                        userSettings
                    }, sessionData = await new Promise((resolve => {
                        socket.sendMessage(SocketMessageTypes.JOIN_SESSION, joinData, (res => {
                            resolve(res);
                        }));
                    })), storedSessionData = BackgroundService_objectSpread(BackgroundService_objectSpread({}, sessionData), {}, {
                        userId: socketUserId,
                        permId,
                        videoService: null == streamingService ? void 0 : streamingService.serverName
                    }), res = await this.onJoinSessionDataReceivedAsync(sessionData, joinSessionData.extensionTab.id, storageData);
                    return socket.loadSessionData(storedSessionData, userSettings), res;
                }
                async createSessionAsync(createSessionData) {
                    const extensionTabData = createSessionData.extensionTabData, streamingService = extensionTabData.streamingService, videoData = await this.getVideoDataForTabIdAsync(extensionTabData.id), socket = await this.getSocketForTabAsync(extensionTabData.id);
                    socket.clearSessionData();
                    const storageData = await this.getValidatedChromeStorageDataAsync(), socketUserId = await socket.getUserIdAsync(), permId = storageData.userId ? storageData.userId : socketUserId;
                    storageData.userId || (await this.setPermIdAsync(socketUserId), storageData.userId = socketUserId);
                    const userSettings = this.getUserSettingsForStorageData(storageData), createData = {
                        controlLock: createSessionData.createSettings.controlLock,
                        videoId: videoData.videoId,
                        videoDuration: videoData.videoDuration,
                        videoType: videoData.videoType,
                        serviceDomain: videoData.serviceDomain,
                        videoService: null == streamingService ? void 0 : streamingService.serverName,
                        syncFromEnd: null == streamingService ? void 0 : streamingService.syncFromEnd,
                        permId,
                        userSettings
                    }, sessionData = await new Promise((resolve => {
                        socket.sendMessage(SocketMessageTypes.CREATE_SESSION, createData, (res => {
                            resolve(res);
                        }));
                    })), storedSessionData = BackgroundService_objectSpread(BackgroundService_objectSpread({}, sessionData), {}, {
                        userId: socketUserId,
                        permId,
                        videoService: null == streamingService ? void 0 : streamingService.serverName,
                        messages: []
                    }), response = await this.onCreateSessionDataReceivedAsync(sessionData, extensionTabData.id, storageData);
                    return socket.loadSessionData(storedSessionData, userSettings), response;
                }
                async getSocketForTabAsync(tabId) {
                    const socket = Socket_SocketPool.getSocketForTabId(tabId);
                    if (socket) return socket;
                    {
                        const socketWrapper = await this.createSocketForTabAsync(tabId);
                        return Socket_SocketPool.setSocketForTabId(tabId, socketWrapper), socketWrapper;
                    }
                }
                async deleteSocketForTabAsync(tabId) {
                    const socket = Socket_SocketPool.getSocketForTabId(tabId);
                    socket && (socket.teardown(), Socket_SocketPool.removeSocketForTabId(tabId));
                }
                async createSocketForTabAsync(tabId) {
                    const socketCreator = new SocketCreator(tabId);
                    return await socketCreator.createSocketForTab();
                }
                async getVideoDataForTabIdAsync(tabId) {
                    const getVideoDataMessage = new BackgroundMessage("Service_Background", "Content_Script", BackgroundMessageType.GET_VIDEO_DATA), response = await Messaging_MessagePasser.sendMessageToTabAsync(getVideoDataMessage, tabId);
                    if (response) {
                        if (response.error) throw new Error(response.error);
                        return response;
                    }
                    throw new Error("Failed to connect to Script. Please refresh the page and try again");
                }
                async loadRedirectDataAsync(tabId) {
                    const data = ChromeStorage_SessionMap.getRedirectDataForTabAsync(tabId);
                    return ChromeStorage_SessionMap.deleteRedirectDataForTabAsync(tabId), data;
                }
                async deleteRedirectDataAsync(tabId) {
                    return ChromeStorage_SessionMap.deleteRedirectDataForTabAsync(tabId);
                }
                async getValidatedChromeStorageDataAsync() {
                    const storageData = await ChromeStorage_ChromeStorageReader.getAllItemsAsync(), validatedStorageData = ChromeStorage_ChromeStorageValidator.validateStorageData(storageData);
                    return storageData !== validatedStorageData && this.updateStorageData(validatedStorageData), 
                    validatedStorageData;
                }
                async waitForPermId() {
                    return new Promise(((resolve, reject) => {
                        let attempts = 0;
                        const checkForPermId = async () => {
                            attempts++;
                            const storageData = await this.getValidatedChromeStorageDataAsync();
                            storageData.userId ? resolve(storageData.userId) : attempts < 5 ? setTimeout(checkForPermId, 5e3) : reject("Could not get permId in time");
                        };
                        checkForPermId();
                    }));
                }
                async setPermIdAsync(userId) {
                    debug("No perm id found, using socket id"), await ChromeStorage_ChromeStorageWriter.setItemsAsync({
                        userId
                    });
                }
                updateStorageData(storageData) {
                    try {
                        ChromeStorage_ChromeStorageWriter.setItemsAsync(storageData);
                    } catch (error) {
                        this.logError("Update chrome Storage Data Failed " + error);
                    }
                }
                shouldShowReview(storageData) {
                    return void 0 !== storageData.extensionUses && storageData.extensionUses >= 1 && !storageData.reviewClicked;
                }
                async onCreateSessionDataReceivedAsync(callbackData, tabId, storageData) {
                    if (!callbackData || callbackData.errorMessage) throw this.deleteRedirectDataAsync(tabId), 
                    new Error(callbackData ? callbackData.errorMessage : "An unexpected error occured. Please refresh the page and try again.");
                    {
                        const loadSessionData = {
                            sessionCallbackData: callbackData,
                            storageData,
                            isCreate: !0,
                            showReviewMessage: this.shouldShowReview(storageData)
                        }, loadSessionMessage = new LoadSessionMessage("Service_Background", "Content_Script", loadSessionData);
                        await this.sendMessageToTabAsync(tabId, loadSessionMessage);
                        const logData = {
                            eventType: "create-session-chrome",
                            sessionId: callbackData.sessionId
                        };
                        return this.logEventAsync(logData), this.increaseUsesAsync(), {
                            sessionId: callbackData.sessionId,
                            showReviewMessage: this.shouldShowReview(storageData)
                        };
                    }
                }
                async onJoinSessionDataReceivedAsync(callbackData, tabId, storageData) {
                    if (!callbackData || callbackData.errorMessage) throw this.deleteRedirectDataAsync(tabId), 
                    new Error(callbackData ? callbackData.errorMessage : "An error occured while trying to join the session. Please navigate to the party url and try again.");
                    {
                        const loadSessionData = {
                            sessionCallbackData: callbackData,
                            storageData,
                            isCreate: !1,
                            showReviewMessage: this.shouldShowReview(storageData)
                        }, loadSessionMessage = new LoadSessionMessage("Service_Background", "Content_Script", loadSessionData);
                        await this.sendMessageToTabAsync(tabId, loadSessionMessage);
                        const logData = {
                            eventType: "join-session-chrome",
                            sessionId: callbackData.sessionId
                        };
                        return this.logEventAsync(logData), this.increaseUsesAsync(), {
                            sessionId: callbackData.sessionId,
                            showReviewMessage: this.shouldShowReview(storageData)
                        };
                    }
                }
                async sendMessageToTabAsync(tabId, message, timeout) {
                    return new Promise(((resolve, reject) => {
                        let sendTimeout;
                        timeout && (sendTimeout = setTimeout((() => {
                            reject(new Error("Could not get a response from the page in time. Please refresh the page and try again."));
                        }), timeout)), chrome.tabs.sendMessage(tabId, message, (response => {
                            sendTimeout && clearTimeout(sendTimeout), resolve(response);
                        }));
                    }));
                }
                receiveMessageOnError(sendResponse) {
                    return error => {
                        this.logError(error.message), sendResponse({
                            error: error.message
                        });
                    };
                }
                logError(data) {
                    debug("An error occured: " + data);
                }
                registerChromeListeners() {
                    chrome.runtime.onSuspend.addListener((() => {
                        Socket_SocketPool.teardown();
                    })), chrome.tabs.onRemoved.addListener(this.onTabClosed.bind(this)), chrome.runtime.onMessage.addListener(this.receiveMessage.bind(this)), 
                    this.setupHealthCheck(), new BackgroundSocketMessageForwarder;
                }
                onTabClosed(tabId) {
                    const socketWrapper = Socket_SocketPool.getSocketForTabId(tabId);
                    socketWrapper && (debug("Detected Tab Close: Disconnecting socket for tab: " + tabId), 
                    socketWrapper.teardown(), Socket_SocketPool.removeSocketForTabId(tabId));
                }
                setupHealthCheck() {
                    chrome.runtime.onConnect.addListener((port => {
                        var _port$sender, _port$sender$tab;
                        const tabId = null === (_port$sender = port.sender) || void 0 === _port$sender || null === (_port$sender$tab = _port$sender.tab) || void 0 === _port$sender$tab ? void 0 : _port$sender$tab.id;
                        if (tabId) {
                            debug("Connected to Content Script with Tab ID: " + tabId);
                            try {
                                port.postMessage("pong"), port.onDisconnect.addListener((() => {
                                    this.onTabClosed(tabId);
                                }));
                            } catch (e) {}
                        }
                    }));
                }
            };
            Object.freeze(BackgroundService);
            const Background_BackgroundService = BackgroundService;
            window.teleparty = BackgroundService;
        }
    }, __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) return __webpack_module_cache__[moduleId].exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        return __webpack_modules__[moduleId](module, module.exports, __webpack_require__), 
        module.exports;
    }
    __webpack_require__.d = (exports, definition) => {
        for (var key in definition) __webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        });
    }, __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop), 
    __webpack_require__(289);
})();