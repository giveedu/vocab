/*
Sets the given answer, the correct answer, and changes the result text
*/

var questionsCurGivenAnswer = "";

function givenAnswerAccess() {
	if(arguments.length === 0) {
		return questionsCurGivenAnswer;
	} else {
		questionsCurGivenAnswer = arguments[0];
	}
}

var questionsCurCorrectAnswer = "";

function correctAnswerAccess() {
	if(arguments.length === 0) {
		return questionsCurCorrectAnswer;
	} else {
		questionsCurCorrectAnswer = arguments[0];
	}
}

function didGiveCorrectAnswer() {
	return questionsCurGivenAnswer === questionsCurCorrectAnswer;
}


function changeQsAnswerResult(result) {
	var resultDiv = document.getElementById('#questions-answer-result');
	if(result) {
		resultDiv.style = "text-shadow:0 0 0; background:#6ccc59; border-radius: 20px; padding: 10px;";
		resultDiv.innerHTML = '<p><b>Right!</b></p><p>The correct answer is ' + correctAnswerAccess() + '.</p>';
	} else {
		resultDiv.style = "text-shadow:0 0 0; background:#dd6c6c; border-radius: 20px; padding: 10px;";
		resultDiv.innerHTML = '<p><b>Wrong!</b></p><p>You answered ' + givenAnswerAccess() + ', but the correct answer is ' + correctAnswerAccess() + '.</p>';
	}
}
