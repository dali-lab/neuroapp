//notes
$(document).ready(function(){
	$("#firstQuestions").fadeIn();
	$('.notFirst').hide();
	console.log("hi");
	event.preventDefault();
});

function checkIfApplicable() {
	$('#firstQuestions').fadeOut();
	if ($("#check1").attr('checked') || $("#check2").attr('checked')){
		$("#applicable").delay(500).fadeIn();
	}
	else{
		$("#notApplicable").delay(500).fadeIn();
	}
	event.preventDefault();
}

function advanceToSecondQuestions() {
	$('#applicable').fadeOut();
	$('#notApplicable').fadeOut();
	$('#secondQuestions').delay(500).fadeIn();
	event.preventDefault();
}

function advanceToThirdQuestions() {
	if ($('#age').val() == "none" || $('#sex').val() == "none"){
		$('#error').delay(500).fadeIn();
		event.preventDefault();
	}else{
		$('#secondQuestions').fadeOut();
		$('#error').fadeIn();
		$('#error').fadeOut();
		$('#thirdQuestions').delay(500).fadeIn();
		event.preventDefault();
	}
}

function advanceToFourthQuestions() {
	if ($("#coma").val() == "yes"){
		$('#thirdQuestions').fadeOut();
		$('#fourthQuestions').delay(500).fadeIn();
		event.preventDefault();
	}
}