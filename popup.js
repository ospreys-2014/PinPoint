var PinPoint = PinPoint || {};

PinPoint.updatePopup = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    // Pull the url from the current tab
    var url = tabs[0].url;
    // Create array of note objects belonging to current url; returns empty array if no notes present.
    var notes = getNotes(url);
    // Sorts the notes by time of video
    notes.sort(function(a,b) { return a.seconds - b.seconds } );

    var table = document.getElementById('notes-table');
    table.innerHTML = '';
    // Badge icon
    chrome.browserAction.setBadgeText({text: notes.length.toString()});
    chrome.browserAction.setBadgeBackgroundColor({color:[235, 105, 5, 220]});

    for (note of notes) {
      var node = new PinPoint.NotePresenter(note).present();
      table.appendChild(node);
    }

    var links = document.getElementsByClassName("link");
      for(var i=0;i< links.length; i++) {
        links[i].addEventListener("click", tabUpdate(i));
      };
      function tabUpdate(i) {
        return function(){
        chrome.tabs.update(null, {url: links[i].href});
        };
      };

    var deleteButtons = document.getElementsByClassName("delete");
    for(var i=0;i< deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", sendToDelete(i));
    };

    function sendToDelete(i) {
      return function(){
        deleteNote(url,deleteButtons[i].dataset.note);
        window.location = window.location;
      };
    };

  });
};

window.addEventListener('load', function() {
  // Load popup with the saved notes for this video
  PinPoint.updatePopup();
  // Uses local storage to add a note
  function getPageDetails(callback) {
    // Perform the callback when a message is received from the content script
    chrome.runtime.onMessage.addListener(callback);
    // Inject the content script into the current page
    chrome.tabs.executeScript(null, { file: 'content.js' });
  };

  formatNoteUrl = function(pageDetails){
    var timeStamp = pageDetails.time
    var baseUrl = getBaseUrl(pageDetails.website)
    var formattedTime = ""
    var formattedUrl = ""
      if (timeStamp.length > 5){
        formattedTime = timeStamp.replace(":", "h").replace(":", "m").concat("s")
        formattedUrl = baseUrl + "&t=" + formattedTime;
      } else {
        formattedTime = timeStamp.replace(":", "m").concat("s")
        formattedUrl = baseUrl + "&t=" + formattedTime;
      }
    return formattedUrl;
  };

  var saveButton = document.getElementById("save");
  var form = document.getElementById("add-note");

  // Saves a note to localStorage via addNote
  form.addEventListener('submit', function(event){
    event.preventDefault();
    noteContentFromForm = document.getElementById('note').value
    getPageDetails(function(pageDetails){
      var note = {
        noteTime: pageDetails.time,
        content: noteContentFromForm,
        seconds: pageDetails.seconds,
        noteUrl: formatNoteUrl(pageDetails),
      }
      addNote(pageDetails.website, note);
      PinPoint.updatePopup();

      // Refreshes popup
      window.location = window.location;

    });
  });
});
