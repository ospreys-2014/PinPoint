var PinPoint = PinPoint || {};
var videos = document.querySelectorAll("video")



PinPoint.Widget = function(video){
	var video = video
	var fullScreenButton = document.getElementsByClassName("ytp-button ytp-button-fullscreen-enter")
	fullScreenButton[0].addEventListener('click', function(){
		setTimeout(function(){
			video.style.transform = "translate(180px) scale(0.895, 1.0)"
		}, 700)

	})
}

for (var i = 0; i < videos.length; i++){
	new PinPoint.Widget(videos[i])
}
