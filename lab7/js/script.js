function task1() {
	let submit11 = document.getElementById('submit11');
	let submit12 = document.getElementById('submit12');
	let submit13 = document.getElementById('submit13');
	function inversion() {
		const input11 = document.getElementById('input11');
		const output11 = document.querySelector('.output11');

		const inputValue = input11.value;
		if (isNaN(inputValue)) {
			return output11.innerHTML = 'Введене не число';
		}
		const reverse = inputValue.split('').reverse().join('');
		output11.innerHTML = `Обернуте число: ${reverse}`;
	}
	function no_zeros() {
		const input12 = document.getElementById('input12');
		const output12 = document.querySelector('.output12');
		const inputValue = input12.value;
		const numbers = inputValue.split(' ').filter(numbers => numbers !== '0').join('  ');
		output12.innerHTML = `Вивід послідовності без 0: ${numbers}`;
	}
	function reverser() {
		const input13 = document.getElementById('input13');
		const output13 = document.querySelector('.output13');
		const inputValue = input13.value;
		const reverse = inputValue.split('').reverse().join('');
		output13.innerHTML = `Обернутий рядок: ${reverse}`;
	}
	function replace() {
		function replacement(string) {
			const words = string.split(' ');
			if (words.length >= 3) {
				let secondWord = words[1];
				words[1] = words[2];
				words[2] = secondWord;
			}
			const replacedString = words.join(',');
			return replacedString
		}
		const string = 'Я не люблю морозиво';
		const active = replacement(string);
		console.log(active);
	}
	submit11.addEventListener('click', inversion);
	submit12.addEventListener('click', no_zeros);
	submit13.addEventListener('click', reverser);
	replace();
};
function task2() {
	let submit21 = document.getElementById('submit21');
	let submit22 = document.getElementById('submit22');
	let submit23 = document.getElementById('submit23');
	let submit24 = document.getElementById('submit24');
	let submit25 = document.getElementById('submit25');
	let submit26 = document.getElementById('submit26');
	function stringСomparison() {
		const output21 = document.querySelector('.output21');
		const input21 = document.getElementById('input21');
		const input212 = document.getElementById('input212');
		const inputValue1 = input21.value;
		const inputValue2 = input212.value;
		function comparisonCalculation() {
			if (inputValue1.length > inputValue2.length) {
				return `Функція повернула 1`;
			} else if (inputValue1.length < inputValue2.length) {
				return `Функція повернула -1`;
			} else if (inputValue1.length == inputValue2.length) {
				return `Функція повернула 0`;
			}
		}
		const result = comparisonCalculation();
		output21.innerHTML = result;
	};
	function findIndexAndQuantity() {
		const input22 = document.getElementById('input22');
		const input222 = document.getElementById('input222');
		const output22 = document.querySelector('.output22');
		const inputValue1 = input22.value.toLowerCase();
		const inputValue2 = input222.value.toLowerCase();
		let indexes = [];
		let count = 0;
		function findIndexesAndCount() {
			for (let i = 0; i < inputValue1.length; i++) {
				if (inputValue1[i] == inputValue2) {
					indexes.push(i);
					count++;
				}
			}
			indexes.join(' ');
		}
		findIndexesAndCount();
		output22.innerHTML = `Індекси:  ${indexes}<br> Кількість повторень:  ${count}`
	};
	function uppercaseLirstLetter() {
		const input23 = document.getElementById('input23');
		const output23 = document.querySelector('.output23');
		const inputValue1 = input23.value;
		function capitalLetter() {
			const words = inputValue1.split(' ');
			const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
			const capitalizedString = capitalizedWords.join(' ');
			output23.innerHTML = `Вихідний рядок: ${capitalizedString}`
		}
		capitalLetter();
	};
	function searchVowels() {
		const input24 = document.getElementById('input24');
		const output24 = document.querySelector('.output24');
		const inputValue1 = input24.value.toLowerCase();
		const vowels = 'aeiouаеєиіїоуюя';
		let count = 0;
		for (let i = 0; i < inputValue1.length; i++) {
			if (vowels.includes(inputValue1[i])) {
				count++;
			}
		}
		output24.innerHTML = `Кількість повторень: ${count}`;
	};
	function spamCheck() {
		const input25 = document.getElementById('input25');
		const output25 = document.querySelector('.output25');
		const inputValue1 = input25.value.toLowerCase();
		console.log(inputValue1);
		let spamWords = ['100% безкоштовно', 'збільшення продажів', 'тільки сьогодні', 'не видаляйте',];
		for (let i = 0; i < spamWords.length; i++) {
			if (inputValue1.includes(spamWords[i].toLowerCase())) {
				return output25.innerHTML = `Чи є спам у тексті? ${true}`;
			}
		}
		return output25.innerHTML = `Чи є спам у тексті? ${false}`;
	};
	function maximumStrinhLength() {
		const input26 = document.getElementById('input26');
		const input262 = document.getElementById('input262');
		const output26 = document.querySelector('.output26');
		const inputValue1 = input26.value;
		const inputValue2 = Number(input262.value);
		if (inputValue1.length > inputValue2) {
			output26.innerHTML = inputValue1.slice(0, inputValue2 - 3) + '...'
		} else {
			output26.innerHTML = `${inputValue1}`;
		}
	};
	submit21.addEventListener('click', stringСomparison);
	submit22.addEventListener('click', findIndexAndQuantity);
	submit23.addEventListener('click', uppercaseLirstLetter);
	submit24.addEventListener('click', searchVowels);
	submit25.addEventListener('click', spamCheck);
	submit26.addEventListener('click', maximumStrinhLength);
};
function task3() {
	let submit31 = document.getElementById('submit31');
	let submit32 = document.getElementById('submit32');
	let submit33 = document.getElementById('submit33');
	function toCamelCase() {
		const input31 = document.getElementById('input31');
		const output31 = document.querySelector('.output31');
		const inputValue1 = input31.value.split(',');

		const camelCaseStrings = inputValue1.map(snakeCaseString => {
			const words = snakeCaseString.split('_');
			const camelCaseWords = words.map((word, index) => {
				if (index === 0) {
					return word.toLowerCase();
				}
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			});
			return camelCaseWords.join('');
		});
		output31.innerHTML = 'Вихідні значення: ' + camelCaseStrings.join(', ');
	}
	function toSnakeCase() {
		const input32 = document.getElementById('input32');
		const output32 = document.querySelector('.output32');
		const inputValue1 = input32.value.split(',');

		const snakeCaseStrings = inputValue1.map(camelCaseString => {
			let snakeCaseString = '';
			for (let i = 0; i < camelCaseString.length; i++) {
				const char = camelCaseString[i];
				if (char === char.toUpperCase() && i > 0) {
					snakeCaseString += '_' + char.toLowerCase();
				} else {
					snakeCaseString += char.toLowerCase();
				}
			}
			return snakeCaseString;
		});

		output32.innerHTML = 'Вихідні значення: ' + snakeCaseStrings.join(', ');
	}
	function CorrectionDates() {
		const input33 = document.getElementById('input33');
		const output33 = document.querySelector('.output33');
		const inputValue = input33.value;

		const convertDateFormat = (input) => {
			const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/; // Перевірка формат yyyy/mm/dd
			const dateRegexDMY = /^\d{2}\/\d{2}\/\d{4}$/; // Перевірка формат dd/mm/yyyy

			if (dateRegex.test(input)) {
				const dateParts = input.split('/');
				return dateParts.reverse().join('.');
			} else if (dateRegexDMY.test(input)) {
				return input.split('/').join('.');
			} else {
				return 'Формат дати не відповідає yyyy/mm/dd або dd/mm/yyyy';
			}
		};
		output33.innerHTML = 'Вихідні значення: ' + convertDateFormat(inputValue);
	};



	submit31.addEventListener('click', toCamelCase)
	submit32.addEventListener('click', toSnakeCase);
	submit33.addEventListener('click', CorrectionDates);
}
task1();
task2();
task3();
