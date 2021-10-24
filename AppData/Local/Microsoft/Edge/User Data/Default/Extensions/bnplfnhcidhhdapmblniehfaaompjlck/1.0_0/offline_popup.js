document.addEventListener('DOMContentLoaded', function () {
  
  document.getElementById("rewards-name").innerHTML = chrome.i18n.getMessage("RewardsTitle");
  document.getElementById("flyout-title").innerHTML = chrome.i18n.getMessage("Flyout_Signup_Title");
  document.getElementById("flyout-description").innerHTML = chrome.i18n.getMessage("Flyout_Signup_Description");
  document.getElementById("flyout-disclaimer").innerHTML = chrome.i18n.getMessage("Flyout_Signup_Disclaimer");
  document.getElementById("flyout-terms").innerHTML = chrome.i18n.getMessage("Flyout_Signup_Terms");
  document.getElementById("flyout-separator").innerHTML = chrome.i18n.getMessage("Flyout_Signup_Separator");
  document.getElementById("flyout-privacy").innerHTML = chrome.i18n.getMessage("Flyout_Signup_Privacy");
  document.getElementById("flyout-signin").innerHTML = chrome.i18n.getMessage("Flyout_Signup_SignIn");
  document.getElementById("flyout-join").innerHTML = chrome.i18n.getMessage("Flyout_Signup_Join");
});