
function task1() {
	const submit11 = document.getElementById('submit11')
	const submit12 = document.getElementById('submit12')
	const submit13 = document.getElementById('submit13')
	function createTime() {
		const item1Time = document.querySelector('.item1-time');
		const item1Hours = document.querySelector('.item1_hours');
		const item1Minutes = document.querySelector('.item1_minutes');
		const item1Seconds = document.querySelector('.item1_seconds');
		const item1HoursVal = item1Hours.value;
		const item1MinutesVal = item1Minutes.value;
		const item1econdsVal = item1Seconds.value;
		const data = new Date();
		const hours = data.getHours().toString().padStart(2, '0');
		const minutes = data.getMinutes().toString().padStart(2, '0');
		const seconds = data.getSeconds().toString().padStart(2, '0');
		const clockDisplay = `${hours}:${minutes}:${seconds}`;
		item1Time.textContent = clockDisplay;
	}
	setInterval(createTime, 1000);
	createTime();
	function addingTime() {

	}
}

task1()

