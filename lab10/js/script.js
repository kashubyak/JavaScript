$(document).ready(function () {
	let $text = $('#hide_text');
	$text.hide();
	$('.button').click(function () {
		$text.show(200);
	});



	$("p:first").text("DOM first!");
	jQuery("p:last").text("DOM last!");



	$text.hover(
		function () {
			$(this).addClass('hovered');
		},
		function () {
			$(this).removeClass('hovered');
		}
	);



	$text.bind('click', function () {
		$(this).addClass('attr');
	});

	$text.bind('dblclick', function () {
		$(this).removeClass('attr');
	});



	$('#singleClick').bind('click', function () {
		alert('Одинарний клік');
	});
	$('#doubleClick').bind('dblclick', function () {
		alert('Подвійний клік');
	});



	let $imageContainer = $('#imageContainer');
	let $tooltip = $('#tooltip');

	$imageContainer.hide();

	$('#showImage').click(function () {
		$imageContainer.show();
	});

	$imageContainer.click(function () {
		$(this).hide();
	});

	$imageContainer.mouseover(function () {
		let captionText = "Зображення AI";
		$tooltip.text(captionText).show();
	});

	$imageContainer.mouseout(function () {
		$tooltip.hide();
	});



	$("form").submit(function () {
		$("span").text("Перевіряєм...").show().delay(2000).fadeOut(500);
		setTimeout(function () {
			if ($("#textInput").val() == "correct") {
				$("span").text("Успішно!").show();
				alert('Успішно!');
			} else {
				$("span").text("Неправильно!").show().fadeOut(1000);
			}
		}, 500);
	});
});