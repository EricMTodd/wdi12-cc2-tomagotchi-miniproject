console.log("JavaScript is running...");


// Three awards will be given on thursday:
// Prettiest
// Creative
// Most Functional


// Create a reset function.

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
const tomagotchi = new Pet("", "Male", 1, 5, 7, 3);

// User input for petName.
tomagotchi.name = prompt("What's your new pet's name?", "Shy Guy");


// GLOBAL VARIABLES //
// Experimental variables.
let petName = tomagotchi.name;
let age = tomagotchi.age;
let fatigue = tomagotchi.fatigue;
let hunger = tomagotchi.hunger;
let boredom = tomagotchi.boredom;
let light = true;

// Timeframe variables
let secondCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;

// Variable min, max values.
ageMin = 0;
ageMax = 5;
fatigueMin = 0;
fatigueMax = 9;
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
$("#namePlate").text(`${petName}`);

// Displays a stopwatch that counts up to 4 total hours of gameplay in one instance.
$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);


// FUNCTIONS //
// Global stopwatch timer to control status effects at specific intervals that also causes the tomagotchi to age.
const timeLapse = () => {
	// Catalyst for stopwatch.
	secondCounter++;
	$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);

		// Second display that also invokes the failStates.
		if (secondCounter > 60) {
			minuteCounter++;
			failState();
			secondCounter = 0;
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
	};

		// Minute display.
		if (minuteCounter > 60) {
			hourCounter++;
			age++;
			$("#age").text(`A: ${age}`);
			minuteCounter = 0;
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			failState();
	};

		// Hour display and win condition.
		if (hourCounter > 3) {
			$(".activePet").stop();
			restart();
			$("img").attr("src", "images/tombstone.png");
			clearInterval(timer);
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			$("#alerts").text("");
			$("#alerts").append(`<br>Well Done! ${petName} lived a long and happy life in your care. Like all wonderful pets however, ${petName} must also cross the rainbow bridge.`);
	};

		// Conditions that will allow the tomagotchi to rest while the lights are off. Once it is fully rested, the lights will come back on and normal functions resume.
		if (light === false) {
			if (fatigue === fatigueMin) {
				lightToggle();
				$("#alerts").text("");
				$("#alerts").append(`<br>${petName} is all rested up!`);
			} else {
				fatigue--;
				$("#fatigue").text(`F: ${fatigue}/10`);
			}
	};	
};

const timer = setInterval(timeLapse, 1000);

// Fail state conditions.
const failState = () => {
	// Failstate simulating hunger.
	if (minuteCounter % 5 === 0 && minuteCounter !== 1 && minuteCounter !== 0) {
		if (hunger === hungerMax) {
			$(".activePet").stop();
			restart();
			$("img").attr("src", "images/tombstone.png");
			clearInterval(timer);
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			$("#alerts").text("");
			$("#alerts").append(`<br>Game Over! ${petName} starved to death.`);
		} else {
			hunger++;
			$("#hunger").text(`H: ${hunger}/10`);
		}
	};

	// Failstate simulating fatigue and exhaustion.
	if (minuteCounter % 7 === 0 && minuteCounter !== 1 && minuteCounter !== 0) {
		if (fatigue === fatigueMax) {
			$(".activePet").stop();
			restart();
			$("img").attr("src", "images/tombstone.png");
			clearInterval(timer);
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			$("#alerts").text("");
			$("#alerts").append(`<br>Game Over! ${petName} died from exhaustion.`);
		} else {
			fatigue++;
			$("#fatigue").text(`F: ${fatigue}/10`);
		}
	};

	// Failstate simulating boredom.
	if (minuteCounter % 3 === 0 && minuteCounter !== 1 && minuteCounter !== 0) {
		if (boredom === boredomMax) {
			$(".activePet").stop();
			restart();
			$("img").attr("src", "images/tombstone.png");
			clearInterval(timer);
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			$("#alerts").text("");
			$("#alerts").append(`<br>Game Over! ${petName} died from sheer boredom.`);
		}  else {
			boredom++;
			$("#boredom").text(`B: ${boredom}/10`);
		}
	};
};

// Function that turns the lights on and off by altering the truthy/falsey statement of the variable light.
const lightToggle = () => {
	if (light === true) {
		$("#gameWindow").css("background-color", "black");
		$("li").css("color", "white");
		$("#clock").css("color", "white");
		$("#petImg").css("opacity", 0);
		light = false;
	} else {
		$("#gameWindow").css("background-color", "white");
		$("li").css("color", "black");
		$("#clock").css("color", "black");
		$("#petImg").css("opacity", 1);
		light = true;
	}
};

// These fucntions control the movement of the tomagotchi. Credit -- Benjamin Kaplan + Ryan Flehraty.
const moveRight = () => {
	$("#petImg").css("-moz-transform","scaleX(1)").css("-o-transform","scaleX(1)").css("-webkit-transform","scaleX(1)").css("transform","scaleX(1)");
	$(".activePet").animate({
		left: "+=380"
	}, 3000, function() {
		moveLeft();
	});
};
const moveLeft = () => {
	$("#petImg").css("-moz-transform","scaleX(-1)").css("-o-transform","scaleX(-1)").css("-webkit-transform","scaleX(-1)").css("transform","scaleX(-1)").css("filter","FlipH").css("-ms-filte","'FlipH'");
	$(".activePet").animate({
		left: "-=380"
	}, 3000, function() {
		setTimeout(moveRight, 50);
	});
};

setTimeout(moveRight, 50);

// Upon any failstate, player interaction buttons are replaced with a button that will refresh the page.
const restart = () => {
		$feed.off();
		$play.off();
		$lightSwitch.off();
		$lightSwitch.text(`Restart`)
		$lightSwitch.on("click", () => {
		window.location.reload();	
	});	
};


// PLAYER INTERACTION //
// Button to reduce hunger levels.
$feed.on("click", () => {
	if (hunger === hungerMin)  {
			$("#alerts").text("");
			$("#alerts").append(`<br>${petName} is full!`);
		} else {
		hunger--;
		$("#hunger").text(`H: ${hunger}/10`);
	}
});

// Button to switch lights on and off.
$lightSwitch.on("click", () => {
	lightToggle();	
});

// Button to reduce boredom levels.
$play.on("click", () => {
		if (fatigue === fatigueMax) {
			$(".activePet").stop();
			restart();
			$("img").attr("src", "images/tombstone.png");
			clearInterval(timer);
			$("#clock").text(`Time Elapsed: ${hourCounter}:${minuteCounter}:${secondCounter}`);
			$("#alerts").text("");
			$("#alerts").append(`<br>Game Over! ${petName} died from exhaustion.`);
	}

	if (boredom === boredomMin) {
			$("#alerts").text("");
			$("#alerts").append(`<br>${petName} can't keep up that kind of pace!`);
			fatigue++;
			$("#fatigue").text(`F: ${fatigue}/10`);
		} else {
			boredom--;
			$("#boredom").text(`B: ${boredom}/10`);
	}
});






















