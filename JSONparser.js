function addNote(url, note) {
  console.log("add note url and note", url, note);
  var noteObjects = getNotes(url);
  console.log(getNotes(url));
  console.log("noteObjects", noteObjects);
  noteObjects.push(note);
  saveNotes(url, noteObjects);
}

function getNotes(url){
  console.log("get notes", url);
  if (localStorage[url] == null){
    console.log("in the IF statement");
    return []
  } else {
    console.log("in the ELSE statement");
    var retrievedObject = localStorage.getItem(url)
    return JSON.parse(retrievedObject)
    console.log(retrievedObject);
  }
}

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes)
}
