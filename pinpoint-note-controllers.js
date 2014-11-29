// time = ""

PinPoint.NoteController = function(){
	this.notes = []
	this.time = ""
};

PinPoint.NoteController.storeNote = function(note){
	this.notes.push(note);
};


PinPoint.NoteController.getTime = function(pageDetails){
	time = pageDetails.time;
	console.log(time)
	PinPoint.NoteController.giveTime(time);
};


PinPoint.NoteController.giveTime = function(time){
	var newtime = time;
	console.log(newtime);
};

PinPoint.NoteController.getUrl = function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		url[0] = tabs[0].url;
		console.log(url);
		//We can console.log the url here, but since this call is
		//asychronous we can't actually access the url outside this query
	});
};

// PinPoint.NoteController.formatTimeUrl = function(url){
// 	console.log(url[0].url);
// };

