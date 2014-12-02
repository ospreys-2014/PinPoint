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
    console.log(noteObjects);
  }
}

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes)
}
