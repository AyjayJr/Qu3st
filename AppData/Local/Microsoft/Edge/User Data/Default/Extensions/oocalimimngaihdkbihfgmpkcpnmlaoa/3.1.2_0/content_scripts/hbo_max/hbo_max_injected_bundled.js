window.nodeScriptLoaded || (console.log("VIDEO NODE SCRIPT"), window.nodeScriptLoaded = !0, 
window.addEventListener("tpVideoNode", (function(evt) {
    var type = evt.detail.type, video = document.querySelector("video");
    if ("seek" === type) video && (null != video._dispNode.position ? video._dispNode.position = evt.detail.time : video.currentTime = evt.detail.time); else if ("pause" === type) video && (null != video._dispNode.pause ? video._dispNode.pause() : (evt = new CustomEvent("FromNode", {
        detail: {
            type: "ManualClick"
        }
    }), window.dispatchEvent(evt))); else if ("play" === type) video && (null != video._dispNode.play ? video._dispNode.play() : (evt = new CustomEvent("FromNode", {
        detail: {
            type: "ManualClick"
        }
    }), window.dispatchEvent(evt))); else if ("getPlayItem" == type) if (null == video || "" == video.src || video.readyState < 4 || null == video._dispNode || null == video._dispNode._playItem) ; else {
        var playItem = video._dispNode._playItem, videoDuration = 1e3 * video._dispNode.lastSeekablePosition, videoTimeOffset = video.currentTime - video._dispNode._player._currentPosition;
        evt = new CustomEvent("FromNode", {
            detail: {
                type: "PlayItem",
                playItem,
                videoTimeOffset,
                videoDuration,
                updatedAt: (new Date).getTime()
            }
        }), window.dispatchEvent(evt);
    } else "trigger" == type && (console.log("trigger marker request"), document.querySelector("video") && document.querySelector("video")._dispNode && document.querySelector("video")._dispNode.position && (console.log("triggered"), 
    document.querySelector("video")._dispNode.position = document.querySelector("video")._dispNode.position + .1));
})));