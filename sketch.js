// Light's Out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let someText;
let instance;
let counter = 0;
let speed = 2;

// story globals
let introSeq = ["If at any point you wish to quit, just leave the browser. BE WARNED PROGRESS WILL NOT BE SAVED...", "Let us begin, shall we?...", "You buckle up the seatbelt of your squad car. Check the side mirrors, the rear view. All looks well...", "You grab the keys out of your pocket and put them into the ignition. The engine starts without a stutter. And you are on your way...", "The streets are littered with the homeless. You can't help but be sorry for some of them. They all start to hurry away at the sight of your car, no one likes the police around here...", "An ominous fog starts rolling in. You've noticed it happens a lot more now. ''Probably climate change'', you think to yourself...","This fog does start to worry you though, the roads start to become more troublesome to drive through. Even though you know them like the back of your hand, you still have to worry about other cars.",'As you struggle to keep an eye on the road ahead, you barely notice the red light eminating from within the fog. You feel a pump of adrenaline and a shiver down your spine as you screech to a sudden stop...', "''God what's happening today?'', you think to yourself... ", "Still stopped you here a distant noise, another car approaching the intersection...", 'The light turns green, and as it does so the car engine starts roaring louder within the fog...', 'The car drifts into the intersection before your eyes. You see a faint black outline of what looks like an SUV before it disapears into the mist, it definately was not going the speed limit...', "''Christ! I should go after them!'' You step on the gas pedal, adrenaline starts pumping through your veins. This is why you became a cop..."]; // introduction \033[3mI\033[0m
let chase;

function setup() {
  let canvas = createCanvas(1760, 760);
  canvas.position(10, 10);

  someText = createP("The story begins <span style=\"color: white;\">here</span>");
  someText.position(500, 500);
  someText.style("color", "red");
  someText.style("font-size", "42pt");

  typeWrite("Welcome to the game! Alright so this is how this stuff works. Whenever there is a set of three dots like this(...) please press the [LEFT MOUSE BUTTON] to continue the tale...");
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
  if (value = 80) {
    $("typeArea");  
  }
}
function typeWrite(sentence) {
  $("#typeArea").clearIt().typeIt(sentence, 0.08, "text");
}