function copyText() {
	var popup = document.getElementById("popup");

	navigator.clipboard.writeText("cxntered#8012");
	popup.innerHTML = "Copied!";
}

function unhover() {
	var popup = document.getElementById("popup");

	popup.innerHTML = "cxntered#8012";
}
