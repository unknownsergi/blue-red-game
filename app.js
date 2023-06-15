const container = document.querySelector(".boto");
const botons = document.querySelectorAll(".boto");

let secret_colors = [];
let buttons_colors = [];
for (let i = 0; i < 2; i++) {
	let random_num = Math.round(Math.random());
	if (random_num == 0) {
		secret_colors[i] = "blue";
	} else {
		secret_colors[i] = "red";
	}
}
console.log(secret_colors);

botons.addEventListener("click", (e) => {
	if (e.target.classList.contains("boto")) {
		e.target.classList.toggle("blau");
		if (e.target.classList.contains("blau")) {
			buttons_colors[0] = "blue";
		} else {
			buttons_colors[0] = "red";
		}
	}
	updateSomething();
});
