function addNote(url, note) {
  var noteObjects = getNotes(url);
  noteObjects.push(note);
  saveNotes(url, noteObjects);
}

function getNotes(url){
  if (localStorage[url] === undefined){
    return [];
  } else {
    var retrievedObject = localStorage.getItem(url);
    return JSON.parse(retrievedObject);
  }
}

function removeNote(url, seconds){ 
  var notes = JSON.parse(localStorage.getItem(url));
  var result = notes.map(function(note){
    if (note.seconds != seconds){
      return note
    }
  })
  saveNotes(url, result);
}

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes);
}

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

window.onload = function(){
  var onButton = document.getElementById('on');
  var offButton = document.getElementById('off');

  if (localStorage.enabled === undefined) {
    localStorage.enabled = true;
  }

  onButton.addEventListener('click', function(){
    localStorage["enabled"] = true
  });

  offButton.addEventListener('click', function(){
    localStorage["enabled"] = false
  });  
}

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

chrome.browserAction.setPopup({popup: "popup.html"});


