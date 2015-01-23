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
  // instead of index here, cut by the seconds value 
  // var notes = JSON.parse(localStorage.getItem(url));
  // notes.splice(index, 1);
  // saveNotes(url, notes);
}

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes);
}

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
    removeNote(message.url, message.index);
  }
  sendResponse({notesArray: getNotes(message.url), enable: enabled});
});

chrome.browserAction.setPopup({popup: "popup.html"});


