PinPoint.NoteController = function(notes){
	this.notes = [];
	this.notes = this.notes.concat(notes)
};

PinPoint.NoteController.prototype = {
	defineView: function(view) {
		this.view = view;
	},

	redraw: function() {
		this.view.redraw(this);
	}
}

//pushed new notes into notes array
PinPoint.NoteController.storeNote = function(note){
	this.notes.push(note);
};

PinPoint.NoteController.run = function(note){
	  note.assignURL();
    note.assignTime();
    note.formatTimeUrl();
    note.assignTimeUrl();
    note.assignContent();
    note.assignStorageKey();
    storeToLocalStorage(note);
};

//gets time at moment when user hits create note button
PinPoint.NoteController.getTime = function(pageDetails){
	time = pageDetails.time;
	localStorage["time"] = time;
};

PinPoint.NoteController.getUrl = function(){
	var url = ""
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    url = tabs[0].url;
    localStorage["url"] = url;
  });
};
