var hyperammonemia = false;
var hypoglycemia = false;
var age = -1;

$(document).ready(function(){
	// $("#firstQuestions").fadeIn();
	$('.notFirst').hide();
	console.log("hi");
	event.preventDefault();
});

function firstQuestions() {
	$('#coverPage').fadeOut();
	$('#endPage').fadeOut();
	$("#firstQuestions").delay(500).fadeIn();
	event.preventDefault();
}

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

		// set age
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

	$('#thirdQuestions').fadeOut();
	if ($("#coma").val() == "yes"){
		$('#fourthQuestions').delay(500).fadeIn();
		event.preventDefault();
	} else if (hypoglycemia === true) {
		$('#fifthQuestions').delay(500).fadeIn();
		event.preventDefault();
	} else {
		endTest()
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

function endTest() {
	$('#endPage').delay(500).fadeIn();
	event.preventDefault();
}

function fattyAcidOxidationDisorder() {
	rank = 0;

	//Check age requirement
		if (age < 1){
		return -2;
	} 

	//Check lab requirements
	if (!$("#low_ketones").prop("checked") || 
		!($("#incomplete_ketones").prop("checked"))) {
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
	if ($("#reyeSyndrome").attr('checked')) rank+=1;
	if ($("#high_ammonia").prop("checked")) rank+=1;
	return rank;
}

function carnitineTransporterDeficiency () {
	rank = 0;

	//Check age requirement
		if (age < 2 && !($("#hypotonia").attr('checked'))){
		return -2;
	} 

	//Check lab requirements
	if (!($("#low_ketones").prop("checked")) ||
	 !($("#incomplete_ketones").prop("checked"))) {
		return -1;
	}

	//Add to Ranking for optionals
	if ($("#myopathyCardiomyopathy").attr('checked')) rank+=1;
	if ($("#muscleWeakness").attr('checked')) rank+=1;
	if ($("#rhabdomyolysis").attr('checked')) rank+=1;
	if ($("#liverDisease").attr('checked')) rank+=1;
	return rank;
}

function carnitinePalmitoylTransferaseDeficiency1 () {
	rank = 0;

	//Check age requirement
		if (age < 2){
		return -2;
	} 

	//Check lab requirements
	

	//Add to Ranking for optionals
	if ($("#liverDisease").attr('checked')) rank+=1;
	return rank;
}

function carnitinePalmitoylTransferaseDeficiency2 () {
	rank = 0;

	//Check age requirement
		if (age < 2 && !($("#hypotonia").attr('checked')) && !($("#liverDisease").attr('checked'))){
		return -2;
	} 

	//Check lab requirements
	if (!($("#low_ketones").prop("checked")) || 
		!($("#incomplete_ketones").prop("checked"))) {
		return -1;
	}

	//Add to Ranking for optionals
	if ($("#stupor").attr('checked')) rank+=1;
	if ($("#myopathyCardiomyopathy").attr('checked')) rank+=1;
	if ($("#muscleWeakness").attr('checked')) rank+=1;
	if ($("#rhabdomyolysis").attr('checked')) rank+=1;
	if ($("#myoglobinuria").attr('checked')) rank+=1;
	return rank;
}

function mildCarnitinePalmitoylTransferaseDeficiency2 () {
	rank = 0;

	//Check age requirement
		if (age < 5 && !($("#muscleWeakness").attr('checked'))){
		return -2;
	} 

	//Check lab requirements
	if (!($("#low_ketones").prop("checked")) || 
		!($("#incomplete_ketones").prop("checked"))) {
		return -1;
	}

	//Add to Ranking for optionals
	if ($("#rhabdomyolysis").attr('checked')) rank+=1;
	if ($("#myoglobinuria").attr('checked')) rank+=1;
	return rank;
}

function carnitineTranslocaseDeficiency () {
	rank = 0;

	//Check age requirement
		if (age < 2 && !($("#myopathyCardiomyopathy").attr('checked')) && 
			!($("#muscleWeakness").attr('checked')) && !($("#liverDisease").attr('checked'))){
		return -2;
	} 

	//Check lab requirements
	if (!($("#low_ketones").prop("checked")) || 
		!($("#incomplete_ketones").prop("checked"))) {
		return -1;
	}

	//Add to Ranking for optionals
	if ($("#rhabdomyolysis").attr('checked')) rank+=1;
	if ($("#myoglobinuria").attr('checked')) rank+=1;
	if ($("#cardiacDysrhythmia").attr('checked')) rank+=1;
	return rank;
}


function organicAcidemias () {
	rank = 0;

	//Check age requirement
	if (age < 2){
		return -2;
	} 

	//Check lab requirements
	if (!($("#high_ketones").prop("checked")) || 
		!($("#incomplete_ketones").prop("checked"))) {
		return -1;
	}

	//Add to Ranking for optionals
	if ($('#coma').val() == "yes") rank+=1;
	if ($("#reyeSyndrome").attr('checked')) rank+=1;
	if ($("#myopathyCardiomyopathy").attr('checked')) rank+=1;
	if ($("#liverDisease").attr('checked')) rank+=1;
	if ($("#hypotonia").attr('checked')) rank+=1;
	if ($("#seizures").attr('checked')) rank+=1;
	if ($("#convulsions").attr('checked')) rank+=1;
	if ($("#spasticity").attr('checked')) rank+=1;
	if ($("#abnormalInvoluntaryMovements").attr('checked')) rank+=1;

	//optional lab tests
	if ($("#high_lactic").prop("checked")) rank+=1;
	if ($("#high_ammonia").prop("checked")) rank+=1;
	if ($("#brainAtrophy").attr('checked')) rank+=1;
	return rank;
}

function ketogenesisDisorders () {
	rank = 0;

	//Check age requirement
		if (age < 1){
		return -2;
	} 

	//Check lab requirements
	if (!($("#low_ketones").prop("checked")) || 
		!($("#incomplete_ketones").prop("checked"))) {
		return -1;
	}

	//Add to Ranking for optionals
	if ($("#seizures").attr('checked')) rank+=1;
	return rank;
}

function fructose16BisphosphataseDeficiency () {

	//Check age requirement
	if (age < 1 && !($("#hepatomegaly").attr('checked')) && 
			!($("#hyperventilation").attr('checked'))){
		return -2;
	} 

	//Check lab requirements
	if (!($("#high_ketones").prop("checked")) || 
		!($("#incomplete_ketones").prop("checked"))) {
		return -1;
	}

	//Add to Ranking for optionals
	if ($('#coma').val() == "yes") rank+=1;
	if ($("#seizures").attr('checked')) rank+=1;
	if ($("#convulsions").attr('checked')) rank+=1;

	//optional lab tests
	if ($("#brainAtrophy").attr('checked')) rank+=1;

	return rank;
}

function congenitalDisordersOfGlycoproteinSynthesis () {

	//Check age requirement
	if (age < 1 && !($("#hypotonia").attr('checked')) && 
			!($("#muscleWeakness").attr('checked'))){
		return -2;
	} 

	//Check lab requirements
	if (!($("#low_ketones").prop("checked")) || 
		!($("#incomplete_ketones").prop("checked"))) {
		return -1;
	}	

	//Add to Ranking for optionals
	if ($("#seizures").attr('checked')) rank+=1;
	if ($("#convulsions").attr('checked')) rank+=1;
	if ($("#cerebralAtrophy").attr('checked')) rank+=1;
	if ($("#cerebrallarAtrophy").attr('checked')) rank+=1;
	if ($("#retinalPallor").attr('checked')) rank+=1;
	return rank;

}

function hypopituitarism() {

	//Check lab requirements
	if (!($("#high_ketones").prop("checked")) || 
		!($("#incomplete_ketones").prop("checked"))) {
		return -1;
	}	

	//Add to Ranking for optionals
	if ($("#stupor").attr('checked')) rank+=1;
	if ($("#seizures").attr('checked')) rank+=1;
	if ($("#poorTemperatureRegulation").attr('checked')) rank+=1;
	if ($("#lowBloodPressure").attr('checked')) rank+=1;
	if ($("#smallBodySize").attr('checked')) rank+=1;
	return rank;
}

function rankDiseases() {
	alert("Fatty Acid Oxidation Disorder: " + fattyAcidOxidationDisorder()
		+ "\nCarnitine Transporter Deficiency: " + carnitineTransporterDeficiency()
		+ "\nCarnitine Palmitoyl Transferase Deficiency 1: " + carnitinePalmitoylTransferaseDeficiency1()
		+ "\nCarnitine Palmitoyl Transferase Deficiency 2: " + carnitinePalmitoylTransferaseDeficiency2()
		+ "\nMild Carnitine Palmitoyl Transferase Deficiency 2: " + mildCarnitinePalmitoylTransferaseDeficiency2()
		+ "\nCarnitine Translocase Deficiency: "+ carnitineTranslocaseDeficiency()
		+ "\nOrganic Acidemias: " + organicAcidemias() + "\nKetogenesis Disorders: " + ketogenesisDisorders()
		+ "\nFructose 1,6 Bisphosphatase Deficiency: " + fructose16BisphosphataseDeficiency()
		+ "\nCongenital Disorders of Glycoprotein Synthesis: " + congenitalDisordersOfGlycoproteinSynthesis()
		+ "\nHypopituitarism: " + hypopituitarism());
	$('.notFirst').hide();
	endTest();
}