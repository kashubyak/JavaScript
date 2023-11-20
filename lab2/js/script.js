function task1() {
	function updateClock() {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		const seconds = now.getSeconds().toString().padStart(2, '0');
		const year = now.getFullYear();
		const month = (now.getMonth() + 1).toString().padStart(2, '0');
		const day = now.getDate().toString().padStart(2, '0');
		const clockDisplay = `${hours}:${minutes}:${seconds}-${year}-${month}-${day}`;
		document.getElementById('clock').textContent = clockDisplay;
	}
	setInterval(updateClock, 1000);
	updateClock();
}
//task2
let expression = '';

function appendNumber(number) {
	expression += number;
	updateDisplay();
}

function appendOperator(operator) {
	expression += operator;
	updateDisplay();
}

function appendDecimal() {
	if (!expression.includes('.')) {
		expression += '.';
		updateDisplay();
	}
}

function clearDisplay() {
	expression = '';
	updateDisplay();
}

function updateDisplay() {
	document.getElementById('display').value = expression;
}

function calculate() {
	try {
		expression = eval(expression);
		updateDisplay();
	} catch (error) {
		alert('Invalid input');
		clearDisplay();
	}
}
function task3() {
	function generateTable() {
		const rows = parseInt(document.getElementById('rows').value);
		const columns = parseInt(document.getElementById('columns').value);
		const table = document.getElementById('table');
		table.innerHTML = '';  // Очищуємо попередній вміст таблиці

		// Генеруємо таблицю та обчислюємо вказані значення
		let sumVariant1 = 0;
		let sumVariant2 = 0;
		let sumVariant3 = 0;
		let sumVariant4 = 0;
		let productVariant5 = 1;

		for (let i = 1; i <= rows; i++) {
			const row = table.insertRow();
			for (let j = 1; j <= columns; j++) {
				const cell = row.insertCell();
				const value = 2 * j - i;
				cell.textContent = value;

				// Обчислення сум та добутків для відповідних варіантів
				if ([1, 6, 11, 16, 21, 26].includes(i) && j <= columns) {
					sumVariant1 += value;
				}

				if ([2, 7, 12, 17, 22, 27].includes(i) && j <= columns) {
					sumVariant2 += value;
				}

				if (j === 3) {
					sumVariant3 += value;
				}

				if (i === j) {
					sumVariant4 += value;
				}

				if (j === columns) {
					productVariant5 *= value;
				}
			}
		}
		

		console.log('Сума елементів для варіанту 1:', sumVariant1);
		console.log('Сума елементів для варіанту 2 (другий рядок):', sumVariant2);
		console.log('Сума елементів для варіанту 3 (третій стовпець):', sumVariant3);
		console.log('Сума елементів для варіанту 4 (співпадіння рядка та стовпця):', sumVariant4);
		console.log('Добуток елементів для варіанту 5 (останній стовпець):', productVariant5);
	}

	const generateButton = document.getElementById('generateButton');
	generateButton.addEventListener('click', generateTable);
}

function task4() {
	const dividend = 10;
	const divisor = 3;
	const remainder = dividend % divisor;
	console.log(`Остача від ділення ${dividend} на ${divisor} = ${remainder}`);
	const isRemainderZero = remainder === 0;
	console.log(`Остача від ділення є нуль: ${isRemainderZero}`);
	const text = "Hello, world! This is a number: %d, and this is a string: %s";
	const numberValue = 42;
	const stringValue = "Hello again";
	console.log(text, numberValue, stringValue);
}
function task5() {
	console.info('інформація type: info')
	console.warn('попередження type: warn')
	console.error('помилка type: error')
	const obj = { a: 1, b: 2 };
	console.dir(obj);
	console.dirxml('<div>вивід html type: dirxml</div>');
	console.time('timer');
	let res = 0;
	for (let i = 0; i < 1000; i++) {
		res += i;
	} // цикл для імітації виконання коду
	console.timeEnd('timer');


	function timeConsumingFunction() {
		let result = 0;
		for (let i = 0; i < 1000000; i++) {
			result += i;
		}
		return result;
	}
	console.profile('myProfile');
	const sum = timeConsumingFunction();
	console.profileEnd('myProfile');
	console.log('Результат обчислення: ', sum);
	let number = 10
	console.assert(number === 10) // виведе помилку в консоль при неправильній рівності 
}
task1();
task3();
task4();
task5();