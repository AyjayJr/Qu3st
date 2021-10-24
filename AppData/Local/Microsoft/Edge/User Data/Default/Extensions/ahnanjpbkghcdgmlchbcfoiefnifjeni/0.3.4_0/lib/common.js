var core = {
  "start": function () {
    core.load();
  },
  "install": function () {
    core.load();
  },
  "load": function () {
    config.init.storage();
    core.update.badge.text();
    /*  */
    app.tab.query.all(function (tabs) {
      tabs.forEach(function (tab) {
        if (tab) {
          core.webrequest.tabs.object[tab.id] = tab;
        }
      });
    });
  },
  "update": {
    "icon": function (noeffect) {      
      if (config.settings.object.state === "enable") {
        app.button.icon(null, noeffect ? "noeffect" : "enable");
      } else {
        app.button.icon(null, "disable")
      }
    },
    "popup": function () {
      app.tab.query.active(function (tab) {
        var tmp = config.settings.object;
        if (tab && tab.url) {
          tmp["activeTabUrl"] = tab.url;
        }
        /*  */
        app.popup.send("storage", tmp);
      });
    },
    "options": function () {
      app.tab.query.active(function (tab) {
        var tmp = config.settings.object;
        if (tab && tab.url) {
          tmp["activeTabUrl"] = tab.url;
        }
        /*  */
        app.options.send("storage", tmp);
      });
    },
    "badge": {
      "number": function (top, reset) {
        var tmp = config.badge.number;
        tmp[top] = reset ? 0 : (tmp[top] || 0) + 1;
        config.badge.number = tmp;
        /*  */
        core.update.badge.text();
      },
      "text": function (e) {
        app.tab.query.active(function (q) {
          var tab = q || e;          
          if (tab && tab.url) {
            var key = config.hostname(tab.url);
            if (key) {
              var count = config.badge.number[tab.url];
              if (!count || typeof count === undefined) count = '';
              var valid = config.settings.whiteList.indexOf(key) === -1;
              /*  */
              if (config.settings.object.state === "enable") {
                if (valid) {
                  core.update.icon(false);
                  /*  */
                  if (config.settings.object.BADGE) {
                    app.button.badge.text(null, count < 100 ? count : "99+");
                  } else {
                    app.button.badge.text(null, '');
                  }
                } else {
                  core.update.icon(true);
                  app.button.badge.text(null, '');
                }
              } else {
                core.update.icon(false);
                app.button.badge.text(null, '');
              }
            } else {
              core.update.icon(true);
              app.button.badge.text(null, '');
            }
          } else {
            core.update.icon(true);
            app.button.badge.text(null, '');
          }
        });
      }
    }
  },
  "webrequest": {
    "action": {},
    "load": null,
    "listen": null,
    "tabs": {
      "object": {}
    },
    "action": {
      "block": false, 
      "policy": false
    },
    "on": {
      "removed": function (tabId) {
        delete core.webrequest.tabs.object[tabId];
      },
      "created": function (tab) {
        if (tab) {
          core.webrequest.tabs.object[tab.id] = tab;
        }
      },
      "updated": function (info, tab) {
        if (tab) {
          core.webrequest.tabs.object[tab.id] = tab;
          if (info.status === "loading") {
            core.update.badge.text(tab);
          }
        }
      },
      "activated": function (e) {        
        if (e && e.id) {
          app.tab.get(e.id, function (tab) {
            app.error();
            if (tab && tab.url) {
              core.webrequest.tabs.object[tab.id] = tab;
              core.update.badge.text(tab);
            } else {
              app.tab.check.url(e, function (tab) {
                if (tab && tab.url) {
                  core.webrequest.tabs.object[tab.id] = tab;
                  core.update.badge.text(tab);
                } else {
                  core.update.badge.text();
                }
              });
            }
          });
        }
      }
    },
    "load": function () {
      var action = function (key) {
        var types = ["main_frame", "sub_frame"];
        /*  */
        if (key === "on.headers.received") {
          app.webrequest.on.headers.received.remove();
          /*  */
          if (config.settings.object.state === "enable") {
            if (config.settings.object.CSP) {              
              app.webrequest.on.headers.received.add({"urls": ["*://*/*"], "types": types});
            }
          }
        }
        /*  */
        if (key === "on.before.request") {
          app.webrequest.on.before.request.remove();
          /*  */
          for (var i = 0; i < config.settings.object.mode.length; i++) {
            if (config.settings.object.mode[i] === "selected") {
              var type = config.settings.object.arr[i];
              if (type === "style") type = "stylesheet";
              types.push(type);
            }
          }
          /*  */
          if (config.settings.object.state === "enable") {
            if (config.settings.object.WRB) {
              app.webrequest.on.before.request.add({"urls": ["*://*/*"], "types": types});
            }
          }
        }
      };
      /*  */
      action("on.before.request");
      action("on.headers.received");
    },
    "listen": function (method, top, url, type) {
      var policy = '';
      /*  */
      if (config.address.validate(top)) {
        for (var i = 0; i < config.settings.object.mode.length; i++) {
          if (config.settings.object.mode[i] === "selected") {
            var flag1 = (config.settings.object.apply[i] === 'frame') ? (type === 'sub_frame') : true;
            var flag2 = (config.settings.object.address[i] === 'thirdparty') ? config.address.thirdparty(top, url) : true;
            /*  */
            var whitelistR = config.settings.object.whitelistR[i];
            var blacklistR = config.settings.object.blacklistR[i];
            var whitelisted = whitelistR ? (new RegExp(whitelistR)).test(url) : false;
            var blacklisted = blacklistR ? (new RegExp(blacklistR)).test(url) : false;
            /*  */
            if (config.settings.object.EXCLUSIVE) {
              if (method === "policy") {
                if (config.settings.object.CONSOLE) {
                  console.error("Content Security Policy :: Please use Inclusive mode from the settings page. Note: CSP is an inclusive method. Please, switch to Web Request Observer method, if you need Exclusive mode.");
                }
              } else if (blacklisted) {
                if (flag1 && flag2) {
                  if (method === "block") {
                    if (type.indexOf(config.settings.object.arr[i]) !== -1) {
                      core.update.badge.number(top, false);
                      if (config.settings.object.CONSOLE) {
                        var _rule, _tmp = (new RegExp(blacklistR)).exec(url);
                        if (_tmp && _tmp.length) _rule = _tmp[0];
                        console.error("Web Request Observer ::", "Exclusive Mode >>", "BlackList RULE >>", _rule, " TYPE >>", type, " URL >>", url);
                      }
                      /*  */
                      return true;
                    }
                  }
                }
              }
            } else {
              if (!whitelisted) {
                if ((flag1 && flag2) || (blacklisted)) {
                  if (method === "block") {
                    if (type.indexOf(config.settings.object.arr[i]) !== -1) {
                      core.update.badge.number(top, false);
                      if (config.settings.object.CONSOLE) {
                        console.error("Web Request Observer ::", "Inclusive Mode >>", "TYPE >>", type, " URL >>", url);
                      }
                      /*  */
                      return true;
                    }
                  }
                  if (method === "policy") {
                    core.update.badge.number(top, false);
                    var value = ["script-src 'none'", "style-src 'none'", "img-src 'none'", "object-src 'none'", "media-src 'none'"];
                    policy += value[i] + "; ";
                  }
                }
              }
            }
          }
        }
      }
      /*  */
      if (method === "block") return false;
      if (method === "policy") {
        if (config.settings.object.CONSOLE && policy) {
          console.error("Content Security Policy ::", "Inclusive Mode >>", "POLICY >>", policy);
        }
        /*  */
        return policy;
      }
    }
  }
};

app.webrequest.on.before.request.callback(function (info) {
  var top = core.webrequest.tabs.object[info.tabId] ? core.webrequest.tabs.object[info.tabId].url : '';
  /*  */
  if (info.type === "main_frame") {
    top = info.url;
    core.update.badge.number(top, true);
  }
  /*  */
  core.webrequest.action.block = core.webrequest.listen("block", top, info.url, info.type);
  if (core.webrequest.action.block) return {"cancel": true};
});

app.webrequest.on.headers.received.callback(function (info) {
  var headers = info.responseHeaders;
  var top = core.webrequest.tabs.object[info.tabId] ? core.webrequest.tabs.object[info.tabId].url : '';
  /*  */
  if (info.type === "main_frame") {
    top = info.url;
    core.update.badge.number(top, true);
  }
  /*  */
  core.webrequest.action.policy = core.webrequest.listen("policy", top, info.url, info.type);
  if (core.webrequest.action.policy) {
    for (var i = 0; i < headers.length; i++) {
      var name = headers[i].name.toLowerCase();
      if (name === "content-security-policy") {
        headers[i].value = core.webrequest.action.policy + headers[i].value;
        /*  */
        return {"responseHeaders": headers};
      }
    }
    /*  */
    headers.push({
      "name": "Content-Security-Policy", 
      "value": core.webrequest.action.policy
    });
    /*  */
    return {"responseHeaders": headers};
  }
});

app.options.receive("store", function (e) {
  config.settings.object = e;
  core.update.options();
});

app.popup.receive("reload-active-tab", function () {
  app.tab.query.active(function (tab) {
    if (tab && tab.id) {
      app.tab.reload(tab.id);
    }
  });
});

app.popup.receive("store", function (e) {
  config.settings.object = e;
  /*  */
  core.update.popup();
  core.update.options();
  core.update.badge.text();
});

app.options.receive("load", core.update.options);
app.options.receive("reset-badge", function () {config.badge.number = {}});

app.tab.on.created(core.webrequest.on.created);
app.tab.on.updated(core.webrequest.on.updated);
app.tab.on.removed(core.webrequest.on.removed);
app.tab.on.activated(core.webrequest.on.activated);

app.popup.receive("load", core.update.popup);
app.popup.receive("open-options-page", app.tab.options);
app.popup.receive("reset-badge", function () {config.badge.number = {}});
app.popup.receive("reset-addon", function () {app.storage.clear(app.reload)});
app.popup.receive("open-faq-page", function () {app.tab.open(app.homepage())});
app.popup.receive("open-check-page", function () {app.tab.open(config.javascript.check)});
app.popup.receive("open-donation-page", function () {app.tab.open(app.homepage() + "?reason=support")});

app.on.startup(core.start);
app.on.installed(core.install);
app.storage.on.changed(core.webrequest.load);
