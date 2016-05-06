var hyperammonemia = false;
var hypoglycemia = false;
var age = -1;

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
		if ($('#age').val() == "newborn") age = 1;
		if ($('#age').val() == "infant") age = 2;
		if ($('#age').val() == "toddler") age = 3;
		if ($('#age').val() == "childhood") age = 4;
		if ($('#age').val() == "adolescent") age = 5;
		if ($('#age').val() == "adult") age = 6;
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
	} else if (hypoglycemia === true) {
		$('#thirdQuestions').fadeOut();
		$('#fifthQuestions').delay(500).fadeIn();
		event.preventDefault();
	}
}

function advanceToFourthFromComa() {
	if (hypoglycemia === true) {
		$('#fourthQuestions').fadeOut();
		$('#fifthQuestions').delay(500).fadeIn();
		event.preventDefault();
	}
}

function advanceToSixth() {
	if (hypoglycemia === true) {
		$('#fifthQuestions').fadeOut();
		$('#sixthQuestions').delay(500).fadeIn();
		event.preventDefault();
	}
}

function rankDiseases() {
		alert(fattyAcidOxidationDisordera());
}

function fattyAcidOxidationDisordera() {
	rank = 0;

	//Check age requirement
		if (age > 0){
		return -2;
	} 

	//Check lab requirements
	if (!$("#low_ketones").prop("checked")) {
		return -1;
	}

	//Add to Ranking for optionals
	if ($("#seizures").attr('checked')) rank+=1;
	if ($("#hepatomegaly").attr('checked')) rank+=1;
	if ($("#myopathyCardiomyopathy").attr('checked')) rank+=1;
	if ($("#heartFailure").attr('checked')) rank+=1;
	if ($("#retinalAbnormalities").attr('checked')) rank+=1;
	if ($("#muscleWeakness").attr('checked')) rank+=1;
	if ($("#rhabdomyolysis").attr('checked')) rank+=1;
	if ($("#myoglobinuria").attr('checked')) rank+=1;
	return rank;
}