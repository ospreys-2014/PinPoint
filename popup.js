// Uses local storage to add a note
function storeToLocalStorage(note){
    localStorage.setItem(note.storageKey, JSON.stringify(note));
    PinPoint.NoteController.storeNote(note);
}

var createButton = document.getElementById("create");
var form = document.getElementById("add-note");
createButton.addEventListener('click', function(){
  createButton.style.display = "none";
  form.style.display = "inline";
  chrome.runtime.getBackgroundPage(function(eventPage) {
    eventPage.getPageDetails(PinPoint.NoteController.getTime);
    });
});
// Event listener for the create note button
var saveButton = document.getElementById("save");
saveButton.addEventListener('click', function(){
  saveButton.style.display = "none";
  note = new PinPoint.Note();
  PinPoint.NoteController.run(note);
});

//***** Need to change this to different event so we aren't
// getting time on load, but click event instead *******
window.addEventListener('load', function() {
  PinPoint.NoteController.getUrl();
  controller = new PinPoint.NoteController(note);
  controller.defineView(new PinPoint.View());
  controller.redraw();
  // chrome.runtime.getBackgroundPage(function(eventPage) {
  //   eventPage.getPageDetails(PinPoint.NoteController.getTime);
  //   });
});
