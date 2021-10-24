const connectionUrl = "https://www.bing.com/favicon.ico?_=" + new Date().getTime();
const onlineUrl = "https://www.bing.com/rewardsapp/bepflyoutpage?style=chromeextension&channel=0&partnerId=BrowserExtensions";
const offlineUrl = "offline_popup.html";

window.onload = function(){
    loadNewTab();
};

function setPopupPage(online, signedOut, v2) {
    const popupFrame = document.getElementById("content");
    if(online)
    {
        let frameUrl = localStorage["channel"] ? (onlineUrl + "&dchannel=" +  localStorage["channel"]) : onlineUrl;
		frameUrl = localStorage["pc"] ? (frameUrl + "&pc=" + localStorage["pc"]) : frameUrl;
		popupFrame.src = frameUrl;

        if(signedOut)
        {
            popupFrame.classList = "signedOut";
        } else
        {
            popupFrame.classList = "signedIn";
        }

        if(v2)
        {
            popupFrame.classList += " v2";
        }
    }
    else
    {
        popupFrame.src = offlineUrl;
        popupFrame.classList = "offline";
    }
}

function loadNewTab(){

    if(!window.navigator.onLine) {
        setPopupPage(false, false);
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", onlineUrl);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304) && xhr.responseText)
            {
                isSignedOut = xhr.responseText.includes("Rewards.FlyoutModular.TemplateOverrideOffers");
                isFlyoutV2 = xhr.responseText.includes("modern-flyout");
                setPopupPage(true, isSignedOut, isFlyoutV2);
            }
            else{
                setPopupPage(false, false, false);
            }
        }
    };
    xhr.send();
}