// Uses local storage to add a note
function storeToLocalStorage(note){
    localStorage.setItem(note.storageKey, JSON.stringify(note));
    PinPoint.NoteController.storeNote(note);
}

// Event listener for the create note button
var button = document.getElementById("create");
var form = document.getElementById("add-note");
button.addEventListener('click', function(){
  button.style.display = "none";
  form.style.display = "inline"

    note = new PinPoint.Note();
    storeToLocalStorage(note);
});

//***** Need to change this to different event so we aren't
// getting time on load, but click event instead *******
window.addEventListener('load', function() {
  controller = new PinPoint.NoteController(notes);
  controller.defineView(new PinPoint.View());
  controller.redraw();
  PinPoint.NoteController.getUrl();
  chrome.runtime.getBackgroundPage(function(eventPage) {
    eventPage.getPageDetails(PinPoint.NoteController.getTime);
    });
});
