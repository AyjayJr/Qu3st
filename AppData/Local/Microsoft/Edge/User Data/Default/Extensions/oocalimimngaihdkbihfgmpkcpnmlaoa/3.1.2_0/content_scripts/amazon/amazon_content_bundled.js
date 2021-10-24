(() => {
    var __webpack_modules__ = {
        301: module => {
            module.exports = '<div id="notification-link" class="notification-links" tpInjected>\r\n\r\n</div>\r\n\r\n<div id="chat-wrapper" tpInjected>\r\n  <div id="chat-container">\r\n\r\n    <div id="chat-header-container">\r\n\r\n      <ul id="chat-menu-container">\r\n        <li id="function-title">\r\n          <div id="title">\r\n            <p class="extension-title">Teleparty</p>\r\n          </div>\r\n        </li>\r\n        <li id="function-user">\r\n          <div id="link-icon">\r\n            <img class="chat-link" src="{LINK_SVG}">\r\n            <input id="share-url" type="text" readonly="true" autocomplete="off" autofocus style="display:none;" />\r\n          </div>\r\n          <a id="user-icon">\r\n            <img src="{USER_ICON}" />\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <div id="chat-link-container" style=\'display:none;\'>\r\n        <div id="chat-link">\r\n          <div id="chat-link-url">\r\n            <p>The url link goes here.</p>\r\n          </div>\r\n          <div id="chat-link-icon">\r\n            <img src="{LINK_SVG}">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id="chat-icon-container" style="display:none">\r\n        <div id="icon-title-container">\r\n          <div id="icon-title">\r\n            <p class="extension-description">Click to switch icon</p>\r\n          </div>\r\n        </div>\r\n        <div id="icon-holder-container">\r\n          <div id="icon-holder-template">\r\n            <div class="icon-holder-wrap">\r\n              <p class="extension-txt-indicator"></p>\r\n              <ul id="icon-holder"></ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id="setting-edit" class="chat-settings-container setting-container" style="display:none">\r\n\r\n      <div class="setting-usericon">\r\n        <div class="section-b-inner section-inner">\r\n          <a class="user-icon">\r\n            <img src="{USER_ICON}" />\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section-c setting-nickname">\r\n        <div class="section-c-inner section-inner">\r\n          <div class="nickname-section row-wrap">\r\n            <div class="nickname-wrap row-one">\r\n              <p class="extension-description">Nickname</p>\r\n            </div>\r\n            <div class="nickname-input row-two">\r\n              <input id="nickname-edit" class="extension-txt" autocomplete="off" type="text"\r\n                placeholder="{USER_NICKNAME}" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id="settings-save" class="chat-settings-container setting-container" style="display:none">\r\n      <div class="section-d">\r\n        <div class="section-d-inner section-inner">\r\n\r\n          <div class="btns">\r\n            <button id="saveChanges" class=\'extension-btn\'>Save Changes</button>\r\n            <button id="cancelNickname" class=\'extension-btn cancel-btn\'>Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id="chat-history-container">\r\n      <div id="chat-history">\r\n      </div>\r\n    </div>\r\n\r\n    <div id="presence-indicator" class="extension-txt-indicator">\r\n      <p class="extension-txt-indicator">People are currently typing...</p>\r\n    </div>\r\n\r\n    <div id="chat-input-container" class="extension-border-top">\r\n      <input id="chat-input" class="extension-txt" type="text" placeholder="Type a message..."\r\n        autocomplete="off"></input>\r\n    </div>\r\n\r\n    <div id="teleparty-blog-container">\r\n      <a id="teleparty-blog-btn" target="_blank" href="https://www.netflixparty.com/introducing-teleparty">\r\n        <img src="{EXTENSION_LOGO}" alt="">\r\n        <p class="extension-txt-indicator">Introducing Teleparty</p>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</div>';
        },
        39: module => {
            "use strict";
            module.exports = '/* Breakpoints */\r\n/* Mixins */\r\n/* Remove */\r\n@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");\r\n.r-m {\r\n  margin: 0 !important;\r\n}\r\n\r\n.r-m-t {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.r-p-t {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.r-m-l {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.r-p-l {\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.r-m-r {\r\n  margin-right: 0 !important;\r\n}\r\n\r\n.r-p-r {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.r-m-b {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.r-p-b {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.r-b-r {\r\n  border-radius: 0px !important;\r\n}\r\n\r\n.r-boxshadow {\r\n  box-shadow: none !important;\r\n}\r\n\r\n:root {\r\n  /* Patreon Color */\r\n  --patreon: #F96854;\r\n  /* Custom Colors */\r\n  --base-red: #EF3E3A;\r\n  --active-red: #ea0f0a;\r\n  --base-blue: #4da9ff;\r\n  --base-orange: #ff8d4c;\r\n  --base-green: #24D154;\r\n  /* White Colors */\r\n  --base-white: #FAFAFA;\r\n  --white-5: #F0F0F0;\r\n  --white-10: #DCDCDC;\r\n  --white-15: #C8C8C8;\r\n  --white-20: #B4B4B4;\r\n  --white-25: #A0A0A0;\r\n  --white-30: #8C8C8C;\r\n  --white-35: #787878;\r\n  /* Black Colors */\r\n  --base-black: #191919;\r\n  --black-5: #5A5A5A;\r\n  --black-10: #464646;\r\n  --black-15: #323232;\r\n  --black-20: #282828;\r\n  --black-25: #1e1e1e;\r\n  --black-30: #0a0a0a;\r\n}\r\n\r\n.base-white-bg {\r\n  background-color: var(--base-white);\r\n}\r\n\r\n.white-5-bg {\r\n  background-color: var(--white-5);\r\n}\r\n\r\n.white-10-bg {\r\n  background-color: var(--white-10);\r\n}\r\n\r\n.white-15-bg {\r\n  background-color: var(--white-15);\r\n}\r\n\r\n.white-20-bg {\r\n  background-color: var(--white-20);\r\n}\r\n\r\n.white-25-bg {\r\n  background-color: var(--white-25);\r\n}\r\n\r\n.white-30-bg {\r\n  background-color: var(--white-30);\r\n}\r\n\r\n.white-35-bg {\r\n  background-color: var(--white-35);\r\n}\r\n\r\n.base-black-bg {\r\n  background-color: var(--base-black);\r\n}\r\n\r\n.black-5-bg {\r\n  background-color: var(--black-5);\r\n}\r\n\r\n.black-10-bg {\r\n  background-color: var(--black-10);\r\n}\r\n\r\n.black-15-bg {\r\n  background-color: var(--black-15);\r\n}\r\n\r\n.black-20-bg {\r\n  background-color: var(--black-20);\r\n}\r\n\r\n.black-25-bg {\r\n  background-color: var(--black-25);\r\n}\r\n\r\n.black-30-bg {\r\n  background-color: var(--black-30);\r\n}\r\n\r\n.black-35-bg {\r\n  background-color: var(--black-35);\r\n}\r\n\r\n.base-red-bg {\r\n  background-color: var(--base-red);\r\n}\r\n\r\n.active-red-bg {\r\n  background-color: var(--active-red);\r\n}\r\n\r\n.base-orange-bg {\r\n  background-color: var(--base-orange);\r\n}\r\n\r\n.base-blue-bg {\r\n  background-color: var(--base-blue);\r\n}\r\n\r\n.base-green-bg {\r\n  background-color: var(--base-green);\r\n}\r\n\r\n.patreon-bg {\r\n  background-color: var(--patreon);\r\n}\r\n\r\n.txt-blue {\r\n  color: var(--base-blue) !important;\r\n}\r\n\r\n.txt-red {\r\n  color: var(--base-red) !important;\r\n}\r\n\r\n.txt-white {\r\n  color: var(--base-white) !important;\r\n}\r\n\r\ndiv, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button {\r\n  word-wrap: break-word;\r\n}\r\n\r\n:root {\r\n  --regular: 400;\r\n  --medium: 500;\r\n  --semi-bold: 600;\r\n  --bold: 700;\r\n  --extra-bold: 800;\r\n  --black: 900;\r\n}\r\n\r\n.extension-title {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.2px;\r\n}\r\n.extension-txt {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--regular);\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n.extension-txt-indicator {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--regular);\r\n  color: var(--white-35);\r\n  font-size: 11px;\r\n}\r\n.extension-description {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--white-10);\r\n  font-size: 13px;\r\n}\r\n.extension-border-bot {\r\n  border-bottom: 1px solid var(--black-10);\r\n}\r\n.extension-border-top {\r\n  border-top: 1px solid var(--black-10);\r\n}\r\n.extension-btn {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 10px 0px;\r\n  border-radius: 2px;\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  transition: background 0.3s ease;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n.extension-btn:hover {\r\n  background: var(--active-red);\r\n}\r\n.extension-btn a {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--base-white);\r\n}\r\n\r\n#alert, #alert-dialog-wrapper {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9999999;\r\n  align-items: center;\r\n  box-shadow: 8px 6px 20px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n#alert-dialog-container {\r\n  background: var(--base-black);\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  border-radius: 4px;\r\n}\r\n#alert-title-wrapper {\r\n  padding: 20px 20px 0px 20px;\r\n}\r\n#alert-title-wrapper .alert-title {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n#alert-title-wrapper .alert-title .alert-x {\r\n  color: var(--base-white);\r\n}\r\n#alert-title-wrapper .extension-border-bot {\r\n  padding-top: 10px;\r\n}\r\n#alert-description {\r\n  padding: 10px 20px 20px 20px;\r\n}\r\n\r\n#alert-x-btn {\r\n  background: none !important;\r\n  border: none !important;\r\n}\r\n\r\n#alert-content-txt {\r\n  margin: 0 !important;\r\n}\r\n\r\n#alert-title-txt {\r\n  margin: 0 !important;\r\n}\r\n\r\n#alert-return-btn {\r\n  border: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=alert.css.map */';
        },
        644: module => {
            "use strict";
            module.exports = '@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";\r\nbody,\r\nhtml {\r\n  font-size: 16px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na,\r\np,\r\nul,\r\nli,\r\nol,\r\nbutton,\r\nbody,\r\nhtml {\r\n  padding: 0em;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na,\r\np,\r\nul,\r\nli,\r\nol,\r\nbutton,\r\nbody,\r\nhtml {\r\n  margin: 0em;\r\n}\r\nul,\r\nli,\r\nol,\r\na {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\ninput,\r\nbutton {\r\n  border: none;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nspan,\r\nbody,\r\nhtml {\r\n  user-select: text !important;\r\n  cursor: auto !important;\r\n}\r\nimg {\r\n  user-select: none !important;\r\n}\r\ndiv,\r\nsection,\r\nbutton,\r\ninput,\r\nform,\r\narticle {\r\n  outline: none;\r\n}\r\na {\r\n  display: block;\r\n  width: fit-content;\r\n}\r\nbutton,\r\ninput,\r\nform,\r\nfieldset {\r\n  background: none;\r\n}\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n.r-m {\r\n  margin: 0 !important;\r\n}\r\n.r-m-t {\r\n  margin-top: 0 !important;\r\n}\r\n.r-p-t {\r\n  padding-top: 0 !important;\r\n}\r\n.r-m-l {\r\n  margin-left: 0 !important;\r\n}\r\n.r-p-l {\r\n  padding-left: 0 !important;\r\n}\r\n.r-m-r {\r\n  margin-right: 0 !important;\r\n}\r\n.r-p-r {\r\n  padding-right: 0 !important;\r\n}\r\n.r-m-b {\r\n  margin-bottom: 0 !important;\r\n}\r\n.r-p-b {\r\n  padding-bottom: 0 !important;\r\n}\r\n.r-b-r {\r\n  border-radius: 0px !important;\r\n}\r\n.r-boxshadow {\r\n  box-shadow: none !important;\r\n}\r\n:root {\r\n  --patreon: #f96854;\r\n  --base-red: #ef3e3a;\r\n  --active-red: #ea0f0a;\r\n  --base-blue: #4da9ff;\r\n  --base-orange: #ff8d4c;\r\n  --base-green: #24d154;\r\n  --base-white: #fafafa;\r\n  --white-5: #f0f0f0;\r\n  --white-10: #dcdcdc;\r\n  --white-15: #c8c8c8;\r\n  --white-20: #b4b4b4;\r\n  --white-25: #a0a0a0;\r\n  --white-30: #8c8c8c;\r\n  --white-35: #787878;\r\n  --base-black: #191919;\r\n  --black-5: #5a5a5a;\r\n  --black-10: #464646;\r\n  --black-15: #323232;\r\n  --black-20: #282828;\r\n  --black-25: #1e1e1e;\r\n  --black-30: #0a0a0a;\r\n}\r\n.base-white-bg {\r\n  background-color: var(--base-white);\r\n}\r\n.white-5-bg {\r\n  background-color: var(--white-5);\r\n}\r\n.white-10-bg {\r\n  background-color: var(--white-10);\r\n}\r\n.white-15-bg {\r\n  background-color: var(--white-15);\r\n}\r\n.white-20-bg {\r\n  background-color: var(--white-20);\r\n}\r\n.white-25-bg {\r\n  background-color: var(--white-25);\r\n}\r\n.white-30-bg {\r\n  background-color: var(--white-30);\r\n}\r\n.white-35-bg {\r\n  background-color: var(--white-35);\r\n}\r\n.base-black-bg {\r\n  background-color: var(--base-black);\r\n}\r\n.black-5-bg {\r\n  background-color: var(--black-5);\r\n}\r\n.black-10-bg {\r\n  background-color: var(--black-10);\r\n}\r\n.black-15-bg {\r\n  background-color: var(--black-15);\r\n}\r\n.black-20-bg {\r\n  background-color: var(--black-20);\r\n}\r\n.black-25-bg {\r\n  background-color: var(--black-25);\r\n}\r\n.black-30-bg {\r\n  background-color: var(--black-30);\r\n}\r\n.black-35-bg {\r\n  background-color: var(--black-35);\r\n}\r\n.base-red-bg {\r\n  background-color: var(--base-red);\r\n}\r\n.active-red-bg {\r\n  background-color: var(--active-red);\r\n}\r\n.base-orange-bg {\r\n  background-color: var(--base-orange);\r\n}\r\n.base-blue-bg {\r\n  background-color: var(--base-blue);\r\n}\r\n.base-green-bg {\r\n  background-color: var(--base-green);\r\n}\r\n.patreon-bg {\r\n  background-color: var(--patreon);\r\n}\r\n.txt-blue {\r\n  color: var(--base-blue) !important;\r\n}\r\n.txt-red {\r\n  color: var(--base-red) !important;\r\n}\r\n.txt-white {\r\n  color: var(--base-white) !important;\r\n}\r\ndiv,\r\np,\r\nspan,\r\na,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nli,\r\nul,\r\nbutton {\r\n  word-wrap: break-word;\r\n}\r\n:root {\r\n  --regular: 400;\r\n  --medium: 500;\r\n  --semi-bold: 600;\r\n  --bold: 700;\r\n  --extra-bold: 800;\r\n  --black: 900;\r\n}\r\n.extension-title {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.2px;\r\n}\r\n.extension-txt {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  color: var(--white-15);\r\n  font-size: 14px;\r\n}\r\n.extension-txt-indicator {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  color: var(--white-35);\r\n  font-size: 11px;\r\n}\r\n.extension-description {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--white-10);\r\n  font-size: 13px;\r\n}\r\n.extension-border-bot {\r\n  border-bottom: 1px solid var(--black-10);\r\n}\r\n.extension-border-top {\r\n  border-top: 1px solid var(--black-10);\r\n}\r\n.extension-btn {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 10px 0px;\r\n  border-radius: 2px;\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  transition: background 0.3s ease;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n.cancel-btn {\r\n  border: 1px solid #EF3E3A;\r\n  box-sizing: border-box;\r\n  border-radius: 2.23846px;\r\n  color: var(--base-red);\r\n  background: none !important;\r\n}\r\n.extension-btn:hover {\r\n  background: var(--active-red);\r\n}\r\n.extension-btn a {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--base-white);\r\n}\r\n::-webkit-scrollbar {\r\n  width: 2px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--base-red);\r\n  border-radius: 10px;\r\n}\r\n#chat-wrapper {\r\n  position: fixed;\r\n  right: 0;\r\n  width: 288px;\r\n  height: 100%;\r\n  background: var(--base-black);\r\n}\r\n#chat-container {\r\n  width: 250px;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  padding: 12px 0px;\r\n}\r\n#chat-main {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n#chat-menu-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 0px !important;\r\n  padding-left: 0px !important;\r\n}\r\n#chat-menu-container li {\r\n  list-style: none !important;\r\n}\r\n#chat-menu-container #title h1 {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.5px;\r\n}\r\n#chat-menu-container #function-user {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n}\r\n#chat-menu-container #function-user #link-icon {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  padding-right: 10px;\r\n  cursor: pointer;\r\n}\r\n#chat-menu-container #function-user #link-icon .chat-link {\r\n  color: var(--base-white);\r\n  width: 18px;\r\n  height: 18px;\r\n  transform: scale(1);\r\n  transition: color 0.3s ease;\r\n}\r\n#chat-menu-container #function-user #link-icon .chat-link:hover {\r\n  color: var(--base-red);\r\n  transform: scale(1.05);\r\n}\r\n#chat-menu-container #function-user #user-icon img {\r\n  width: 38px;\r\n  height: 38px;\r\n  transform: scale(1);\r\n  transition: transform 0.3s ease;\r\n}\r\n#chat-menu-container #function-user #user-icon img:hover {\r\n  transform: scale(1.05);\r\n}\r\n#chat-history-container {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  justify-content: flex-end;\r\n  height: calc(100% - 136px);\r\n}\r\n#chat-history-container #chat-history {\r\n  overflow: auto;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 10px;\r\n}\r\n#chat-history-container #chat-history .msg,\r\n#chat-history-container #chat-history .msg-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  padding: 5px 0px;\r\n  align-items: center;\r\n}\r\n#chat-history-container #chat-history .msg-container {\r\n  align-items: flex-start;\r\n}\r\n#chat-history-container #chat-history .msg .icon img,\r\n#chat-history-container #chat-history .msg .icon-name img,\r\n#chat-history-container #chat-history .msg-container .icon img,\r\n#chat-history-container #chat-history .msg-container .icon-name img {\r\n  width: 36px;\r\n  height: 36px;\r\n}\r\n#chat-history-container #chat-history .msg .msg-txt,\r\n#chat-history-container #chat-history .msg-container .msg-txt {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  width: 80%;\r\n}\r\n#chat-history-container #chat-history .msg .message,\r\n#chat-history-container #chat-history .msg .message-system,\r\n#chat-history-container #chat-history .msg .message-txt,\r\n#chat-history-container #chat-history .msg-container .message,\r\n#chat-history-container #chat-history .msg-container .message-system,\r\n#chat-history-container #chat-history .msg-container .message-txt {\r\n  width: 80%;\r\n}\r\n#chat-history-container #chat-history .msg .message h3,\r\n#chat-history-container #chat-history .msg .message-system h3,\r\n#chat-history-container #chat-history .msg .message-txt h3,\r\n#chat-history-container #chat-history .msg-container .message h3,\r\n#chat-history-container #chat-history .msg-container .message-system h3,\r\n#chat-history-container #chat-history .msg-container .message-txt h3 {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--semi-bold);\r\n  color: var(--base-white);\r\n  font-size: 14px;\r\n  line-height: 1.2;\r\n  letter-spacing: 0.2px;\r\n}\r\n#chat-history-container #chat-history .msg .message p,\r\n#chat-history-container #chat-history .msg .message-system p,\r\n#chat-history-container #chat-history .msg .message-txt p,\r\n#chat-history-container #chat-history .msg-container .message p,\r\n#chat-history-container #chat-history .msg-container .message-system p,\r\n#chat-history-container #chat-history .msg-container .message-txt p {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  font-size: 14px;\r\n  line-height: normal;\r\n}\r\n#chat-history-container #chat-history .msg .message-txt p,\r\n#chat-history-container #chat-history .msg-container .message-txt p {\r\n  color: #fff;\r\n  word-break: break-word !important;\r\n  line-height: normal;\r\n}\r\n#chat-history-container #chat-history .msg .message-system p,\r\n#chat-history-container #chat-history .msg-container .message-system p {\r\n  color: var(--white-35);\r\n  font-style: italic;\r\n  line-height: normal;\r\n}\r\n#chat-input-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n}\r\n#chat-input-container input {\r\n  padding-top: 5px;\r\n  width: 100%;\r\n  border: none !important;\r\n  background: none !important;\r\n}\r\n#chat-input-container input:hover {\r\n  cursor: auto !important;\r\n}\r\n#chat-input-container #emoji-btn {\r\n  width: 10%;\r\n}\r\n#chat-input-container #emoji-btn .test-emoji-btn {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  padding: 2.5px;\r\n}\r\n#chat-icon-container {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  flex-flow: column;\r\n  height: 100%;\r\n  display: none;\r\n  padding-top: 10px;\r\n}\r\n#chat-icon-container #icon-title-container {\r\n  padding-bottom: 10px;\r\n}\r\n#chat-icon-container #icon-holder {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n}\r\n#chat-icon-container #icon-holder .image-button {\r\n  width: 25%;\r\n  padding: 1px 3.75px;\r\n}\r\n#chat-icon-container #icon-holder .image-button .img-class {\r\n  width: 100%;\r\n  height: 100%;\r\n  transform: scale(0.95);\r\n  transition: transform 0.3s ease;\r\n}\r\n#chat-icon-container #icon-holder .image-button .img-class:hover {\r\n  transform: scale(1);\r\n}\r\n#emoji-picker-container {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  justify-content: space-between;\r\n  background: var(--black-15);\r\n  width: 100%;\r\n  height: 200px;\r\n  bottom: 136px;\r\n  border-radius: 2px;\r\n  padding: 10px;\r\n}\r\n#emoji-filter-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  height: 10%;\r\n}\r\n#emoji-filter-container .emoji-filter-icons {\r\n  width: 11%;\r\n  height: 100%;\r\n}\r\n#emoji-filter-container .emoji-filter-icons img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#emoji-category-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  position: relative;\r\n  margin-top: 4%;\r\n  height: 84%;\r\n}\r\n#emoji-category-container .emoji-category-wrap {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  height: auto;\r\n  padding-top: 10px;\r\n}\r\n#emoji-category-container .emoji-category-wrap:first-child {\r\n  padding-top: 0px;\r\n}\r\n#emoji-category-container .emoji-category-wrap p {\r\n  width: 100%;\r\n  padding-bottom: 5px;\r\n}\r\n#emoji-category-container .emoji-category-wrap img {\r\n  width: 15%;\r\n  height: auto;\r\n  padding: 4px;\r\n}\r\n#icon-holder {\r\n  padding: 0px !important;\r\n  margin: 0px !important;\r\n}\r\n#icon-holder-container {\r\n  height: calc(100% - 74px);\r\n  overflow: auto;\r\n}\r\n.icon-holder-wrap {\r\n  padding: 10px 0px;\r\n}\r\n.icon-holder-wrap:first-child {\r\n  padding: 0px;\r\n}\r\n.icon-holder-wrap p {\r\n  padding-bottom: 5px;\r\n}\r\n.setting,\r\n.setting-container {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  display: none;\r\n}\r\n.setting-usericon {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  padding-top: 10px;\r\n}\r\n.setting-usericon img {\r\n  width: 80px;\r\n  height: 80px;\r\n  transform: scale(1);\r\n  transition: transform 0.3s ease;\r\n}\r\n.setting-usericon img:hover {\r\n  transform: scale(1.05);\r\n}\r\n.setting-nickname {\r\n  margin-top: 10px;\r\n}\r\n.setting-nickname .nickname,\r\n.setting-nickname .nickname-input,\r\n.setting-nickname .nickname-wrap {\r\n  width: 100%;\r\n}\r\n.setting-nickname .nickname-wrap {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n}\r\n.setting-nickname .nickname-input {\r\n  margin-top: 5px;\r\n}\r\n.setting-nickname .nickname-input input {\r\n  border-radius: 2px;\r\n  padding: 8px 10px;\r\n  width: 100%;\r\n  background: var(--black-15);\r\n  border: none !important;\r\n}\r\n.setting-nickname .nickname-input input:hover {\r\n  cursor: auto !important;\r\n}\r\n#presence-indicator {\r\n  display: block;\r\n  padding-bottom: 5px;\r\n  height: 20px;\r\n}\r\n#patreon,\r\n#patreon-link,\r\n#patreon-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n#patreon-container {\r\n  padding-top: 10px;\r\n}\r\n#patreon-link img {\r\n  border-radius: 20px;\r\n  width: 130px;\r\n}\r\n#teleparty-blog-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  padding-top: 10px;\r\n  z-index: 10;\r\n}\r\n#teleparty-blog-btn {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 36px;\r\n}\r\n#teleparty-blog-btn img {\r\n  height: 32px;\r\n}\r\n#teleparty-blog-btn p {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 6px 20px;\r\n  border-radius: 20px;\r\n  height: 100%;\r\n}\r\n#teleparty-blog-btn p:hover {\r\n  cursor: pointer !important;\r\n} /*# sourceMappingURL=style.min.css.map */\r\n';
        }
    }, __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) return __webpack_module_cache__[moduleId].exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        return __webpack_modules__[moduleId](module, module.exports, __webpack_require__), 
        module.exports;
    }
    __webpack_require__.n = module => {
        var getter = module && module.__esModule ? () => module.default : () => module;
        return __webpack_require__.d(getter, {
            a: getter
        }), getter;
    }, __webpack_require__.d = (exports, definition) => {
        for (var key in definition) __webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        });
    }, __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop), 
    (() => {
        "use strict";
        var debug = console.log.bind(window.console);
        const closeImage = chrome.extension.getURL("img/x-circle.svg"), ownerOnlyNextEpisodeModal = {
            title: "Teleparty | Disconnected from party",
            content: "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
            buttonTitle: "Return to Party"
        }, idleWarningModal = {
            title: "Teleparty | Are you still there?",
            content: "You will be removed from the party in 60 seconds for inactivity. Move your mouse to continue watching."
        }, failedNextEpisodeModal = {
            title: "Teleparty | Disconnected from party",
            content: "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
            buttonTitle: "Return to Party"
        }, lostBackgroundConnectionModal = {
            title: "Teleparty | Disconnected from party",
            content: "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
            buttonTitle: "Return to Party"
        };
        function showButtonMessage(options, buttonUrl) {
            hideAlertMessages();
            const modalTemplate = buttonUrl ? function(options) {
                return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${options.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${closeImage}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${options.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${options.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            }(options) : function(options) {
                return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${options.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${closeImage}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${options.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            }(options);
            document.body.insertAdjacentHTML("afterbegin", modalTemplate), jQuery("#alert-x-btn").click((() => {
                hideAlertMessages();
            })), buttonUrl && jQuery("#alert-return-btn").click((() => {
                hideAlertMessages(), window.location.href = buttonUrl;
            }));
        }
        function hideAlertMessages() {
            const alertWrapper = document.querySelector("#alert-dialog-wrapper");
            alertWrapper && alertWrapper.remove();
        }
        const DEFAULT_TEARDOWN = {
            showAlert: !1
        }, IDLE_TEARDOWN = {
            showAlert: !0,
            alertModal: {
                title: "Teleparty | Disconnected from party",
                content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
                buttonTitle: "Return to Party"
            }
        }, INVALID_NEXT_EPISODE_DATA = {
            showAlert: !0,
            alertModal: {
                title: "Teleparty | Disconnected from party",
                content: "Sorry, long parties only work for consecutive episodes for now. Please share a new Teleparty to continue watching together, or click the button below to rejoin the party.",
                buttonTitle: "Return to Party"
            }
        }, FAILED_NEXT_EPISODE_DATA = {
            showAlert: !0,
            alertModal: failedNextEpisodeModal
        }, WRONG_SCREEN_DATA = {
            showAlert: !0,
            alertModal: {
                title: "Teleparty | Disconnected from party",
                content: "It looks like you left the party. You can click the button below to rejoin the party.",
                buttonTitle: "Return to Party"
            }
        };
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class Message {
            constructor(sender, target, type) {
                _defineProperty(this, "sender", void 0), _defineProperty(this, "target", void 0), 
                _defineProperty(this, "type", void 0), this.sender = sender, this.target = target, 
                this.type = type;
            }
        }
        class BackgroundMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.type = type;
            }
        }
        let BackgroundMessageType;
        !function(BackgroundMessageType) {
            BackgroundMessageType.JOIN_SESSION = "joinSession", BackgroundMessageType.GET_VIDEO_DATA = "getVideoData", 
            BackgroundMessageType.LOAD_SESSION = "loadSession", BackgroundMessageType.NO_SESSION_DATA = "noSessionData", 
            BackgroundMessageType.TEARDOWN = "teardown", BackgroundMessageType.ON_VIDEO_UPDATE = "onVideoUpdate", 
            BackgroundMessageType.SOCKET_LOST_CONNECTION = "socketLostConnection", BackgroundMessageType.REBOOT = "socketReconnect", 
            BackgroundMessageType.PING = "ping", BackgroundMessageType.LOG_EVENT = "logEvent", 
            BackgroundMessageType.LOG_EXPERIMENT = "logExpirement";
        }(BackgroundMessageType || (BackgroundMessageType = {}));
        class TeardownMessage extends BackgroundMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, BackgroundMessageType.TEARDOWN), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        const EXTENSION_ID = chrome.runtime.id;
        const Messaging_MessagePasser = new class {
            addListener(listener) {
                chrome.runtime.onMessage.addListener(listener);
            }
            removeListener(listener) {
                chrome.runtime.onMessage.removeListener(listener);
            }
            sendMessageToTabAsync(message, tabId) {
                let timeout = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e4;
                return new Promise(((resolve, reject) => {
                    const sendTimeout = setTimeout((() => {
                        reject();
                    }), timeout);
                    try {
                        chrome.tabs.sendMessage(tabId, message, (response => {
                            chrome.runtime.lastError && debug(chrome.runtime.lastError.message + JSON.stringify(message)), 
                            clearTimeout(sendTimeout), resolve(response);
                        }));
                    } catch (error) {
                        clearTimeout(sendTimeout), reject(error);
                    }
                }));
            }
            sendMessageToExtension(message, timeout) {
                return new Promise(((resolve, reject) => {
                    let sendTimeout = null;
                    timeout && (sendTimeout = setTimeout((() => {
                        reject({
                            error: "Send Message Timeout"
                        });
                    }), timeout));
                    try {
                        chrome.runtime.sendMessage(EXTENSION_ID, message, (response => {
                            chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(message)), 
                            sendTimeout && clearTimeout(sendTimeout), resolve(response);
                        }));
                    } catch (error) {
                        sendTimeout && clearTimeout(sendTimeout), reject(error);
                    }
                }));
            }
        };
        class LogEventMessage extends BackgroundMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, BackgroundMessageType.LOG_EVENT), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function ChatEventListener_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class ChatEventListener {
            constructor(chatApi) {
                ChatEventListener_defineProperty(this, "_chatApi", void 0), ChatEventListener_defineProperty(this, "onFocus", this.onWindowFocus.bind(this)), 
                ChatEventListener_defineProperty(this, "_idleWarningTimeout", void 0), ChatEventListener_defineProperty(this, "_idleKickTimeout", void 0), 
                ChatEventListener_defineProperty(this, "_onReset", this.resetIdleTimer.bind(this)), 
                ChatEventListener_defineProperty(this, "_onFullScreenChange", this._onFullScreen.bind(this)), 
                this._chatApi = chatApi;
            }
            onIdleWarning() {
                debug("Idle Warning called"), showButtonMessage(idleWarningModal), this._idleKickTimeout = setTimeout(this.onIdleTimeout.bind(this), 6e4);
            }
            onIdleTimeout() {
                debug("Idle kick called");
                const logIdleKickMessage = new LogEventMessage("Content_Script", "Service_Background", {
                    eventType: "idle-kick",
                    sessionId: this._chatApi.getSessionId()
                }), teardownMessage = new TeardownMessage("Content_Script", "Service_Background", IDLE_TEARDOWN);
                Messaging_MessagePasser.sendMessageToExtension(logIdleKickMessage), Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            resetIdleTimer(event) {
                this._idleWarningTimeout && clearTimeout(this._idleWarningTimeout), this._idleKickTimeout && (hideAlertMessages(), 
                clearTimeout(this._idleKickTimeout)), this._idleWarningTimeout = setTimeout(this.onIdleWarning.bind(this), 708e4);
            }
            setupIdleListeners() {
                this._idleWarningTimeout = setTimeout(this.onIdleWarning.bind(this), 708e4), window.onmousemove = e => {
                    e.isTrusted && this._onReset("mousemove");
                }, window.onmousedown = () => this._onReset("mousedown"), window.ontouchstart = () => this._onReset("touchstart"), 
                window.onkeydown = () => this._onReset("keydown");
            }
            removeIdleListeners() {
                this._idleWarningTimeout && clearTimeout(this._idleWarningTimeout), this._idleKickTimeout && clearTimeout(this._idleKickTimeout), 
                window.onmousemove = null, window.onmousedown = null, window.ontouchstart = null, 
                window.onkeydown = null;
            }
            startListening() {
                debug("Listening for chat events"), this.setupIdleListeners(), this._initChatListeners();
            }
            stopListening() {
                this._removeChatListeners(), this.removeIdleListeners();
            }
            onWindowFocus() {
                this._chatApi.clearUnreadCount();
            }
            _initChatListeners() {
                jQuery(window).on("focus", this.onFocus), jQuery(".user-icon").on("click", this._chatApi.toggleLargeUserIconButton.bind(this._chatApi)), 
                jQuery("#user-icon").on("click", this._chatApi.toggleIconContainer.bind(this._chatApi)), 
                jQuery("#link-icon").on("click", this._chatApi.linkIconListener.bind(this._chatApi)), 
                jQuery(".image-button").on("click", this._chatApi.userIconSelectorListener.bind(this._chatApi)), 
                jQuery("#chat-input").on("keydown", this._chatApi.onChatKeyDown.bind(this._chatApi)), 
                jQuery("#nickname-edit").on("keydown", this._chatApi.onChatKeyDown.bind(this._chatApi)), 
                jQuery("#chat-input").on("keypress", this._chatApi.onChatKeyPress.bind(this._chatApi)), 
                jQuery("#saveChanges").on("click", this._chatApi.saveChangesListener.bind(this._chatApi)), 
                jQuery("#cancelNickname").on("click", this._chatApi.cancelNicknameListener.bind(this._chatApi)), 
                jQuery("#chat-input-container").on("click", this._chatApi.focus.bind(this._chatApi)), 
                jQuery("#chat-wrapper").on("mouseup", this._chatApi.onChatClicked.bind(this._chatApi)), 
                jQuery("#chat-wrapper").on("mousedown", this._chatApi.onChatClicked.bind(this._chatApi)), 
                jQuery("#chat-wrapper").on("keyup", this._chatApi.onChatKeyUp.bind(this._chatApi)), 
                document.addEventListener("fullscreenchange", this._onFullScreenChange), document.addEventListener("keydown", this.cancelEvent.bind(this), !0);
            }
            cancelEvent(e) {
                e.target !== jQuery("#chat-input")[0] && e.target !== jQuery("#nickname-edit")[0] || e.stopImmediatePropagation();
            }
            _onFullScreen() {
                this._chatApi.scrollToBottom();
            }
            _removeChatListeners() {
                jQuery(window).off("focus", this.onFocus), document.removeEventListener("fullscreenchange", this._onFullScreenChange), 
                jQuery(".user-icon").off(), jQuery("#user-icon").off(), jQuery("#link-icon").off(), 
                jQuery(".image-button").off(), jQuery("#chat-input").off(), jQuery("#saveChanges").off(), 
                jQuery("#cancelNickname").off(), jQuery("#chat-input-container").off(), jQuery("#chat-wrapper").off();
            }
        }
        class PresenceController {
            setupPresenceIndicator() {
                this._getPresenceIndicator().data("typing", !1), this._getPresenceIndicator().data("buffering", !1), 
                this._getPresenceIndicator().data("watchingAds", !1), this._setPresenceText();
            }
            _getPresenceIndicator() {
                return jQuery("#presence-indicator");
            }
            setTypingPresenceVisible(visible) {
                this._getPresenceIndicator().data("typing", visible), this._setPresenceText();
            }
            setBufferingPresenceVisible(visible) {
                this._getPresenceIndicator().data("buffering", visible), this._setPresenceText();
            }
            setWatchingAdsPresenceVisible(visible) {
                this._getPresenceIndicator().data("watchingAds", visible), this._setPresenceText();
            }
            getWatchingAdsVisible() {
                return this._getPresenceIndicator().data("watchingAds");
            }
            _setPresenceText() {
                const typing = this._getPresenceIndicator().data("typing"), buffering = this._getPresenceIndicator().data("buffering");
                this._getPresenceIndicator().data("watchingAds") ? this._getPresenceIndicator().text("People are watching ads...") : typing && buffering ? this._getPresenceIndicator().text("People are typing and buffering...") : typing ? this._getPresenceIndicator().text("People are typing...") : buffering ? this._getPresenceIndicator().text("People are buffering...") : this._getPresenceIndicator().text("");
            }
        }
        const oldIcons = [ "Batman.svg", "DeadPool.svg", "CptAmerica.svg", "Wolverine.svg", "IronMan.svg", "Goofy.svg", "Alien.svg", "Mulan.svg", "Snow-White.svg", "Poohbear.svg", "Sailormoon.svg", "Sailor Cat.svg", "Pizza.svg", "Cookie.svg", "Chocobar.svg", "hotdog.svg", "Hamburger.svg", "Popcorn.svg", "IceCream.svg", "ChickenLeg.svg" ], newIcons = [ "General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg", "Christmas/angel.svg", "Christmas/bell.svg", "Christmas/box.svg", "Christmas/cane.svg", "Christmas/flake.svg", "Christmas/gingerbread.svg", "Christmas/gingerbread_F.svg", "Christmas/gingerbread_M.svg", "Christmas/gloves_blue.svg", "Christmas/gloves_red.svg", "Christmas/hat.svg", "Christmas/ornament.svg", "Christmas/raindeer.svg", "Christmas/reef.svg", "Christmas/santa_F.svg", "Christmas/santa_M.svg", "Christmas/snowglobe.svg", "Christmas/snowman.svg", "Christmas/sock.svg", "Christmas/tree.svg", "Halloween/bats.svg", "Halloween/candy_corn.svg", "Halloween/cat_black.svg", "Halloween/cat_white.svg", "Halloween/coffin.svg", "Halloween/eye_ball.svg", "Halloween/face_angry.svg", "Halloween/face_evil.svg", "Halloween/face_silly.svg", "Halloween/face_smile.svg", "Halloween/frankenstein.svg", "Halloween/ghost_F.svg", "Halloween/ghost_M.svg", "Halloween/gravestone.svg", "Halloween/lollipop.svg", "Halloween/moon.svg", "Halloween/mummy.svg", "Halloween/potion.svg", "Halloween/pumpkin.svg", "Halloween/pumpkin_witch.svg", "Halloween/skull_brain.svg", "Halloween/skull_candy.svg", "Halloween/skull_girl.svg", "Halloween/witch_hat.svg", "Thanksgiving/acorn.svg", "Thanksgiving/bread.svg", "Thanksgiving/candles.svg", "Thanksgiving/corn.svg", "Thanksgiving/drinks.svg", "Thanksgiving/maple_leaf.svg", "Thanksgiving/plate_chicken.svg", "Thanksgiving/pumpkin.svg", "Thanksgiving/pumpkin_pie.svg", "Thanksgiving/slice_pie.svg", "Thanksgiving/sun_flower.svg", "Thanksgiving/turkey_face.svg" ], iconMap = {
            General: [ "Alien.svg", "Batman.svg", "ChickenLeg.svg", "Chocobar.svg", "Cookie.svg", "CptAmerica.svg", "DeadPool.svg", "Goofy.svg", "Hamburger.svg", "hotdog.svg", "IceCream.svg", "IronMan.svg", "Mulan.svg", "Pizza.svg", "Poohbear.svg", "Popcorn.svg", "Sailor Cat.svg", "Sailormoon.svg", "Snow-White.svg", "Wolverine.svg" ],
            Christmas: [ "angel.svg", "bell.svg", "box.svg", "cane.svg", "flake.svg", "gingerbread.svg", "gingerbread_F.svg", "gingerbread_M.svg", "gloves_blue.svg", "gloves_red.svg", "hat.svg", "ornament.svg", "raindeer.svg", "reef.svg", "santa_F.svg", "santa_M.svg", "snowglobe.svg", "snowman.svg", "sock.svg", "tree.svg" ],
            Halloween: [ "bats.svg", "candy_corn.svg", "cat_black.svg", "cat_white.svg", "coffin.svg", "eye_ball.svg", "face_angry.svg", "face_evil.svg", "face_silly.svg", "face_smile.svg", "frankenstein.svg", "ghost_F.svg", "ghost_M.svg", "gravestone.svg", "lollipop.svg", "moon.svg", "mummy.svg", "potion.svg", "pumpkin.svg", "pumpkin_witch.svg", "skull_brain.svg", "skull_candy.svg", "skull_girl.svg", "witch_hat.svg" ],
            Thanksgiving: [ "acorn.svg", "bread.svg", "candles.svg", "corn.svg", "drinks.svg", "maple_leaf.svg", "plate_chicken.svg", "pumpkin.svg", "pumpkin_pie.svg", "slice_pie.svg", "sun_flower.svg", "turkey_face.svg" ]
        };
        function escapeStr(str) {
            return str ? str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : str;
        }
        const enableIconsetFunctions = {
            General: function() {
                return !0;
            },
            Christmas: function() {
                return 11 === (new Date).getMonth();
            },
            Halloween: function() {
                const date = new Date;
                return 9 === date.getMonth() && date.getDate() >= 24;
            },
            Thanksgiving: function() {
                const date = new Date;
                return 10 === date.getMonth() && date.getDate() >= 18 && date.getDate() <= 28 || 9 === date.getMonth() && date.getDate() >= 8 && date.getDate() <= 14;
            }
        };
        function ChatMessageController_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class MessageController {
            constructor(chatApi) {
                ChatMessageController_defineProperty(this, "_messages", void 0), ChatMessageController_defineProperty(this, "_unreadCount", void 0), 
                ChatMessageController_defineProperty(this, "_pageTitle", void 0), ChatMessageController_defineProperty(this, "_messagesCount", void 0), 
                ChatMessageController_defineProperty(this, "_userIcons", void 0), ChatMessageController_defineProperty(this, "_userNicknames", void 0), 
                ChatMessageController_defineProperty(this, "_iconsInUse", void 0), ChatMessageController_defineProperty(this, "_nicknamesInUse", void 0), 
                ChatMessageController_defineProperty(this, "_userIconUrl", void 0), ChatMessageController_defineProperty(this, "_chatApi", void 0), 
                this._chatApi = chatApi, this._messages = [], this._unreadCount = 0, this._pageTitle = document.title, 
                this._messagesCount = 0, this._userIcons = new Map, this._userNicknames = new Map, 
                this._nicknamesInUse = [], this._iconsInUse = [], this._userIconUrl = "", debug("Message Controller");
            }
            getMessageElementWithNickname(userIconUrl, userNickname, message) {
                return jQuery(`\n            <div class="msg-container">\n                <div class="icon-name">\n                    <div class="icon">\n                        <img src="${escapeStr(userIconUrl)}">\n                    </div>\n                </div>\n                <div class="msg-txt message${message.isSystemMessage ? "-system" : "-txt"}">\n                    <h3>${userNickname}</h3>\n                    <p>${message.body}</p>\n                </div>\n            </div>\n          `);
            }
            getMessageElementWithoutNickname(userIconUrl, message) {
                return jQuery(`\n            <div class="msg">\n                <div class="icon">\n                    <img src="${escapeStr(userIconUrl)}"/>\n                </div>\n                <div class="message${message.isSystemMessage ? "-system" : "-txt"}">\n                    <p class="msg-nickname"></p>\n                    <p>${message.body}</p>\n                </div>\n            </div>\n        `);
            }
            _addMessageToHistory(messageElement, message, userIconUrl, userNickname) {
                messageElement.appendTo(jQuery("#chat-history")).data("permId", message.permId).data("userIcon", userIconUrl).data("userNickname", userNickname).data("message", message);
            }
            reloadMessages() {
                const oldMessages = JSON.parse(JSON.stringify(this._messages));
                for (const message of oldMessages) this.addMessage(message, !1);
                this._messages = oldMessages;
            }
            addMessage(message, checkIcons) {
                if (message.isSystemMessage && "left" === message.body && (console.log("trying to add left message"), 
                !message.userIcon && !this._userIcons.has(message.permId))) return;
                checkIcons && message.isSystemMessage && message.body.indexOf("updated their user icon") > -1 && (message.userIcon && this.setUserIcon(message.permId, message.userIcon), 
                message.userNickname && this.setUserNickname(message.permId, message.userNickname)), 
                this._messages.push(message);
                const userIcon = message.userIcon ? this.getUserIconURL(message.permId, message.userIcon) : this.getUserIconURL(message.permId), userNickname = message.userNickname ? this.getUserNickname(message.permId, message.userNickname) : "";
                message.body = escapeStr(message.body);
                const messageElement = "" === userNickname ? this.getMessageElementWithoutNickname(userIcon, message) : this.getMessageElementWithNickname(userIcon, userNickname, message);
                this._addMessageToHistory(messageElement, message, userIcon, userNickname), this.scrollToBottom(), 
                this._increaseMessageCount();
            }
            scrollToBottom() {
                jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
            }
            clearUnreadCount() {
                this._unreadCount > 0 && (this._unreadCount = 0, document.title = this._pageTitle);
            }
            _increaseMessageCount() {
                this._unreadCount += 1, this._messagesCount += 1, document.hasFocus() || (document.title = "(" + String(this._unreadCount) + ") " + this._pageTitle);
            }
            getUserIconURL(userId) {
                let userIcon = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (!this._userIcons.has(userId)) {
                    const parsedIconSrc = this._parseIconSrc(userIcon), iconURL = void 0 !== parsedIconSrc ? parsedIconSrc : this._getDefaultIconUrl();
                    this._userIcons.set(userId, iconURL), this._iconsInUse.push(iconURL);
                }
                return this._userIcons.get(userId);
            }
            _parseIconSrc(userIcon) {
                const newIcon = userIcon.includes("?newIconUrl=") ? userIcon.split("?newIconUrl=")[1] : userIcon, oldIcon = userIcon.includes("?newIconUrl=") ? userIcon.split("?newIconUrl=")[0] : userIcon;
                return newIcons.includes(newIcon) ? chrome.runtime.getURL("img/icons/" + userIcon) : oldIcons.includes(oldIcon) ? chrome.runtime.getURL("img/icons/General/" + userIcon) : void 0;
            }
            getUserNickname(userId) {
                let userNickname = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return this._userNicknames.has(userId) || (this._userNicknames.set(userId, userNickname), 
                this._nicknamesInUse.push(userNickname)), escapeStr(this._userNicknames.get(userId));
            }
            _getDefaultIconUrl() {
                let iconURL = chrome.runtime.getURL("img/icons/General/" + oldIcons[Math.floor(Math.random() * oldIcons.length)]);
                if (this._iconsInUse.length < iconMap.General.length) for (;this._iconsInUse.includes(iconURL); ) iconURL = chrome.runtime.getURL("img/icons/General/" + oldIcons[Math.floor(Math.random() * oldIcons.length)]);
                return iconURL;
            }
            _refreshMsgContainer(msgContainer) {
                const permId = msgContainer.data("permId");
                if (permId && msgContainer.data("userIcon") && this.getUserIconURL(permId) !== msgContainer.data("permId")) {
                    const userIcon = this.getUserIconURL(permId);
                    msgContainer.find("img").attr("src", userIcon), msgContainer.data("userIcon", userIcon);
                }
                if (permId && void 0 !== msgContainer.data("userNickname")) {
                    const userNickname = this.getUserNickname(permId);
                    if (userNickname !== msgContainer.data("userNickname") && void 0 !== userNickname) {
                        const message = msgContainer.data("message"), userIcon = this.getUserIconURL(permId), nicknameMessage = "" == userNickname ? this.getMessageElementWithoutNickname(msgContainer.data("userIcon"), message) : this.getMessageElementWithNickname(msgContainer.data("userIcon"), userNickname, message);
                        msgContainer.replaceWith(nicknameMessage), jQuery(nicknameMessage).data("permId", permId).data("userIcon", userIcon).data("userNickname", userNickname).data("message", message);
                    }
                }
            }
            setUserIconUrl(userIconUrl) {
                this._userIconUrl = userIconUrl;
            }
            renderSidebar() {
                jQuery("#user-icon img").attr("src", this._userIconUrl), jQuery(".user-icon img").attr("src", this._userIconUrl);
                const msgs = jQuery(".msg");
                for (let i = 0; i < msgs.length; i++) this._refreshMsgContainer(jQuery(msgs[i]));
                const msgContainers = jQuery(".msg-container");
                for (let i = 0; i < msgContainers.length; i++) this._refreshMsgContainer(jQuery(msgContainers[i]));
            }
            _parseIconUrlOrGetRandom(queryIconUrl) {
                let iconUrl = null;
                if (queryIconUrl) if (queryIconUrl.includes("?newIconUrl=")) {
                    const userIconParts = queryIconUrl.split("?newIconUrl="), parsedIcon = userIconParts[1], oldIcon = userIconParts[0];
                    newIcons.includes(parsedIcon) ? iconUrl = chrome.runtime.getURL(`img/icons/${parsedIcon}`) : oldIcons.includes(oldIcon) && (iconUrl = chrome.runtime.getURL(`img/icons/General/${oldIcon}`));
                } else newIcons.includes(queryIconUrl) ? iconUrl = chrome.runtime.getURL(`img/icons/${queryIconUrl}`) : oldIcons.includes(queryIconUrl) && (iconUrl = chrome.runtime.getURL(`img/icons/General/${queryIconUrl}`));
                if (null === iconUrl) {
                    let possibleIcons = iconMap.General.filter((icon => !this._iconsInUse.includes(icon)));
                    0 === possibleIcons.length && (possibleIcons = iconMap.General);
                    const randomIcon = possibleIcons[Math.floor(Math.random() * possibleIcons.length)];
                    iconUrl = chrome.runtime.getURL(`/img/icons/General/${randomIcon}`);
                }
                return iconUrl;
            }
            setUserIcon(userId, newUserIcon) {
                const iconUrl = this._parseIconUrlOrGetRandom(newUserIcon);
                this._userIcons.set(userId, iconUrl), this._iconsInUse.push(iconUrl), this.renderSidebar();
            }
            setUserNickname(userId, userNickname) {
                const escapedUserNickName = escapeStr(userNickname);
                this._userNicknames.set(userId, escapedUserNickName), this._nicknamesInUse.push(escapedUserNickName), 
                this.renderSidebar();
            }
            updateUserData(userId, userIcon, userNickname) {
                const iconUrl = this._parseIconUrlOrGetRandom(userIcon);
                this._userIcons.set(userId, iconUrl), this._iconsInUse.push(iconUrl), this._userNicknames.set(userId, userNickname), 
                this._nicknamesInUse.push(userNickname), this.renderSidebar();
            }
            addReviewMessage() {
                jQuery('\n          <div class="msg-container">\n          <div class="msg-txt message-system" style="width:100%">\n          <p>\n          Thanks for using Teleparty! <br> \n          If you enjoy the extension, please leave a positive review \n          <a id="reviewLink" href="https://chrome.google.com/webstore/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews" style="display:inline;color:red" target="none">here!</a>\n          </p>\n          </div>\n          </div>\n          ').appendTo(jQuery("#chat-history"));
                const logEventData = {
                    eventType: "review-shown-chrome",
                    sessionId: this._chatApi.getSessionId()
                }, logEventMessage = new LogEventMessage("Content_Script", "Service_Background", logEventData);
                Messaging_MessagePasser.sendMessageToExtension(logEventMessage), jQuery("#reviewLink").click((() => {
                    chrome.storage.local.set({
                        reviewClicked: !0
                    });
                    const logEventData = {
                        eventType: "review-clicked-chrome",
                        sessionId: this._chatApi.getSessionId()
                    }, logEventMessage = new LogEventMessage("Content_Script", "Service_Background", logEventData);
                    Messaging_MessagePasser.sendMessageToExtension(logEventMessage);
                }));
            }
        }
        var chat = __webpack_require__(301), chat_default = __webpack_require__.n(chat);
        const ChromeStorageWriter = new class {
            async setItemsAsync(items) {
                return new Promise(((resolve, reject) => {
                    chrome.storage.local.set(items, (() => {
                        chrome.runtime.lastError ? reject(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : resolve();
                    }));
                }));
            }
        };
        Object.freeze(ChromeStorageWriter);
        const ChromeStorage_ChromeStorageWriter = ChromeStorageWriter;
        function UserSettingsController_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class UserSettingsController {
            constructor(storageData) {
                UserSettingsController_defineProperty(this, "_userSettings", void 0), UserSettingsController_defineProperty(this, "_permId", void 0), 
                this._userSettings = {
                    userIcon: storageData.userIcon,
                    userNickname: storageData.userNickname
                }, this._permId = storageData.userId;
            }
            saveUserIcon(newUserIcon) {
                if ((newUserIcon = escapeStr(newUserIcon)).includes("/")) {
                    const iconName = newUserIcon.split("/")[1];
                    newUserIcon = oldIcons.includes(iconName) ? `${iconName}?newIconUrl=${newUserIcon}` : `${oldIcons[Math.floor(Math.random() * oldIcons.length)]}?newIconUrl=${newUserIcon}`;
                }
                this._userSettings.userIcon = newUserIcon, ChromeStorage_ChromeStorageWriter.setItemsAsync({
                    userIcon: newUserIcon
                }), debug("new user settings after set user icon: " + JSON.stringify(this._userSettings));
            }
            saveUserNickname(userNickname) {
                this._userSettings.userNickname = userNickname, ChromeStorage_ChromeStorageWriter.setItemsAsync({
                    userNickname
                }), debug("new user settings after set user nickname: " + JSON.stringify(this._userSettings));
            }
            get userSettings() {
                return this._userSettings;
            }
            get permId() {
                return this._permId;
            }
            get userIcon() {
                return this._userSettings.userIcon;
            }
            get userNickname() {
                return this._userSettings.userNickname;
            }
        }
        class ClientMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "_type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this._type = type;
            }
        }
        let ClientMessageType;
        !function(ClientMessageType) {
            ClientMessageType.BROADCAST = "brodadcast", ClientMessageType.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode", 
            ClientMessageType.SEND_MESSAGE = "sendMessage", ClientMessageType.CONTENT_SCRIPT_READY = "contentScriptReady", 
            ClientMessageType.CONTENT_SCRIPT_ERROR = "contentScriptError", ClientMessageType.TEARDOWN = "teardown", 
            ClientMessageType.GET_SESSION_DATA = "getSessionData", ClientMessageType.SET_TYPING = "setTyping", 
            ClientMessageType.SET_BUFFERING = "setBuffering", ClientMessageType.SET_WATCHING_ADS = "setWatchingAds", 
            ClientMessageType.BROADCAST_USER_SETTINGS = "brodadcastUserSettings";
        }(ClientMessageType || (ClientMessageType = {}));
        class SetTypingMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SET_TYPING), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class SendChatMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SEND_MESSAGE), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class BroadcastUserSettingsMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.BROADCAST_USER_SETTINGS), value = void 0, 
                (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function ChatApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        var css_alert = __webpack_require__(39), css_chat = __webpack_require__(644);
        function delay(milliseconds) {
            return function(result) {
                return new Promise((function(resolve, reject) {
                    setTimeout((function() {
                        resolve(result);
                    }), milliseconds);
                }));
            };
        }
        function delayUntil(condition, maxDelay) {
            let delayStep = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;
            return function(result) {
                const startTime = (new Date).getTime();
                return function checkForCondition() {
                    return condition() ? Promise.resolve(result) : null !== maxDelay && (new Date).getTime() - startTime > maxDelay ? Promise.reject(new Error("delayUntil timed out" + condition)) : delay(delayStep)().then(checkForCondition);
                }();
            };
        }
        function shove(array, value, limit) {
            array.push(value), array.length > limit && array.splice(0, array.length - limit);
        }
        function timeStringToSeconds(str) {
            const p = str.split(":");
            let s = 0, m = 1;
            for (;p.length > 0; ) {
                var _p$pop2;
                s += m * parseInt(null !== (_p$pop2 = p.pop()) && void 0 !== _p$pop2 ? _p$pop2 : "0", 10), 
                m *= 60;
            }
            return s;
        }
        function median(array) {
            return array.concat().sort()[Math.floor(array.length / 2)];
        }
        function AmazonChatApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class AmazonChatApi extends class {
            constructor() {
                ChatApi_defineProperty(this, "_chatEventListener", void 0), ChatApi_defineProperty(this, "_chatPresenceController", void 0), 
                ChatApi_defineProperty(this, "_messageController", void 0), ChatApi_defineProperty(this, "_userSettingsController", void 0), 
                ChatApi_defineProperty(this, "_chatHtml", void 0), ChatApi_defineProperty(this, "_typingTimeout", void 0), 
                ChatApi_defineProperty(this, "_inSession", void 0), ChatApi_defineProperty(this, "_partyUrl", ""), 
                ChatApi_defineProperty(this, "_sessionId", ""), ChatApi_defineProperty(this, "_showingReviewMessage", void 0), 
                this._inSession = !1, this._chatEventListener = new ChatEventListener(this), this._chatPresenceController = new PresenceController, 
                this._messageController = new MessageController(this), this._typingTimeout = void 0, 
                this._showingReviewMessage = !1;
            }
            _initChat(storageData) {
                hideAlertMessages(), this._userSettingsController = new UserSettingsController(storageData);
                const currentUrl = this._messageController.getUserIconURL(this._userSettingsController.permId, this._userSettingsController.userIcon);
                this._messageController.setUserIconUrl(currentUrl), this._messageController.renderSidebar(), 
                this._isChatInjected() && this.removeChat(), this._setChatHtml(), this._injectChat(), 
                this.setChatVisible(!0), this.addIconSelector(), this._startEventListener(), this._chatPresenceController.setupPresenceIndicator(), 
                this._inSession = !0;
            }
            reloadChat() {
                this._isChatInjected() || (this._injectChat(), this.setChatVisible(!0), this.addIconSelector(), 
                this._stopEventListener(), this._startEventListener(), this._chatPresenceController.setupPresenceIndicator(), 
                this.reloadMesssages(), this.scrollToBottom());
            }
            sendTeardown(teardownData) {
                const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", teardownData);
                Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            _isChatInjected() {
                return jQuery("#chat-wrapper").length > 0;
            }
            clearUnreadCount() {
                this._messageController.clearUnreadCount();
            }
            addMessage(message) {
                let checkIcons = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this._messageController.addMessage(message, checkIcons);
            }
            reloadMesssages() {
                this._messageController.reloadMessages();
            }
            scrollToBottom() {
                this._messageController.scrollToBottom();
            }
            addReviewMessage() {
                this._messageController.addReviewMessage(), this._showingReviewMessage = !0;
            }
            get showingReveiwMessage() {
                return this._showingReviewMessage;
            }
            onBufferingMessage(message) {
                this._chatPresenceController.setBufferingPresenceVisible(message.usersBuffering.length > 0);
            }
            onTypingMessage(message) {
                this._chatPresenceController.setTypingPresenceVisible(message.usersTyping.length > 0);
            }
            onWatchingAdsMessage(message) {
                this._chatPresenceController.setWatchingAdsPresenceVisible(message.usersWatchingAds.length > 0);
            }
            getWatchingAds() {
                return this._chatPresenceController.getWatchingAdsVisible();
            }
            onUpdateSettingsMessage(message) {
                if (this._messageController.updateUserData(message.permId, message.userSettings.userIcon, message.userSettings.userNickname), 
                this._userSettingsController) {
                    const currentUrl = this._messageController.getUserIconURL(this._userSettingsController.permId, this._userSettingsController.userIcon);
                    this._messageController.setUserIconUrl(currentUrl), this._messageController.renderSidebar();
                }
            }
            _startEventListener() {
                this._chatEventListener.startListening();
            }
            _stopEventListener() {
                this._chatEventListener.stopListening();
            }
            teardown() {
                this._stopEventListener(), jQuery("[tpInjected]").remove(), this.setChatVisible(!1), 
                this.removeChat();
            }
            focus() {
                jQuery("#chat-input").trigger("focus");
            }
            _setChatHtml() {
                if (debug("Set Chat Html called"), this._chatHtml = chat_default(), this._chatHtml = this._chatHtml.replace(/{EXTENSION_LOGO}/g, escapeStr(chrome.runtime.getURL("img/tp_logo.svg"))), 
                void 0 === this._userSettingsController) throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
                this._chatHtml = this._chatHtml.replace(/{USER_NICKNAME}/g, this._userSettingsController.userNickname ? escapeStr(this._userSettingsController.userNickname) : "Add a nickname"), 
                this._chatHtml = this._chatHtml.replace(/{USER_ICON}/g, this._messageController.getUserIconURL(this._userSettingsController.permId, this._userSettingsController.userIcon)), 
                this._chatHtml = this._chatHtml.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/Link.svg"));
            }
            toggleIconContainer() {
                var _this$_userSettingsCo, _this$_userSettingsCo2, _this$_userSettingsCo3, _this$_userSettingsCo4;
                jQuery("#chat-icon-container").data("active") ? (jQuery("#chat-icon-container").data("active", !1), 
                jQuery("#chat-icon-container").hide(), jQuery(".chat-settings-container").hide(), 
                jQuery("#chat-history-container").show(), jQuery("#chat-input-container").show(), 
                jQuery("#teleparty-blog-container").show(), jQuery("#presence-indicator").show(), 
                jQuery("#chat-header-container").removeClass("chat-header-container-active")) : (jQuery("#chat-icon-container").data("active", !0), 
                jQuery(".chat-settings-container").show(), jQuery("#chat-icon-container").hide(), 
                jQuery("#chat-link-container").hide(), jQuery("#chat-history-container").hide(), 
                jQuery("#chat-input-container").hide(), jQuery("#teleparty-blog-container").hide(), 
                jQuery("#presence-indicator").hide(), jQuery("#nickname-edit").attr("placeholder", null !== (_this$_userSettingsCo = null === (_this$_userSettingsCo2 = this._userSettingsController) || void 0 === _this$_userSettingsCo2 ? void 0 : _this$_userSettingsCo2.userNickname) && void 0 !== _this$_userSettingsCo ? _this$_userSettingsCo : ""), 
                jQuery("#nickname-edit")[0].value = null !== (_this$_userSettingsCo3 = null === (_this$_userSettingsCo4 = this._userSettingsController) || void 0 === _this$_userSettingsCo4 ? void 0 : _this$_userSettingsCo4.userNickname) && void 0 !== _this$_userSettingsCo3 ? _this$_userSettingsCo3 : "");
            }
            toggleLargeUserIconButton() {
                jQuery("#chat-icon-container").data("active") && (jQuery("#chat-icon-container").show(), 
                jQuery(".chat-settings-container").hide(), jQuery("#chat-header-container").addClass("chat-header-container-active"));
            }
            linkIconListener() {
                navigator.clipboard.writeText(this.getPartyUrl());
            }
            setPartyUrl(url) {
                this._partyUrl = url;
            }
            setSessionId(sessionId) {
                this._sessionId = sessionId;
            }
            getSessionId() {
                return this._sessionId;
            }
            getPartyUrl() {
                return this._partyUrl;
            }
            userIconSelectorListener(event) {
                const icon = jQuery(event.currentTarget).data("icon");
                icon && (debug("userIconSelector button clicked: " + icon), this._userSettingsController && (this._userSettingsController.saveUserIcon(icon), 
                this._emitToSocket(this._getUpdateSettingsMessage(this._userSettingsController.userSettings)))), 
                this.toggleIconContainer();
            }
            removeChat() {
                this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
            }
            _emitToSocket(message, callback) {
                Messaging_MessagePasser.sendMessageToExtension(message).then(callback);
            }
            _getSendMessageClass(body) {
                return new SendChatMessage("Content_Script", "Service_Background", {
                    body
                });
            }
            _getTypingMessage(typing) {
                return new SetTypingMessage("Content_Script", "Service_Background", {
                    typing
                });
            }
            _getUpdateSettingsMessage(userSettings) {
                return new BroadcastUserSettingsMessage("Content_Script", "Service_Background", {
                    userSettings
                });
            }
            onChatKeyUp(event) {
                event.stopPropagation();
            }
            onChatKeyDown(event) {
                event.stopPropagation(), this._chatEventListener.resetIdleTimer();
            }
            onChatKeyPress(event) {
                if (event.stopPropagation(), 13 === event.which) {
                    const chatInput = jQuery("#chat-input"), body = chatInput.val().replace(/^\s+|\s+$/g, "");
                    body.length > 0 && (void 0 !== this._typingTimeout && (clearTimeout(this._typingTimeout), 
                    this._typingTimeout = void 0, this._emitToSocket(this._getTypingMessage(!1))), chatInput.prop("disabled", !0), 
                    this._emitToSocket(this._getSendMessageClass(body), (function() {
                        chatInput.val("").prop("disabled", !1).focus();
                    })));
                } else void 0 === this._typingTimeout ? this._emitToSocket(this._getTypingMessage(!0)) : clearTimeout(this._typingTimeout), 
                this._typingTimeout = setTimeout((() => {
                    this._typingTimeout = void 0, this._emitToSocket(this._getTypingMessage(!1));
                }), 500);
            }
            saveChangesListener() {
                var _this$_userSettingsCo5;
                const nicknameText = jQuery("#nickname-edit").val().slice(0, 25).replace(/^\s+|\s+$/g, "");
                debug("saveChanges button clicked: " + nicknameText), nicknameText !== (null === (_this$_userSettingsCo5 = this._userSettingsController) || void 0 === _this$_userSettingsCo5 ? void 0 : _this$_userSettingsCo5.userNickname) && this._userSettingsController && (this._userSettingsController.saveUserNickname(nicknameText), 
                this._emitToSocket(this._getUpdateSettingsMessage(this._userSettingsController.userSettings)), 
                jQuery("#nickname-edit").attr("placeholder", nicknameText), jQuery("#nickname-edit").text(nicknameText)), 
                this.toggleIconContainer();
            }
            cancelNicknameListener() {
                this.toggleIconContainer();
            }
            onChatClicked(event) {
                event.stopPropagation();
            }
            get inSession() {
                return this._inSession;
            }
            addIconSelector() {
                Object.keys(iconMap).forEach((categoryName => {
                    if (enableIconsetFunctions[categoryName]()) {
                        const icons = iconMap[categoryName], iconHolder = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
                        for (const icon of icons) this._addIconButton(`${categoryName}/${icon}`, iconHolder);
                        const categorySection = jQuery(`\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator">${categoryName}</p>\n                </div>\n            `);
                        iconHolder.appendTo(categorySection), categorySection.appendTo(jQuery("#icon-holder-template"));
                    }
                }), this);
            }
            _addIconButton(iconPath, iconHolder) {
                jQuery(`\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL("img/icons/" + iconPath)}'>\n            </a>\n        `).appendTo(iconHolder).data("icon", iconPath);
            }
        } {
            constructor() {
                super(), AmazonChatApi_defineProperty(this, "_shouldChatBeVisible", void 0), AmazonChatApi_defineProperty(this, "_customCss", void 0), 
                this._shouldChatBeVisible = !1, this._customCss = "\n          .videoFullscreenWithChat {\n            width: calc(100% - 288px);\n          }\n        ";
            }
            _injectChat() {
                this._chatHtml && jQuery(".webPlayerSDKContainer").append(function(chatHtml) {
                    return `\n    <style>\n      ${css_alert}\n    </style>\n\n    <style tpInjected>\n      #chat-wrapper {\n        width: 288px !important;\n        height: 100% !important;\n        background: #1a1a1a;\n        position: fixed !important;\n        top: 0 !important;\n        left: auto !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        cursor: auto;\n        user-select: text;\n        -webkit-user-select: text;\n        z-index: 9999999999 !important;\n      }\n\n      .with-chat {\n        left: 0px !important;\n        // right: 288px !important;\n        width: calc(100% - 288px) !important;\n      }\n\n      ${arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""}\n    \n      ${css_chat}\n      \n    </style>\n\n    ${chatHtml}\n  `;
                }(this._chatHtml, this._customCss));
            }
            getChatVisible() {
                return jQuery("#chat-wrapper").is(":visible");
            }
            removeChat() {
                super.removeChat();
            }
            setChatVisible(visible) {
                this._shouldChatBeVisible = visible, visible ? (jQuery(".webPlayerSDKContainer").addClass("with-chat"), 
                jQuery("#chat-wrapper").show(), document.hasFocus() || this.clearUnreadCount()) : (jQuery(".webPlayerSDKContainer").removeClass("with-chat"), 
                jQuery("#chat-wrapper").hide(), jQuery(window).trigger("resize"));
            }
            onVideoResize() {
                delay(100)().then((() => {
                    this._shouldChatBeVisible && (document.webkitIsFullScreen ? (jQuery("video").addClass("videoFullscreenWithChat"), 
                    jQuery(".webPlayerSDKUiContainer").addClass("with-chat")) : (jQuery("video").removeClass("videoFullscreenWithChat"), 
                    jQuery(".webPlayerSDKUiContainer").removeClass("with-chat")));
                }));
            }
        }
        function VideoApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        let PlaybackState, SessionState, VideoType, StreamingServiceName;
        function StreamingService_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        !function(PlaybackState) {
            PlaybackState.LOADING = "loading", PlaybackState.PLAYING = "playing", PlaybackState.IDLE = "idle", 
            PlaybackState.AD_PLAYING = "ad_playing", PlaybackState.PAUSED = "paused", PlaybackState.NOT_READY = "not_ready";
        }(PlaybackState || (PlaybackState = {})), function(SessionState) {
            SessionState.PAUSED = "paused", SessionState.PLAYING = "playing";
        }(SessionState || (SessionState = {})), function(VideoType) {
            VideoType.episode = "episode", VideoType.movie = "movie";
        }(VideoType || (VideoType = {}));
        !function(StreamingServiceName) {
            StreamingServiceName.NETFLIX = "NETFLIX", StreamingServiceName.HULU = "HULU", StreamingServiceName.DISNEY_PLUS = "DISNEY_PLUS", 
            StreamingServiceName.HBO_MAX = "HBO_MAX", StreamingServiceName.HBO_NOW = "HBO_NOW", 
            StreamingServiceName.YOUTUBE = "YOUTUBE", StreamingServiceName.AMAZON = "AMAZON";
        }(StreamingServiceName || (StreamingServiceName = {}));
        const Amazon = new class extends class {
            constructor(requiredPermissions, contentScripts, serverName, name, syncFromEnd) {
                StreamingService_defineProperty(this, "requiredPermissions", void 0), StreamingService_defineProperty(this, "contentScripts", void 0), 
                StreamingService_defineProperty(this, "serverName", void 0), StreamingService_defineProperty(this, "name", void 0), 
                StreamingService_defineProperty(this, "syncFromEnd", void 0), this.requiredPermissions = requiredPermissions, 
                this.serverName = serverName, this.name = name, this.contentScripts = contentScripts, 
                this.syncFromEnd = syncFromEnd;
            }
            urlWithSessionId(sessionId) {
                return `https://redirect.teleparty.com/join/${sessionId}`;
            }
        } {
            isValidUrl(url) {
                return function(url) {
                    return url.hostname.includes(".amazon.") || url.hostname.includes(".primevideo.");
                }(url);
            }
            getVideoId(url) {
                const match = url.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
                return null != match && match.length > 0 ? match[1] : void 0;
            }
        }([], [ "content_scripts/amazon/amazon_content_bundled.js" ], "amazon", StreamingServiceName.AMAZON, !1);
        Object.freeze(Amazon);
        const Services_Amazon = Amazon;
        function AmazonVideoApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class AmazonVideoApi extends class {
            constructor() {
                VideoApi_defineProperty(this, "_uiEventsHappening", 0), VideoApi_defineProperty(this, "_hostOnly", !1);
            }
            set hostOnly(hostOnly) {
                this._hostOnly = hostOnly;
            }
            get hostOnly() {
                return this._hostOnly;
            }
            get uiEventsHappening() {
                return this._uiEventsHappening;
            }
            async doAdCheck() {}
        } {
            constructor() {
                super(), AmazonVideoApi_defineProperty(this, "_lastDuration", void 0), AmazonVideoApi_defineProperty(this, "parseVideoId", void 0), 
                AmazonVideoApi_defineProperty(this, "markerUpdatedAt", void 0), AmazonVideoApi_defineProperty(this, "videoIds", void 0), 
                AmazonVideoApi_defineProperty(this, "_videoId", void 0), AmazonVideoApi_defineProperty(this, "_video", void 0), 
                AmazonVideoApi_defineProperty(this, "_videoType", void 0), AmazonVideoApi_defineProperty(this, "_skipRunning", !1), 
                this._lastDuration = 6e4, this._uiEventsHappening = 0, this.markerUpdatedAt = 0, 
                this.videoIds = [], this._videoType = this.getVideoType();
            }
            get videoId() {
                return this._videoId;
            }
            set videoId(value) {
                this._videoId = value;
            }
            get videoType() {
                return this._videoType;
            }
            set videoType(value) {
                this._videoType = value;
            }
            getVideoType() {
                const nextEpisodeButton = jQuery(".webPlayerContainer div:contains('Next Episode')");
                return nextEpisodeButton && nextEpisodeButton.length ? VideoType.episode : VideoType.movie;
            }
            tryUpdateVideoId() {
                return this.parseVideoId != this.videoId && (debug("Got new video id from parse: " + this.parseVideoId), 
                this.videoId = this.parseVideoId, !0);
            }
            async getCurrentVideoId() {
                let attempts = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                try {
                    var _this$parseVideoId;
                    if (debug(attempts), null == this._videoId && this.parseVideoId) return debug("Already have video Id"), 
                    this.parseVideoId;
                    const startTime = (new Date).getTime(), video = this.getVideoElement();
                    if (!video) throw new Error("Couldn't find video");
                    return await delayUntil(this.isVideoReady.bind(this), 5e3)(), video.muted = !0, 
                    video.paused ? (await this.play(), await delay(250)(), await this.pause()) : (await this.pause(), 
                    await delay(250)(), await this.play()), video.muted = !1, console.log("Waiting for video id"), 
                    await delayUntil((() => null != this.markerUpdatedAt && this.markerUpdatedAt > startTime), 4e3)(), 
                    null !== (_this$parseVideoId = this.parseVideoId) && void 0 !== _this$parseVideoId ? _this$parseVideoId : "";
                } catch (error) {
                    var _Amazon$getVideoId;
                    const video = this.getVideoElement();
                    return video && (video.muted = !1), debug("Failed to load video id with error: " + error), 
                    null !== (_Amazon$getVideoId = Services_Amazon.getVideoId(new URL(window.location.href))) && void 0 !== _Amazon$getVideoId ? _Amazon$getVideoId : "";
                }
            }
            async waitVideoIdReady() {
                void 0 === this._videoId && (this.videoId = await this.getCurrentVideoId());
            }
            async waitVideoApiReadyAsync() {
                if (!this.isPlayerPage()) throw new Error("Please open a video on Amazon Prime Video, then click on the Tp icon");
                await delayUntil(this.isVideoReady.bind(this), 1e4)(), await this.skipPromo(), await this.waitVideoIdReady(), 
                this.videoType = this.getVideoType();
            }
            async waitVideoDoneLoadingAsync() {
                await delayUntil((() => this._getPlaybackState() !== PlaybackState.LOADING), 1e4)();
            }
            getStateAsync() {
                return new Promise(((resolve, reject) => {
                    if (!this.isPlayerPage()) return void reject("Not on player page.");
                    const playbackPositionMilliseconds = this._getCurrentTime();
                    if (-1 == playbackPositionMilliseconds) return void reject("Could not get current player time.");
                    resolve({
                        playbackState: this._getPlaybackState(),
                        playbackPositionMilliseconds
                    });
                }));
            }
            checkUpdateId(nextEpisodeId) {
                this.parseVideoId == nextEpisodeId && (debug("Using parsed id"), this.videoId = this.parseVideoId);
            }
            isTimeTextLoaded() {
                const timeIndicatorTextDiv = document.querySelector(".atvwebplayersdk-timeindicator-text");
                return null != timeIndicatorTextDiv && null != timeIndicatorTextDiv.textContent;
            }
            async skipPromo() {
                if (!this._skipRunning) {
                    this._skipRunning = !0;
                    try {
                        let skipButton = document.evaluate("//div[text()='Skip']", document, null, XPathResult.ANY_TYPE, null).iterateNext();
                        skipButton && skipButton instanceof HTMLElement && (debug("Skipped Ads"), skipButton.click(), 
                        await delayUntil((() => (skipButton = document.evaluate("//div[text()='Skip']", document, null, XPathResult.ANY_TYPE, null).iterateNext(), 
                        !skipButton)), 5e3)(), await delay(250)());
                    } finally {
                        this._skipRunning = !1;
                    }
                }
            }
            async freeze(milliseconds) {
                this._uiEventsHappening += 1;
                try {
                    await this.pause(), await delay(milliseconds)(), await this.play();
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            isVideoReady() {
                const state = this._getPlaybackState();
                return "paused" === state || "playing" === state;
            }
            episodeDataInteraction(event) {
                if (event.source == window && event.data.type && "EPISODE_ID" == event.data.type) {
                    if (event.data.videoIds) try {
                        this.videoIds = JSON.parse(event.data.videoIds);
                    } catch (e) {
                        debug("Parse Error");
                    }
                    event.data.videoId && (this.parseVideoId = event.data.videoId, this.markerUpdatedAt = Date.now());
                }
            }
            async getVideoDataAsync() {
                var _this$_getVideoTitle, _this$_videoId;
                void 0 === this._videoId && (this.videoId = await this._getVideoIdAsync());
                const videoTitle = null !== (_this$_getVideoTitle = this._getVideoTitle()) && void 0 !== _this$_getVideoTitle ? _this$_getVideoTitle : "";
                this.videoType = this.getVideoType();
                const videoDuration = this._getDuration();
                return {
                    videoId: null !== (_this$_videoId = this._videoId) && void 0 !== _this$_videoId ? _this$_videoId : "",
                    videoTitle,
                    videoDuration,
                    serviceDomain: window.location.hostname
                };
            }
            async jumpToNextEpisode(nextEpisodeMessageData) {
                this._uiEventsHappening += 1;
                await this._getVideoIdAsync() !== nextEpisodeMessageData.videoId && await this._clickUpNext(), 
                this._uiEventsHappening -= 1;
            }
            _clickUpNext() {
                return new Promise(((resolve, reject) => {
                    const nextEpisodeButton = document.evaluate("//div[text()='Next Episode']", document, null, XPathResult.ANY_TYPE, null).iterateNext();
                    nextEpisodeButton instanceof HTMLElement ? (nextEpisodeButton.click(), resolve()) : reject();
                }));
            }
            async pause() {
                debug("Attempting to pause"), this._uiEventsHappening += 1;
                try {
                    const video = this.getVideoElement();
                    if (null === video) throw new Error("Video element not found.");
                    video.pause(), await delay(250)(), await delayUntil((() => this._getPlaybackState() === PlaybackState.PAUSED), 1250)();
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            getStreamingServiceName() {
                return StreamingServiceName.AMAZON;
            }
            async play() {
                debug("Attempting to play"), this._uiEventsHappening += 1;
                try {
                    const video = this.getVideoElement();
                    if (null === video) throw new Error("Video element not found.");
                    await video.play(), await delayUntil((() => this._getPlaybackState() === PlaybackState.PLAYING), 1250)();
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            async setCurrentTime(time) {
                this._uiEventsHappening += 1;
                try {
                    if (null === this.getVideoElement()) throw new Error("Video element not found.");
                    const seekToProgressPercent = time / this._getDuration();
                    this._seekToProgress(seekToProgressPercent), debug("Manually clicked seek"), await delay(500)(), 
                    await delayUntil((() => this._getPlaybackState() !== PlaybackState.LOADING), 1 / 0)();
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            _seekToProgress(seekProgress) {
                const seekbar = document.querySelector(".atvwebplayersdk-seekbar-range");
                if (null !== seekbar) {
                    const xPos = this._getMousePositionFromProgress(seekProgress);
                    null !== xPos && (this._clickAtX(seekbar, xPos, "mousedown"), this._clickAtX(seekbar, xPos, "mouseup"));
                }
            }
            _getMousePositionFromProgress(progress) {
                const seekbar = document.querySelector(".atvwebplayersdk-seekbar-range");
                if (seekbar instanceof HTMLElement) {
                    const seekBounds = seekbar.getBoundingClientRect();
                    return progress * seekbar.offsetWidth + seekBounds.left;
                }
                return null;
            }
            _clickAtX(target, x, eventType) {
                const {height, top} = target.getBoundingClientRect(), y = top + height / 2;
                document.createEvent("MouseEvents").initMouseEvent(eventType, !0, !0, window, 0, 0, 0, x, y, !1, !1, !1, !1, 0, null);
                const pointerEvent = new PointerEvent(eventType, {
                    pointerId: 1,
                    isPrimary: !0,
                    view: window,
                    bubbles: !0,
                    cancelable: !0,
                    clientX: x,
                    clientY: y
                });
                target.dispatchEvent(pointerEvent);
            }
            getVideoElement() {
                return this.isPlayerPage() ? document.querySelector(".rendererContainer video") : null;
            }
            isPlayerPage() {
                return null != document.querySelector(".rendererContainer video") && null != document.querySelector(".dv-player-fullscreen");
            }
            _getPlaybackState() {
                const video = this.getVideoElement();
                let playbackState;
                return playbackState = video && "" !== video.src ? video.readyState < 4 ? PlaybackState.LOADING : video.paused ? PlaybackState.PAUSED : PlaybackState.PLAYING : PlaybackState.NOT_READY, 
                playbackState;
            }
            calculateOffset() {
                const video = this.getVideoElement();
                if (video) {
                    let offset = Math.floor(video.duration - this._getDuration() / 1e3);
                    return offset = offset >= 0 ? offset : 0, offset;
                }
                return 0;
            }
            _getCurrentTime() {
                const video = this.getVideoElement();
                if (video) {
                    const introOffset = this.calculateOffset(), currentTime = video.currentTime - introOffset;
                    return Math.floor(1e3 * currentTime);
                }
                return 0;
            }
            _getDuration() {
                try {
                    const timeIndicatorTextDiv = document.querySelector(".atvwebplayersdk-timeindicator-text");
                    if (timeIndicatorTextDiv instanceof Node) {
                        const timeSplit = timeIndicatorTextDiv.textContent.split(" / "), duration = timeStringToSeconds(timeSplit[0]) + timeStringToSeconds(timeSplit[1]);
                        this._lastDuration = 1e3 * duration;
                    }
                } catch (error) {}
                return this._lastDuration;
            }
            _getVideoTitle() {
                const subTitle = document.querySelector(".webPlayerUIContainer h2");
                return subTitle ? subTitle.innerHTML : null;
            }
            _getVideoIdAsync() {
                return new Promise(((resolve, reject) => {
                    delayUntil(this._isVideoReady.bind(this), 5e3)(void 0).then((async () => {
                        try {
                            console.log("Attempting play/pause");
                            const startTime = (new Date).getTime(), video = this.getVideoElement();
                            if (null === video) return void reject();
                            video.paused ? (await video.play(), await delay(250)(void 0), video.pause()) : (video.pause(), 
                            await delay(250)(void 0), await video.play()), null == this.videoId && this.parseVideoId ? (debug("Already have video Id"), 
                            resolve(this.parseVideoId)) : (console.log("Waiting for video id"), await delayUntil((() => null != this.markerUpdatedAt && this.markerUpdatedAt > startTime), 4e3)(void 0), 
                            resolve(this.parseVideoId));
                        } catch (error) {
                            debug("Failed to load video id with error: " + error), reject();
                        }
                    }));
                }));
            }
            _isVideoReady() {
                const playbackState = this._getPlaybackState();
                return playbackState === PlaybackState.PAUSED || playbackState === PlaybackState.PLAYING;
            }
            async getUpdateSessionDataAsync() {
                const state = await this.getStateAsync(), currentTime = this._getCurrentTime();
                if (null === currentTime) throw new Error("Couldn't get update data");
                const currentTimeUpdatedAt = Date.now();
                return {
                    state: state.playbackState === PlaybackState.PLAYING ? SessionState.PLAYING : SessionState.PAUSED,
                    lastKnownTime: currentTime,
                    lastKnownTimeUpdatedAt: currentTimeUpdatedAt,
                    bufferingState: this._getPlaybackState() == PlaybackState.LOADING
                };
            }
        }
        function VideoEventListener_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function AmazonVideoEventListener_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class AmazonVideoEventListener extends class {
            constructor(videoApi) {
                VideoEventListener_defineProperty(this, "_videoApi", void 0), VideoEventListener_defineProperty(this, "_videoMessageForwarder", void 0), 
                this._videoApi = videoApi, console.log("Video Event Listener");
            }
            _onVideoUpdate() {
                var _this$_videoMessageFo;
                null === (_this$_videoMessageFo = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo || _this$_videoMessageFo.tryBroadcast(!1);
            }
            _onVideoUpdateWaitForChange() {
                var _this$_videoMessageFo2;
                null === (_this$_videoMessageFo2 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo2 || _this$_videoMessageFo2.tryBroadcast(!0);
            }
            _onVideoBuffering() {
                var _this$_videoMessageFo3;
                null === (_this$_videoMessageFo3 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo3 || _this$_videoMessageFo3.setBuffering(!0);
            }
            _onAdStart() {
                var _this$_videoMessageFo4;
                null === (_this$_videoMessageFo4 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo4 || _this$_videoMessageFo4.setWatchingAds(!0);
            }
            _onAdEnd() {
                var _this$_videoMessageFo5;
                null === (_this$_videoMessageFo5 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo5 || _this$_videoMessageFo5.setWatchingAds(!1);
            }
            _onVideoCanPlay() {
                var _this$_videoMessageFo6;
                null === (_this$_videoMessageFo6 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo6 || _this$_videoMessageFo6.setBuffering(!1);
            }
            _onNextEpisode(videoId) {
                var _this$_videoMessageFo7;
                null === (_this$_videoMessageFo7 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo7 || _this$_videoMessageFo7.sendNextEpisodeAsync(videoId);
            }
            _onTeardown(data) {
                var _this$_videoMessageFo8;
                null === (_this$_videoMessageFo8 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo8 || _this$_videoMessageFo8.sendTeardown(data);
            }
            setMessageForwarder(videoMessageForwarder) {
                this._videoMessageForwarder = videoMessageForwarder;
            }
            shouldSync() {
                return !0;
            }
        } {
            constructor(videoApi, chatApi) {
                super(videoApi), AmazonVideoEventListener_defineProperty(this, "_chatApi", void 0), 
                AmazonVideoEventListener_defineProperty(this, "_videoApi", void 0), AmazonVideoEventListener_defineProperty(this, "_onEpisodeData", void 0), 
                AmazonVideoEventListener_defineProperty(this, "_resizeHandler", void 0), AmazonVideoEventListener_defineProperty(this, "_onUpdate", this._sendUpdate.bind(this)), 
                AmazonVideoEventListener_defineProperty(this, "_onSeek", this.onSeeking.bind(this)), 
                AmazonVideoEventListener_defineProperty(this, "_onBuffering", this._onVideoBuffering.bind(this)), 
                AmazonVideoEventListener_defineProperty(this, "_onCanPlay", this._onVideoCanPlay.bind(this)), 
                AmazonVideoEventListener_defineProperty(this, "_onVideoLoadStart", this.onVideoLoadStart.bind(this)), 
                AmazonVideoEventListener_defineProperty(this, "_onReplace", this.replaceStateInteraction.bind(this)), 
                AmazonVideoEventListener_defineProperty(this, "_playerCloseObserver", void 0), this._videoApi = videoApi, 
                this._chatApi = chatApi, this._resizeHandler = this._chatApi.onVideoResize.bind(this._chatApi), 
                this._onEpisodeData = this._videoApi.episodeDataInteraction.bind(this._videoApi), 
                window.injectScriptLoaded || function(scriptLocation) {
                    const s = document.createElement("script");
                    s.setAttribute("tpInjected", ""), s.src = scriptLocation, (document.head || document.documentElement).appendChild(s), 
                    s.remove();
                }(chrome.extension.getURL("content_scripts/amazon/amazon_injected_bundled.js")), 
                window.replaceScriptLoaded || (debug("injecting replace script"), function(script) {
                    const s = document.createElement("script");
                    s.setAttribute("tpInjected", ""), s.textContent = script, (document.head || document.documentElement).appendChild(s), 
                    s.remove();
                }('\n    if(!window.replaceScriptLoaded) {\n        window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n')), 
                this.initListeners(), this._playerCloseObserver = new MutationObserver(this._onPlayerChange.bind(this));
            }
            initListeners() {
                window.addEventListener("message", this._onEpisodeData, !1);
            }
            _sendUpdate() {
                this._onVideoUpdate();
            }
            _onPlayerChange() {
                if (!this._videoApi.isPlayerPage()) return this._onTeardown(DEFAULT_TEARDOWN), void this.stopListening();
            }
            onSeeking() {
                const video = this._videoApi.getVideoElement();
                video && video.readyState < 4 && this._onVideoBuffering(), this._onVideoUpdate();
            }
            reloadListeners() {
                const video = this._videoApi.getVideoElement();
                video && (video.addEventListener("waiting", this._onBuffering), video.addEventListener("canplay", this._onCanPlay), 
                video.addEventListener("play", this._onUpdate), video.addEventListener("pause", this._onUpdate), 
                video.addEventListener("seeking", this._onSeek), video.addEventListener("loadstart", this._onVideoLoadStart));
            }
            startListening() {
                const video = this._videoApi.getVideoElement();
                video && (video.addEventListener("waiting", this._onBuffering), video.addEventListener("canplay", this._onCanPlay), 
                video.addEventListener("play", this._onUpdate), video.addEventListener("pause", this._onUpdate), 
                video.addEventListener("seeking", this._onSeek), video.addEventListener("loadstart", this._onVideoLoadStart));
                const webPlayer = document.querySelector("#dv-web-player");
                this._playerCloseObserver.disconnect(), webPlayer && this._playerCloseObserver.observe(webPlayer, {
                    attributes: !0
                }), window.addEventListener("resize", this._resizeHandler), window.document.addEventListener("webkitfullscreenchange", this._resizeHandler), 
                window.document.addEventListener("MSFullScreenChange", this._resizeHandler), jQuery(".atvwebplayersdk-fullscreen-button").on("click", this._resizeHandler), 
                window.addEventListener("message", this._onReplace, !1);
            }
            stopListening() {
                const video = this._videoApi.getVideoElement();
                video && (video.removeEventListener("waiting", this._onBuffering), video.removeEventListener("canplay", this._onCanPlay), 
                video.removeEventListener("play", this._onUpdate), video.removeEventListener("pause", this._onUpdate), 
                video.removeEventListener("seeking", this._onSeek), video.removeEventListener("loadstart", this._onVideoLoadStart)), 
                this._playerCloseObserver.disconnect(), window.removeEventListener("resize", this._resizeHandler), 
                window.document.removeEventListener("webkitfullscreenchange", this._resizeHandler), 
                window.document.removeEventListener("MSFullScreenChange", this._resizeHandler), 
                window.removeEventListener("message", this._onEpisodeData, !1), window.removeEventListener("message", this._onReplace, !1);
            }
            replaceStateInteraction(event) {
                event.source == window && ("FROM_PAGE_POP" !== event.data.type && this._videoApi.isPlayerPage() || this._onTeardown(DEFAULT_TEARDOWN));
            }
            onVideoLoadStart() {
                var _this$_videoMessageFo2, _this$_videoMessageFo;
                this._videoApi.isPlayerPage() ? this._videoApi.videoType === VideoType.episode ? null !== (_this$_videoMessageFo2 = this._videoMessageForwarder) && void 0 !== _this$_videoMessageFo2 && _this$_videoMessageFo2.changingVideo || (this._videoMessageForwarder && (this._videoMessageForwarder.changingVideo = !0), 
                delayUntil(this._videoApi.tryUpdateVideoId.bind(this._videoApi), 1e4)().then((() => {
                    var _this$_videoMessageFo3;
                    const nextVideoId = this._videoApi.videoId;
                    nextVideoId != (null === (_this$_videoMessageFo3 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo3 ? void 0 : _this$_videoMessageFo3.videoId) && null != nextVideoId && this._onNextEpisode(nextVideoId);
                })).catch((err => {
                    var _this$_videoMessageFo4, _this$_videoMessageFo5;
                    (debug(err), this._videoApi.videoId !== (null === (_this$_videoMessageFo4 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo4 ? void 0 : _this$_videoMessageFo4.videoId)) && (null !== (_this$_videoMessageFo5 = this._videoMessageForwarder) && void 0 !== _this$_videoMessageFo5 && _this$_videoMessageFo5.changingVideo ? this._onTeardown(FAILED_NEXT_EPISODE_DATA) : this._onTeardown(INVALID_NEXT_EPISODE_DATA));
                }))) : null !== (_this$_videoMessageFo = this._videoMessageForwarder) && void 0 !== _this$_videoMessageFo && _this$_videoMessageFo.changingVideo ? this._onTeardown(INVALID_NEXT_EPISODE_DATA) : this._onTeardown(WRONG_SCREEN_DATA) : this._onTeardown(DEFAULT_TEARDOWN);
            }
            async loadNewVideoAsync(nextEpisodeId) {
                await this._videoApi.skipPromo(), await new Promise(((resolve, reject) => {
                    const start = performance.now(), interval = setInterval((() => {
                        if (this._videoApi.videoId === nextEpisodeId) {
                            const videoElement = this._videoApi.getVideoElement();
                            videoElement instanceof Element && videoElement.src && (clearInterval(interval), 
                            resolve());
                        } else this._videoApi.checkUpdateId(nextEpisodeId), this._videoApi.skipPromo();
                        performance.now() - start >= 3e4 && (clearInterval(interval), reject(new Error("Could not load new video in time.")));
                    }), 200);
                })), await delayUntil(this._videoApi.isVideoReady.bind(this._videoApi), 1 / 0)(), 
                await delayUntil(this._videoApi.isTimeTextLoaded.bind(this._videoApi), 1 / 0)();
            }
        }
        let PopupMessageType, ChatApiMessageType, VideoApiMessageType;
        !function(PopupMessageType) {
            PopupMessageType.CREATE_SESSION = "createSession", PopupMessageType.GET_INIT_DATA = "getInitData", 
            PopupMessageType.IS_CONTENT_SCRIPT_READY = "isContentScriptReady", PopupMessageType.SET_CHAT_VISIBLE = "setChatVisible", 
            PopupMessageType.DISCONNECT = "teardown", PopupMessageType.CLOSE_POPUP = "closePopup";
        }(PopupMessageType || (PopupMessageType = {}));
        class GetSessionDataMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.GET_SESSION_DATA), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function CSMessageReceiver_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class CSMessageReceiver {
            constructor() {
                CSMessageReceiver_defineProperty(this, "_messageListeners", void 0), CSMessageReceiver_defineProperty(this, "_messageReceiver", this._onReceiveMesssage.bind(this)), 
                this._messageListeners = [], this._registerMessageListener();
            }
            addMessageListener(listener) {
                this._messageListeners.push(listener);
            }
            removeMessageListener(listener) {
                this._messageListeners = this._messageListeners.filter((value => {}));
            }
            _registerMessageListener() {
                Messaging_MessagePasser.addListener(this._messageReceiver);
            }
            teardown() {
                this._messageListeners = [], Messaging_MessagePasser.removeListener(this._messageReceiver);
            }
            _onReceiveMesssage(message, sender, sendResponse) {
                if (!this._shouldListenToMessage(message)) return !1;
                return !!this._doesListenerHandleMessage(message, sender, sendResponse) || (sendResponse({}), 
                !1);
            }
            _shouldListenToMessage(message) {
                return "Content_Script" === message.target && ("Service_Background" === message.sender || "Popup" === message.sender);
            }
            _teardown(teardownMessage, sender) {
                Messaging_MessagePasser.removeListener(this._onReceiveMesssage), this._messageListeners.forEach((listener => {
                    listener.onMessage(teardownMessage, sender, (() => null));
                })), this._messageListeners = [];
            }
            _doesListenerHandleMessage(message, sender, sendResponse) {
                let willSendResponse = !1;
                return this._messageListeners.forEach((listener => {
                    listener.onMessage(message, sender, sendResponse) && (willSendResponse = !0);
                })), willSendResponse;
            }
        }
        !function(ChatApiMessageType) {
            ChatApiMessageType.INIT_CHAT = "initChat", ChatApiMessageType.ON_MESSAGE = "onMessage", 
            ChatApiMessageType.ON_BUFFER = "onBuffer", ChatApiMessageType.ON_TYPING = "onTyping", 
            ChatApiMessageType.ON_WATCHING_ADS = "onWatchingAds", ChatApiMessageType.UPDATE_SETTINGS = "updateSettings";
        }(ChatApiMessageType || (ChatApiMessageType = {}));
        class ChatMessageForwarder {
            constructor(chatApi) {
                var obj, key, value;
                value = void 0, (key = "_chatApi") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this._chatApi = chatApi, debug("Chat forwarder");
            }
            onMessage(message, sender, sendResponse) {
                switch (message.type) {
                  case BackgroundMessageType.LOAD_SESSION:
                    {
                        const loadMessage = message;
                        return this._onLoadSession(loadMessage.data), !1;
                    }

                  case ChatApiMessageType.ON_MESSAGE:
                    {
                        const chatMessage = message;
                        return this._onMessage(chatMessage), !1;
                    }

                  case ChatApiMessageType.ON_BUFFER:
                    {
                        const bufferMessage = message;
                        return this._onBuffer(bufferMessage), !1;
                    }

                  case ChatApiMessageType.ON_TYPING:
                    {
                        const typingMessage = message;
                        return this._onTyping(typingMessage), !1;
                    }

                  case ChatApiMessageType.ON_WATCHING_ADS:
                    {
                        const watchingAdsMessage = message;
                        return this._onWatchingAds(watchingAdsMessage), !1;
                    }

                  case ChatApiMessageType.UPDATE_SETTINGS:
                    {
                        const updateSettingsMessage = message;
                        return this._onUpdateSettings(updateSettingsMessage), !1;
                    }

                  case PopupMessageType.SET_CHAT_VISIBLE:
                    {
                        const visibleMessage = message;
                        return this._setChatVisible(visibleMessage.data), sendResponse(), !1;
                    }

                  default:
                    return !1;
                }
            }
            teardown() {
                this._chatApi.teardown();
            }
            _setChatVisible(data) {
                this._chatApi.setChatVisible(data.visible);
            }
            _onLoadSession(data) {
                const sessionId = data.sessionCallbackData.sessionId, partyUrl = `https://redirect.teleparty.com/join/${sessionId}`;
                if (this._chatApi.setPartyUrl(partyUrl), this._chatApi.setSessionId(sessionId), 
                this._chatApi._initChat(data.storageData), data.showReviewMessage && this._chatApi.addReviewMessage(), 
                !data.isCreate) for (const message of data.sessionCallbackData.messages) this._chatApi.addMessage(message, !0);
            }
            _onMessage(message) {
                this._chatApi.addMessage(message.data);
            }
            _onBuffer(message) {
                this._chatApi.onBufferingMessage(message.data);
            }
            _onTyping(message) {
                this._chatApi.onTypingMessage(message.data);
            }
            _onWatchingAds(message) {
                this._chatApi.onWatchingAdsMessage(message.data);
            }
            _onUpdateSettings(message) {
                this._chatApi.onUpdateSettingsMessage(message.data);
            }
        }
        function TaskManager_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        !function(VideoApiMessageType) {
            VideoApiMessageType.UPDATE_SESSION = "updateSession", VideoApiMessageType.NEXT_EPISODE = "nextEpisode", 
            VideoApiMessageType.REBOOT_SESSION = "rebootSession", VideoApiMessageType.GET_SERVER_TIME = "getServerTime";
        }(VideoApiMessageType || (VideoApiMessageType = {}));
        const TaskManager_TaskManager = new class {
            constructor() {
                TaskManager_defineProperty(this, "_tasksInFlight", void 0), TaskManager_defineProperty(this, "_taskArray", void 0), 
                TaskManager_defineProperty(this, "_tasks", void 0), TaskManager_defineProperty(this, "_enabled", void 0), 
                TaskManager_defineProperty(this, "_pingInQueue", !1), this.resetTasks(), this._taskArray = [], 
                this._tasksInFlight = 0, this._tasks = Promise.resolve(), this._enabled = !0;
            }
            pushTask(action, name) {
                if (!this._enabled) return;
                const newTask = {
                    action,
                    name
                };
                0 === this._tasksInFlight && this.resetTasks(), this._tasksInFlight = this._taskArray.push(newTask), 
                this._tasks = this._tasks.then((() => {
                    if (this._enabled) return this._swallow(newTask)().then((() => {
                        this._taskArray.shift(), this._tasksInFlight -= 1;
                    }));
                }));
            }
            disable() {
                this._enabled = !1, this.resetTasks();
            }
            resetTasks() {
                this._tasks = Promise.resolve(), this._taskArray = [], this._tasksInFlight = 0;
            }
            _swallow(task) {
                return function() {
                    return task.action().catch((e => {}));
                };
            }
            get tasksInFlight() {
                return this._tasksInFlight;
            }
            hasTaskInQueue(name) {
                return this._taskArray.some((task => task.name === name));
            }
        };
        class BroadcastMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.BROADCAST), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class VideoApiMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.type = type;
            }
        }
        class GetServerTimeMessage extends VideoApiMessage {
            constructor(sender, target) {
                super(sender, target, VideoApiMessageType.GET_SERVER_TIME);
            }
        }
        class BroadcastNextEpisodeMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.BROADCAST_NEXT_EPISODE), value = void 0, 
                (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class SetBufferingMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SET_BUFFERING), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class SetWatchingAdsMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SET_WATCHING_ADS), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function VideoMessageForwarder_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class VideoMessageForwarder {
            constructor(videoApi, videoEventListener) {
                VideoMessageForwarder_defineProperty(this, "_videoApi", void 0), VideoMessageForwarder_defineProperty(this, "_videoEventListener", void 0), 
                VideoMessageForwarder_defineProperty(this, "_sessionId", void 0), VideoMessageForwarder_defineProperty(this, "_serverState", void 0), 
                VideoMessageForwarder_defineProperty(this, "_lastKnownServerTime", void 0), VideoMessageForwarder_defineProperty(this, "_lastKnownServerTimeUpdatedAt", void 0), 
                VideoMessageForwarder_defineProperty(this, "_syncInterval", void 0), VideoMessageForwarder_defineProperty(this, "_pingInterval", void 0), 
                VideoMessageForwarder_defineProperty(this, "_videoId", void 0), VideoMessageForwarder_defineProperty(this, "_stremingServiceName", void 0), 
                VideoMessageForwarder_defineProperty(this, "_roundTripTimeRecent", []), VideoMessageForwarder_defineProperty(this, "_roundTripTimeMedian", 0), 
                VideoMessageForwarder_defineProperty(this, "_localTimeMinusServerTimeMedian", 0), 
                VideoMessageForwarder_defineProperty(this, "_localTimeMinusServerTimeRecent", []), 
                VideoMessageForwarder_defineProperty(this, "_changingVideo", void 0), VideoMessageForwarder_defineProperty(this, "_videoChangeStartTime", void 0), 
                VideoMessageForwarder_defineProperty(this, "_lastUpdateEventTime", void 0), VideoMessageForwarder_defineProperty(this, "_watchingAds", !1), 
                VideoMessageForwarder_defineProperty(this, "_hostOnly", !1), this._videoApi = videoApi, 
                this._videoEventListener = videoEventListener, this._videoEventListener.setMessageForwarder(this), 
                this._videoChangeStartTime = 0, this._changingVideo = !1, this._serverState = SessionState.PAUSED, 
                this._lastKnownServerTime = 0, this._lastKnownServerTimeUpdatedAt = 0, this._lastUpdateEventTime = 0, 
                this._stremingServiceName = this._videoApi.getStreamingServiceName(), debug("Video forwarder");
            }
            onMessage(message, sender, sendResponse) {
                switch (message.type) {
                  case BackgroundMessageType.GET_VIDEO_DATA:
                    return this._sendVideoDataAsync(sendResponse), !0;

                  case BackgroundMessageType.LOAD_SESSION:
                    {
                        const loadSessionMessage = message;
                        return this._loadSessionDataAsync(loadSessionMessage.data), !1;
                    }

                  case VideoApiMessageType.UPDATE_SESSION:
                    {
                        const updateSessionMessage = message;
                        return this._updateSessionData(updateSessionMessage.data), !1;
                    }

                  case VideoApiMessageType.NEXT_EPISODE:
                    {
                        const nextEpisodeMessage = message;
                        return this._onNextEpisodeAsync(nextEpisodeMessage.data), !1;
                    }

                  case VideoApiMessageType.REBOOT_SESSION:
                    {
                        const rebootMessage = message;
                        return this._doReboot(rebootMessage.data, sendResponse), !0;
                    }

                  case ChatApiMessageType.ON_WATCHING_ADS:
                    {
                        const watchingAdsMessage = message;
                        return this._onWatchingAds(watchingAdsMessage), !1;
                    }

                  default:
                    return !1;
                }
            }
            _onWatchingAds(message) {
                message.data.anyoneWatchingAds && !this._watchingAds && (TaskManager_TaskManager.pushTask(this._videoApi.doAdCheck.bind(this._videoApi)), 
                this.forceSync()), this._watchingAds = message.data.anyoneWatchingAds;
            }
            get videoId() {
                return this._videoId;
            }
            set videoId(value) {
                this._videoId = value;
            }
            sendTeardown(data) {
                const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", data);
                Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            teardown() {
                this._sessionId = void 0, this._syncInterval && clearInterval(this._syncInterval), 
                TaskManager_TaskManager.disable(), this._videoEventListener.stopListening();
            }
            _doReboot(rebootSessionData, sendResponse) {
                TaskManager_TaskManager.resetTasks(), this._videoId == rebootSessionData.videoId && this._updateSessionData(rebootSessionData), 
                sendResponse(this._videoId == rebootSessionData.videoId);
                const logReconnect = new LogEventMessage("Content_Script", "Service_Background", {
                    eventType: "reboot",
                    sessionId: this._sessionId
                });
                Messaging_MessagePasser.sendMessageToExtension(logReconnect);
            }
            tryBroadcast() {
                let waitForChange = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this._hostOnly ? this.forceSync() : 0 != this._videoApi.uiEventsHappening || this._changingVideo || !this._sessionId || TaskManager_TaskManager.hasTaskInQueue("BROADCAST") || TaskManager_TaskManager.pushTask((() => this._broadcastAsync(waitForChange)), "BROADCAST");
            }
            setBuffering(buffering) {
                if (this._sessionId) {
                    const setBufferingMessage = new SetBufferingMessage("Content_Script", "Service_Background", {
                        buffering
                    });
                    Messaging_MessagePasser.sendMessageToExtension(setBufferingMessage);
                }
            }
            setWatchingAds(watchingAds) {
                if (this._sessionId) {
                    const setWatchingAdsMessage = new SetWatchingAdsMessage("Content_Script", "Service_Background", {
                        watchingAds
                    });
                    Messaging_MessagePasser.sendMessageToExtension(setWatchingAdsMessage);
                }
            }
            async sendNextEpisodeAsync(nextEpisodeId) {
                if (this._sessionId && nextEpisodeId !== this._videoId) {
                    this._changingVideo = !0;
                    const nextEpisodeMessage = new BroadcastNextEpisodeMessage("Content_Script", "Service_Background", {
                        nextEpisode: nextEpisodeId
                    }), response = await Messaging_MessagePasser.sendMessageToExtension(nextEpisodeMessage);
                    response && "Locked Session" === response.errorMessage && await this._waitTillEpisodeChangesAsync(nextEpisodeId);
                }
            }
            async _waitTillEpisodeChangesAsync(nextEpisodeId) {
                try {
                    await delayUntil((() => nextEpisodeId == this._videoId), 1e4)(), this._changingVideo = !1;
                } catch (error) {
                    const tearDownData = {
                        showAlert: !0,
                        alertModal: ownerOnlyNextEpisodeModal
                    };
                    this.sendTeardown(tearDownData);
                }
            }
            async _shouldSendBroadcast(data) {
                if (null == data.lastKnownTime || null == data.lastKnownTimeUpdatedAt || null == data.state) return !1;
                const dif = Math.abs(data.lastKnownTime - this._getCurrentServerTime());
                return !(data.state == this._serverState && dif < 1e3) && (dif >= 1e3 && this._stremingServiceName == StreamingServiceName.AMAZON && await delay(200)(), 
                !0);
            }
            async _getUpdateMessageForVideoStateAsync() {
                const updateSessionData = await this._videoApi.getUpdateSessionDataAsync();
                updateSessionData.lastKnownTimeUpdatedAt -= this._localTimeMinusServerTimeMedian;
                return new BroadcastMessage("Content_Script", "Service_Background", updateSessionData);
            }
            forceSync() {
                TaskManager_TaskManager.pushTask(this._sync.bind(this));
            }
            async _onNextEpisodeAsync(nextEpisodeMessageData) {
                this._videoChangeStartTime = Date.now(), TaskManager_TaskManager.pushTask((() => this._continueNextEpisodeAsync(nextEpisodeMessageData)));
            }
            async _continueNextEpisodeAsync(nextEpisodeMessageData) {
                try {
                    debug("Continue next episode called"), this._changingVideo = !0, await this._videoApi.jumpToNextEpisode(nextEpisodeMessageData), 
                    await this._videoEventListener.loadNewVideoAsync(nextEpisodeMessageData.videoId), 
                    debug("After load new video"), this._videoEventListener.reloadListeners(), this._lastUpdateEventTime < this._videoChangeStartTime && (debug("Sending broadcast after next episode"), 
                    TaskManager_TaskManager.pushTask(this._broadcastAsync.bind(this), "BROADCAST")), 
                    this._videoId = nextEpisodeMessageData.videoId, this._changingVideo = !1;
                } catch (error) {
                    const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", {
                        showAlert: !0,
                        alertModal: failedNextEpisodeModal
                    });
                    Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
                }
            }
            _updateSessionData(data) {
                this._lastUpdateEventTime = Date.now(), TaskManager_TaskManager.pushTask(this._receiveSessionData(data).bind(this));
            }
            _receiveSessionData(data) {
                return this._serverState = data.state, this._lastKnownServerTime = data.lastKnownTime, 
                this._lastKnownServerTimeUpdatedAt = data.lastKnownTimeUpdatedAt, this._sync;
            }
            async _sendVideoDataAsync(sendResponse) {
                sendResponse(await this._videoApi.getVideoDataAsync());
            }
            async _waitForChange() {
                return new Promise((resolve => {
                    const start = performance.now(), checkForChange = async () => {
                        if (performance.now() - start >= 2500) resolve(!1); else {
                            const updateMessage = await this._getUpdateMessageForVideoStateAsync();
                            await this._shouldSendBroadcast(updateMessage.data) ? resolve(!0) : setTimeout((() => {
                                checkForChange();
                            }), 50);
                        }
                    };
                    checkForChange();
                }));
            }
            async _broadcastAsync() {
                let waitForChange = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this._changingVideo) return;
                if (this._hostOnly) return void this.forceSync();
                const updateMessage = await this._getUpdateMessageForVideoStateAsync();
                if (await this._shouldSendBroadcast(updateMessage.data)) await this._sendBroadcastMessage(updateMessage); else if (waitForChange) {
                    if (await this._waitForChange()) {
                        const newUpdateMessage = await this._getUpdateMessageForVideoStateAsync();
                        await this._sendBroadcastMessage(newUpdateMessage);
                    }
                }
            }
            async _sendBroadcastMessage(updateMessage) {
                if (this._changingVideo) return;
                const oldState = this._serverState;
                if (updateMessage.data.bufferingState) {
                    updateMessage.data.state = SessionState.PAUSED, await Messaging_MessagePasser.sendMessageToExtension(updateMessage), 
                    await this._videoApi.waitVideoDoneLoadingAsync();
                    const newUpdateMessage = await this._getUpdateMessageForVideoStateAsync();
                    newUpdateMessage.data.bufferingState = !0, oldState == SessionState.PLAYING && (newUpdateMessage.data.state = SessionState.PLAYING), 
                    await Messaging_MessagePasser.sendMessageToExtension(newUpdateMessage);
                } else await Messaging_MessagePasser.sendMessageToExtension(updateMessage);
            }
            async _loadSessionDataAsync(loadSessionData) {
                const sessionData = loadSessionData.sessionCallbackData;
                this._sessionId = sessionData.sessionId, this._serverState = sessionData.state, 
                this._lastKnownServerTime = Number(sessionData.lastKnownTime), this._lastKnownServerTimeUpdatedAt = Number(sessionData.lastKnownTimeUpdatedAt), 
                this._videoId = sessionData.videoId, sessionData.ownerId && (this._hostOnly = !0), 
                loadSessionData.isCreate ? TaskManager_TaskManager.pushTask(this._broadcastAsync.bind(this), "BROADCAST") : this.forceSync(), 
                this._videoEventListener.startListening(), this._setupSyncInterval();
            }
            _ping() {
                return new Promise((resolve => {
                    const getServerTimeMessage = new GetServerTimeMessage("Content_Script", "Service_Background"), startTime = Date.now();
                    Messaging_MessagePasser.sendMessageToExtension(getServerTimeMessage).then((response => {
                        const now = Date.now();
                        if (response) {
                            const serverTime = response.serverTime;
                            serverTime && (shove(this._roundTripTimeRecent, now - startTime, 5), this._roundTripTimeMedian = median(this._roundTripTimeRecent), 
                            shove(this._localTimeMinusServerTimeRecent, now - Math.round(this._roundTripTimeMedian / 2) - serverTime, 5), 
                            this._localTimeMinusServerTimeMedian = median(this._localTimeMinusServerTimeRecent));
                        }
                    })).catch((error => {
                        debug(error);
                    })), resolve();
                }));
            }
            _setupSyncInterval() {
                this._syncInterval && clearInterval(this._syncInterval), this._syncInterval = setInterval((() => {
                    0 == TaskManager_TaskManager.tasksInFlight && TaskManager_TaskManager.pushTask(this._sync.bind(this));
                }), 5e3), this._pingInterval = setInterval((() => {
                    TaskManager_TaskManager.hasTaskInQueue("PING") || TaskManager_TaskManager.pushTask(this._ping.bind(this), "PING");
                }), 12500), this._ping();
            }
            _shouldCancelSync() {
                return !this._sessionId || this._videoApi.uiEventsHappening > 0 || this._changingVideo || !this._videoEventListener.shouldSync();
            }
            async _sync() {
                if (this._shouldCancelSync()) return;
                if (await this._videoApi.waitVideoDoneLoadingAsync(), this._shouldCancelSync()) return;
                const videoState = await this._videoApi.getStateAsync();
                this._serverState == SessionState.PAUSED ? await this._checkPaused(videoState) : this._serverState == SessionState.PLAYING && await this._checkPlaying(videoState);
            }
            async _checkPaused(videoState) {
                const {playbackState, playbackPositionMilliseconds} = videoState;
                playbackState !== PlaybackState.PAUSED && await this._videoApi.pause(), Math.abs(this._lastKnownServerTime - playbackPositionMilliseconds) > 2500 && await this._videoApi.setCurrentTime(this._lastKnownServerTime);
            }
            async _checkPlaying(videoState) {
                const {playbackState, playbackPositionMilliseconds} = videoState, serverTime = this._getCurrentServerTime();
                playbackState == PlaybackState.PAUSED && await this._videoApi.play(), Math.abs(serverTime - playbackPositionMilliseconds) > 2500 && (await this._videoApi.setCurrentTime(serverTime), 
                await this._videoApi.play());
            }
            _getServerTimeLapsed() {
                return this._serverState === SessionState.PLAYING ? Date.now() - (this._lastKnownServerTimeUpdatedAt + this._localTimeMinusServerTimeMedian) : 0;
            }
            _getCurrentServerTime() {
                return this._lastKnownServerTime + this._getServerTimeLapsed();
            }
            get changingVideo() {
                return this._changingVideo;
            }
            set changingVideo(changing) {
                this._changingVideo = changing;
            }
        }
        function ContentScript_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class AmazonContentScript extends class {
            constructor(chatApi, videoApi, videoEventListener) {
                ContentScript_defineProperty(this, "_hasBackgroundConnection", void 0), ContentScript_defineProperty(this, "_isContentScriptReady", void 0), 
                ContentScript_defineProperty(this, "_isContentScriptLoading", void 0), ContentScript_defineProperty(this, "_showingReviewMessage", void 0), 
                ContentScript_defineProperty(this, "_messageReceiver", void 0), ContentScript_defineProperty(this, "_chatApi", void 0), 
                ContentScript_defineProperty(this, "_videoApi", void 0), ContentScript_defineProperty(this, "_chatMessageForwarder", void 0), 
                ContentScript_defineProperty(this, "_videoEventListener", void 0), ContentScript_defineProperty(this, "_videoMessageForwarder", void 0), 
                this._chatApi = chatApi, this._videoApi = videoApi, this._videoEventListener = videoEventListener, 
                this._chatMessageForwarder = new ChatMessageForwarder(this._chatApi), this._videoMessageForwarder = new VideoMessageForwarder(this._videoApi, this._videoEventListener), 
                this._isContentScriptReady = !1, this._isContentScriptLoading = !1, this._showingReviewMessage = !1, 
                this._messageReceiver = new CSMessageReceiver, this._messageReceiver.addMessageListener(this._videoMessageForwarder), 
                this._messageReceiver.addMessageListener(this._chatMessageForwarder), this._messageReceiver.addMessageListener(this), 
                this._hasBackgroundConnection = !1, this._setupPingPort();
            }
            _setupPingPort() {
                const backgroundPort = chrome.runtime.connect();
                backgroundPort.onDisconnect.addListener((() => {
                    console.log("Lost background script. Teardown");
                    const teardownData = {
                        showAlert: this._chatApi.inSession,
                        alertModal: lostBackgroundConnectionModal
                    };
                    this._teardown(teardownData);
                })), backgroundPort.onMessage.addListener((() => {
                    debug("Got background script"), this._hasBackgroundConnection = !0;
                }));
            }
            onMessage(message, _sender, sendResponse) {
                if ("Content_Script" == message.target) {
                    if (message.type === PopupMessageType.IS_CONTENT_SCRIPT_READY) {
                        if (this._isContentScriptReady) {
                            console.log("Script already ready");
                            sendResponse({
                                ready: !0
                            });
                        } else this._isContentScriptLoading || (this._isContentScriptLoading = !0, this._waitScriptReadyAsync().then(sendResponse));
                        return !0;
                    }
                    if (message.type === PopupMessageType.GET_INIT_DATA) {
                        return sendResponse(this._getInitDataResponse()), !0;
                    }
                    if (message.type === PopupMessageType.DISCONNECT && "Popup" == message.sender) {
                        const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", DEFAULT_TEARDOWN);
                        Messaging_MessagePasser.sendMessageToExtension(teardownMessage), sendResponse();
                    } else if (message.type == BackgroundMessageType.TEARDOWN) {
                        const teardownMessage = message;
                        return this._teardown(teardownMessage.data), sendResponse(), !0;
                    }
                }
                return !1;
            }
            _teardown(data) {
                if (data.showAlert && data.alertModal) {
                    var _data$buttonUrl;
                    const buttonUrl = null !== (_data$buttonUrl = data.buttonUrl) && void 0 !== _data$buttonUrl ? _data$buttonUrl : this._chatApi.getPartyUrl();
                    showButtonMessage(data.alertModal, buttonUrl);
                }
                this._videoMessageForwarder.teardown(), this._chatMessageForwarder.teardown(), this._messageReceiver.teardown(), 
                window.telepartyLoaded = !1;
            }
            async waitBackgroundConnectionReadyAsync() {
                return delayUntil((() => this._hasBackgroundConnection), 5e3)();
            }
            async _waitScriptReadyAsync() {
                try {
                    return await this.waitBackgroundConnectionReadyAsync(), await this._waitContentScriptReadyAsync();
                } catch (error) {
                    return {
                        ready: !1,
                        error: {
                            message: "Failed to connect to Script. Please refresh the page and try again",
                            showButton: !1
                        }
                    };
                } finally {
                    this._isContentScriptLoading = !1;
                }
            }
            async _waitContentScriptReadyAsync() {
                let errorData;
                try {
                    await this._videoApi.waitVideoApiReadyAsync();
                    const response = await this._waitBackgroundResponseAsync();
                    response && response.error ? (debug("Error"), errorData = {
                        message: response.error,
                        showButton: !0
                    }, this._isContentScriptReady = !0) : (response && response.showReviewMessage && (this._showingReviewMessage = !0), 
                    this._isContentScriptReady = !0);
                } catch (error) {
                    errorData = {
                        message: error.message,
                        showButton: !1
                    };
                }
                return {
                    ready: this._isContentScriptReady,
                    error: errorData
                };
            }
            _getInitDataResponse() {
                return {
                    inSession: this._chatApi.inSession,
                    isChatVisible: this._chatApi.getChatVisible(),
                    partyUrl: this._chatApi.getPartyUrl(),
                    showReviewMessage: this._showingReviewMessage || this._chatApi.showingReveiwMessage
                };
            }
            async _waitBackgroundResponseAsync() {
                const getSessionDataMessage = await this._getSessionDataRequestAsync();
                return Messaging_MessagePasser.sendMessageToExtension(getSessionDataMessage);
            }
            async _getSessionDataRequestAsync() {
                const sessionRequestData = {
                    videoId: (await this._videoApi.getVideoDataAsync()).videoId
                };
                return new GetSessionDataMessage("Content_Script", "Service_Background", sessionRequestData);
            }
        } {
            constructor() {
                const amazonChatApi = new AmazonChatApi, amazonVideoApi = new AmazonVideoApi;
                super(amazonChatApi, amazonVideoApi, new AmazonVideoEventListener(amazonVideoApi, amazonChatApi)), 
                debug("Amazon Content Script");
            }
        }
        window.telepartyLoaded || (window.telepartyLoaded = !0, new AmazonContentScript, 
        debug("Listening to messages"));
    })();
})();