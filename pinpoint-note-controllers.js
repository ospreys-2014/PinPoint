PinPoint.NoteController = function(){
	this.notes = [];

	chrome.tabs.query({active: true, currentWindow: true}, (function(tabs){
    url = tabs[0].url;
    this.notes = getNotes(url);
    this.defineView(new PinPoint.View());
    this.redraw();
	}).bind(this));
};

PinPoint.NoteController.prototype = {
	defineView: function(view) {
		this.view = view;
	},

	redraw: function() {
		this.view.redraw(this);
	},

}
