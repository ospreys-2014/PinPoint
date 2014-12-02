var PinPoint = PinPoint || {};

PinPoint.updatePopup = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    // Pull the url from the current tab
    var url = tabs[0].url;
    // Create array of note objects belonging to current url; returns empty array if no notes present.
    var notes = getNotes(url);
    var table = document.getElementById('notes-table');
    table.innerHTML = '';
    // Appends note objects to the table
    // for (i = 0; i < notes.length; i++) {
    // }
    for (note of notes) {
      var node = new PinPoint.NotePresenter(note).present();
      table.appendChild(node);
    }
  });
};

window.addEventListener('load', function() {
  // Load popup with the saved notes for this video
  // debugger
  PinPoint.updatePopup();
  // Uses local storage to add a note
  function getPageDetails(callback) {
    // Perform the callback when a message is received from the content script
    chrome.runtime.onMessage.addListener(callback);
    // Inject the content script into the current page
    chrome.tabs.executeScript(null, { file: 'content.js' });
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
      }
      addNote(pageDetails.website, note);
      PinPoint.updatePopup();
      window.location = window.location;
    });
  });
});

