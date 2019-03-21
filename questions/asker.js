/* Top facing scripts to prepare question, ask, and invoke next question*/

var currentQuestionIndex = 0;
var currentQuestionEndIndex = currentlyRetrievedQuestions.length;

function IncrementCurrentQsIndex() {
	if(++currentQuestionIndex == currentQuestionEndIndex)
		currentQuestionIndex = 0;
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
