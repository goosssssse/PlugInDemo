// ==UserScript==
// @name         SpeedUp
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  加速bilibili视频
// @author       Goose
// @match        http*://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // let isUp = localStorage.getItem("isUp") === "false";//加速
    // let inNo = localStorage.getItem("isNo") === "false";
    // let inSl = localStorage.getItem("isSL") === "false";

    // var UpBtnArea = document.createElement("div");
    // UpBtnArea.style.position = "fixed";
    // UpBtnArea.style.zIndex = 10000;
    // UpBtnArea.style.top = "150px";
    // UpBtnArea.style.right = "30px";
    // let UpBtn = document.createElement("button");

    // UpBtn.textContent = "x10";
    // UpBtn.addEventListener("click",function(){
    //     isUp = !isUp;
    //     localStorage.setItem("isUp",isUp);
    //     if(isUp){
    //         var v = document.getElementsByTagName("video");
    //         // for(var i=0; i<v.length; i++){
    //         //     v[i].playbackRate = 10;
    //         // }
    //         v[0].playbackRate = 10;
    //     }
    // });

    // document.getElementsByTagName("body")[0].appendChild(UpBtnArea);
    // UpBtnArea.insertBefore(UpBtn,UpBtnArea.children[0]);

    // var ReBtnArea = document.createElement("div");
    // ReBtnArea.style.position = "fixed";
    // ReBtnArea.style.zIndex = 10000;
    // ReBtnArea.style.top = "200px";
    // ReBtnArea.style.right = "30px";
    // let ReBtn = document.createElement("button");

    // ReBtn.textContent = "x1";
    // ReBtn.addEventListener("click",function(){
    //     var v = document.getElementsByTagName("video");
    //     for(var i=0; i<v.length; i++){
    //         v[i].playbackRate = 1;
    //     }
    // });
    // document.getElementsByTagName("body")[0].appendChild(ReBtnArea);
    // ReBtnArea.insertBefore(ReBtn,ReBtnArea.children[0]);

    // var slowBtnArea = document.createElement("div");
    // slowBtnArea.style.position = "fixed";
    // slowBtnArea.style.zIndex = 10000;
    // slowBtnArea.style.top = "250px";
    // slowBtnArea.style.right = "30px";
    // let slowBtn = document.createElement("button");

    // slowBtn.textContent = "x0.5";
    // slowBtn.addEventListener("click",function() {
    //     var v = document.getElementsByTagName("video");
    //     for(var i=0; i<v.length; i++){
    //         v[i].playbackRate = 0.5;
    //     }
    // });
    // document.getElementsByTagName("body")[0].appendChild(slowBtnArea);
    // slowBtnArea.insertBefore(slowBtn,slowBtnArea.children[0]);

    var goTopBottomButton = document.createElement("div");
    goTopBottomButton.className = "goTopBottomButton";
    goTopBottomButton.innerHTML = "<img class='toggleButton' src='https://www.baidu.com/img/flexible/logo/pc/result.png' style='width:50px;height:35px;display:block;cursor:pointer;'></img>";
    goTopBottomButton.style.position = "fixed";
    goTopBottomButton.style.zIndex = 10000;
    goTopBottomButton.style.top = "150px"; //距离网页底部px，可修改
    goTopBottomButton.style.right = "30px"; //距离网页右边px，可修改

    var toggleButton = goTopBottomButton.lastChild;
    toggleButton.style.opacity =1; //按钮不透明度

    toggleButton.addEventListener("click",function() { 
		var v=document.getElementsByTagName('video');
		for (var i=0;i<v.length;i++)
		{
		v[i].playbackRate = 10;
		}
    })

var goTopBottomButton2 = document.createElement("div");
    goTopBottomButton2.className = "goTopBottomButton2";
    goTopBottomButton2.innerHTML = "<img class='toggleButton2' src='https://www.baidu.com/img/flexible/logo/pc/result.png' style='width:50px;height:35px;display:block;cursor:pointer;'></img>";
    goTopBottomButton2.style.position = "fixed";
    goTopBottomButton2.style.zIndex = 10000;
    goTopBottomButton2.style.top = "200px"; //距离网页底部px，可修改
    goTopBottomButton2.style.right = "30px"; //距离网页右边px，可修改

    var toggleButton2 = goTopBottomButton2.lastChild;
    toggleButton2.style.opacity =1; //按钮不透明度

    toggleButton2.addEventListener("click",function() { 
		var v=document.getElementsByTagName('video');
		for (var i=0;i<v.length;i++)
		{
		v[i].playbackRate = 1;
		}
    })

    document.getElementsByTagName("body")[0].appendChild(goTopBottomButton);
    document.getElementsByTagName("body")[0].appendChild(goTopBottomButton2);
})();