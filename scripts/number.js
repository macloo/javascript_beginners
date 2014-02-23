// some useful JavaScript 

// this will generate a random number from 1 to 6 
var guess = 1 + Math.floor(Math.random() * 6);

// this will open a confirm dialog box
function confirmIt() {
	var userInput = confirm("Do you want to continue?");
}

// this will open an alert dialog box
function alertThem() {
	alert("Hello.");
}

// this will open a prompt dialog box
function promptThem() {
	var userResponse = prompt("Type something:");
}


// syntax for if-else, commented out 
/*
if (5 == 3) {
	msg = "It is equal.";
} else if (5 < 3) {
	msg = "It is less.";
} else {
	msg = "It is greater.";
}
*/

