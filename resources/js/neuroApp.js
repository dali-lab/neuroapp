//notes
$(document).ready(function(){
	$(."firstQuestions").fadeIn();
	$(."secondQuestions").hide();
});

function advanceToSecondQuestions() {
	$(.'firstQuestions').fadeOut();
	$(.'secondQuestions').fadeIn();
}