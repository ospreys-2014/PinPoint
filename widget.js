var PinPoint = PinPoint || {};


PinPoint.Widget = function(video){
	this.video = video;
	this.drawScreenIcon();
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
		this.drawSideBar();
		this.transformScreen();
	},

	onSideBarClick: function(event){
		event.stopPropagation();
	},

	drawSideBar: function(){
		this.sideBar = document.createElement("div");

		this.sideBar.addEventListener('click', this.onSideBarClick.bind(this));

		this.sideBar.style.display = "block";
		this.sideBar.style.height = "500px";
		this.sideBar.style.width = "100px";
		this.sideBar.style.position = "absolute";
		this.sideBar.style.top = this.video.offsetTop + "px";
		this.sideBar.style.left = this.video.offsetLeft + "px";
		this.sideBar.style.backgroundColor = "blue";
		this.sideBar.style.zIndex = 5e6;
		this.video.offsetParent.appendChild(this.sideBar);
		this.drawForm();
		this.drawTable();
	},

	transformScreen: function(){
		this.video.style.transform = "translate(180px) scale(0.895, 1.0)";
	},

	drawForm: function(){

		this.form = document.createElement("form");
		this.form.setAttribute('id',"add-note");

		this.form.addEventListener('submit', this.createNote.bind(this));

		this.input = document.createElement("input");
		this.input.setAttribute('type', 'text');
		this.input.setAttribute('class', 'note-input')

		// Stops youtube shortcuts
		this.input.addEventListener('keypress', function(event){
			event.stopPropagation();
		})

		this.submit = document.createElement("input");
		this.submit.setAttribute('type',"submit");
		this.submit.setAttribute('class',"save");
		this.submit.setAttribute('value',"Save note");

		this.sideBar.appendChild(this.form);
		this.form.appendChild(this.input);
		this.form.appendChild(this.submit);
	},

	drawTable: function() {
		var table = document.createElement("table");
		table.setAttribute('class', 'notes-table');
		this.sideBar.appendChild(table);
	},

	createNote: function(event){
    event.preventDefault();
		var video = document.querySelector("video");
		var noteContentFromForm = this.input.value;
      var note = {
        noteTime: document.getElementsByClassName('ytp-time-current')[0].innerHTML,
        content: noteContentFromForm,
        seconds: video.currentTime,
        noteUrl: formatNoteUrl(noteTime)
     	};
	},

	formatNoteUrl: function(time){
    var timeStamp = time
    var baseUrl = document.URL
    var formattedTime = ""
    var formattedUrl = ""
      if (timeStamp.length > 5){
        formattedTime = timeStamp.replace(":", "h").replace(":", "m").concat("s")
        formattedUrl = baseUrl + "&t=" + formattedTime;
      } else {
        formattedTime = timeStamp.replace(":", "m").concat("s")
        formattedUrl = baseUrl + "&t=" + formattedTime;
      }
    console.log(formattedUrl)
    return formattedUrl;
  },
}

chrome.runtime.sendMessage("hello", function(){

})


// PinPoint.updatePopup = function() {
//     var url = document.URL
//     // Create array of note objects belonging to current url; returns empty array if no notes present.
//     var notes = getNotes(url);
//     // Sorts the notes by time of video
//     notes.sort(function(a,b) { return a.seconds - b.seconds } );

//     var table = document.getElementById('notes-table');
//     table.innerHTML = '';
//     // Badge icon
//     chrome.browserAction.setBadgeText({text: notes.length.toString()});
//     chrome.browserAction.setBadgeBackgroundColor({color:[235, 105, 5, 220]});

//     for (note of notes) {
//       var node = new PinPoint.NotePresenter(note).present();
//       table.appendChild(node);
//     }

//     var links = document.getElementsByClassName("link");
//       for(var i=0;i< links.length; i++) {
//         links[i].addEventListener("click", tabUpdate(i));
//       };
//       function tabUpdate(i) {
//         return function(){
//         chrome.tabs.update(null, {url: links[i].href});
//       };
//     };
//   });
// };


function main(){
	var videos = document.querySelectorAll("video");

	for (var i = 0; i < videos.length; i++){
		videos[i].pinPointWidget = videos[i].pinPointWidget || new PinPoint.Widget(videos[i]);
	}
}

main();