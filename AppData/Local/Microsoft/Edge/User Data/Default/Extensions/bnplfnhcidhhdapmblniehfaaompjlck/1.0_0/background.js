var uninstallUrl = "https://www.bing.com/BrowserExtension/RewardsUninstall?origin=ext";
chrome.runtime.setUninstallURL(uninstallUrl);

chrome.management.onEnabled.addListener(function (ExtensionInfo) {
 
    if(ExtensionInfo.id != chrome.runtime.id) {
		return;
	}

    if (!localStorage["BingDefaultsSet"]) {
        localStorage["BingDefaultsSet"] = "done";
    }
});
