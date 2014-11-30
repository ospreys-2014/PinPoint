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
    dataSource.notes.forEach(function(note) {
      var newNode = new PinPoint.NotePresenter(note).present();
      noteListParent.appendChild(newNode);
    });
  }
}
