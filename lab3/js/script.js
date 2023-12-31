function task1() {
	const task1But = document.getElementById('task1But');
	const perimeter = document.getElementById("perimeter");
	const area = document.getElementById("area");
	const diagonal = document.getElementById("diagonal");
	const item1Error = document.getElementById('item1Error')
	function calculateRectangleParameters() {
		const length = parseFloat(document.getElementById("length").value);
		const width = parseFloat(document.getElementById("width").value);

		if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
			item1Error.textContent = "Будь ласка, введіть коректні значення для довжини та ширини.";
			perimeter.textContent = 'Периметр: -';
			area.textContent = 'Площа: -';
			diagonal.textContent = 'Довжина діагоналі: -';
			return;
		}

		const perimeterValue = 2 * (length + width);
		const areaValue = length * width;
		const diagonalValue = Math.sqrt(length ** 2 + width ** 2);
		item1Error.textContent = ''
		perimeter.innerHTML = `Периметр: ${perimeterValue.toFixed(2)}`;
		area.innerHTML = `Площа: ${areaValue.toFixed(2)}`;
		diagonal.innerHTML = `Довжина діагоналі: ${diagonalValue.toFixed(2)}`;
	}

	task1But.addEventListener('click', calculateRectangleParameters);
}
function task4() {
	let imageFiles = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpeg', 'img/9.jpeg', 'img/10.jpeg',];
	let currentIndex = 0;
	function displayImage(index) {
		// Отримуємо елемент, який відображає зображення
		let imageElement = document.getElementById('imageDisplay');
		// Перевіряємо, чи індекс знаходиться в межах масиву
		if (index >= 0 && index < imageFiles.length) {
			// Встановлюємо відповідне зображення
			imageElement.src = imageFiles[index];
			currentIndex = index;
		}
	}
	// Відобразити перше зображення
	displayImage(currentIndex);
	function showPreviousImage() {
		currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
		displayImage(currentIndex);
	}
	function showNextImage() {
		currentIndex = (currentIndex + 1) % imageFiles.length;
		displayImage(currentIndex);
	}
	item2Prev.addEventListener('click', showPreviousImage)
	item2Next.addEventListener('click', showNextImage)
}
function task5() {
	let currentQuestion = 0;
	const example = document.querySelector('.example');
	const item5Submit = document.getElementById('item5Submit');
	const exampleArr = [];
	let repetitionCount = 0;

	const usedExamples = new Set();

	function generateUniqueExample() {
		let num1, num2, sortedExampleId;
		do {
			num1 = Math.floor(Math.random() * 9) + 1;
			num2 = Math.floor(Math.random() * 9) + 1;
			sortedExampleId = [num1, num2].sort().join('_');
		} while (usedExamples.has(sortedExampleId));
		usedExamples.add(sortedExampleId);
		return { num1, num2, exampleId: sortedExampleId };
	}

	function createExample() {
		for (let i = 0; i < 10; i++) {
			const { num1, num2 } = generateUniqueExample();
			const examplePar = document.createElement('p');
			examplePar.classList.add('itemExam')
			examplePar.innerText = `${num1} * ${num2} = `;
			const resultInput = document.createElement('input');
			resultInput.type = 'number';
			resultInput.type = 'text';
			examplePar.appendChild(resultInput);
			exampleArr.push({ examplePar, num1, num2, resultInput });
		}
		for (const { examplePar } of exampleArr) {
			example.appendChild(examplePar);
		}
	}

	function checkAnswers() {
		const resultCurrentQuestion = document.getElementById('resultCurrentQuestion');
		resultCurrentQuestion.innerHTML = `Кількість правильних відповідей: ${currentQuestion} <br>неправильних: ${exampleArr.length - currentQuestion}`;

		for (const { examplePar, num1, num2, resultInput } of exampleArr) {
			const userAnswer = parseInt(resultInput.value, 10);
			const expectedAnswer = num1 * num2;

			const textResult = document.createElement('p');
			textResult.classList.add('textResult');

			if (!isNaN(userAnswer) && userAnswer === expectedAnswer) {
				currentQuestion++;
				textResult.classList.add('correct');
				textResult.innerHTML = 'Правильно!';
			} else {
				textResult.classList.add('uncorrect');
				textResult.innerHTML = `Правильна відповідь: ${expectedAnswer}`;
			}

			// Очищаємо попередні результати перед додаванням нового
			const existingTextResults = examplePar.getElementsByClassName('textResult');
			while (existingTextResults.length > 0) {
				existingTextResults[0].remove();
			}

			// Додаємо новий результат
			examplePar.appendChild(textResult);
			resultInput.disabled = true;
		}
	}



	function reload() {
		const item5Reload = document.getElementById('item5Reload')
		example.innerHTML = '';
		exampleArr.length = 0;
		usedExamples.clear();
		createExample();
		for (const { resultInput } of exampleArr) {
			resultInput.disabled = false;
		}
		const resultCurrentQuestion = document.getElementById('resultCurrentQuestion');
		resultCurrentQuestion.innerHTML = '';
	}
	item5Submit.addEventListener('click', checkAnswers);
	item5Reload.addEventListener('click', () => {
		checkAnswers();
		reload();
	});
	createExample();
}
task1();
task4();
task5();
