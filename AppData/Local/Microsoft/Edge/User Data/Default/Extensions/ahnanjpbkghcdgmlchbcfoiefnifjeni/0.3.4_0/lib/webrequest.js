app.webrequest = {
  "on": {
    "headers": {
      "received": {
        "listener": null,
        "callback": function (callback) {
          app.webrequest.on.headers.received.listener = callback;
        },
        "remove": function () {
          if (chrome.webRequest) {
            chrome.webRequest.onHeadersReceived.removeListener(app.webrequest.on.headers.received.listener);
          }
        },
        "add": function (e) {
          var filter = e ? e : {"urls": ["*://*/*"]};
          var options = navigator.userAgent.indexOf("Firefox") !== -1 ? ["blocking", "responseHeaders"] : ["blocking", "responseHeaders", "extraHeaders"];
          /*  */
          if (chrome.webRequest) {
            chrome.webRequest.onHeadersReceived.removeListener(app.webrequest.on.headers.received.listener);
            chrome.webRequest.onHeadersReceived.addListener(app.webrequest.on.headers.received.listener, filter, options);
          }
        }
      }
    },
    "before": {
      "request": {
        "listener": null,
        "callback": function (callback) {
          app.webrequest.on.before.request.listener = callback;
        },
        "remove": function () {
          if (chrome.webRequest) {
            chrome.webRequest.onBeforeRequest.removeListener(app.webrequest.on.before.request.listener);
          }
        },
        "add": function (e) {
          var options = ["blocking"];
          var filter = e ? e : {"urls": ["*://*/*"]};
          /*  */
          if (chrome.webRequest) {
            chrome.webRequest.onBeforeRequest.removeListener(app.webrequest.on.before.request.listener);
            chrome.webRequest.onBeforeRequest.addListener(app.webrequest.on.before.request.listener, filter, options);
          }
        }
      }
    }
  }
};