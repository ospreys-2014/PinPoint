var PinPoint = PinPoint || {};

window.addEventListener('load', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {method: "panel status"});
  });

  var dashLink = document.getElementById("dash-link");
  dashLink.addEventListener("click", function(){
    chrome.tabs.create({url: "dashboard.html"});
  });
});

// Chrome API event listener
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  var enabled = localStorage.enabled === "true"
  if (message.method === "add note"){
    addNote(message.url, message.note);
  }
  else if (message.method === "remove note"){
    removeNote(message.url, message.seconds);
  }
  sendResponse({notesArray: getNotes(message.url), enable: enabled});
});

// Chrome API icon event listener
chrome.browserAction.setPopup({popup: "popup.html"});

// event listeners for enable and disable feature on popup
window.onload = function(){
  var onButton = document.getElementById('on');
  var offButton = document.getElementById('off');

  // sets default state of app after intall to true
  if (localStorage.enabled === undefined) {
    localStorage.enabled = true;
  }
  // sets enabled in localStorage to true
  onButton.addEventListener('click', function(){
    localStorage["enabled"] = true
  });
  // sets enabled in localStorage to false
  offButton.addEventListener('click', function(){
    localStorage["enabled"] = false
  });
}



