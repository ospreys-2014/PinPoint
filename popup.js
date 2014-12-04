window.addEventListener('load', function() {
  var dashLink = document.getElementById("dash-link")
  dashLink.addEventListener("click", function(){
    console.log("Clicked");
    chrome.tabs.create({url: "dashboard.html"})
  })
});

