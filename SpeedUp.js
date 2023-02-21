// ==UserScript==
// @name         SpeedUp
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  加速bilibili视频
// @author       Goose
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let UpBtnArea = document.querySelector("video-data");
    let UpBtn = document.createElement("button");

    UpBtn.textContent = "x10";
    UpBtn.addEventListener("click",()=>{
        var v = document.getElementsByTagName("video");
        for(var i=0; i<v.length; i++){
            v[i].playbackRate = 10;
        }
    });
    UpBtnArea.insertBefore(UpBtn,UpBtnArea.children[0]);

    let ReBtnArea = document.querySelector("video-data");
    let ReBtn = document.createElement("button");

    ReBtn.textContent = "x1";
    ReBtn.addEventListener("click",()=>{
        var v = document.getElementsByTagName("video");
        for(var i=0; i<v.length; i++){
            v[i].playbackRate = 1;
        }
    });
    UpBtnArea.insertBefore(ReBtn,ReBtnArea.children[0]);
})();