// Uses local storage to add a note
function storeToLocalStorage(note){
    localStorage.setItem(note.storageKey, JSON.stringify(note));
    PinPoint.NoteController.storeNote(note);
}

var createButton = document.getElementById("create");
var form = document.getElementById("add-note");

button.addEventListener('click', function(){
    button.style.display = "none";
    form.style.display = "inline"

    note = new PinPoint.Note();
    storeToLocalStorage(note);
});

// Array of notes in string format
var notes = [];

// Array of note objects to pass to controller
var noteObjects = [];

// Searches the keys in LocalStorage and returns an array of matches
function searchLocalStorage(url){
    for (i in localStorage) {
        if (i.match(/^\w+\:\/\/www.youtube.com\/watch\?v=.+\//)[0] == url) {
            notes.push(i);
        } else {
            console.log("There are no notes for that url. Did you remember to type a url followed by a / ?");
        }
    }
    parseStorageSearch();
}

// Parses all strigified objects into JSON objects
function parseLocalStorage(){
    for (i in notes) {
        var key = notes[i]
        var retrievedObject = localStorage.getItem(key);
        noteObjects.push(JSON.parse(retrievedObject));
    }
}

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


window.addEventListener('load', function() {
  PinPoint.NoteController.getUrl();
  controller = new PinPoint.NoteController(note);
  controller.defineView(new PinPoint.View());
  controller.redraw();
});
