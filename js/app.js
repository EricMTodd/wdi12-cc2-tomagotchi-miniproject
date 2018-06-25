console.log("JavaScript is running...");

// Three awards will be given on thursday:
// Prettiest
// Creative
// Most Fu

// Developer note: Everything is always subject to change at any time for any reason.

// Class to create new pet.

class Pet {
	constructor(name, gender, age, hunger, fatigue, bordedom) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.hunger = hunger;
		this.fatigue = fatigue;
		this.boredom = bordedom;
	}
};

const tomagotchi = new Pet("Shy Guy", "Male", 3, 4, 2, 6);
console.log(tomagotchi);

// Global variables for ease of access to specific HTML elements.
age = tomagotchi.age;
fatigue = tomagotchi.fatigue;
hunger = tomagotchi.hunger;
boredom = tomagotchi.boredom;

$feed = $("#feed");
$lightSwitch = $("#lightSwitch");
$play = $("#play");

// Starting gauges representing various status effects.
$("#age").text(`A: ${tomagotchi.age}`);
$("#hunger").text(`H: ${hunger}/10`);
$("#fatigue").text(`F: ${tomagotchi.fatigue}/10`);
$("#boredom").text(`B: ${tomagotchi.boredom}/10`);

// Button interaction to feed, toggle lights and play.
$feed.on("click", () => {
	hunger--;
	$("#hunger").text(`H: ${hunger}/10`);
});





















