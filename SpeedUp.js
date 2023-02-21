// ==UserScript==
// @name         SpeedUp
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  加速bilibili视频
// @author       Goose
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var SpeedUp = document.createElement("div");
    SpeedUp.className = "SpeedUp";
    SpeedUp.textContent = "x10";
    SpeedUp.style.position = "fixed";
    SpeedUp.style.zIndex = 10000;
    SpeedUp.style.top = "150px";
    SpeedUp.style.right = "30px";

    var speedBtn = SpeedUp.lastChild;

    speedBtn.addEventListener("click",function(){
        var v = document.getElementsByTagName('video');
        for(var i=0; i<v.length; i++){
            v[i].playbackRate = 10;
        }
    })

    var Restore = document.createElement("div");
    Restore.className = "Restore";
    Restore.textContent = "x1";
    Restore.style.position = "fixed";
    Restore.style.zIndex = 10000;
    Restore.style.top = "200px";
    Restore.style.right = "30px";

    var reBtn = Restore.lastChild;

    reBtn.addEventListener("click",function(){
        var v = document.getElementsByTagName('video');
        for(var i=0; i<v.length; i++){
            v[i].playbackRate = 1;
        }
    })

    //添加按钮
    document.getElementsByTagName("body")[0].appendChild(SpeedUp);
    document.getElementsByTagName("body")[0].appendChild(Restore);
})();