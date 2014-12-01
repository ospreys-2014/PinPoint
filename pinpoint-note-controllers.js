PinPoint.NoteController = function(){
	console.log("Controller Constructor", this);
	this.notes = [];
	// this.notes = this.notes.concat()
	// var url = ""
  	chrome.tabs.query({active: true, currentWindow: true}, (function(tabs){
    	this.url = tabs[0].url;
	    this.searchLocalStorage();
		controller.defineView(new PinPoint.View());
		controller.redraw();
  	}).bind(this));
};

PinPoint.NoteController.prototype = {
	defineView: function(view) {
		this.view = view;
	},

	redraw: function() {
		this.view.redraw(this);
	},
	//When we make key just URL, match in parseLocalStorage - combine search and parse
	searchLocalStorage: function (){
	    var key = this.url + "/";
	    var keys = []
	    for (i in localStorage) {
	        if (i.match(/^\w+\:\/\/www.youtube.com\/watch\?v=.+\//) == key) {
	            keys.push(i);
	        }
	    }
	    this.parseLocalStorage(keys);
	},

	parseLocalStorage: function (keys){
		console.log(this);
	    for (key of keys) {
	        var retrievedObject = localStorage.getItem(key);
	        this.notes.push(JSON.parse(retrievedObject));
	    }
	},
}

//pushed new notes into notes array
PinPoint.NoteController.storeNote = function(note){
	this.notes.push(note);
};

PinPoint.NoteController.run = function(){
	note.assignURL();
    note.assignTime();
    note.formatTimeUrl();
    note.assignTimeUrl();
    note.assignContent();
    note.assignStorageKey();
    note.storeToLocalStorage();
};

//gets time at moment when user hits create note button
// PinPoint.NoteController.getTime = function(pageDetails){
// 	time = pageDetails.time;
// 	localStorage["time"] = time;
// };

PinPoint.NoteController.getUrl = function(){
	var url = ""
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    url = tabs[0].url;
    localStorage["url"] = url;
    console.log("Setting url to localStorage", url);
      searchLocalStorage(localStorage["url"]);
	  controller.defineView(new PinPoint.View());
	  controller.redraw();
  });
};
