PinPoint.NotePresenter = function(note) {
  this.note = note;
  this.rootNodeType = "tr";
  this.childNodeType = "td";
  this.linkNodeType = "a";
}

PinPoint.NotePresenter.prototype = {
  present: function() {
    // Creates a 'tr' node that represents a note
    var noteNode = document.createElement(this.rootNodeType),
    // Creates a 'td' node that represents the time and content in the note - when var is included, errors are thrown for some reason.
    timeAndContentNode = document.createElement(this.childNodeType);
    // Creates an 'a' node to link to a point in the video - when var is included, errors are thrown for some reason.
    linkNode = document.createElement(this.linkNodeType);
    //Creates delete link
    deleteNode = document.createElement(this.childNodeType);
    deleteLinkNode = document.createElement(this.linkNodeType)


    // Assigns class names
    noteNode.className = "pinpoint-note";
    timeAndContentNode.className = 'pinpoint-note_info';

    // Gives the link an id.
    linkNode.setAttribute('class', 'pinpoint-link');
    // Sets the link to a specific time within the video
    linkNode.setAttribute('href', this.note.url+"#t="+this.note.seconds);
    // Opens the link in a new tab
    // linkNode.setAttribute('target', "_blank")
    // Creates the text for the link
    linkNode.innerHTML = "<span id='time'>" + this.note.noteTime + "</span>" + "<span id='content'>" + this.note.content + "</span>";

    // Append the td 'timeAncContentNode' to the tr 'noteNode'
    noteNode.appendChild(timeAndContentNode);
    // Append the 'timeAncContentNode' to the tr 'noteNode'
    timeAndContentNode.appendChild(linkNode);

    deleteLinkNode.setAttribute('class', 'pinpoint-delete');
    deleteLinkNode.setAttribute('href', '#');
    deleteLinkNode.setAttribute('data-seconds', this.note.seconds);
    deleteLinkNode.innerHTML = "x";
    deleteNode.appendChild(deleteLinkNode);
    noteNode.appendChild(deleteNode);

    return noteNode;
  }
}
