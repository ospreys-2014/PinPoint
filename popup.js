window.addEventListener('load', function() {
  var dashLink = document.getElementById("dash-link")
  dashLink.addEventListener("click", function(){
    chrome.tabs.create({url: "dashboard.html"})
  })

  var aboutLink = document.getElementById("about-link")
  aboutLink.addEventListener("click", function(){
    chrome.tabs.create({url: "aboutus.html"})
  })
});

