function addNote(url, note) {
  var baseUrl = getBaseUrl(url)
  var noteObjects = getNotes(baseUrl);
  noteObjects.push(note);
  saveNotes(baseUrl, noteObjects);
}

function getNotes(url){
  var baseUrl = getBaseUrl(url)
  if (localStorage[baseUrl] == null){
    return []
  } else {
    var retrievedObject = localStorage.getItem(baseUrl)
    return JSON.parse(retrievedObject)
  }
}

function deleteNote(url, s){
  var notes = JSON.parse(localStorage.getItem(url))
  for(var i = 0; i < notes.length; i++){
    if(notes[i].seconds == s){
      notes.splice(i, 1);
      saveNotes(url, notes);
    }
  }
}

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes)
}

function getBaseUrl(url){
  if (url.match(/[&]/)){
    url = url.substr(0, url.indexOf("&"))
    return url
  } else {
    return url
  }
}
