// light's out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "menuScreen";
  let txt = createDiv("Press Me!");
  txt.position(450, 700);
}

function draw() {
  if (state === "menuScreen") {
    background(25);
    textSize(32);
    text("Menu Screen", windowWidth/2, windowHeight/2);
    fill(0, 102, 153);
  }
  if (state === "intro") {
    background(20);
    textSize(32);
    text("intro"); 
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    state = "intro";
  }
}