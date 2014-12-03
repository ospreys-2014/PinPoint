chrome.runtime.sendMessage({
  'website': document.URL,
  'time': document.getElementsByClassName('ytp-time-current')[0].innerHTML,
  'seconds': document.querySelector("video").currentTime,
});