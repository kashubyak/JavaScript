function restart(id_) {
	var b_ = document.getElementById(id_);
	b_.className = " ";
	setTimeout(function () {
		b_.className = "anim";
	}, 10);

}