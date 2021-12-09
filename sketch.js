// light's out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let someText;
let instance;

function setup() {
  let canvas = createCanvas(1760, 800);
  canvas.position(10, 10);

  someText = createP("The story begins <span style=\"color: white;\">here</span>");
  someText.position(500, 500);
  someText.style("color", "red");
  someText.style("font-size", "42pt");

  typeWrite("hey there this is just going to type something hopefully");
}

function draw() {
  background(0);
}

function mousePressed() {

  //when pressed it should change the words that show up...
}

function typeWrite(sentence) {
  $("#typeArea").clearIt().typeIt(sentence, 0.05, "text").hideCursor();
}