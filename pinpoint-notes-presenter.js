PinPoint.NotePresenter = function(note) {
  this.note = note;
  this.nodeType = "div";
  this.linkNodeType = "a";
}

PinPoint.NotePresenter.prototype = {
  present: function() {
    // Creates a 'div' node that represents a note
    var noteNode = document.createElement(this.nodeType),
    // Creates a 'div' node that represents the time and delete button in the note - when var is included, errors are thrown for some reason.
    timeAndDeleteNode = document.createElement(this.nodeType);
    // Creates an 'a' node to link to a point in the video - when var is included, errors are thrown for some reason.
    timeLink = document.createElement(this.linkNodeType);
    //Creates delete link
    // deleteNode = document.createElement(this.childNodeType);
    deleteLink = document.createElement(this.linkNodeType);
    //Creates content div
    contentNode = document.createElement(this.nodeType);
    //Creates content link
    contentLink = document.createElement(this.linkNodeType)


    // Assigns class names
    noteNode.className = "pinpoint-note";
    timeAndDeleteNode.className = 'pinpoint-time-and-delete';
    contentNode.className = 'pinpoint-content';
    // Gives the link an id.
    timeLink.setAttribute('class', 'pinpoint-timelink');
    contentLink.setAttribute('class', 'pinpoint-contentlink')
    // Sets the link to a specific time within the video
    timeLink.setAttribute('href', this.note.noteUrl );
    contentLink.setAttribute('href', this.note.noteURL)


    // Creates the text for the link

    timeLink.innerHTML = this.note.noteTime
    contentLink.innerHTML = this.note.content
    // + "</span>" + "<span class='pinpoint-content'>" + this.note.content + "</span>";
    // Append timeLink and deleteLink into the div 'timeAndDeleteNode'
    timeAndDeleteNode.appendChild(deleteLink);
    timeAndDeleteNode.appendChild(timeLink);
    contentNode.appendChild(contentLink);
    // Append the div'timeAncDeleteNode' to the div 'noteNode'
    noteNode.appendChild(contentNode);
    noteNode.appendChild(timeAndDeleteNode);

    //Sets attributes for delete link
    deleteLink.setAttribute('class', 'pinpoint-delete');
    deleteLink.setAttribute('href', '#');
    deleteLink.setAttribute('data-seconds', this.note.seconds);
    deleteLink.innerHTML = "x";

    return noteNode;
  }
}
