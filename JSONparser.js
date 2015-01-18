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

function removeNote(url, index){
  var notes = JSON.parse(localStorage.getItem(url));
  notes.splice(index, 1);
  saveNotes(url, notes);
}

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes);
}

window.onload = function(){
  var onButton = document.getElementById('on');
  var offButton = document.getElementById('off');

  onButton.addEventListener('click', function(){
    localStorage["enabled"] = true
    console.log(localStorage.enabled, "enabled should be true")
  });

  offButton.addEventListener('click', function(){
    localStorage["enabled"] = false
    console.log(localStorage.enabled, "enabled should be false")
  });  
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  var enabled = localStorage.enabled === "true"
  if (message.method === "add note"){
    addNote(message.url, message.note);
  }
  else if (message.method === "remove note"){
    removeNote(message.url, message.index);
  }
  // else if (message.method === "pinpoint-enabled") {
  // chrome.browserAction.setPopup({popup: "popup-disabled.html"});
  // }
  sendResponse({notesArray: getNotes(message.url), enable: enabled});
});

chrome.browserAction.setPopup({popup: "popup.html"});


