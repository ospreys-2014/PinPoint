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

function storeToLocalStorage(note){
    localStorage.setItem(note.storageKey, JSON.stringify(note));
    PinPoint.NoteController.storeNote(note);
}

// Array of notes in string format
var notes = [];

// Array of note objects to pass to controller
var noteObjects = [];

// Parses all strigified objects into JSON objects
// function parseLocalStorage(){
//     for (i in notes) {
//         var key = notes[i]
//         var retrievedObject = localStorage.getItem(key);
//         noteObjects.push(JSON.parse(retrievedObject));
//     }
// }

// Searches the keys in LocalStorage and returns an array of matches
// function searchLocalStorage(){
//     var key = url + "/";
//     for (i in localStorage) {
//         if (i.match(/^\w+\:\/\/www.youtube.com\/watch\?v=.+\//) == key) {
//             notes.push(i);
//         }
//     }
//     parseLocalStorage();
// }

var createButton = document.getElementById("create");
var form = document.getElementById("add-note");
createButton.addEventListener('click', function(){
  createButton.style.display = "none";
  form.style.display = "inline";
  // chrome.runtime.getBackgroundPage(function(eventPage) {
    getPageDetails(PinPoint.NoteController.getTime);
    // });
  console.log(this);
});

// Event listener for the create note button
var saveButton = document.getElementById("save");
saveButton.addEventListener('click', function(){
  saveButton.style.display = "none";
  note = new PinPoint.Note();
  PinPoint.NoteController.run(note);
});

window.addEventListener('load', function() {
  controller = new PinPoint.NoteController();

  // console.log("Page Loading.." + Date.now());
  // PinPoint.NoteController.getUrl();
  // console.log(localStorage["url"]);
  // searchLocalStorage(localStorage["url"]);
  // controller = new PinPoint.NoteController(noteObjects);
  // controller.defineView(new PinPoint.View());
  // controller.redraw();
});
