var manifestData = chrome.runtime.getManifest();
var extensionVersion = manifestData.version;
var bingUrl = "https://www.bing.com/";

var FeedbackFwlink = "https://go.microsoft.com/fwlink/?linkid=2138838";
var ExtnLanguage = chrome.i18n.getMessage("ExtnLanguage");
var ExtensionId = chrome.runtime.id;
var MachineID = (localStorage.MachineID == undefined || localStorage.MachineID == "" || localStorage.MachineID == null) ? guid() : localStorage.MachineID;

//To redirect feedback page while uninstalling the extension
var uninstallUrl = FeedbackFwlink + "&extnID=" + ExtensionId +"&mkt=" + ExtnLanguage + "&mid=" + MachineID + "&br=me";
chrome.runtime.setUninstallURL(uninstallUrl);

//Sets '_DPC' session cookie in bing.com domain whenever background.js gets executed
setTimeout(function () {
    var _dpc = localStorage["_dpc"];
    if (_dpc != undefined && _dpc != "" && _dpc != null) {
        chrome.cookies.set({ url: bingUrl, domain: '.bing.com', name: '_DPC', value: _dpc }, function (cookie) {
        });
    }
}, 500);

chrome.runtime.onInstalled.addListener(function (details) {
	var defaultPC = "U523";
    var browserDefaultsUrl = "https://browserdefaults.microsoft.com/";

    if (details.reason == 'install') {
        //Sets the default pc of the extension in local storage
        localStorage["pc"] = defaultPC;

        // Fetching PC cookie value from browserdefaults.microsoft.com, store it in localStorage and clear the PC cookie in browserdefaults.microsoft.com
        chrome.cookies.get({ url: browserDefaultsUrl, name: 'pc' }, function (cookie) {
            if (cookie) {
                localStorage["_dpc"] = cookie.value;
                chrome.cookies.set({ url: bingUrl, domain: '.bing.com', name: '_DPC', value: localStorage["_dpc"] }, function (cookie) {
                });
                chrome.cookies.remove({ url: browserDefaultsUrl, name: 'pc' });
            }
        });

        if (!localStorage["channel"]) {
            chrome.cookies.get({ url: browserDefaultsUrl, name: 'channel' }, function (cookie) {
                // Fetching channel cookie value, store it in localStorage and clear the Channel cookie in browserdefaults.microsoft.com
                if (cookie) {
                    localStorage["channel"] = cookie.value;
                    chrome.cookies.remove({ url: browserDefaultsUrl, name: 'channel' });
                }
            });
        }

        //Call for Install Ping
        SendPingDetails("1");
    }
    else if (details.reason == 'update') {
        //Call for Update Ping
        SendPingDetails("3");
    }
});

chrome.tabs.onActivated.addListener(function () {
    var PingDate = "PingDate";
    if (localStorage.PingDate == "" || localStorage.PingDate != new Date().toDateString()) {
        //Call for Update Ping
        SendPingDetails("2");
        localStorage[PingDate] = new Date().toDateString()
    }
});

/* Function to create an unique machine id */
function guid() {
    var MI = "MachineID";
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    var MachineGUID = s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    MachineGUID = MachineGUID.toLocaleUpperCase();
    localStorage[MI] = MachineGUID;
    return MachineGUID;
}


function SendPingDetails(status) {

    var startIndex = navigator.userAgent.indexOf("(");
    var endIndex = navigator.userAgent.indexOf(")");
    var OS = navigator.userAgent.substring(startIndex + 1, endIndex).replace(/\s/g, '');

    var browserLanguage = navigator.language;

    var ExtensionName = manifestData.name.replace(/ /g, "").replace('&', 'and');

    var BrowserVersion = navigator.userAgent.substr(navigator.userAgent.indexOf("Edg")).split(" ")[0].replace("/", "");

    var MUID = "";
    chrome.cookies.get({ url: bingUrl, name: 'MUID' }, function (cookie) {
        if (cookie && cookie.value != "" && cookie.value != null) {
            MUID = cookie.value;
        }
    });

    setTimeout(function () {
        var pc = localStorage.pc == undefined || localStorage.pc == "" || localStorage.pc == null ? "UWDF" : localStorage.pc;
        var pingURL = 'http://g.ceipmsn.com/8SE/44?';
        var tVData = 'TV=is' + pc + '|pk' + ExtensionName + '|tm' + browserLanguage + '|bv' + BrowserVersion + '|ex' + ExtensionId + '|es' + status;
        if (MUID != "")
            tVData = tVData + "|mu" + MUID;
        if (localStorage["channel"])
            tVData = tVData + "|ch" + localStorage["channel"];
        if (localStorage["_dpc"])
            tVData = tVData + "|dp" + localStorage["_dpc"];
        pingURL = pingURL + 'MI=' + MachineID + '&LV=' + extensionVersion + '&OS=' + OS + '&TE=37&' + tVData;
        pingURL = encodeURI(pingURL);  // For HTML Encoding
        var xhr = new XMLHttpRequest();
        xhr.open("GET", pingURL, true);
        xhr.send();
    }, 500);
};
