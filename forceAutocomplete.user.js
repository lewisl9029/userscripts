// ==UserScript==
// @name         Force Autocomplete
// @namespace    https://github.com/lewisl9029/userscripts
// @version      0.3
// @description  Force autocomplete to 'on' to enable password manager autofill
// @author       Lewis Liu
// @match        https://sso.trinet.com/*
// @match        https://online.citi.com/*
// @match        https://*.us.hsbc.com/*
// @grant        none
// ==/UserScript==
'use strict';

requestIdleCallback(() => {
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
}, {
  timeout: 20000
});
