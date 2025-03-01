// ==UserScript==
// @name         NEPSE Chart
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Closing the SastoShare Promo!
// @author       @cypherab01
// @match        https://www.nepsealpha.com/nepse-chart
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nepsealpha.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  const button = document.querySelector("span i.fa-close");
  window.addEventListener("load", () => {
    button.click();
  });
})();
