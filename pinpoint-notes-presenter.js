PinPoint.NotePresenter = function(note, index, url, refreshFunc) {
  this.note = note;

  this.nodeType = "div";
  this.index = index;
  this.url = url;
  this.refreshFunc = refreshFunc;

  this.rootNodeType = "tr";
  this.childNodeType = "td";
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
    deleteLinkNode.addEventListener('click', function(){
       chrome.runtime.sendMessage({
            method: "remove note",
            url: this.url,
            index: this.index,
            seconds: this.note.seconds,
        }, this.refreshFunc)
    }.bind(this));
    return noteNode;
  }
}
