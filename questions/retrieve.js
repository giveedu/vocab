
/*collection of questions to iterate from on answer page*/
var currentlyRetrievedQuestions = [];

function currentQuestionsClear() {
	currentlyRetrievedQuestions = [];
}

function getCurrentlySelectedLevel() {
	var levelSelect = document.getElementById("select-question-level");
	var level = parseInt(levelSelect.options[levelSelect.selectedIndex].value, 10);
	if(isNaN(level)) {
		level = 1;
		console.log('Cannot read selected level of questions, default to 1.');
	}
	return level;
}

$('#select-question-level').on('change', function(){
	var selectedLevel = getCurrentlySelectedLevel();
	currentlyRetrievedQuestions = getQuestionsFromLevel(selectedLevel);
});
