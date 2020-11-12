import hotkeys from "hotkeys-js";

const observerMap = {};
export function addKeyObserver(key, callback) {
  if (!observerMap[key]) {
    observerMap[key] = [];
    hotkeys(key, () => extcuteCallback(key));
  }
  observerMap[key].push(callback);
}
export function removeKeyObserver(key, callback) {
  observerMapp[key] = observerMap[key].filter((item) => item !== callback);
}

function extcuteCallback(key) {
  for (const ob of observerMap[key]) {
    ob();
  }
}
