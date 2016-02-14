//notes
$(document).ready(function(){
	$(."firstQuestions").fadeIn();
	$(."secondQuestions").hide();
	console.log("hi");
});

function advanceToSecondQuestions() {
	$(.'firstQuestions').fadeOut();
	$(.'secondQuestions').fadeIn();
}