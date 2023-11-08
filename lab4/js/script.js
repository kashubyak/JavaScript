function calculateResults() {
	let totalScore = 0;

	const questionScores = [
		calculateQuestionScore('question1', 1),
		calculateQuestionScore('question2', 1),
		calculateQuestionScore('question3', 2),
		calculateQuestionScore('question4', 2),
		calculateQuestionScore('question5', 1),
		calculateQuestionScore('question6', 2),
		calculateQuestionScore('question7', 1)
	];

	// Виведення балів для кожного запитання
	for (let i = 0; i < questionScores.length; i++) {
		const questionNumber = i + 1;
		const resultQuestionId = `resultQuestion${questionNumber}`;
		const resultScoreId = `resultScore${questionNumber}`;
		const score = questionScores[i];

		document.getElementById(resultQuestionId).innerText = `Бали: ${score}`;
		document.getElementById(resultScoreId).innerText = score;
		totalScore += score;
	}

	// Виведення загального балу
	document.getElementById('totalScore').innerText = totalScore;
}

function calculateQuestionScore(questionName, correctCount) {
	const answers = document.getElementsByName(questionName);
	let selectedCount = 0;
	for (let i = 0; i < answers.length; i++) {
		if (answers[i].checked) {
			selectedCount++;
		}
	}

	if (selectedCount === correctCount) {
		return correctCount;
	} else if (selectedCount > 0 && selectedCount < correctCount) {
		return 1;
	} else {
		return 0;
	}
}