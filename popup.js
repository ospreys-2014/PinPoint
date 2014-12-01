window.onload = function() {

  // Uses local storage to add a note
  function getPageDetails(callback) {
    // Inject the content script into the current page
    chrome.tabs.executeScript(null, { file: 'content.js' });
    // Perform the callback when a message is received from the content script
    chrome.runtime.onMessage.addListener(function(message)  {
      // Call the callback function
      callback(message);
    });
  };

  // Array of notes in string format
  var notes = [];
  var currentNoteTime = "";
  // Array of note objects to pass to controller

  var createButton = document.getElementById("create");
  var form = document.getElementById("add-note");

  createButton.addEventListener('click', function(){
    createButton.style.display = "none";
    form.style.display = "inline";
    getPageDetails(function(pageDetails){

      currentNoteTime = pageDetails.time;
    });
  });

  // Event listener for the create note button
  var saveButton = document.getElementById("save");

  saveButton.addEventListener('click', function(){
    saveButton.style.display = "none";
    // alert("pageDetails");
    noteContentFromForm = document.getElementById('note').value
    getPageDetails(function(pageDetails){
      var note = {
        noteTime: currentNoteTime,
        content: noteContentFromForm,
      }
      addNote(pageDetails.website, note);
    });
  });
}


window.addEventListener('load', function() {
  controller = new PinPoint.NoteController();
});
