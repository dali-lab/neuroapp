//notes
$(document).ready(function(){
	$("#firstQuestions").fadeIn();
	$("#secondQuestions").hide();
	console.log("hi");
	event.preventDefault();
});

function advanceToSecondQuestions() {
	$('#firstQuestions').fadeOut();
	$('#secondQuestions').delay(500).fadeIn();
	event.preventDefault();
}