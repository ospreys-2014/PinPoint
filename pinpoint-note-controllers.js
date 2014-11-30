//jenbex testing note controller functions without lack of note object blocking us
// var note = {noteTime: "", timeUrl: ""}

PinPoint.NoteController = function(){
	this.notes = []
	this.time = ""
};
//pushed new notes into notes array
PinPoint.NoteController.storeNote = function(note){
	this.notes.push(note);
};

PinPoint.NoteController.run = function(note){
	note.getUrl();
};

//gets time at moment when user hits create note button
PinPoint.NoteController.getTime = function(pageDetails){
	time = pageDetails.time;
	localStorage["time"] = time;
};

// assigns time passed from getTime to noteTime attribute
PinPoint.NoteController.giveTime = function(note, time){
	note.noteTime = time;
};

// assigns the formatted url to the note's timeUrl attribute.
PinPoint.NoteController.giveFormattedUrl = function(formattedUrl){
	console.log(formattedUrl)
	note.timeUrl = formattedUrl;
};

