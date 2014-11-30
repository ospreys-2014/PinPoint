PinPoint.NotePresenter = function(note) {
  this.note = note;
  this.rootNodeType = "tr";
  this.childNodeType = "td";
  this.linkNodeType = "a";
}

PinPoint.NotePresenter.prototype = {
  present: function() {
    var noteNode = document.createElement(this.rootNodeType),
    timeNode = document.createElement(this.childNodeType),
    contentNode = document.createElement(this.childNodeType);
    timeLink = document.createElement(this.linkNodeType);

    noteNode.className = "note";

    timeNode.className = 'note_time';

    timeLink.setAttribute('id', 'time_link');
    timeLink.setAttribute('href', this.note.timeUrl );
    timeLink.setAttribute('target', )
    timeLink.innerText = this.note.noteTime;

    contentNode.className = 'note_content';
    contentNode.textContent = this.note.noteContent;

    noteNode.appendChild(timeLink);
    noteNode.appendChild(contentNode);

    return noteNode;
  }
}
