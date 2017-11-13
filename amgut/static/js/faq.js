/*
 * JavaScript for FAQ page
 */
$(document).ready(function() {
	// Prepare all dropdowns for each question group 
	$("#GeneralQuestionsGroup").click(function() {
		$("#GeneralQuestions").slideToggle("slow");
	});
	$("#LoginQuestionsGroup").click(function() {
		$("#LoginQuestions").slideToggle("slow");
	});
	$("#InstructionPacketGroup").click(function() {
		$("#InstructionPacketQuestions").slideToggle("slow")
	});	
	$("#SampleResultsGroup").click(function() {
		$("#SampleResultsQuestions").slideToggle("slow")
	});
	$("#SampleProcessGroup").click(function() {
		$("#SampleProcessQuestions").slideToggle("slow")
	});
	$("#MiscGroup").click(function() {
		$("#MiscQuestions").slideToggle("slow")
	});


	// Populate the question answer space when a question is selected
	$("a").on("click", function(event) {
		var questionID = "#q" + $(this).attr("href").substring(4); 

		// Close the currently display question (if there) and 
		// display the chosen one
		$("#QuestionSpace > div").each(function() {
			if(!($(this).attr('id') == questionID.substring(1)))
				$(this).hide();
		});
		$(questionID).toggle("slow");
	});
});