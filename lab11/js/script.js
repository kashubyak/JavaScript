//task1
$(document).ready(function () {
	$("#butChange").click(function () {
		$("#pChange").html("Це замінений пагаграф");
	});
	$("#sStyle").click(function () {
		$("#pStyle").css({ "color": "red" });
		$("#pStyle1").css({ "color": "yellow" });
	});
	$("#sVal").click(function () {
		$("input:text").val("значення поля");
	});
	$("#sAttr").click(function () {
		$("#image").attr("width", "300");
	});
	$("#dAttr").click(function () {
		$("#image").removeAttr("width");
	});

	//task2
	$("#insertBefore").insertBefore("#foo");

	let $elem = $('#detach');

	$elem.detach();
	$elem.appendTo('#insertion');

	$(document).ready(function () {
		let innerHeightValue = $('.box').innerHeight();
		$('#innerHeightResult').text('Внутрішня висота блоку: ' + innerHeightValue + 'px');

		let outerHeightValue = $('.box').outerHeight();
		$('#outerHeightResult').text('Зовнішня висота блоку без врахування margin: ' + outerHeightValue + 'px');

		let outerHeightWithMargin = $('.box').outerHeight(true);
		$('#outerHeightWithMarginResult').text('Зовнішня висота блоку з врахуванням margin: ' + outerHeightWithMargin + 'px');
	});

	//task3
	let arr = ["one", "two", "three", "four", "five"];
	let obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };

	jQuery.each(arr, function (i, val) {
		$("#" + val).text("Mine is " + val + ".");
		return (val !== "three");
	});
	jQuery.each(obj, function (i, val) {
		$("#" + i).append(document.createTextNode(" - " + val));
	});

	$(".nextAll div").first().nextAll().addClass("after");
	$("p").siblings(".selected").css("background", "yellow");
	$(".find").find("span").css("color", "red");

	$(document).ready(function () {
		let offsetParent = $('.child').offsetParent();

		offsetParent.css('background-color', 'lightgreen');
		offsetParent.css('padding', '30px');
	});


	//task4
	$('#modifyClassBtn').click(function () {
		$('.modify').filter(function () {
			return true;
		}).css({
			'background-color': 'lightblue',
			'font-weight': 'bold'
		}).text('modify');
	});
	$('#modifyLiBtn').click(function () {
		$('li').filter(':nth-child(3n)').css({
			'background-color': 'lightgreen',
			'font-style': 'italic'
		}).text('modify');
	});
	//task 5

	var object1 = {
		apple: 0,
		banana: { weight: 52, price: 100 },
		cherry: 97
	};
	var object2 = {
		banana: { price: 200 },
		durian: 100
	};

	$.extend(object1, object2);
	$("#log").append(JSON.stringify(object1));
	$("#mergeButton").on("click", function () {
		let mergedText = $("#mergeResult").add("#mergeResult2").text();
		$("#mergeResult").text(mergedText);
		$("#mergeResult2").hide();
	});

	$("#trimstr").text("            Рядок з пробілами                ").show();
	$("#trimButton").on("click", function () {
		let trimmedText = $("#trimstr").text().trim();
		$("#trimstr").text(trimmedText);
	});
	//task 6
	$(document).ready(function () {
		$('#animatedBox').click(function () {
			$('#logi').text(''); // Очищення вмісту логу перед новою анімацією

			$(this).animate(
				{
					width: '100%',
					height: '500px',
					opacity: '0.5'
				},
				{
					duration: 7000,
					easing: 'swing',
					step: function (now, fx) {
						let $logi = $('#logi p[data-prop="' + fx.prop + '"]');
						if ($logi.length) {
							$logi.text('Крок анімації: ' + fx.prop + ', Поточне значення: ' + now);
						} else {
							$('#logi').append('<p data-prop="' + fx.prop + '">Крок анімації: ' + fx.prop + ', Поточне значення: ' + now + '</p>');
						}
					},
					queue: false
				}
			);
		});
	});
	$(document).ready(function () {
		$(".toggleButton").on("click", function () {
			$(this).siblings("p").toggle("slow");
		});

		$(".showButton").on("click", function () {
			$(this).siblings("div").first().show("fast", function showNext() {
				$(this).next("div").show("fast", showNext);
			});
		});

		$(".hideButton").on("click", function () {
			$(this).siblings("div").hide(1000);
		});
	});

	$("#start").on("click", function () {
		let myDiv = $(".myDiv");
		myDiv.show("slow");
		myDiv.animate({
			left: "+=200"
		}, 5000);

		myDiv.queue(function () {
			let that = $(this);
			that.addClass("newcolor");
			that.dequeue();
		});

		myDiv.animate({
			left: "-=200"
		}, 1500);
		myDiv.queue(function () {
			let that = $(this);
			that.removeClass("newcolor");
			that.dequeue();
		});
		myDiv.slideUp();
	});

	$("#stop").on("click", function () {
		let myDiv = $(".myDiv");
		myDiv.clearQueue();
		myDiv.stop();
	});
});