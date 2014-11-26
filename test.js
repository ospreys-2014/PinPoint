$(document).ready(function(){
	$target = $('#watch8-action-buttons');
	$('#watch8-action-buttons').click('span', function(event){
		event.preventDefault();
		$target.hide();
		console.log("success");
	})
});