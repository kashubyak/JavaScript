
function performAnimation(animationOptions) {
	const start = performance.now();

	function animate(time) {
		let timeFraction = (time - start) / animationOptions.duration;
		if (timeFraction > 1) timeFraction = 1;

		let progress = animationOptions.timing(timeFraction);
		animationOptions.draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	}
	requestAnimationFrame(animate);
}

document.getElementById('prog').addEventListener('click', function () {
	const elem = document.getElementById('prog');
	performAnimation({
		duration: 4000,
		timing: function (timeFraction) {
			return timeFraction;
		},
		draw: function (progress) {
			elem.style.width = progress * 100 + '%';
		}
	});
});

function createAnimationOnClick(element, timingFunction) {
	element.addEventListener('click', function () {
		performAnimation({
			duration: 3000,
			timing: timingFunction,
			draw: function (progress) {
				element.style.left = progress * 90 + '%';
			}
		});
	});
}

createAnimationOnClick(document.getElementById('box'), function (timeFraction) {
	return Math.pow(timeFraction, 2);
});

createAnimationOnClick(document.getElementById('box-2'), function (timeFraction) {
	return Math.pow(timeFraction, 5);
});

createAnimationOnClick(document.getElementById('box-3'), function (timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
});

createAnimationOnClick(document.getElementById('box-4'), function (timeFraction) {
	return Math.pow(timeFraction, 2) * ((1.5 + 1) * timeFraction - 1.5);
});

createAnimationOnClick(document.getElementById('box-5'), function (timeFraction) {
	for (let a = 0, b = 1; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
		}
	}
});

createAnimationOnClick(document.getElementById('box-6'), function (timeFraction) {
	return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * 1.5 / 3 * timeFraction);
});

document.getElementById('startAnimation').addEventListener('click', function () {
	animateText(document.getElementById('textExample'));
});

function animateText(textArea) {
	let text = textArea.value;
	let to = text.length, from = 0;

	performAnimation({
		duration: 11000,
		timing: bounce,
		draw: function (progress) {
			let result = (to - from) * progress + from;
			textArea.value = text.slice(0, Math.ceil(result));
		}
	});
}

function bounce(timeFraction) {
	for (let a = 0, b = 1; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
		}
	}
}