function task1() {
	const emailCheck = document.getElementById('emailCheck')
	function checkEmail() {
		const email = document.getElementById('emailInput').value;
		const emailRegex = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)+$/i;

		if (emailRegex.test(email)) {
			const parts = email.match(emailRegex);
			const resultDiv = document.getElementById('result');
			resultDiv.innerHTML = ''; // Очистимо попередні результати

			resultDiv.innerHTML += 'Введена адреса електронної пошти коректна.';
		} else {
			document.getElementById('result').innerText = 'Введена адреса електронної пошти некоректна.';
		}
	}
	emailCheck.addEventListener('click', checkEmail);
}
function task2() {
	const form = document.getElementById('myForm');

	form.addEventListener('submit', function (event) {
		event.preventDefault(); // Зупиняємо відправку форми для валідації

		const validationRules = {
			email: /^.+@pnu\.edu\.ua$/,
			name: /^(?:[A-Z][a-z]+(?: [A-Z][a-z]+)?)+$/,
			login: /^[a-zA-Z]+$/,
			password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[-_!@#$%^&*]).{8,}$/,
			postalCode: /^\d{5}$/
		};

		const fields = Object.keys(validationRules);

		fields.forEach(field => {
			const input = document.getElementById(field);
			const icon = document.getElementById(field + 'Icon');
			const error = document.getElementById(field + 'Error');

			if (validationRules[field].test(input.value)) {
				input.style.borderColor = 'green';
				icon.setAttribute('src', 'checkmark.png');
				error.textContent = '';
			} else {
				input.style.borderColor = 'red';
				input.style.borderWidth = '2px';
				icon.setAttribute('src', '');
				error.textContent = 'Некоректне значення';
				error.style.color = 'red';
			}
		});
	});
}
task1();
task2();