var PinPoint = PinPoint || {};
var videos = document.querySelectorAll("video");



PinPoint.Widget = function(video){
	var video = video;
	var fullScreenButton = document.getElementsByClassName("ytp-button ytp-button-fullscreen-enter");
	fullScreenButton[0].addEventListener('click', function(){
		setTimeout(function(){
			video.style.transform = "translate(180px) scale(0.895, 1.0)";
		}, 1000)

	})
}


PinPoint.Widget.prototype = {

	drawFullScreenOverlay: function(){
		var overlay = document.createElement("div");
		overlay.setAttribute('id', "fullscreen-overlay");
		overlay.style.height = "500px";
		overlay.style.width = "500px";
		overlay.style.backgroundColor = "red";
		overlay.zIndex = 5e6;
		body.appendChild(overlay);
	}

}

for (var i = 0; i < videos.length; i++){
	new PinPoint.Widget(videos[i]).drawFullScreenOverlay();
}