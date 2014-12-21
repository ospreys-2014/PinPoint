var PinPoint = PinPoint || {};

window.addEventListener('load', function() {
  var backgroundPage = chrome.extension.getBackgroundPage()

  var dashLink = document.getElementById("dash-link")
  dashLink.addEventListener("click", function(){
    chrome.tabs.create({url: "dashboard.html"})
  })

  var disableLink = document.getElementById("disable")
  dashLink.addEventListener("click", function(){
    
  })
});
// PinPoint.updatePopup = function() {
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     // Pull the url from the current tab
//     var url = tabs[0].url;
//     // Create array of note objects belonging to current url; returns empty array if no notes present.
//     var notes = getNotes(url);
//     // Sorts the notes by time of video
//     notes.sort(function(a,b) { return a.seconds - b.seconds } );

//     var table = document.getElementById('notes-table');
//     table.innerHTML = '';

//     for (note of notes) {
//       var node = new PinPoint.NotePresenter(note).present();
//       table.appendChild(node);
//     }

//     var links = document.getElementsByClassName("link");
//       for(var i=0;i< links.length; i++) {
//         links[i].addEventListener("click", tabUpdate(i));
//       };
//       function tabUpdate(i) {
//         return function(){
//         chrome.tabs.update(null, {url: links[i].href});
//         };
//       };
//   });
// };



