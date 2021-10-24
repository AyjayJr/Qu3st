(() => {
    window.seekScriptLoaded = !0, console.log("Loaded TP Netflix Injected");
    var getVideoPlayer = function() {
        var e = window.netflix.appContext.state.playerApp.getAPI().videoPlayer, t = e.getAllPlayerSessionIds().find((val => val.includes("watch")));
        return e.getVideoPlayerBySessionId(t);
    };
    function getReactInternals(root) {
        if (null == root) return null;
        for (var keys = Object.keys(root), key = null, i = 0; i < keys.length; i++) if (keys[i].startsWith("__reactInternalInstance")) {
            key = keys[i];
            break;
        }
        return key ? root[key] : null;
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
    async function showControlsAsync() {
        const wrapper = function() {
            const selectorList = [ document.querySelector('div[data-uia="player"]'), document.querySelector("div[data-videoid]"), document.querySelector("div .ltr-fntwn3"), document.querySelector(".active"), document.querySelector(".inactive"), document.querySelector(".passive"), document.querySelector(".watch-video--player-view").children[0] ];
            for (var i = 0; i < selectorList.length; i++) try {
                if (selectorList[i]) return selectorList[i];
            } catch (error) {}
            return null;
        }();
        if (wrapper) {
            const reactInstance = getReactInternals(wrapper);
            reactInstance && (reactInstance.memoizedProps.onPointerMoveCapture(1), await delay(2)());
        }
    }
    window.addEventListener("message", (function seekInteraction(e) {
        if (e.source == window) if (e.data.type && "SEEK" === e.data.type) getVideoPlayer().seek(e.data.time); else if (e.data.type && "PAUSE" === e.data.type) getVideoPlayer().pause(); else if (e.data.type && "PLAY" === e.data.type) getVideoPlayer().play(); else if (e.data.type && "IsPaused" === e.data.type) {
            const paused = getVideoPlayer().isPaused();
            var evt = new CustomEvent("FromNode", {
                detail: {
                    type: "IsPaused",
                    paused,
                    updatedAt: Date.now()
                }
            });
            window.dispatchEvent(evt);
        } else if (e.data.type && "GetCurrentTime" === e.data.type) {
            const time = getVideoPlayer().getCurrentTime();
            evt = new CustomEvent("FromNode", {
                detail: {
                    type: "CurrentTime",
                    time,
                    updatedAt: Date.now()
                }
            });
            window.dispatchEvent(evt);
        } else if (e.data.type && "teardown" == e.data.type) window.removeEventListener("message", seekInteraction, !1), 
        window.seekScriptLoaded = !1; else if (e.data.type && "NEXT_EPISODE" == e.data.type) try {
            const playElement = function() {
                var controlsRoot = document.querySelector(".PlayerControlsNeo__button-control-row");
                if (null == controlsRoot) return null;
                for (var keys = Object.keys(controlsRoot), key = null, i = 0; i < keys.length; i++) if (keys[i].startsWith("__reactInternalInstance")) {
                    key = keys[i];
                    break;
                }
                for (var node = controlsRoot[key].child; node.sibling; ) {
                    if ("play" == node.key) return node;
                    node = node.sibling;
                }
                return null;
            }();
            playElement ? playElement.stateNode.props.player._coreComponent.props.playNextTitle({
                videoId: e.data.videoId
            }) : async function(id) {
                try {
                    await showControlsAsync(), document.querySelector('[data-uia="control-episodes"]').click(), 
                    await delay(500)(), getReactInternals(document.querySelector('[class*="episode-container"]')).child.memoizedProps.playEpisode({
                        stopPropagation: () => {}
                    }, id);
                } catch (error) {
                    console.log(error);
                }
            }(e.data.videoId);
        } catch (error) {
            console.log("Caught Error in React Next Episode " + error);
        } else if (e.data.type && "GetState" == e.data.type) {
            const player = getVideoPlayer();
            if (player) {
                const paused = player.isPaused(), time = player.getCurrentTime(), loading = null !== player.getBusy();
                evt = new CustomEvent("FromNode", {
                    detail: {
                        type: "UpdateState",
                        time,
                        paused,
                        loading,
                        updatedAt: Date.now()
                    }
                });
                window.dispatchEvent(evt);
            }
        }
    }), !1);
})();