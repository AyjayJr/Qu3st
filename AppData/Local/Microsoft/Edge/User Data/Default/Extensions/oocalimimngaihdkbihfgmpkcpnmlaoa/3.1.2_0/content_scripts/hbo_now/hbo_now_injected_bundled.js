window.nodeScriptLoaded || (window.nodeScriptLoaded = !0, window.addEventListener("tpVideoNode", (function(evt) {
    var type = evt.detail.type, video = document.querySelector("video");
    if ("seek" === type) video && video._dispNode._videoElementSetCurrentTime(evt.detail.time); else if ("pause" === type) video && video._dispNode._videoElementPause(); else if ("play" === type) video && video._dispNode._videoElementPlay(); else if ("getPlayItem" == type && null != video) {
        var playItem = video._dispNode._playItem, videoTimeOffset = video.currentTime - video._dispNode._position;
        evt = new CustomEvent("FromNode", {
            detail: {
                type: "PlayItem",
                playItem,
                videoTimeOffset,
                updatedAt: (new Date).getTime()
            }
        }), window.dispatchEvent(evt);
    }
})));