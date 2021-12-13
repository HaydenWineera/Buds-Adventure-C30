// Light's Out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let someText;
let instance;
let counter = 0;

// story globals
let introSeq = ['It is a cloudy and very foggy day in Shaughnessy Vancouver. In your patrol vehicle you can barely see 10 feet in front of you...','As you struggle to keep an eye on the road ahead, you barely notice the red light eminating from within the fog. You feel a pump of adrenaline and a shiver down your spine as you screech to a sudden stop...', '"<em>God its a miserable day out today<em>," you think to yourself... ']; // introduction \033[3mI\033[0m

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
    $("#typeArea").clearIt();
    typeWrite(introSeq[counter]);
    $("typeArea").typeIt;
    counter ++;
}

function typeWrite(sentence) {
  $("#typeArea").clearIt().typeIt(sentence, 0.1, "text").hideCursor();
}