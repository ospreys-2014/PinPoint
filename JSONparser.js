function addNote(url, note) {
  var array = [];
  if (localStorage[url] != null){
    array.concat(getNotes(url));
    array.push(note);
    localStorage[url] = JSON.stringify(array);
  } else {
    localStorage[url] = array;
    localStorage[url] = JSON.stringify(array);
  }
}

function getNotes(url){
  if (localStorage[url] == null){
    console.log("in the if of getNotes");
    return []
  } else {
    var retrievedObject = localStorage.getItem(url)
    console.log(retrievedObject);
    return JSON.parse(retrievedObject)
  }
}
