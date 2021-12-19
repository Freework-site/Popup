const open = document.querySelector(".open_pop");
const close = document.querySelector(".close_btn");

open.addEventListener("click", () => {
	document.getElementById('popup').style.display = "block";
	var x = document.getElementsByTagName("BODY")[0];
	x.style.backgroundColor = "#161616";
})

close.addEventListener("click", () => {
	document.getElementById("popup").style.display = "none"
	var y = document.getElementsByTagName("BODY")[0];
	y.style.backgroundColor = "var(--primary-color)";
})