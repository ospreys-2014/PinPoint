PinPoint.NoteController = function(){
	this.notes = [];
	chrome.tabs.query({active: true, currentWindow: true}, (function(tabs){
    this.url = tabs[0].url;
    this.notes = this.getNotes(this.url);
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

}
