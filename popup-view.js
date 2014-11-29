PinPoint.View = function(){
  //Steven's storeListDOMRoot is equivalent to our noteList
  this.noteListDOMRoot = document.getElementsByTagName('table');
}

PinPoint.View.prototype = {
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
}
