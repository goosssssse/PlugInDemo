// ==UserScript==
// @name         xxt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  视频加速
// @author       Goose
// @match        https://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //视频加速按钮
    var UpBtnArea = document.createElement("div");//按钮位置
    UpBtnArea.style.position = "fixed";
    UpBtnArea.style.zIndex = 10000;
    UpBtnArea.style.top = "150px";
    UpBtnArea.style.right = "30px";
    var UpBtn = document.createElement("button");//按钮
    UpBtn.textContent = "x5";
    document.getElementsByTagName("body")[0].appendChild(UpBtnArea);//位置插入
    UpBtnArea.insertBefore(UpBtn,UpBtnArea.children[0]);//按钮插入
    
    UpBtn.addEventListener("click",speedUp);

    //let isUp = localStorage.getItem("isUp") === "false";
    function speedUp(){
      document.getElementsByTagName("video")[0].playbackRate=5;
    }
})();