"use strict";

function DebugLog(message) {
    var loggingElement = document.getElementById("logging");
    if (loggingElement) {
        loggingElement.innerHTML += message;
    }
}

function updateIfDarkMode() {
    if (window.external.IsDarkMode() === true) {
        // Update to neutralDark background, white text and icon
        document.body.style.backgroundColor = "#212121";
        document.getElementById("errorTitle").classList.add("darkMode");
        document.getElementById("errorSubtext").classList.add("darkMode");
        document.getElementById("errorIcon").src = "alertIconWhite.png";
    }
}

function updateRTL() {
    if (typeof window.external['isRTL'] === 'boolean') {
            DebugLog("window.external[isRTL]=" + window.external['isRTL']+ "<br />");
            if (window.external['isRTL'] === true) {
                document.getElementsByTagName("body")[0].dir = "rtl";
            }
    }
}

function safeUpdateElementText(id, propName) {
    try {
        if (typeof window.external[propName] === "string") {
            DebugLog("window.external[" + propName + "]=" + window.external[propName]+ "<br />");
            document.getElementById(id).innerHTML = window.external[propName];
        }
        else if (typeof window.external[propName] === "function") {
            DebugLog("window.external[" + propName + "]=" + window.external[propName]()+ "<br />");
            document.getElementById(id).innerHTML = window.external[propName]();
        }
    }
    catch (err) {
        DebugLog("Exception setting: " + id + "<br />");
    }
}

function hideElementIfNeeded(id) {
    var element = document.getElementById(id);

    if (element !== null) {
        if (element.innerHTML === '') {
            element.style.display = "none";
        }
    }

    document.getElementById("logging").innerHTML = "E: " + element + " " + element.innerHTML;
}

function updateErrorText() {
    try
    {
        if (typeof window.external === 'object') {
            DebugLog("window.external exists <br />");

            if (window.external.BrowserScenario === "ShareWeb") {
                try {
                    window.external.Resize(320, 500);
                }
                catch (err) {
                    DebugLog("Resize exception <br />");
                }
            }
            else if (window.external.BrowserScenario === "GetHelp") {
                document.getElementById("ErrorNotification").classList.remove("ErrorNotification");
                document.getElementById("ErrorNotification").classList.add("GetHelpErrorNotification");
                document.getElementById("errorSubtext").classList.remove("ErrorNotification-content");
                document.getElementById("errorSubtext").classList.add("GetHelpErrorNotification-content");
                document.getElementById("errorButtons").classList.remove("ErrorNotification-footer");
                document.getElementById("errorButtons").classList.add("GetHelpErrorNotification-footer");
            }
            
            safeUpdateElementText("errorTitle", "errorTitle");
            safeUpdateElementText("errorSubtext", "errorSecondaryText");
            safeUpdateElementText("errorPrimaryButton", "errorButtonText");

            safeUpdateElementText("errorSecondaryButton", "secondaryErrorButtonText");
            hideElementIfNeeded("errorSecondaryButton");
        }
        else {
            DebugLog("No window external \n");
        }
    }
    catch (err) {
        DebugLog("Can't obtain window.external")
    }
}

function onButtonClick() {
    DebugLog("onButtonClick");
    try {
        window.external.RetryNavigate();
    }
    catch (err) {
        DebugLog("Exception calling tryAgain \n");
    }
}

function onSecondaryButtonClick() {
    DebugLog("onSecondaryAction");
    try {
        window.external.OpenInBrowser();
    }
    catch (err) {
        DebugLog("Exception calling OpenInBrowser \n");
    }
}

window.onload = function () {
    updateIfDarkMode();
    updateErrorText();
    updateRTL();
}