window.onload = function() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('ipod touch') >= 0 || ua.indexOf('iphone') >= 0 || ua.indexOf('ipad') >= 0){
    var version = ua.split('os ')[1].split(' ')[0];
    version_n = Number(version.slice(0, 2));
    // later iOS13 and also Safari
    if (version_n >= 13 && ua.indexOf('version/') >= 0){
      showPermissionModal();
    }
  }
}

function allowOrientationMotionYes(){
  document.getElementById("allow-orientation-motion").remove();
  if (
    DeviceMotionEvent &&
    DeviceMotionEvent.requestPermission &&
    typeof DeviceMotionEvent.requestPermission === 'function'
  ) {
    DeviceMotionEvent.requestPermission();
  }
  if (
    DeviceOrientationEvent &&
    DeviceOrientationEvent.requestPermission &&
    typeof DeviceOrientationEvent.requestPermission === 'function'
  ) {
    DeviceOrientationEvent.requestPermission();
  }
};

function allowOrientationMotionNo(){
  document.getElementById("allow-orientation-motion").remove();
};

function showPermissionModal() {
  var new_ele=document.createElement("div");
  new_ele.innerHTML='<div id="allow-orientation-motion"><div><div style="transform: scale(1);opacity: 1;/* display: flex; *//* flex-direction: row; *//* align-items: center; *//* justify-content: space-around; */box-sizing: border-box;height: 100%;transform: scale(0.8);pointer-events: none;position: absolute;padding: 40px;bottom: 0;left: 0;right: 0;top: 0;align-items: center;display: flex;justify-content: center;/* opacity: 0; */transition-duration: 250ms;transition-property: opacity,visibility;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);/* visibility: hidden; *//* z-index: 0; */"><div style="position: absolute;background-color:#c7baba;width: 100%;z-index: 999999;max-height: 360px;min-width: 340px;max-width: 340px;border-radius: 4px;background-color: var(--mdc-theme-surface, #fff);box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12);display: flex;flex-direction: column;flex-grow: 0;flex-shrink: 0;box-sizing: border-box;pointer-events: auto;overflow-y: auto;padding: 10px;"><h2>デバイスの確認</h2><p style="color: rgba(0,0,0,.6);">画面の回転及び加速度の取得を許可しますか？</p><div style="display: flex;position: relative;flex-shrink: 0;flex-wrap: wrap;align-items: center;justify-content: flex-end;box-sizing: border-box;min-height: 52px;margin: 0;padding: 8px;border-top: 1px solid transparent;"><div onClick="allowOrientationMotionYes()" style="--mdc-ripple-fg-opacity: 0.12;color: #6200ee;margin: 10px;font-size: 1.175rem;font-weight: 500;letter-spacing:.0892857143em;text-transform: uppercase;">はい</div><div onClick="allowOrientationMotionNo()"style="--mdc-ripple-fg-opacity: 0.12;color: #6200ee;margin: 10px;font-size: 1.175rem;font-weight: 500;letter-spacing: .0892857143em;text-transform: uppercase;">いいえ</div></div></div></div></div></div>';
  document.body.appendChild(new_ele);  
}