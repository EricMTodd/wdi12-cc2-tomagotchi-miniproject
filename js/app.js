console.log("JavaScript is running...");


// Three awards will be given on thursday:
// Prettiest
// Creative
// Most Functional

// Create everything that makes the game run.
// Create a game object that will run the game, make the game more efficient.
// Create a game object that will reference tomagotchi's created with the class template using the palyer input.
// Style the fuck out of it.

// Developer note: Everything is always subject to change at any time for any reason.


// CHARACTER CREATION //
// Class to create new pet.
class Pet {
	constructor(name, gender, age, hunger, fatigue, boredom) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.hunger = hunger;
		this.fatigue = fatigue;
		this.boredom = boredom;
		}
};

// This is a list of pets to choose from. One for now.
const tomagotchi = new Pet("", "Male", 1, 1, 1, 1);

// User input for petName.
tomagotchi.name = prompt("What's your new pet's name?", "Shy Guy");



// GLOBAL VARIABLES //
// Experimental variables.
let petName = tomagotchi.name;
let age = tomagotchi.age;
let fatigue = tomagotchi.fatigue;
let hunger = tomagotchi.hunger;
let boredom = tomagotchi.boredom;
let conscious = true;

// Timeframe variables
let secondCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;

// Variable min, max values.
ageMin = 0;
ageMax = 5;
fatigueMin = 0;
fatigueMax = 10;
hungerMin = 0;
hungerMax = 10;
boredomMin = 0;
boredomMax = 10;

// jQuery variables for HTML references.
$feed = $("#feed");
$lightSwitch = $("#lightSwitch");
$play = $("#play");

// Starting gauges representing various status effects.
$("#age").text(`A: ${age}`);
$("#hunger").text(`H: ${hunger}/10`);
$("#fatigue").text(`F: ${fatigue}/10`);
$("#boredom").text(`B: ${boredom}/10`);

// Displays the chosen name of the tomagotchi.
$(".activePet").prepend(`<div>${petName}</div>`);

// Displays a stopwatch that counts up to 4 total hours of gameplay in one instance.
$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);


// FUNCTIONS //
// Global stopwatch timer to control status effects at specific intervals that also causes the tomagotchi to age.
const timeLapse = () => {
	secondCounter++;
	$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
		if (secondCounter > 60) {
			minuteCounter++;
			failState();
			secondCounter = 0;
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
	}
		if (minuteCounter > 60) {
			hourCounter++;
			age++;
			$("#age").text(`A: ${age}`);
			minuteCounter = 0;
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			failState();
	}
		if (hourCounter > 3) {
			clearInterval(timer);
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			alert(`Well Done! ${petName} lived a long and happy life in your care. Like all wonderful pets however, ${petName} must also cross the rainbow bridge.`);
		}
};

const timer = setInterval(timeLapse, 1000);

// Fail state conditions
const failState = () => {
	// Failstate simulating hunger.
	if (minuteCounter % 15 === 0 && minuteCounter !== 1 && minuteCounter !== 0) {
		if (hunger === hungerMax) {
			clearInterval(timer);
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			alert(`Game Over! ${petName} starved to death.`);
		} else {
			hunger++;
			$("#hunger").text(`H: ${hunger}/10`);
		}
	};

	// Failstate simulating fatigue and exhaustion.
	if (minuteCounter % 30 === 0 && minuteCounter !== 1 && minuteCounter !== 0) {
		if (fatigue === fatigueMax) {
			clearInterval(timer);
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			alert(`Game Over! ${petName} died from exhaustion.`);
		} else if (fatigue === fatigueMin) {
			alert(`${petName} is all rested up!`);
		} else {
			fatigue++;
			$("#fatigue").text(`F: ${fatigue}/10`);
		}
	};

	// Failstate simulating boredom.
	if (minuteCounter % 3 === 0 && minuteCounter !== 1 && minuteCounter !== 0) {
		if (boredom === boredomMax) {
			clearInterval(timer);
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			alert(`Game Over! ${petName} died from sheer boredom.`);
		}  else {
			boredom++;
			$("#boredom").text(`B: ${boredom}/10`);
		}
	};
};


// PLAYER INTERACTION //
// Button to reduce hunger levels.
$feed.on("click", () => {
	if (hunger === hungerMin)  {
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
			alert(`${petName} can't keep up that kind of pace!`);
			fatigue++;
			$("#fatigue").text(`F: ${fatigue}/10`);
		} else {
		boredom--;
		$("#boredom").text(`B: ${boredom}/10`);
	}
});






















