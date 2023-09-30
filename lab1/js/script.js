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

task6();