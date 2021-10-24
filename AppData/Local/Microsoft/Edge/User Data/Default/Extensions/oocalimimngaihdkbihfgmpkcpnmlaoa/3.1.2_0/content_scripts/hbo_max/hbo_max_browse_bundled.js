window.telepartyBrowseLoaded || (window.telepartyBrowseLoaded = !0, function() {
    var tasks = null, tasksInFlight = 0;
    jQuery(window).load((function() {
        console.log("LOADED PAGE");
    }));
    var triggerCometRequest = function() {
        return new Promise((async (resolve, reject) => {
            try {
                console.log("trigger marker request"), document.querySelector("video") && document.querySelector("video")._dispNode && document.querySelector("video")._dispNode.position && (document.querySelector("video")._dispNode.position = document.querySelector("video")._dispNode.position - .1, 
                document.querySelector("video")._dispNode.position = document.querySelector("video")._dispNode.position + .1), 
                await (milliseconds = 200, function(result) {
                    return new Promise((function(resolve, reject) {
                        setTimeout((function() {
                            resolve(result);
                        }), milliseconds);
                    }));
                })(), resolve();
            } catch (e) {
                resolve();
            }
            var milliseconds;
        }));
    }, teardown = function() {
        window.removeEventListener("TPBrowse", browseInteraction), window.removeEventListener("message", onmessage), 
        window.telepartyBrowseLoaded = !1;
    };
    console.log("Injected HBO Browse Script");
    var onmessage = function(event) {
        event.source == window && event.data && "teardown" === event.data.type && (console.log("Browse teardown"), 
        teardown());
    };
    window.addEventListener("message", onmessage, !1);
    var script, s, browseInteraction = function(event) {
        var task;
        "TOGGLE_LIST" === event.detail.type && (console.log("Received toggle list event: "), 
        task = triggerCometRequest, 0 === tasksInFlight && (tasks = Promise.resolve()), 
        tasksInFlight += 1, tasks = tasks.then(task).then((function() {
            tasksInFlight -= 1;
        })));
    };
    window.addEventListener("TPBrowse", browseInteraction, !1), window.videoIdScriptLoaded || (script = '\n    if(!window.videoIdScriptLoaded) {\n        console.log("Browse script loaded");\n        window.videoIdScriptLoaded = true;\n        \n        var addXMLRequestCallback = function(callback){\n            var oldSend, i;\n            if( XMLHttpRequest.callbacks ) {\n                XMLHttpRequest.callbacks.push( callback );\n            } else {\n                XMLHttpRequest.callbacks = [callback];\n                oldSend = XMLHttpRequest.prototype.send;\n                XMLHttpRequest.prototype.send = function(data){\n                    for( i = 0; i < XMLHttpRequest.callbacks.length; i++ ) {\n                        XMLHttpRequest.callbacks[i]( this , data);\n                    }\n                    sendDataCallback(data);\n                    oldSend.apply(this, arguments);\n                }\n            }\n        }\n        \n        window.videoIds = {};\n\n        // listen to request payloads on hbo marker posts \n        var sendDataCallback = function(vData) {\n            if(vData !== undefined && typeof vData === "string") {\n                try {\n                    var vJsonData = JSON.parse(vData);\n                    if(vJsonData.hasOwnProperty("events") && vJsonData["events"].length === 1 && vJsonData["events"][0].hasOwnProperty("cutId")) {\n                        var epId = vJsonData["events"][0]["cutId"];\n                        // console.log("telegraph ep id:" + (epId));\n                        window.postMessage({ type: "EPISODE_ID", videoId: epId}, "*");     \n                    }\n                    \n                    if(vJsonData.hasOwnProperty("cutId")) {\n                        var epId = JSON.parse(vData).cutId;\n                        // console.log("data/id/title:" + (epId) + "/ " + epTitle + "/" + vData);\n                        window.postMessage({ type: "EPISODE_ID", videoId: epId}, "*");     \n                    }  \n                } catch(e) {\n                }\n                    \n            }          \n        }\n\n        var xhrLoad = function(xhrLoadEvent) {\n            // no-op\n        }\n             \n        addXMLRequestCallback( function( xhr ) {\n            xhr.addEventListener("load", xhrLoad); \n        });\n    }\n    ', 
    (s = document.createElement("script")).textContent = script, (document.head || document.documentElement).after(s), 
    console.log("Script Injected"));
}());