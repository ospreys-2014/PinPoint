PinPoint.NoteController = function(){
	this.notes = []
};

PinPoint.NoteController.addNote = function(note){
	this.notes.push(note);
};

PinPoint.NoteController.getTime = function(pageDetails){
	var time = pageDetails.time;
	return time;
};
