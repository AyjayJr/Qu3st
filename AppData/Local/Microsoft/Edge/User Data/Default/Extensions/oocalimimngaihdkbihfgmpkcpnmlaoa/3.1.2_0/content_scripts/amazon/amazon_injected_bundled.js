(() => {
    if (!window.videoIdScriptLoaded) {
        console.log("Browse script loaded"), window.videoIdScriptLoaded = !0;
        var getURLParameter = function(url, key, queryIndex) {
            var searchString = "?" + url.split("?")[queryIndex];
            if (void 0 === searchString) return null;
            var escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), match = new RegExp("[?|&]" + escapedKey + "=([^&]*)(&|$)").exec(searchString);
            return null === match || match.length < 2 ? null : decodeURIComponent(match[1]);
        }, open = window.XMLHttpRequest.prototype.open, send = window.XMLHttpRequest.prototype.send;
        function onReadyStateChangeReplacement() {
            if (this._onreadystatechange) return this._onreadystatechange.apply(this, arguments);
        }
        window.XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
            if (this._url = url, url.includes("UpdateStream")) {
                var epId = getURLParameter(url, "titleId", 1);
                window.postMessage({
                    type: "EPISODE_ID",
                    videoId: epId
                }, "*");
            }
            return open.apply(this, arguments);
        }, window.XMLHttpRequest.prototype.send = function(data) {
            return this.onreadystatechange && (this._onreadystatechange = this.onreadystatechange), 
            this.onreadystatechange = onReadyStateChangeReplacement, send.apply(this, arguments);
        };
    }
})();