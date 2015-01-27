// NotePresenter class used to draw a note called in appendNotes
PinPoint.NotePresenter = function(note, url, refreshFunc) {
  this.note = note;
  this.url = url;
  this.refreshFunc = refreshFunc;
  this.nodeType = "div";
  this.linkNodeType = "a";
  this.buttonNodeType = "button";
}

PinPoint.NotePresenter.prototype = {
  present: function() {
    // Creates a 'div' node that represents a note
    var noteNode = document.createElement(this.nodeType),
    // Creates a 'div' node that represents the time and delete button in the note - when var is included, errors are thrown for some reason.
    timeAndDeleteNode = document.createElement(this.nodeType),
    // Creates an 'a' node to link to a point in the video - when var is included, errors are thrown for some reason.
    timeLink = document.createElement(this.linkNodeType),
    //Creates delete link
    // deleteNode = document.createElement(this.childNodeType);
    deleteLink = document.createElement(this.buttonNodeType),
    //Creates content div
    contentNode = document.createElement(this.nodeType),
    //Creates content link
    contentLink = document.createElement(this.linkNodeType);

    // Assigns class names
    noteNode.className = "pinpoint-note";
    timeAndDeleteNode.className = 'pinpoint-time-and-delete';
    contentNode.className = 'pinpoint-content';
    // Gives the link an id.
    timeLink.setAttribute('class', 'pinpoint-timelink');
    contentLink.setAttribute('class', 'pinpoint-contentlink')
    // Sets the link to a specific time within the video
    timeLink.setAttribute('href', this.note.url + "#t=" + this.note.seconds );
    contentLink.setAttribute('href', this.note.url + "#t=" + this.note.seconds)

    // Creates the text for the link
    timeLink.innerHTML = this.note.noteTime;
    contentLink.innerHTML = this.note.content;
    timeAndDeleteNode.appendChild(deleteLink);
    timeAndDeleteNode.appendChild(timeLink);
    contentNode.appendChild(contentLink);
    noteNode.appendChild(contentNode);
    noteNode.appendChild(timeAndDeleteNode);

    // Add delete link to note and fire message to popup.js
    // to remove note.
    deleteLink.setAttribute('class', 'pinpoint-delete');
    deleteLink.setAttribute('href', '#');
    deleteLink.setAttribute('data-seconds', this.note.seconds);
    deleteLink.innerHTML = "x";
    deleteLink.addEventListener('click', function(){
       chrome.runtime.sendMessage({
            method: "remove note",
            url: this.url,
            seconds: this.note.seconds,
        }, this.refreshFunc);
    }.bind(this));
    return noteNode;
  }
};