time = ""

PinPoint.NoteController = function(){
	this.notes = []
	this.time = ""
};

PinPoint.NoteController.storeNote = function(note){
	this.notes.push(note);
};


PinPoint.NoteController.getTime = function(pageDetails){
	time = pageDetails.time;
	// console.log(time)
	return time;
};


PinPoint.NoteController.giveTime = function(){
	// note.noteTime = time;
	console.log(time);
	// console.log(this.time)
};


