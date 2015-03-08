// some useful JavaScript 

// this will generate a random number from 1 to 6, including 6 
// without 1 +, you would have 0 to 5 
var guess = 1 + Math.floor(Math.random() * 6);

// ------------------ functions ------------------

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

// -----------------------------------------------


// syntax for if-else, commented out 

/* -------------------------
if (answer === 3) {
	msg = "It is equal.";
} else if (answer < 3) {
	msg = "It is less.";
} else {
	msg = "It is greater.";
}
------------------------- */



// ------------------ make the buttons work ------------------ 

// each line below calls a function when the button is clicked 
// all three of these functions appear above, in this file 

document.getElementById("button1").onclick=alertThem;
document.getElementById("button2").onclick=confirmIt;
document.getElementById("button3").onclick=promptThem;



