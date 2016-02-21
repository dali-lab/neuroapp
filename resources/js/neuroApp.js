var hyperammonemia = false;
var hypoglycemia = false;

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
		$('#error').fadeOut();
		$('#thirdQuestions').delay(500).fadeIn();
		event.preventDefault();
	}
}

function advanceToFourthQuestions() {
	if ($("#growthFailure").attr('checked')){
		hyperammonemia = true;
		hypoglycemia = true;
	} 
	if ($("#hepatomegaly").attr('checked')){
		hyperammonemia = true;
	}
	if ($("#spasticity").attr('checked')){
		hypoglycemia = true;
	}
	if ($("#neuropathy").attr('checked')){
		hypoglycemia = true;
	}
	if ($("#myopathyCardiomyopathy").attr('checked')){
		hypoglycemia = true;
		hyperammonemia = true;
	}
	if ($("#coma").val() == "yes"){
		$('#thirdQuestions').fadeOut();
		$('#fourthQuestions').delay(500).fadeIn();
		event.preventDefault();
	}
}