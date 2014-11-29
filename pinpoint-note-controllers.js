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

var note = {noteTime: ""}

PinPoint.NoteController.giveTime = function(note, time){
	note.noteTime = time;
};

PinPoint.NoteController.getUrl = function(){
	var url = ""
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		url = tabs[0].url;
		PinPoint.NoteController.formatTimeUrl(url)
	});
};

PinPoint.NoteController.formatTimeUrl = function(url){
	console.log(url);
};

