// ==UserScript==
// @name         Force Autocomplete
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Force autocomplete to 'on' to enable password manager autofill
// @author       Lewis Liu
// @match        https://sso.trinet.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll('*[autocomplete="off"]')
      .forEach((node) => {
        node.removeAttribute('autocomplete');
      });
/*
    document.querySelectorAll('#IDToken1')
      .forEach((node) => {
        node.setAttribute('name', 'username');
      });
    document.querySelectorAll('#IDToken2')
      .forEach((node) => {
        node.setAttribute('name', 'password');
      });
*/

    document.querySelectorAll('#passwordDummyForIE, #ssnPwdForIE, #ssnWaterMarkForIE')
      .forEach((node) => {
        node.remove();
      });
})();
