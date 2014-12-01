function addNote(url, note) {
  if (localStorage[url] != null){
    getNotes(url)
    localStorage[url].push(note)
  } else {
    localStorage[url] = [note]
  }
}

function getNotes(url){
  if (localStorage[url] == null){
    return []
  } else {
    var retrievedObject = localStorage.getItem(url)
    return JSON.parse(retrievedObject)
  }
}
