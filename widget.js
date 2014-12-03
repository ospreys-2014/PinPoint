var PinPoint = PinPoint || {};


PinPoint.Widget = function(video){
	this.video = video;
  this.youTubeVideoContainer = video.parentNode
	this.video.addEventListener('mouseenter', function(event){
    this.drawSideBar()
    chrome.tabs.insertCSS({file: "pinpoint.css"});

	}.bind(this));
	// this.video.addEventListener('mouseleave', function(event){
		if (event.fromElement === this.video && event.toElement != this.sideBar) {
			this.destroySideBar()
		}
	// }.bind(this));
}

PinPoint.Widget.prototype = {
	drawScreenIcon: function(){
		this.icon = document.createElement("div");
		this.icon.addEventListener('click', this.onIconClick.bind(this));
		this.icon.style.height = "100px";
		this.icon.style.width = "100px";
		this.icon.style.position = "absolute";
		this.icon.style.top = this.video.offsetTop + "px";
		this.icon.style.left = this.video.offsetLeft + "px";
		this.icon.style.backgroundColor = "red";
		this.icon.style.zIndex = 5e6;
		this.video.offsetParent.appendChild(this.icon);
	},

	onIconClick: function(event){
		event.stopPropagation();
		this.icon.style.display = "none";
		this.transformScreen();
		this.sideBar.style.display = "block"
	},

	onSideBarClick: function(event){
		event.stopPropagation();
	},

	drawSideBar: function(){
		if (!this.sideBar) {
			this.sideBar = document.createElement("div");
			this.sideBar.setAttribute('id', "sideBar")
			this.sideBar.addEventListener('click', this.onSideBarClick.bind(this));
			this.sideBar.style.display = "block";
			this.sideBar.style.width = "11.78em";
			this.sideBar.style.position = "absolute";
			this.sideBar.style.top = this.video.offsetTop + "px";
			this.sideBar.style.left = this.video.offsetLeft + "px";
			this.sideBar.style.backgroundColor = "rgb(37,37,37)";
			this.sideBar.style.zIndex = 5e6;
			this.video.offsetParent.appendChild(this.sideBar);
			this.drawForm();
			this.drawTable();
			this.appendNotes();
		}
	},

	destroySideBar: function(){
		this.sideBar.parentNode.removeChild(this.sideBar);
		this.sideBar = null
	},

	drawForm: function(){
		this.form = document.createElement("form");
		this.form.setAttribute('id',"add-note");
		this.form.addEventListener('submit', this.createNote.bind(this));

		this.input = document.createElement("input");
		this.input.setAttribute('type', 'text');
		this.input.setAttribute('class', 'note-input')
		// Stops youtube keyboard shortcuts from interfering when typing a comment.
		this.input.addEventListener('keypress', function(event){
			event.stopPropagation();
		})

		this.submit = document.createElement("input");
		this.submit.setAttribute('type',"submit");
		this.submit.setAttribute('id',"save");
		this.submit.setAttribute('value',"Save note");

		this.sideBar.appendChild(this.form);
		this.form.appendChild(this.input);
		this.form.appendChild(this.submit);
		this.sideBar.appendChild(this.form);
	},

	drawTable: function() {
		this.tableContainer = document.createElement("div");
		this.tableContainer.setAttribute('id', "all-notes");
		this.table = document.createElement("table");
		this.table.setAttribute('id', 'notes-table');
		this.tableContainer.appendChild(this.table);
		this.sideBar.appendChild(this.tableContainer);
	},

	createNote: function(event){
    event.preventDefault();
		var noteContentFromForm = this.input.value;
    var time = document.getElementsByClassName('ytp-time-current')[0].innerHTML
    var note = {
      noteTime: time,
      content: noteContentFromForm,
      seconds: this.video.currentTime,
    };
    chrome.runtime.sendMessage({
    	method: "add note",
    	url: this.getUrl(),
    	note: note
    }, this.appendNotes.bind(this));
    this.input.value = "";
	},

  displayNotes: function(notes){
  	this.notes = notes
  },

  appendNotes: function(){
		this.notesDiv = document.createElement("div");
		this.notesDiv.setAttribute('id',"all-notes");

		chrome.runtime.sendMessage({ url: this.getUrl() }, function(notes){
  	this.table.innerHTML = ""
  		for (note of notes) {
      	var node = new PinPoint.NotePresenter(note).present();
     		this.table.appendChild(node);
    	}
		}.bind(this))
		this.assignDeleteListeners()
  },

  getUrl: function(){
  	// other video source url's in if conditional
  	if (this.video.dataset.youtubeId){
  		var url = new URL("https://www.youtube.com/watch")
  		url.search = "v=" + this.video.dataset.youtubeId
  		return url.toString()
		} else {
			return this.video.src
		}
  },

  assignDeleteListeners: function(){
    console.log("in assign delete listeners")
    var deleteButtons = document.getElementsByClassName("delete");
    console.log(deleteButtons)
    for(var i=0; i < deleteButtons.length; i++) {
    	console.log("in for loop")
      deleteButtons[i].addEventListener("click", this.sendToRemoveNote(i));
      console.log("clicked!")
    };
  },

	sendToRemoveNote: function(index){
		console.log("In send to remove note")
		var seconds = deleteButtons[index].dataset.seconds
		// return function(){
			chrome.runtime.sendMessage({
			method: "remove note",
			url: this.getUrl(),
			seconds: seconds
			}, this.appendNotes.bind(this))
		// };
	}
}

function main(){
	var videos = document.querySelectorAll("video");

	for (var i = 0; i < videos.length; i++){
		videos[i].pinPointWidget = videos[i].pinPointWidget || new PinPoint.Widget(videos[i]);
		console.log(window.location)
		console.log(videos[i])
	}
}

window.addEventListener('beforeunload', console.log.bind(console));

main();
