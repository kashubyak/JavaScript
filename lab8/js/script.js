function task1() {
	function updateTime() {
		const systemTime = new Date();
		document.getElementById("currentSystemTime").innerText = "Поточний час: " + systemTime.toLocaleTimeString();
	}
	updateTime()
	setInterval(updateTime, 500);

	function changeTime() {
		function update() {
			const hoursInput = parseInt(document.getElementById("hoursInput").value) || 0;
			const minutesInput = parseInt(document.getElementById("minutesInput").value) || 0;
			const secondsInput = parseInt(document.getElementById("secondsInput").value) || 0;

			const currentTime = new Date();
			currentTime.setHours(currentTime.getHours() + hoursInput);
			currentTime.setMinutes(currentTime.getMinutes() + minutesInput);
			currentTime.setSeconds(currentTime.getSeconds() + secondsInput);

			document.getElementById("currentTime").innerText = "Змінений час: " + currentTime.toLocaleTimeString();
		}
		update()
		setInterval(update, 500);
	}
	const submit1 = document.getElementById('submit1');
	submit1.addEventListener('click', changeTime);

};

function task2() {
	document.getElementById('submit2').addEventListener('click', function () {
		const areaDate = document.querySelector('.areaDate');
		const date = new Date();
		const months = [
			"Січення", "Лютого", "Березня", "Квітня", "Травня", "Червня",
			"Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"];
		const days = [
			"Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "Пʼятниця",
			"Субота"];
		const day = date.getDate();
		const monthNumber = date.getMonth();
		const monthName = months[monthNumber];
		const year = date.getFullYear();
		const dayNumber = date.getDay();
		const dayName = days[dayNumber];
		const hours = date.getHours();
		const minutes = date.getMinutes();
		areaDate.innerHTML =
			`<p>Дата: ${day} ${monthName} ${year} року</p>
		<p>День тижня: ${dayName}</p>
		<p>Час: ${hours}:${minutes}</p>`

		const h3Task22 = document.querySelector('.h3_task22').innerHTML = `Завдання 2.2.Виведення дня і номера тижня`;
		const areaDate2 = document.querySelector('.areaDate2').innerHTML =
			`<p>Номер тижня: ${dayNumber}</p>
	<p>Назва дня тижня: ${dayName}</p>`;
	});
	document.getElementById('submit23').addEventListener('click', function () {
		const daysInput = parseInt(document.getElementById('inputAddition').value);
		const currentDate = new Date();
		const futureDate = new Date(currentDate);
		futureDate.setDate(currentDate.getDate() + daysInput);

		let result = "";
		if (daysInput > 0) {
			result = `Це майбутня дата: ${futureDate.toLocaleDateString()}`;
		} else if (daysInput < 0) {
			result = `Це минула дата: ${futureDate.toLocaleDateString()}`;
		} else {
			result = `Це поточна дата: ${currentDate.toLocaleDateString()}`;
		}
		document.getElementById('addedTime').innerHTML = result;

	});
	document.getElementById("submit24").addEventListener('click', function () {
		const yearInput = parseInt(document.getElementById("year").value);
		const monthInput = parseInt(document.getElementById("month").value);
		console.log(monthInput);
		const lastDayResult = getLastDayOfMonth(yearInput, monthInput);
		const lastDate = new Date(yearInput, monthInput - 1, lastDayResult);
		const dayOfWeek = lastDate.toLocaleString('uk-UA', { weekday: 'long' }); // Отримання назви дня тижня

		const resultElement = document.getElementById("lastDay");
		resultElement.textContent = `Останній день у місяці ${monthInput} у році ${yearInput} - ${lastDayResult} ${dayOfWeek}`;
	});

	function getLastDayOfMonth(year, month) {
		const nextMonthFirstDay = new Date(year, month, 1);
		const lastDay = new Date(nextMonthFirstDay - 1);

		return lastDay.getDate();
	}
	document.getElementById("submit25").addEventListener("click", function () {
		function secondsPassedToday() {
			const now = new Date();
			const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
			const seconds = Math.floor((now - startOfDay) / 1000);
			return seconds;
		}
		function secondsLeftToday() {
			const now = new Date();
			const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
			const seconds = Math.floor((endOfDay - now) / 1000);
			return seconds;
		}

		const secondsPassed = secondsPassedToday();
		const secondsLeft = secondsLeftToday();

		document.getElementById("secondsAtFirst").innerText = `Кількість секунд, що пройшли від початку дня: ${secondsPassed}`;
		document.getElementById("secondsToGo").innerText = `Кількість секунд до початку наступного дня: ${secondsLeft}`;
	});

	document.getElementById('submit26').addEventListener('click', formatDate);

	function formatDate() {
		const userInput = document.getElementById('userInput').value;

		if (userInput.trim() === '') {
			alert('Введіть дійсну дату та час.');
			return;
		}
		let parts = userInput.split(' ');
		let dateParts = parts[0].split('.');
		let timeParts = parts[1].split(':');

		let inputDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0], timeParts[0], timeParts[1]);
		let currentDate = new Date();
		let timeDifference = Math.floor((currentDate - inputDate) / 1000);

		let day = inputDate.getDate();
		let month = inputDate.getMonth() + 1;
		let year = inputDate.getFullYear();

		let formatDate = `${day}.${month}.${year}`;
		let result = '';

		if (timeDifference < 60) {
			result = `${timeDifference} сек. назад`;
		} else if (timeDifference < 3600) {
			result = `${Math.floor(timeDifference / 60)} хв. назад`;
		} else {
			result = `${formatDate} ${inputDate.toLocaleTimeString()}`;
		}

		document.getElementById('outputDate').textContent = result;
	}

}

task1();
task2();