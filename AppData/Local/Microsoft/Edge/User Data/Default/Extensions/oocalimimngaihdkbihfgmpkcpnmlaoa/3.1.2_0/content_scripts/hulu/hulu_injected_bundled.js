(() => {
    window.seekScriptLoaded = !0;
    console.log("setup"), window.addEventListener("message", (function seekInteraction(e) {
        if (e.source == window) {
            if (e.data.type && "SEEK" == e.data.type) document.querySelector("video").__HuluDashPlayer__.currentTime = e.data.time / 1e3; else if (e.data.type && "IsPaused" === e.data.type) {
                console.log("here");
                const paused = document.querySelector("video").__HuluDashPlayer__._paused;
                var evt = new CustomEvent("FromNode", {
                    detail: {
                        type: "IsPaused",
                        paused,
                        updatedAt: Date.now()
                    }
                });
                window.dispatchEvent(evt);
            }
            e.data.type && "teardown" == e.data.type && (console.log("teardown"), window.removeEventListener("message", seekInteraction, !1), 
            window.seekScriptLoaded = !1);
        }
    }), !1);
})();