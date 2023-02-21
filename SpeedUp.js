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

    var UpBtnArea = document.createElement("div");
    UpBtnArea.style.position = "fixed";
    UpBtnArea.style.zIndex = 10000;
    UpBtnArea.style.top = "150px";
    UpBtnArea.style.right = "30px";
    let UpBtn = document.createElement("button");

    UpBtn.textContent = "x10";
    UpBtn.addEventListener("click",()=>{
        var v = document.getElementsByTagName("video");
        for(var i=0; i<v.length; i++){
            v[i].playbackRate = 10;
        }
    });

    document.getElementsByTagName("body")[0].appendChild(UpBtnArea);
    UpBtnArea.insertBefore(UpBtn,UpBtnArea.children[0]);

    var ReBtnArea = document.createElement("div");
    ReBtnArea.style.position = "fixed";
    ReBtnArea.style.zIndex = 10000;
    ReBtnArea.style.top = "200px";
    ReBtnArea.style.right = "30px";
    let ReBtn = document.createElement("button");

    ReBtn.textContent = "x1";
    ReBtn.addEventListener("click",()=>{
        var v = document.getElementsByTagName("video");
        for(var i=0; i<v.length; i++){
            v[i].playbackRate = 1;
        }
    });
    document.getElementsByTagName("body")[0].appendChild(ReBtnArea);
    ReBtnArea.insertBefore(ReBtn,ReBtnArea.children[0]);

    var slowBtnArea = document.createElement("div");
    slowBtnArea.style.position = "fixed";
    slowBtnArea.style.zIndex = 10000;
    slowBtnArea.style.top = "250px";
    slowBtnArea.style.right = "30px";
    let slowBtn = document.createElement("button");

    slowBtn.textContent = "x0.5";
    slowBtn.addEventListener("click",()=>{
        var v = document.getElementsByTagName("video");
        for(var i=0; i<v.length; i++){
            v[i].playbackRate = 0.5;
        }
    });
    document.getElementsByTagName("body")[0].appendChild(slowBtnArea);
    slowBtnArea.insertBefore(slowBtn,slowBtnArea.children[0]);
})();