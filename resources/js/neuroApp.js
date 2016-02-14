//notes
$(document).ready(function(){
	$(."firstQuestions").fadeIn();
});

function advanceToSecondQuestions() {
	$(.'firstQuestions').fadeOut();
	$(.'secondQuestions').fadeIn();
}