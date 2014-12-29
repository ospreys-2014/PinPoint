function addNote(url, note) {
  var noteObjects = getNotes(url);
  noteObjects.push(note);
  saveNotes(url, noteObjects);
}

function getNotes(url){
  if (localStorage[url] === null){
    return [];
  } else {
    var retrievedObject = localStorage.getItem(url);
    return JSON.parse(retrievedObject);
  }
}

function removeNote(url, index){
  var notes = JSON.parse(localStorage.getItem(url));
  notes.splice(index, 1);
  saveNotes(url, notes);
}

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes);
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  console.log("message: ", message);  
  if (message.method === "add note"){
    console.log("in the add note conditional of the listener");
    addNote(message.url, message.note);
  }
  else if (message.method === "remove note"){
    removeNote(message.url, message.index);
  }
  else if (message.method === "pinpoint-enabled") {
  chrome.browserAction.setPopup({popup: "popup-disabled.html"});
  }
  sendResponse(getNotes(message.url));
});

chrome.browserAction.setPopup({popup: "popup-enabled.html"});


