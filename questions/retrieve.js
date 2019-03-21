
/*collection of questions to iterate from on answer page*/
var currentlyRetrievedQuestions = [];

function currentQuestionsClear() {
	currentlyRetrievedQuestions = [];
}


$('#questions-difficulty-slide').on('change', function(){
	var selectedLevel = $('#questions-difficulty-slide').slider("option", "value");
	var numberLevel = parseInt(selectedLevel, 10);
	if(isNaN(numberLevel))
		numberLevel = 2;
	currentlyRetrievedQuestions = getQuestionsUpToLevel(numberLevel);
});
