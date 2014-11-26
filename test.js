$(document).ready(function(){
	$target = $('#watch8-action-buttons');
	$('.text-box').on('click', '#ext-btn', function(event){
		event.preventDefault();
		$target.hide();
		console.log("success");
	})
});

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//   });
// });
