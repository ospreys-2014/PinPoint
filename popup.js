function drawPage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    var url = tabs[0].url;
    var notes = getNotes(url);
    var table = document.getElementById('notes-table');
    table.innerHTML = '';
    for (note of notes) {
      var node = new PinPoint.NotePresenter(note).present();
      table.appendChild(node);
    }
  });
}

window.addEventListener('load', function() {
  drawPage();

  // Uses local storage to add a note
  function getPageDetails(callback) {
    // Perform the callback when a message is received from the content script
    chrome.runtime.onMessage.addListener(callback);
    // Inject the content script into the current page
    chrome.tabs.executeScript(null, { file: 'content.js' });
  };

  // var createButton = document.getElementById("create");
  var form = document.getElementById("add-note");

  // Event listener for the create note button
  var saveButton = document.getElementById("save");

  form.addEventListener('submit', function(e) { e.preventDefault(); });

  saveButton.addEventListener('click', function(event){
    console.log('hi!');
    event.preventDefault();
    // saveButton.style.display = "none";
    console.log(event);
    // debugger
    noteContentFromForm = document.getElementById('note').value
    getPageDetails(function(pageDetails){
      console.log(pageDetails, "im the page details");
      var note = {
        noteTime: pageDetails.time,
        content: noteContentFromForm,
      }
      addNote(pageDetails.website, note);

      drawPage();
    });
  });
});

