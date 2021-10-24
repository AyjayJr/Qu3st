window.telepartyBrowseLoaded || (window.telepartyBrowseLoaded = !0, function() {
    var tasks = null, tasksInFlight = 0, delay = function(milliseconds) {
        return function(result) {
            return new Promise((function(resolve, reject) {
                setTimeout((function() {
                    resolve(result);
                }), milliseconds);
            }));
        };
    }, pushTask = function(task) {
        0 === tasksInFlight && (tasks = Promise.resolve()), tasksInFlight += 1, tasks = tasks.then(task).then((function() {
            tasksInFlight -= 1;
        }));
    }, clickAtProgress = function(target, progress, eventType) {
        const {width, height, left, top} = target.getBoundingClientRect(), x = left + width * progress, y = top + height / 2;
        var clickEvent = document.createEvent("MouseEvents");
        clickEvent.initMouseEvent(eventType, !0, !0, window, 0, 0, 0, x, y, !1, !1, !1, !1, 0, null), 
        target.dispatchEvent(clickEvent);
    }, triggerCometRequest = function triggerCometRequest() {
        return new Promise((async (resolve, reject) => {
            try {
                await new Promise((async (resolve, reject) => {
                    if (jQuery("[style*='_add']").length && jQuery("[style*='_add']").is(":visible")) jQuery("[style*='_add']").addClass("listToggle"); else {
                        if (!jQuery("[style*='_remove']").length || !jQuery("[style*='_remove']").is(":visible")) return void reject();
                        jQuery("[style*='_remove']").addClass("listToggle");
                    }
                    var toggleElement = document.querySelector(".listToggle");
                    toggleElement ? (clickAtProgress(toggleElement, 1, "mousedown"), clickAtProgress(toggleElement, 1, "mouseup"), 
                    resolve()) : (console.log("No toggle weird"), reject());
                })), await delay(200)(), resolve();
            } catch (e) {
                await delay(200)(), await triggerCometRequest(), resolve();
            }
        }));
    }, teardown = function() {
        window.removeEventListener("TPBrowse", browseInteraction), window.removeEventListener("message", onmessage), 
        window.telepartyBrowseLoaded = !1;
    };
    console.log("Injected HBO Browse Script");
    var onmessage = function(event) {
        event.source == window && event.data && "teardown" === event.data.type && teardown();
    };
    window.addEventListener("message", onmessage, !1);
    var script, s, browseInteraction = function(event) {
        "TOGGLE_LIST" === event.detail.type && (pushTask(triggerCometRequest), pushTask(triggerCometRequest));
    };
    window.addEventListener("TPBrowse", browseInteraction, !1), window.videoIdScriptLoaded || (script = '   \n    console.log("loaded video id script");\n    if(!window.videoIdScriptLoaded) {\n\n        window.videoIdScriptLoaded = true;\n        \n        //adds a callback to the browser default XMLHttpRequest implementation\n        var addXMLRequestCallback = function(callback){\n            var oldSend, i;\n            if( XMLHttpRequest.callbacks ) {\n                // we\'ve already overridden send() so just add the callback\n                XMLHttpRequest.callbacks.push( callback );\n            } else {\n                // create a callback queue\n                XMLHttpRequest.callbacks = [callback];\n                // store the native send()\n                oldSend = XMLHttpRequest.prototype.send;\n                // override the native send()\n                XMLHttpRequest.prototype.send = function(){\n                    // process the callback queue\n                    // the xhr instance is passed into each callback but seems pretty useless\n                    // you can\'t tell what its destination is or call abort() without an error\n                    // so only really good for logging that a request has happened\n                    // I could be wrong, I hope so...\n                    // EDIT: I suppose you could override the onreadystatechange handler though\n                    for( i = 0; i < XMLHttpRequest.callbacks.length; i++ ) {\n                        XMLHttpRequest.callbacks[i]( this );\n                    }\n                    // call the native send()\n                    oldSend.apply(this, arguments);\n                }\n            }\n        }\n        \n        window.videoIds = {};\n        \n        var xhrLoad = function(xhrLoadEvent) {\n            if(xhrLoadEvent.currentTarget.responseURL && xhrLoadEvent.currentTarget.responseURL.includes("https://comet.api.hbo.com/watchlist")) {\n                const url = xhrLoadEvent.currentTarget.responseURL;\n                const episodeId = url.split("%3A")[3];\n                window.postMessage({ type: "EPISODE_ID", episodeId: episodeId}, "*");\n            }\n            // if(xhrLoadEvent.currentTarget.responseURL && xhrLoadEvent.currentTarget.responseURL.includes("https://comet.api.hbo.com/content") && xhrLoadEvent.currentTarget.responseText) {\n                // Promise.resolve(xhrLoadEvent.currentTarget.responseText)\n                // .then(JSON.parse)\n                // .then(function(responseData) {\n                    //     for (var episodeData of responseData)\n                    //     {\n                        //         try {\n                            //             if(episodeData.id && episodeData.id.includes(\'episode\') && episodeData.body.titles) {\n                                //                 console.log(\'found a proper episodeId & title!\');\n                                //                 // console.log(episodeData);\n                                //                 var episodeTitle = episodeData.body.titles.full;\n                                //                 var seriesName = episodeData.body.seriesTitles.full\n                                //                 var key = seriesName+":"+episodeTitle\n                                //                     const episodeId = episodeData.id.split(\':\')[3];\n                                //                     window.videoIds[key] = episodeId;\n                                //                     window.postMessage({ type: "EPISODE_ID", videoIds: JSON.stringify(window.videoIds)}, "*");\n                                //                     console.log(\'Dictionary id inserted for: \' + episodeTitle + \', \' + episodeId);\n                                //             }\n                                \n                                //             // const nextEpisodeArray = episodeData.id.split(\':episode:\')\n                                //             // if (nextEpisodeArray.length === 2)\n                                //             // {\n                                    //             //     const nextEpisode = nextEpisodeArray[1];\n                                    //             //     alert(\'Got next episode: \' + nextEpisode);\n                                    //             //     window.postMessage({ type: "EPISODE_DATA", text: "next episode from the webpage!", nextEpisode: nextEpisode}, "*");\n                                    //             // }\n                                    //         } catch (e) {\n                                        \n                                        //         }\n                                        //     }\n                                        // });\n                                        // }\n                                    }\n            \n            // e.g.\n            addXMLRequestCallback( function( xhr ) {\n                // console.log(xhr);\n                xhr.addEventListener("load", xhrLoad); \n            });\n            \n            var videoIdContainer = document.createElement(\'script\');\n            videoIdContainer.className = \'videoIdContainer\'\n            videoIdContainer.textContent = \'\';\n            (document.head||document.documentElement).appendChild(videoIdContainer);   \n        }\n        ', 
    (s = document.createElement("script")).textContent = script, (document.head || document.documentElement).appendChild(s), 
    s.remove());
}());