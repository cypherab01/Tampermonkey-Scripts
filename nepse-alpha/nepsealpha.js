// ==UserScript==
// @name         NEPSE Chart
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Closing the SastoShare Promo!
// @author       @cypherab01
// @match        https://www.nepsealpha.com/nepse-chart
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nepsealpha.com
// @updateURL    https://raw.githubusercontent.com/cypherab01/Tampermonkey-Scripts/main/nepse-alpha/nepsealpha.js
// @downloadURL  https://raw.githubusercontent.com/cypherab01/Tampermonkey-Scripts/main/nepse-alpha/nepsealpha.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  const button = document.querySelector("span i.fa.fa-close");
  window.addEventListener("load", () => {
    button.click();
  });
})();
