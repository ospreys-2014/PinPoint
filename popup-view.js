PinPoint.View = function(){
  //Steven's storeListDOMRoot is equivalent to our noteList
  this.noteListDOMRoot = document.getElementById("notes-table")
}

PinPoint.View.prototype = {
//dataSource is the controller
  redraw: function(dataSource) {
    this.populateDOMNoteList(dataSource);
  },

  populateDOMNoteList: function(dataSource) {
    var noteListParent = this.noteListDOMRoot;

    // while (noteListParent.firstChild) {
    //     noteListParent.removeChild(noteListParent.firstChild);
    //   }
    dataSource.notes.forEach(function(note) {
      var newNode = new PinPoint.NotePresenter(note).present();
      console.log(newNode)
      noteListParent.appendChild(newNode);
    });
  }
}
