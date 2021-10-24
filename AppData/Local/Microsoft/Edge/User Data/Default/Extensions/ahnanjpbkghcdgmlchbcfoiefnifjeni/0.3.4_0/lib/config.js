var config = {};

config.defaults = {
  "CSP": true,
  "WRB": false,
  "HOME": true,
  "BADGE": true,
  "itemURL": '',
  "CONSOLE": false,
  "INCLUSIVE": true,
  "state": "enable",
  "EXCLUSIVE": false,
  "whitelistR": ['', '', '', '', ''],
  "blacklistR": ['', '', '', '', ''],
  "mode": ["selected", '', '', '', ''],
  "address": ["all", "all", "all", "all", "all"],
  "arr": ["script", "style", "image", "object", "media"],
  "apply": ["domain", "domain", "domain", "domain", "domain"],
  "match": ["wildcard", "wildcard", "wildcard", "wildcard", "wildcard"],
  "whiteList": [
    "https://www.paypal.com", "https://www.paypal.me",
    "https://www.ebay.com", "http://www.bing.com", "http://www.apple.com",
    "https://www.yahoo.com", "http://www.amazon.com", "https://twitter.com",
    "https://translate.google.com", "https://github.com", "https://live.com",
    "http://store.apple.com", "https://www.icloud.com", "https://www.google.com",
    "https://instagram.com", "https://www.chase.com", "https://chrome.google.com",
    "https://login.live.com", "https://mail.google.com", "https://login.yahoo.com",
    "https://www.mozilla.org", "https://www.youtube.com",  "https://mail.yahoo.com",
    "https://www.facebook.com", "https://addons.opera.com", "https://www.bankofamerica.com",
    "https://accounts.google.com", "https://addons.mozilla.org", "https://mybrowseraddon.com"
  ]
};

var WHITELIST = config.defaults.whiteList.join(" | ");

config.javascript = {"check": "https://webbrowsertools.com/javascript/"};

config.welcome = {
  get open () {return config.settings.object.HOME},
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};

config.badge = {
  "object": {},
  set number (o) {config.badge.object = o},
  get number () {return config.badge.object}
};

config.settings = {
  get whiteList () {return WHITELIST},
  get object () {return config.defaults},
  set object (o) {
    config.defaults = o;
    WHITELIST = o.whiteList.join(" | ");
    app.storage.write("noscript-object", JSON.stringify(o));
  }
};

config.init = {
  "storage": function () {
    var tmp = app.storage.read("noscript-object");
    if (tmp) {
      var obj = JSON.parse(tmp);
      config.defaults = obj;
      WHITELIST = config.defaults.whiteList.join(" | ");
    } else {
      var flag = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
      if (flag) config.defaults.HOME = false;
    }
  }
};

config.address = {
  "validate": function (top) {
    var key = config.hostname(top);
    return config.settings.whiteList.indexOf(key) === -1;
  },
  "thirdparty": function (top, url) {
    var topdomain = config.hostname(top);
    var currentdomain = config.hostname(url);
    return currentdomain.indexOf(topdomain) === -1;
  }
};

config.hostname = function (url) {
  url = url.replace("www.", '');
  var s = url.indexOf("//") + 2;
  if (s > 1) {
    var o = url.indexOf('/', s);
    if (o > 0) return url.substring(s, o);
    else {
      o = url.indexOf('?', s);
      if (o > 0) return url.substring(s, o);
      else return url.substring(s);
    }
  } else return url;
};

config.get = function (name) {
  return name.split('.').reduce(function (p, c) {return p[c]}, config);
};

config.set = function (name, value) {
  function set(name, value, scope) {
    name = name.split('.');
    if (name.length > 1) set.call((scope || this)[name.shift()], name.join('.'), value);
    else this[name[0]] = value;
  }
  /*  */
  set(name, value, config);
};
