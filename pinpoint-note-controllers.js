var note = {noteTime: "", timeUrl: ""} //jenbex testing note controller functions without lack of note object blocking us
//LocalStorage is parsed into note objects and passed into the
//NoteController to be shown in the pop-up.
PinPoint.NoteController = function(notes){
	this.notes = [];
	this.notes = this.notes.concat(notes)
};

Pinpoint.NoteController.prototype = {
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

//gets time at moment when user hits create note button
PinPoint.NoteController.getTime = function(pageDetails){
	time = pageDetails.time;
	PinPoint.NoteController.giveTime(time);
};


// assigns time passed from getTime to noteTime attribute
PinPoint.NoteController.giveTime = function(note, time){
	note.noteTime = time;
};

//gets url from current page
PinPoint.NoteController.getUrl = function(note){
	var url = ""
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		url = tabs[0].url;
		PinPoint.NoteController.formatTimeUrl(note, url)
	});
};

// formats the noteTime and adds it to the url passed from getUrl to create the url that
//will allow user to jump to desired time
PinPoint.NoteController.formatTimeUrl = function(note, url){
	var formattedTime = ""
	if (note.noteTime.length > 5){
		formattedTime = note.noteTime.replace(":", "h").replace(":", "m").concat("s")
		var formattedUrl = url + "&t=" + formattedTime;
	}
	else{
		formattedTime = note.noteTime.replace(":", "m").concat("s")
		var formattedUrl = url + "&t=" + formattedTime;
	}

	PinPoint.NoteController.giveFormattedUrl(formattedUrl);
};

// assigns the formatted url to the note's timeUrl attribute.
PinPoint.NoteController.giveFormattedUrl = function(formattedUrl){
	note.timeUrl = formattedUrl;
};

