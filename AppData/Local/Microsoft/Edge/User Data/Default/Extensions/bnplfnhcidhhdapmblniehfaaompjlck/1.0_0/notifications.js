var notificationIconUrl = chrome.extension.getURL("images/48x48_Bing_Grey.png");
var endpointUrlGetNotification = 'https://www.bing.com/BrowserExtension/Rewards/GetNotification';
var endpointUrlReportNotificationDisplayed = 'https://www.bing.com/BrowserExtension/Rewards/NotificationDisplayed';
var endpointUrlReportNotificationClicked = 'https://www.bing.com/BrowserExtension/Rewards/NotificationClicked';
var endpointUrlReportNotificationClosed = 'https://www.bing.com/BrowserExtension/Rewards/NotificationClosed';
var endpointUrlNotificationsPermissionChanged = 'https://www.bing.com/BrowserExtension/Rewards/NotificationsPermissionChanged';
var lsInstalledDate = "installedDate";
var lsLastNotificationDisplayedDate = "lastNotifDispDate";
var lsLastNotificationDisplayedId = "lastNotifDispId";
var lsLastNewTabNotificationDisplayedId = "lastNewTabNotifDispId";
var lsHasDSE = "hasDSE";
var lsChannel = "channel";
var lsIsNotifEnabled = "isNotifEnabled";
var lsNotificationTargetUrlMapping = "notifTargetUrlMapping";
var onInstallEventName = "runtime.onInstalled";
var newTabEventName = "tabs.onCreated";

//Sets 'hasDSE' in localStorage whenever notifications.js gets executed
setTimeout(function () {
	chrome.management.getSelf(function (e){ return localStorage.setItem(lsHasDSE, e.permissions && e.permissions.indexOf("searchProvider") > 0)});
}, 500);

chrome.runtime.onInstalled.addListener(getOnInstallNotificationIfEnabled);

chrome.tabs.onCreated.addListener(getOnNewTabNotification);

chrome.notifications.onPermissionLevelChanged.addListener(reportPermissionLevelChanged);

chrome.notifications.onClicked.addListener(reportNotificationClickedAndOpenPage);

chrome.notifications.onClosed.addListener(reportNotificationClosed);

function getOnInstallNotificationIfEnabled(details) {
	localStorage.setItem(lsIsNotifEnabled, true);
	getOnInstallNotification(details);
}

function getOnInstallNotification(details) {
	if (details.reason === 'install') {
	    localStorage.setItem(lsInstalledDate, new Date().toUTCString());
	}

	var data = { ExtensionEvent: onInstallEventName, ExtensionEventReason: details.reason};
	
	var endpointUrl = endpointUrlGetNotification + '?evt=ext' + details.reason + "&pc=" + localStorage["pc"];
	getAndShowNotification(endpointUrl, data, onInstallEventName);
}

function getOnNewTabNotification(tab) {
	if (!isEnabled()) {
		return;
	}
	
	var data = { ExtensionEvent: newTabEventName};
		  
	var endpointUrl = endpointUrlGetNotification + '?evt=newtab' + "&pc=" + localStorage["pc"];
	getAndShowNotification(endpointUrl, data, newTabEventName);
}

function reportPermissionLevelChanged(permissionLevel) {
	if (!isEnabled()) {
		return;
	}
	
	if (typeof(permissionLevel) === 'undefined' || !permissionLevel) {
		return;
	}
	
	var data = { ExtensionNotificationsPermission: permissionLevel};
	var endpointUrl = endpointUrlNotificationsPermissionChanged + '?p=' + permissionLevel + "&pc=" + localStorage["pc"];	
	sendRequest(endpointUrl, data);
}

function reportNotificationDisplayed(notificationId, extensionEvent) {
	if (!isEnabled()) {
		return;
	}
	
	if (typeof(notificationId) === 'undefined' || !notificationId) {
		return;
	}
	
	var data = { NotificationId: notificationId};
	var endpointUrl = endpointUrlReportNotificationDisplayed + '?nid=' + notificationId + "&pc=" + localStorage["pc"];	
	sendRequest(endpointUrl, data);
	
	localStorage.setItem(lsLastNotificationDisplayedDate, new Date().toUTCString());
	localStorage.setItem(lsLastNotificationDisplayedId, notificationId);
	
	if (extensionEvent && extensionEvent === newTabEventName) {
		localStorage.setItem(lsLastNewTabNotificationDisplayedId, notificationId);
	}
}

function reportNotificationClosed(notificationId, byUser) {
	if (!isEnabled()) {
		return;
	}
	
	if (typeof(notificationId) === 'undefined' || !notificationId) {
		return;
	}
	
	var data = { NotificationId: notificationId};
	
	if (typeof(byUser) !== 'undefined' && byUser) {
		data.ExtensionEventTriggeredByUser = true;
	}
	
	var endpointUrl = endpointUrlReportNotificationClosed + '?nid=' + notificationId + "&pc=" + localStorage["pc"];
	sendRequest(endpointUrl, data);
}

function reportNotificationClickedAndOpenPage(notificationId) {
	if (typeof(notificationId) === 'undefined' || !notificationId) {
		return;
	}
  
  	chrome.notifications.clear(notificationId);
	
	var data = { NotificationId: notificationId};
	var endpointUrl = endpointUrlReportNotificationClicked + '?nid=' + notificationId + "&pc=" + localStorage["pc"];
	sendRequest(endpointUrl, data);
	
	var targetUrl;
	try {	
		targetUrl = getNotificationTargetUrl(notificationId);
	} 
	catch {
		return;
	}
  
	if (typeof(targetUrl) === 'undefined' || !targetUrl || !(targetUrl.includes("http://") || targetUrl.includes("https://"))) {
		return;
	}

	chrome.tabs.create({ url:  targetUrl});
}

function getAndShowNotification(endpointUrl, data, extensionEventName) {
	sendRequest(endpointUrl, data).then( function(response) {
		if (!response || response.ErrorCode !== 0 || !response.NotificationData) 
		{
			return;
		}
  
		var notificationData = response.NotificationData;
		var notification = { id: notificationData.Id, title: notificationData.Title, message: notificationData.Message, type: notificationData.TemplateType, requireInteraction:  notificationData.RequireInteraction, targetUrl: notificationData.TargetUrl, iconUrl: notificationData.IconUrl, priority: notificationData.Priority };
		
		showNotification(notification, extensionEventName);
	});
}

function showNotification(notification, extensionEventName) {
 
 	if(notification.id === 'RewardsExtWelcomeNotSignedIn' && notification.targetUrl) {
		chrome.tabs.create({url: notification.targetUrl});
		return;
	}
	
	chrome.notifications.getPermissionLevel(function (level) {
		if (level === "granted" && notification.id && notification.title && notification.message) {
			
			if (notification.iconUrl) {
				notificationIconUrl = notification.iconUrl;
			}
			
			chrome.notifications.create(notification.id, {title: notification.title, message: notification.message, type: "basic", iconUrl: notificationIconUrl, requireInteraction: notification.requireInteraction}, notificationId => reportNotificationDisplayed(notificationId, extensionEventName));
		
		    try {
				saveNotificationTargetUrl(notification.id, notification.targetUrl);
			}
			catch {
				return;
			}
		}
	});
}

function createRequestPayload(data) {
	if (!data) {
		return null;
	}
	
	try {
		data.ExtensionHasDSE = localStorage.getItem(lsHasDSE) === "true";
		data.ExtensionChannelId = localStorage.getItem(lsChannel);
		data.ExtensionId = chrome.runtime.id;
		var installedDateStr = localStorage.getItem(lsInstalledDate);
		if (installedDateStr != null) {
			data.ExtensionInstalledDate = new Date(installedDateStr);
		}
		var lastNotificationDisplayedStr = localStorage.getItem(lsLastNotificationDisplayedDate);
		if (lastNotificationDisplayedStr != null) {
			data.LastNotificationDisplayedDate = new Date(lastNotificationDisplayedStr);
		}
		data.LastNotificationDisplayedId = localStorage.getItem(lsLastNotificationDisplayedId);
		data.LastNewTabNotificationDisplayedId = localStorage.getItem(lsLastNewTabNotificationDisplayedId);
		var payload = JSON.stringify(data);
		return payload;

	} catch (error) {
	}
	
	return null;
}

function sendRequest(endpointUrl, data) {
	
	var payload = createRequestPayload(data)
	
	return fetch( endpointUrl, 
	{ 
		credentials: 'include',
		method: 'POST',
		headers: {
					'Content-Type': 'application/json;charset=utf-8',
					'X-BBE-CSRF': 'BrowserExtensionsNotifications'
		},
		body: payload 
	} )
	.then( function (response) {
		if (response && response.ok) {
			return response.json(); 
		}
		return null;
	}).catch(function (error) {
		return null;
	});
}

function saveNotificationTargetUrl(notificationId, notificationTargetUrl) {
	var notificationTargetUrlMapping = {};
	var stringNotificationTargetUrlMapping = localStorage.getItem(lsNotificationTargetUrlMapping);
	if (stringNotificationTargetUrlMapping)
	{
		notificationTargetUrlMapping = JSON.parse(stringNotificationTargetUrlMapping);
		
		if (!notificationTargetUrlMapping) 
		{
			notificationTargetUrlMapping = {};
		}
	} 
	
	notificationTargetUrlMapping[notificationId] = notificationTargetUrl;
	var stringNotificationTargetUrlMapping = JSON.stringify(notificationTargetUrlMapping);
	localStorage.setItem(lsNotificationTargetUrlMapping, stringNotificationTargetUrlMapping);
}

function getNotificationTargetUrl(notificationId) {
	var stringNotificationTargetUrlMapping = localStorage.getItem(lsNotificationTargetUrlMapping);
	if (stringNotificationTargetUrlMapping)
	{
		var notificationTargetUrlMapping = JSON.parse(stringNotificationTargetUrlMapping);
		
		if (!notificationTargetUrlMapping) {
			return;
		}
		
		var notifTargetUrl = notificationTargetUrlMapping[notificationId];
		delete notificationTargetUrlMapping[notificationId];
		stringNotificationTargetUrlMapping = JSON.stringify(notificationTargetUrlMapping);
		localStorage.setItem(lsNotificationTargetUrlMapping, stringNotificationTargetUrlMapping);
		return notifTargetUrl;
	}
	
	notificationTargetUrlMapping = {};
	var stringNotificationTargetUrlMapping = JSON.stringify(notificationTargetUrlMapping);
	localStorage.setItem(lsNotificationTargetUrlMapping, stringNotificationTargetUrlMapping);
	return null;
}

function isEnabled() {
	var isNotifEnabled = localStorage.getItem(lsIsNotifEnabled);
	if (typeof(isNotifEnabled) !== 'undefined' && isNotifEnabled === 'true') {
		return true;
	}
	
	return false;
}