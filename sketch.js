// Light's Out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let someText;
let instance;

function setup() {
  let canvas = createCanvas(1760, 760);
  canvas.position(10, 10);

  someText = createP("The story begins <span style=\"color: white;\">here</span>");
  someText.position(500, 500);
  someText.style("color", "red");
  someText.style("font-size", "42pt");

  typeWrite("Welcome to the game! Alright so this is how this stuff works. Whenever there is a set of three dots like this(...) please press the [LEFT MOUSE BUTTON] to continue the script...");
}

function draw() {
  background(0);
}

function mousePressed() {
  //when pressed it should change the words that show up
  typeWrite("So now what?");
}

function typeWrite(sentence) {
  $("#typeArea").clearIt().typeIt(sentence, 0.1, "text").hideCursor();
}