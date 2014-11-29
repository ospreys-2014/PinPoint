PinPoint.NoteController = function(){
	this.notes = []
	this.time = ""
};

PinPoint.NoteController.storeNote = function(note){
	this.notes.push(note);
};


PinPoint.NoteController.getTime = function(pageDetails){
	time = pageDetails.time;
	PinPoint.NoteController.giveTime(time);
};

var note = {noteTime: "", timeUrl: ""}

PinPoint.NoteController.giveTime = function(note, time){
	note.noteTime = time;
};

PinPoint.NoteController.getUrl = function(note){
	var url = ""
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		url = tabs[0].url;
		PinPoint.NoteController.formatTimeUrl(note, url)
	});
};

PinPoint.NoteController.formatTimeUrl = function(note, url){
	console.log(note);
	var formattedTime = ""
	if (note.noteTime.length > 5){
		formattedTime = note.noteTime.replace(":", "h").replace(":", "m").concat("s")
		var formattedUrl = url + "t=" + formattedTime;
	}
	else{
		formattedTime = note.noteTime.replace(":", "m").concat("s")
		var formattedUrl = url + "t=" + formattedTime;
	}

	console.log(formattedUrl);
};

