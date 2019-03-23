/* Top facing scripts to prepare question, ask, and invoke next question*/

var currentQuestionIndex = 0;
var currentQuestionEndIndex = currentlyRetrievedQuestions.length;

function IncrementCurrentQsIndex() {
	currentQuestionIndex++;
	if(currentQuestionIndex == currentQuestionEndIndex)
		currentQuestionIndex = 0;
}

function resetCurrentQsIndex() {
	currentQuestionIndex = 0;
	currentQuestionEndIndex = currentlyRetrievedQuestions.length;
}

function loadCurrentQuestionToAsk() {
	var curQuestion = currentlyRetrievedQuestions[currentQuestionIndex];
	$('#questions-text').text(curQuestion.text);
	$('#questions-choice-text-a').text('A ' + curQuestion.a);
	$('#questions-choice-text-b').text('B ' + curQuestion.b);
	$('#questions-choice-text-c').text('C ' + curQuestion.c);
	$('#questions-choice-text-d').text('D ' + curQuestion.d);
	// load correct answer
	correctAnswerAccess(curQuestion.cor);
}

function evaluateQuestionAnswerInput() {
	var answerChoice = $('input[name=questions-choice]:checked');
	var choiceId = answerChoice.attr('id');
	if(choiceId === 'questions-choice-a') {
		givenAnswerAccess('a');
	} else if(choiceId === 'questions-choice-b') {
		givenAnswerAccess('b');
	} else if(choiceId === 'questions-choice-c') {
		givenAnswerAccess('c');
	} else if(choiceId === 'questions-choice-d') {
		givenAnswerAccess('d');
	} else {
		console.log('Got unhandled answer object to question with id=' + choiceId);
	}
}
