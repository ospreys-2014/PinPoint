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




