function addNote(url, note) {
  var noteObjects = getNotes(url);
  noteObjects.push(note);
  saveNotes(url, noteObjects);
}

function getNotes(url){
  if (localStorage[url] == null){
    return []
  } else {
    var retrievedObject = localStorage.getItem(url)
    return JSON.parse(retrievedObject)
  }
}

function removeNote(url, seconds){
  var notes = JSON.parse(localStorage.getItem(url))
  for(var i = 0; i < notes.length; i++){
    if(notes[i].seconds == seconds){
      notes.splice(i, 1);
      saveNotes(url, notes);
    }
  }
}

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes)
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if (message.method === "add note"){
    addNote(message.url, message.note)
  } else if (message.method === "remove note"){
    removeNote(message.url, message.seconds)
  }
  sendResponse(getNotes(message.url))

})

chrome.browserAction.setPopup({popup: "popup.html"})

