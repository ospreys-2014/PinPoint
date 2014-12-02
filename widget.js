var PinPoint = PinPoint || {};


PinPoint.Widget = function(video){
	this.video = video;
	// this.video.style.transform = "translate(180px) scale(0.895, 1.0)";
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
	},

	transformScreen: function(){
		this.video.style.transform = "translate(180px) scale(0.895, 1.0)";
	},

	drawForm: function(){
		var form = document.createElement("input");
		form.setAttribute('type',"text");
		form.setAttribute('name',"username");

		var submit = document.createElement("input");
		submit.setAttribute('type',"submit");
		submit.setAttribute('value',"Submit");

		this.sideBar.appendChild(form);
		this.sideBar.appendChild(submit);
	},
}

function main(){
	var videos = document.querySelectorAll("video");

	for (var i = 0; i < videos.length; i++){
		videos[i].pinPointWidget = videos[i].pinPointWidget || new PinPoint.Widget(videos[i]);
	}
}


main();