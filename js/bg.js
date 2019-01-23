var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bg");
var css = document.querySelector("h3");
var random = document.querySelector("button");

function backgroundColor() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomNum() {
	return Math.floor(Math.random()*255);
}

function randomCol() {
	return "rgb(" + randomNum() + ","
	+ randomNum() + "," + randomNum() + ")";
}

function randomBg() {	
	body.style.background =
	"linear-gradient(to right, "
	+ randomCol()
	+ ", "
	+ randomCol()
	+ ")";

	css.textContent = body.style.background + ";";
}

window.addEventListener("load", backgroundColor);

color1.addEventListener("input", backgroundColor);
color2.addEventListener("input", backgroundColor);

random.addEventListener("click", randomBg);