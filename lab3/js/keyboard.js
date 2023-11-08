document.getElementById('mac').addEventListener('keydown', function (e) {
	var code = e.keyCode || e.which;

	if (code === 18 || code === 16) {
		document.getElementById('kc-' + code + 'R').classList.add('active');
		document.getElementById('kc-' + code + 'L').classList.add('active');
	} else {
		document.getElementById('kc-' + code).classList.add('active');
	}

	if (code === 9) {
		var start = this.selectionStart;
		var end = this.selectionEnd;
		var $this = $(this);
		var value = $this.val();
		$this.val(value.substring(0, start) + '  ' + value.substring(end));
		this.selectionStart = this.selectionEnd = start + 2;
		e.preventDefault();
	}
});

document.getElementById('mac').addEventListener('keyup', function (e) {
	var code = e.keyCode || e.which;

	if (code === 18 || code === 16) {
		document.getElementById('kc-' + code + 'R').classList.remove('active');
		document.getElementById('kc-' + code + 'L').classList.remove('active');
	} else {
		document.getElementById('kc-' + code).classList.remove('active');
	}
});