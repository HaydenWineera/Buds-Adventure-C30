// Light's Out
// Hayden Wineera
// 2022/01/10

// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let someText;
let instance;
let counter = 0;
let speed = 0.03;
let introSeqPic;
let picSize;
let state = 0;

// story globals
let introSeq = ["If at any point you wish to quit, just leave the browser. BE WARNED PROGRESS WILL NOT BE SAVED...", "Let us begin, shall we?...", "You buckle up the seatbelt of your squad car. Check the side mirrors, the rear view. All looks well...", "You grab the keys out of your pocket and put them into the ignition. The engine starts without a stutter. And you are on your way...", "The streets are littered with the homeless. You can't help but be sorry for some of them. They all start to hurry away at the sight of your car, no one likes the police around here...", "An ominous fog starts rolling in. You've noticed it happens a lot more now. ''Probably climate change'', you think to yourself...","This fog does start to worry you though, the roads start to become more troublesome to drive through. Even though you know them like the back of your hand, you still have to worry about other cars.",'As you struggle to keep an eye on the road ahead, you barely notice the red light eminating from within the fog. You feel a pump of adrenaline and a shiver down your spine as you screech to a sudden stop...', "''God what's happening today?'', you think to yourself... ", "Still stopped you here a distant noise, another car approaching the intersection...", 'The light turns green, and as it does so the car engine starts roaring louder within the fog...', 'The car drifts into the intersection before your eyes. You see a faint black outline of what looks like an SUV before it disapears into the mist, it definately was not going the speed limit...', "''Christ! I should go after them!'' You step on the gas pedal, adrenaline starts pumping through your veins. This is why you became a cop..."]; // introduction \033[3mI\033[0m
let chaseSeq = ["howdy ho"];

function preload() {
  introSeqPic = loadImage('assets/Scene 1.jpg');
}

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
  if (state === 0) {
    background(0);
  }
  if (state === 1) {
    image(introSeqPic, 0, 0, 1760, 760);
  }
  if (state === 2) {
    backround(0);
  }
}

function mousePressed() {
  //when the left mouse is clicked it should change the words that show up
  if (counter === 2) {
    state = 1;
  }
    $("#typeArea").clearIt();
    typeWrite(introSeq[counter]);
    $("typeArea").typeIt;
    counter ++;
    if (counter === 14) {
      counter = 0;
      $("#typeArea").clearIt();
    typeWrite(chaseSeq[counter]);
    $("typeArea").typeIt;
    counter ++;
    }
}

function keyPressed(sentence) {
  //flip flop between speeds by pressing the space key
  if (value = 80) {
    if (speed === 0.08) {
      speed = 0.03;
    }
    else {
      speed = 0.08;
    }
  }
}

function typeWrite(sentence) {
  //the typewriting effect function
  $("#typeArea").clearIt().typeIt(sentence, speed, "text");
}