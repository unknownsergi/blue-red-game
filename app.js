const botons = document.querySelector(".botons");
const boto = document.querySelectorAll(".boto");

let color_array = [];
console.log(random_num);
var random_num = 0;
for (let i = 0; i < 2; i++) {
	if (random_num === 0) {
		color_array[i] = "blue";
	} else {
		color_array[i] = "red";
	}
	console.log(i);
}
console.log(color_array);

botons.addEventListener("click", (e) => {
	if (e.target.classList.contains("boto")) {
		e.target.classList.toggle("blau");
	}
});
