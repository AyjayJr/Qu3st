var background = (function () {
  var tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in tmp) {
      if (tmp[id] && (typeof tmp[id] === "function")) {
        if (request.path == "background-to-options") {
          if (request.method === id) tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {tmp[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": "options-to-background", "method": id, "data": data})}
  }
})();

var config = {
  "options": {"object": {}},
  "load": function () {
    document.getElementById("CSP").addEventListener("change", config.listener.checkbox);
    document.getElementById("WRB").addEventListener("change", config.listener.checkbox);
    document.getElementById("HOME").addEventListener("change", config.listener.checkbox);
    document.getElementById("BADGE").addEventListener("change", config.listener.checkbox);
    document.getElementById("EXCLUSIVE").addEventListener("click", config.listener.button);
    document.getElementById("INCLUSIVE").addEventListener("click", config.listener.button);
    document.getElementById("CONSOLE").addEventListener("change", config.listener.checkbox);
    document.getElementById("INCLUSIVE-c").addEventListener("click", function () {document.getElementById("INCLUSIVE").click()});
    document.getElementById("EXCLUSIVE-c").addEventListener("click", function () {document.getElementById("EXCLUSIVE").click()});
    /*  */
    if (navigator.userAgent.toLowerCase().indexOf("firefox") !== -1) {
      document.querySelector(".open-console-firefox").removeAttribute("hidden");
    } else {
      document.querySelector(".open-console-other").removeAttribute("hidden");
    }
    /*  */
    background.send("load");
    window.removeEventListener("load", config.load, false);
  },
  "listener": {
    "checkbox": function (e) {
      config.options.object[e.target.id] = e.target.checked;
      background.send("store", config.options.object);
      /*  */
      var CSP = e.target.getAttribute("id") === "CSP";
      var WRB = e.target.getAttribute("id") === "WRB";
      /*  */
      if (CSP || WRB) {
        if (e.target.checked === false) {
          background.send("reset-badge");
        }
      }
    },
    "button": function () {
      config.options.object["EXCLUSIVE"] = false;
      config.options.object["INCLUSIVE"] = false;
      config.options.object[this.id] = true;
      /*  */
      if (this.id === "EXCLUSIVE") {
        config.options.object["WRB"] = true;
        config.options.object["CSP"] = false;
        document.getElementById("WRB").checked = config.options.object["WRB"];
        document.getElementById("CSP").checked = config.options.object["CSP"];
      }
      /*  */
      if (this.id === "INCLUSIVE") {
        config.options.object["CSP"] = true;
        config.options.object["WRB"] = false;
        document.getElementById("WRB").checked = config.options.object["WRB"];
        document.getElementById("CSP").checked = config.options.object["CSP"];
      }
      /*  */
      background.send("store", config.options.object);
      background.send("reset-badge");
    }
  },
  "update": {
    "interface": function (o) {
      config.options.object = o;
      /*  */
      document.getElementById("CSP").checked = config.options.object.CSP || false;
      document.getElementById("WRB").checked = config.options.object.WRB || false;
      document.getElementById("HOME").checked = config.options.object.HOME || false;
      document.getElementById("BADGE").checked = config.options.object.BADGE || false;
      document.getElementById("CONSOLE").checked = config.options.object.CONSOLE || false;
      document.getElementById("EXCLUSIVE").setAttribute("active", config.options.object.EXCLUSIVE + '');
      document.getElementById("INCLUSIVE").setAttribute("active", config.options.object.INCLUSIVE + '');
      document.getElementById("EXCLUSIVE-c").setAttribute("active", config.options.object.EXCLUSIVE + '');
      document.getElementById("INCLUSIVE-c").setAttribute("active", config.options.object.INCLUSIVE + '');
      /*  */
      var table = document.getElementById("settings-table");
      if (table) table.parentNode.removeChild(table);
      /*  */
      var table = document.createElement("table");
      table.setAttribute("id", "settings-table");
      table.setAttribute("class", "settings");
      /*  */
      var addtr = function (table, rule) {
        var tr = document.createElement("tr");
        tr.setAttribute("rule", rule);
        /*  */
        var addtd = function (tr, method, index, cl) {
          var td = document.createElement("td");
          td.setAttribute("method", method);
          td.setAttribute("type", config.options.object[method][index]);
          /*  */
          if (cl) {
            td.setAttribute("class", cl);
            td.addEventListener("click", function () {
              var type = this.getAttribute("type");
              var method = this.getAttribute("method");
              var rule = this.parentNode.getAttribute("rule");
              /*  */
              if (method === "apply") this.setAttribute("type", (type === "domain" ? "frame" : "domain"));
              if (method === "address") this.setAttribute("type", (type === "all" ? "thirdparty" : "all"));
              if (method === "match") this.setAttribute("type", (type === "regexp" ? "wildcard" : "regexp"));
              /*  */
              var i = config.options.object.arr.indexOf(rule);
              config.options.object[method][i] = this.getAttribute("type");
              background.send("store", config.options.object);
            });
          } else {
            td.setAttribute("mode", config.options.object.mode[index]);
            td.textContent = config.options.object[method][index];
            td.addEventListener("click", function () {
              var mode = this.getAttribute("mode");
              this.setAttribute("mode", (mode === "selected" ? "unselected" : "selected"));
              config.options.object.mode[index] = this.getAttribute("mode");
              background.send("store", config.options.object);
            });
          }
          /*  */
          tr.appendChild(td);
        };
        /*  */
        var index = config.options.object.arr.indexOf(rule);
        /*  */
        addtd(tr, "arr", index, '');
        addtd(tr, "apply", index, "button");
        addtd(tr, "address", index, "button");
        /*  */
        var td = document.createElement("td");
        td.setAttribute("class", "textarea");
        var textarea = document.createElement("textarea");
        textarea.setAttribute("placeholder", "WHITELIST Rules for " + rule.toUpperCase() + " Contents with Regular Expressions (i.e. \\.test\\.com|\\&sample\\=)");
        textarea.value = config.options.object.whitelistR[index];
        textarea.addEventListener("change", function (e) {
          config.options.object.whitelistR[index] = e.target.value;
          background.send("store", config.options.object);
        });
        td.appendChild(textarea);
        tr.appendChild(td);
        /*  */
        var td = document.createElement("td");
        td.setAttribute("class", "textarea");
        var textarea = document.createElement("textarea");
        textarea.setAttribute("placeholder", "BLACKLIST Rules for " + rule.toUpperCase() + " Contents with Regular Expressions (i.e. \\.test\\.com|\\&sample\\=)");
        textarea.value = config.options.object.blacklistR[index];
        /*  */
        textarea.addEventListener("change", function (e) {
          config.options.object.blacklistR[index] = e.target.value;
          background.send("store", config.options.object);
        });
        /*  */
        td.appendChild(textarea);
        tr.appendChild(td);
        table.appendChild(tr);
      };
      /*  */
      addtr(table, "script");
      addtr(table, "style");
      addtr(table, "image");
      addtr(table, "object");
      addtr(table, "media");
      /*  */
      document.getElementById("content").appendChild(table);
    }
  }
};

window.addEventListener("load", config.load, false);
background.receive("storage", config.update.interface);