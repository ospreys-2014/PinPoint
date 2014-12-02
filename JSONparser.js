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

function saveNotes(url, notes) {
  localStorage[url] = JSON.stringify(notes)
}

// TODO: use source of the video element instead
function getBaseUrl(url){
  if (url.match(/[&]/)){
    url = url.substr(0, url.indexOf("&"))
    return url
  } else {
    return url
  }
}
