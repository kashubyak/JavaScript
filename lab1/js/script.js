function task1() {
	const item1 = document.querySelector('.item1');
	const newH = document.createElement('h3');
	newH.innerHTML = `Task1`;
	item1.prepend(newH);

	const but = document.getElementById('sayHi');
	but.addEventListener('click', function () {
		alert(`16.12.2004 Ivano-Frankivsk`)
	});
}
function task2() {
	const equation = document.getElementById('equation');
	const item2 = document.querySelector('.item2')
	function calculationEq() {
		const x = parseInt(form_tas2.x.value);
		const y = parseInt(form_tas2.y.value);
		const z = parseInt(form_tas2.z.value);
		const F = 1 / (x + y + z);
		let newP = document.createElement('p');
		newP.innerHTML = `Результат обчислення функції:	<div>${F}</div>`;
		item2.appendChild(newP);
	}
	equation.addEventListener('click', calculationEq)
}
function task3() {
	const focusInput = document.getElementById('focusInput');
	const cursorInput = document.getElementById('cursorInput');
	function placeholderFocus() {
		const focusInputPlaceholder = focusInput.placeholder;
		focusInput.addEventListener('focus', function () {
			focusInput.placeholder = 'Поле отримало фокус';
		});
		focusInput.addEventListener('blur', function () {
			focusInput.placeholder = focusInputPlaceholder;
		});
	};
	function placeholderCursor() {
		const cursorInputPlaceholder = cursorInput.placeholder;
		cursorInput.addEventListener('mouseover', function () {
			cursorInput.placeholder = 'Над полем є курсор';
		});
		cursorInput.addEventListener('mouseout', function () {
			cursorInput.placeholder = cursorInputPlaceholder;
		});
	};
	placeholderFocus();
	placeholderCursor();
};
function task4() {
	const item4__result = document.getElementById('item4__result');
	const task4_result_but = document.getElementById('task4_result_but');
	function calculateEquations() {
		const x = parseFloat(document.getElementById("task4x").value);
		const y = parseFloat(document.getElementById("task4y").value);
		let result;
		if (x * y != 0) {
			result = x + y;
		} else if (x ** 3 > 100) {
			result = x;
		} else {
			result = x ** 3 + y;
		}
		item4__result.innerHTML = `Результат обчислення: ${result}`;
	}
	task4_result_but.addEventListener('click', calculateEquations);
};
function task5() {
	const item5__result = document.getElementById('item5__result');
	const task5_result_but = document.getElementById('task5_result_but');
	task5_result_but.addEventListener('click', function calculateSum() {
		const x = parseFloat(document.getElementById('task5x').value);
		const y = parseFloat(document.getElementById('task5y').value);
		function factorial(n) {
			let fact = 1;
			for (let i = 2; i <= n; i++) {
				fact *= i;
			}
			return fact;
		}
		let sum = 0;
		for (let i = 2; i <= 6; i++) {
			sum += Math.pow(-1, i) * (1 + 2 * x * y - Math.pow(x, 2)) / factorial(i + 1);
		}
		item5__result.innerHTML = `Результат обчислення: ${sum}`;
	});
}
function task6() {
	const continents = ['Африка', 'Азія', 'Європа', 'Північна Америка', 'Південна Америка', 'Австралія', 'Антарктида'];
	const populationDensity = [36, 149, 73, 22, 24, 3, 0.0003];
	const area = [30.37, 44.58, 10.18, 24.71, 17.84, 8.56, 13.6];
	const output = document.getElementById('output');
	const density = document.getElementById('density');
	const people = document.getElementById('people');
	function displayDensityAndArea() {
		const continentInput = document.getElementById('continentInput').value;
		const index = continents.indexOf(continentInput);

		if (index !== -1) {
			output.innerHTML = `
<p>Інформація про ${continentInput}:</p>
<p>Густина населення: ${populationDensity[index]} осіб/км²</p>
<p>Площа: ${area[index]} км²</p>`;
		} else {
			output.innerHTML = `<p>Континент не знайдений.</p>`;
		}
	};
	function calculatePopulation() {
		const continentInput = document.getElementById('continentInput').value;
		const index = continents.indexOf(continentInput);

		if (index !== -1) {
			const output = document.getElementById('output');
			const population = populationDensity[index] * area[index];
			output.innerHTML = `<p>Населення ${continentInput}:</p><p>Населення: ${population.toFixed(2)} осіб</p>`;
		} else {
			output.innerHTML = `<p>Континент не знайдений.</p>`;
		}
	};
	density.addEventListener('click', displayDensityAndArea);
	people.addEventListener('click', calculatePopulation);
};
task1();
task2();
task3();
task4();
task5();
task6();