// Code with Pete
// Lesson 10: Popups, events, and timing with JavaScript

// Here we define the firstPopup() function.
// A function definition starts with the keyword `function` and contains
// some code to be executed within the curly brackets following.
function firstPopup() {
  document.getElementById("modal-wrapper").style.display = "flex";
}
// The first popup will appear as soon as the <body> tag has loaded becasue
// we call the firstPopup() function in the onload attribute of
// the <body> tag.

// Here we call the firstPopup() function.
// When we "call a function" we are running the code inside the curly brackets.
firstPopup()

// Here we define the timedPopup() function.
function timedPopup() {
  setTimeout(function() {
    document.getElementById("modal-wrapper-two").style.display = "flex";
  }, 3000);
}
// This popup will appear after three seconds has elapsed. Try changing the number
// from 3000 to any other number to see how that affects the timed popup.
// In the setTimeout function, timing is denoted in milliseconds,
// and 3000 milliseconds equals three seconds.

// Here we call the timedPopup() function.
timedPopup();


function closePopup() {
  document.getElementById("modal-wrapper").style.display = "none";
}

function closePopupTwo() {
  document.getElementById("modal-wrapper-two").style.display = "none";
}
