PinPoint.View = function(){
  //Steven's storeListDOMRoot is equivalent to our noteList
  this.noteListDOMRoot = document.getElementsByTagName('table');

}

//the 'notes' argument will be an array of parsed JSON note objects
PinPoint.View.prototype = {
  loadNotesFromDatabase: function(notes) {
    // this.noteList.appendChild(newNode)
    controller = new PinPoint.NoteController(notes);
    //At this point you can call 'controller.notes' and get an array of all the note objects.
    for (i=0, i <= controller.length, i++) {

    }

  }

}



//Steven's code that we definitely need:
//dataSource is the controller
populateNoteList: function(dataSource) {
  var noteListParent = this.noteListDOMRoot;

  while (noteListParent.firstChild) {
      noteListParent.removeChild(noteListParent.firstChild);
    }
  dataSource.noteList.forEach(function(note) {
    var newNode = new PinPointApp.NotePresenter(note).present();
    noteListParent.appendChild(newNode);
  });
}
