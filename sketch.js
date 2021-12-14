// Light's Out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let someText;
let instance;
let counter = 0;
let speed = 10;

// story globals
let introSeq = ['It is a cloudy and very foggy day in Shaughnessy Vancouver. In your patrol vehicle you can barely see 10 feet in front of you...','As you struggle to keep an eye on the road ahead, you barely notice the red light eminating from within the fog. You feel a pump of adrenaline and a shiver down your spine as you screech to a sudden stop...', '"God its a miserable day out today", you think to yourself... ', 'Life in Shaughnessy is pretty boring, but your job as a detective pays well so you choose not to complain...', 'The light turns green, as it does so you here another car engine rapidly approaching the intersection...', 'you see a faint black outline of what looks like an SUV before it disapears into the mist, it definately was not going the speed limit...', 'Even though you should probab;y follow up on this, you decide not too because your too lazy and-\n"What time is it?", you think to yourself...', 'You look down at your watch, the sharp LEDs of your watch display 5:30...', '"Im off duty", you think to yourslef,"I cant go after them now, maybe later", as you mumble you let out an exhausting exhale...', 'It is true, right now you hold the department record for most arrests, as you think this you smirk']; // introduction \033[3mI\033[0m

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

function keyPressed(sentence) {
  if (value === 32) {
    typeWrite(sentence, 0.01, "text") = 10;
    
  }
}
function typeWrite(sentence) {
  $("#typeArea").clearIt().typeIt(sentence, 0.08, "text").hideCursor();
}