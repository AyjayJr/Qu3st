var background = (function () {
  var tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in tmp) {
      if (tmp[id] && (typeof tmp[id] === "function")) {
        if (request.path == "background-to-popup") {
          if (request.method === id) tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {tmp[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": "popup-to-background", "method": id, "data": data})}
  }
})();

var config = {
  "active": {"tab": {"url": ''}},
  "listener": function (e) {
    var id = e.target.getAttribute("id");
    if (id === "reset") {
      mscConfirm("Reset", config.popup.reset.text, function () {
        background.send("reset-addon");
      });
    } else if (id === "reload") {
      background.send("reload-active-tab");
    } else {
      background.send("open-" + id + "-page");
    }
  },
  "add": {
    "input": {
      "field": {
        "item": function (e) {
          var value = document.getElementById("input-field").value;
          if (value) {
            config.popup.object.whiteList = config.popup.object.whiteList.filter(function (e) {return e !== value});
            config.popup.object.whiteList.push(value);
            background.send("store", config.popup.object);
            document.getElementById("input-field").value = '';
          }
        }
      }
    }
  },
  "change": {
    "mode": function (e) {
      var selected = false;
      e.target.setAttribute("mode", e.target.getAttribute("mode") === "selected" ? '' : "selected");
      /*  */
      for (var i = 0; i < config.popup.object.arr.length; i++) {
        if (document.getElementById(config.popup.object.arr[i]).getAttribute("mode") === "selected") {
          selected = true;
          config.popup.object.mode[i] = "selected";
        } else {
          config.popup.object.mode[i] = '';
        }
      }
      /*  */
      background.send("store", config.popup.object);
      if (!selected) background.send("reset-badge");
    }
  },
  "popup": {
    "reset": {
      "text": "Do you really want to reset the addon to factory default?\nNote: all stored data will be deleted and your settings will be reset."
    },
    "information": {
      "text": "No-Script Suite Lite provides -extra security for your Browser. It allows JavaScript to be executed only by trusted websites of your choice. Few websites are added to the white-list table above by default, but you can edit the list at any time."
    },
    "elements": [
      "donation", "faq", "check", "reload", "reset", "media", "image", "style",
      "object", "script", "input-field", "website-list", "global-settings", "input-field-add", "start-stop-button"
    ],
    "object": {
      "state": '',
      "itemURL": '',
      "whiteList": [],
      "mode": ['', '', '', '', ''],
      "whitelistR": ['', '', '', '', ''],
      "blacklistR": ['', '', '', '', ''],
      "address": ["all", "all", "all", "all", "all"],
      "arr": ["script", "style", "image", "object", "media"],
      "apply": ["domain", "domain", "domain", "domain", "domain"],
      "match": ["wildcard", "wildcard", "wildcard", "wildcard", "wildcard"]
    }
  },
  "update": {
    "information": function (e) {
      window.setTimeout(function () {
        var title = e.target.getAttribute("title");
        var info = document.getElementById("information-span");
        /*  */
        if (title) {
          info.textContent = title;
        } else {
          info.textContent = config.popup.information.text;
        }
      }, 100);
    },
    "interface": function (e) {
      config.popup.object = e;
      /*  */
      document.getElementById("input-field").disabled = config.popup.object.state === "disable";
      document.getElementById("input-field-add").setAttribute("state", config.popup.object.state);
      document.getElementById("start-stop-button").setAttribute("state", config.popup.object.state);
      /*  */
      var a = document.createElement('a');
      var url = config.popup.object.activeTabUrl;
      if (url) {
        a.href = url;
        document.body.appendChild(a);
        config.active.tab.url = a.protocol + "//" + a.host;
        document.body.removeChild(a);
      }
      /*  */
      config.init();
    }
  },
  "load": function () {
    document.getElementById("input-field").addEventListener("keypress", function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) config.add.input.field.item(e);
    });
    /*  */
    document.getElementById("start-stop-button").addEventListener("click", function (e) {
      var state = e.target.getAttribute("state");
      state = (state === "enable") ? "disable" : "enable";
      config.popup.object.state = state;
      background.send("store", config.popup.object);
    });
    /*  */
    document.getElementById("website-list-table").addEventListener("click", function (e) {
      if (e.target.tagName.toLowerCase() === "td" || e.target.nodeName.toLowerCase() === "td") {
        if (e.target.getAttribute("type") === "close") {
          var url = e.target.parentNode.childNodes[1].textContent;
          config.popup.object.whiteList = config.popup.object.whiteList.filter(function (e) {return e !== url});
          background.send("store", config.popup.object);
        }
      }
    });
    /*  */
    document.getElementById("faq").addEventListener("click", config.listener);
    document.getElementById("check").addEventListener("click", config.listener);
    document.getElementById("reset").addEventListener("click", config.listener);
    document.getElementById("reload").addEventListener("click", config.listener);
    document.getElementById("donation").addEventListener("click", config.listener);
    document.getElementById('information-span').textContent = config.popup.information.text;
    document.getElementById("website-list").setAttribute("title", config.popup.information.text);
    document.getElementById("input-field-add").addEventListener("click", config.add.input.field.item);
    document.getElementById("explore").style.display = navigator.userAgent.indexOf("Edg") !== -1 ? "none": "block";
    document.getElementById("global-settings").addEventListener("click", function () {background.send("open-options-page")});
    /*  */
    for (var i = 0; i < config.popup.object.arr.length; i++) {
      document.getElementById(config.popup.object.arr[i]).addEventListener("click", config.change.mode);
    }
    /*  */
    for (var i = 0; i < config.popup.elements.length; i++) {
      document.getElementById(config.popup.elements[i]).addEventListener("mouseenter", config.update.information);
    }
    /*  */
    background.send("load");
    window.removeEventListener("load", config.load, false);
  },
  "init": function () {
    var count = 1;
    var table = document.getElementById("website-list-table");
    table.textContent = '';
    /*  */
    var filltable = function (arr, placeholder) {
      document.getElementById("input-field").setAttribute("placeholder", placeholder);
      /*  */
      if (arr && arr.length) {
        for (var i = arr.length - 1; i >= 0; i--) {
          var a = document.createElement('a');
          var tr = document.createElement("tr");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          /*  */
          a.href = arr[i];
          a.textContent = arr[i];
          a.setAttribute("title", a.href);
          a.setAttribute("target", "_blank");
          a.setAttribute("style", "text-decoration: none; color: #555");
          /*  */
          td1.textContent = count;
          td1.setAttribute("type", "number");
          td1.setAttribute("style", "color: #555");
          td1.setAttribute("title", "Item #" + count);
          /*  */
          td2.appendChild(a);
          td2.setAttribute("type", "item");
          td2.setAttribute("style", "color: #555");
          /*  */
          td3.setAttribute("type", "close");
          td3.setAttribute("title", "Remove");
          td3.setAttribute("style", "color: #555");
          /*  */
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          table.appendChild(tr);
          /*  */
          count++;
        }
      }
    };
    /*  */
    filltable(config.popup.object.whiteList, "Add a website address to allow scripts");
    /*  */
    for (var i = 0; i < config.popup.object.arr.length; i++) {
      var tmp = document.getElementById(config.popup.object.arr[i]);
      if (tmp) tmp.setAttribute("mode", config.popup.object.mode[i]);
    }
    /*  */
    document.getElementById("input-field").value = config.active.tab.url;
    document.getElementById("input-field").disabled = config.popup.object.state === "disable";
    document.getElementById("input-field-add").setAttribute("state", config.popup.object.state);
    document.getElementById("start-stop-button").setAttribute("state", config.popup.object.state);
  }
};

window.addEventListener("load", config.load, false);
background.receive("storage", config.update.interface);
