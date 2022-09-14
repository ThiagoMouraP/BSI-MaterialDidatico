function gabarito(id) {
    var div = document.getElementById(id);
    var disp = div.style.display;
    div.style.display = disp == 'none' ? 'block' : 'none';
	if (div.style.display == 'block') {
		div.previousElementSibling.className += " div-theme";
	} else {
		div.previousElementSibling.className =
		div.previousElementSibling.className.replace(" div-theme", "");
	}
}