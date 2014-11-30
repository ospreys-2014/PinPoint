PinPoint.NotePresenter = function(note) {
  this.note = note;
  this.rootNodeType = "tr";
  this.childNodeType = "td";
}

PinPoint.NotePresenter.prototype = {
  present: function() {
    var noteNode = document.createElement(this.rootNodeType),
    timeNode = document.createElement(this.childNodeType),
    contentNode = document.createElement(this.childNodeType);

    noteNode.className = "note";

    timeNode.className = 'note_time';
    timeNode.textContent = this.note.noteTime;

    contentNode.className = 'note_content';
    contentNode.textContent = this.note.noteContent;

    noteNode.appendChild(timeNode);
    noteNode.appendChild(contentNode);

    return noteNode;
  }
}
