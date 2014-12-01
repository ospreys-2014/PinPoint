function addNote(url, note) {
  var array = [];
  if (localStorage[url] != null){
    array.concat(getNotes(url))
    array.push(note);
    localStorage[url] = JSON.stringify(array);
  } else {
    localStorage[url] = array;
    localStorage[url] = JSON.stringify(array);
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
