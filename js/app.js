console.log("JavaScript is running...");


// Three awards will be given on thursday:
// Prettiest
// Creative
// Most Functional

// First, create everything that makes the game run.
// Second, create a game object that will run the game.
// Style the fuck out of it.

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

// This is a list of pets to choose from. One for now.
const tomagotchi = new Pet("", "Male", 1, 1, 1, 1);

// Global variables for ease of access to specific HTML elements.
let petName = tomagotchi.name;
let age = tomagotchi.age;
let fatigue = tomagotchi.fatigue;
let hunger = tomagotchi.hunger;
let boredom = tomagotchi.boredom;
let minute = 60000;

// jQuery variables for HTML references
$feed = $("#feed");
$lightSwitch = $("#lightSwitch");
$play = $("#play");

// Variable min, max values.
ageMin = 1;
ageMax = 5;
fatigueMin = 1;
fatigueMax = 10;
hungerMin = 1;
hungerMax = 10;
boredomMin = 1;
boredomMax = 10;


// Prompt that will name the new pet.
tomagotchi.name = prompt("What's your new pet's name?" , "Shy Guy");

let $namePlate = ("<div>" + tomagotchi.name + "</div>");
$(".activePet").prepend($namePlate);

// Starting gauges representing various status effects.
$("#age").text(`A: ${age}`);
$("#hunger").text(`H: ${hunger}/10`);
$("#fatigue").text(`F: ${fatigue}/10`);
$("#boredom").text(`B: ${boredom}/10`);

// Conditions that result in game objective failure.

// Timer that increases tomagotchi's age by 1 every hour. The tomagotchi will die at the start of the 5th hour.
const ageAlgorithm = () => {
	if (age < ageMax) {
		age++;
		console.log(`${petName} is ${age}.`);
		$("#age").text(`A: ${age}`);
	} else {
		clearInterval(ageTimer);
		console.log("ageTimer Cleared");
		alert(`Game Over! ${petName} has died of old age.`);
	}
};

console.log("ageAlgorithm is running...");
const ageTimer = setInterval(ageAlgorithm, minute * 60);

// Timer that simulates how hungry tomagotchi is. If the gauge get's maxed out, tomagotchi will die. If you try to overfeed tomagotchi, an alert will display.
const hungerAlgorithm = () => {
	if (hunger < hungerMax) {
		hunger++;
		$("#hunger").text(`H: ${hunger}/10`);
	} else {
		clearInterval(hungerTimer);
		console.log("hungerTimer Cleared");
		alert(`Game Over! ${petName} has died of starvation.`)
	}
};

console.log("hungerAlgorithm is running...");
const hungerTimer = setInterval(hungerAlgorithm, minute * 15);

// Timer that simulates fatigue over a set amount of time. If the fatigue guage is maxed out, tomagotchi will pass out. If you try to make him sleep while he is rested, an alert will display.
const fatigueAlgorithm = () => {
	if (fatigue < fatigueMax) {
		fatigue++;
		$("#fatigue").text(`F: ${fatigue}/10`);
	} else {
		clearInterval(fatigueTimer);
		console.log("fatigueTimer Cleared");
		alert(`${petName} has passed out from fatigue!`);
	}
};

console.log("fatigueAlgorithm is running...");
const fatigueTimer = setInterval(fatigueAlgorithm, minute * 30);

// Timer that simulates boredom. Exact same function as fatigue, with different time intervals.
const boredomAlgorithm = () => {
	if (boredom < boredomMax) {
		boredom++;
		$("#boredom").text(`B: ${boredom}/10`);
	} else {
		clearInterval(boredomTimer);
		console.log("boredomTimer Cleared");
		alert(`${petName} has passed out from sheer boredom!`);
	}
};

console.log("boredomAlgorithm is running...");
const boredomTimer = setInterval(boredomAlgorithm, minute * 3);

// Buttons with which to interact with tomagotchi.

// Button to reduce hunger levels.
$feed.on("click", () => {
	if (hunger === hungerMin) {
		alert(`${petName} is full!`);
	} else {
		hunger--;
		$("#hunger").text(`H: ${hunger}/10`);
	}
});

// Button to switch lights on and off.
let lightToggle = false;
$lightSwitch.on("click", () => {
	if (lightToggle === false) {
		$("body").css("background-color", "black");
		$("li").css("color", "white");
		$("#petImg").attr("src", "");
		$("#fatigue").text(`F: ${tomagotchi.fatigue}/10`);
		clearInterval(fatigueTimer);
		console.log("fatigueTimer Cleared");
		lightToggle = true;
	} else {
		$("body").css("background-color", "orange");
		$("li").css("color", "black");
		$("#petImg").attr("src", "images/Shy_Guy.png");
		lightToggle = false;
	}
});

// Button to reduce boredom levels.
$play.on("click", () => {
	if (boredom === boredomMin) {
		fatigue++;
		$("#fatigue").text(`F: ${fatigue}/10`);
		alert(`${petName} has had all they can take!`);
	} else {
		boredom--;
		$("#boredom").text(`B: ${boredom}/10`);
	}
});


















