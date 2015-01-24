// pushs a note object to the notes array
// getNotes returns and saves the records.
function addNote(url, note) {
  var noteObjects = getNotes(url);
  noteObjects.push(note);
  saveNotes(url, noteObjects);
}

// returns an array if no records exist, otherwise
// it returns an array of note objects.
function getNotes(url){
  if (localStorage[url] === undefined){
    return [];
  } else {
    var retrievedObject = localStorage.getItem(url);
    return JSON.parse(retrievedObject);
  }
}

// removes a note by matching the seconds attr of a note
// object and excludes it from the notes array.
function removeNote(url, seconds){
  var notes = JSON.parse(localStorage.getItem(url));
  var result = notes.map(function(note){
    if (note.seconds != seconds){
      return note
    }
  })
  // result array includes an undefined value after one 
  // of the objects are removed. Clean function removes
  // all undefined values before it is saved to record.
  result.clean(undefined);
  saveNotes(url, result);
}

// saves notes array as string in localStorage.
function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes);
}

// **Extension on the native Array Class**
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

// event listeners for enable and disable feature on popup
window.onload = function(){
  var onButton = document.getElementById('on');
  var offButton = document.getElementById('off');

  // sets default state of app after intall to true
  if (localStorage.enabled === undefined) {
    localStorage.enabled = true;
  }
  // sets enabled in localStorage to true
  onButton.addEventListener('click', function(){
    localStorage["enabled"] = true
  });
  // sets enabled in localStorage to false
  offButton.addEventListener('click', function(){
    localStorage["enabled"] = false
  });
}

// Chrome API event listener
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  var enabled = localStorage.enabled === "true"
  if (message.method === "add note"){
    addNote(message.url, message.note);
  }
  else if (message.method === "remove note"){
    removeNote(message.url, message.seconds);
  }
  sendResponse({notesArray: getNotes(message.url), enable: enabled});
});

// Chrome API icon event listener
chrome.browserAction.setPopup({popup: "popup.html"});


