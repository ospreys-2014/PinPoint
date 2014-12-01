function addNote(url, note) {
  console.log("yaay")
  var noteObjects = getNotes(url)
  console.log("noteObjects before push", noteObjects)
  noteObjects.push(note)
  console.log("noteObjects after push", noteObjects)
  saveNotes(url, noteObjects)
}

function getNotes(url){
  if (localStorage[url] == null){
    console.log("I'm in the IF of getNotes");
    return []
  } else {
    var retrievedObject = localStorage.getItem(url)
    console.log("I'm in the ELSE of getNotes");
    return JSON.parse(retrievedObject)
  }
}

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes)
}
