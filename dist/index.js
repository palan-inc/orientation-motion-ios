!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["orientation-motion-ios"]=t():e["orientation-motion-ios"]=t()}(window,(function(){return function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t){window.onload=function(){var e,t=navigator.userAgent.toLowerCase();if(t.indexOf("ipod touch")>=0||t.indexOf("iphone")>=0||t.indexOf("ipad")>=0){var i=t.split("os ")[1].split(" ")[0];version_n=Number(i.slice(0,2)),version_n>=13&&t.indexOf("version/")>=0&&((e=document.createElement("div")).innerHTML='<div id="allow-orientation-motion"><div><div style="transform: scale(1);opacity: 1;/* display: flex; *//* flex-direction: row; *//* align-items: center; *//* justify-content: space-around; */box-sizing: border-box;height: 100%;transform: scale(0.8);pointer-events: none;position: absolute;padding: 40px;bottom: 0;left: 0;right: 0;top: 0;align-items: center;display: flex;justify-content: center;/* opacity: 0; */transition-duration: 250ms;transition-property: opacity,visibility;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);/* visibility: hidden; *//* z-index: 0; */"><div style="position: absolute;background-color:#c7baba;width: 100%;z-index: 999999;max-height: 360px;min-width: 340px;max-width: 340px;border-radius: 4px;background-color: var(--mdc-theme-surface, #fff);box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12);display: flex;flex-direction: column;flex-grow: 0;flex-shrink: 0;box-sizing: border-box;pointer-events: auto;overflow-y: auto;padding: 10px;"><h2>デバイスの確認</h2><p style="color: rgba(0,0,0,.6);">画面の回転及び加速度の取得を許可しますか？</p><div style="display: flex;position: relative;flex-shrink: 0;flex-wrap: wrap;align-items: center;justify-content: flex-end;box-sizing: border-box;min-height: 52px;margin: 0;padding: 8px;border-top: 1px solid transparent;"><div onClick="allowOrientationMotionYes()" style="--mdc-ripple-fg-opacity: 0.12;color: #6200ee;margin: 10px;font-size: 1.175rem;font-weight: 500;letter-spacing:.0892857143em;text-transform: uppercase;">はい</div><div onClick="allowOrientationMotionNo()"style="--mdc-ripple-fg-opacity: 0.12;color: #6200ee;margin: 10px;font-size: 1.175rem;font-weight: 500;letter-spacing: .0892857143em;text-transform: uppercase;">いいえ</div></div></div></div></div></div>',document.body.appendChild(e))}}}])}));