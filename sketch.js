// light's out
// Hayden Wineera
// 11/17/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;

function preload() {
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "menuScreen";
}

function draw() {
  if (state === "menuScreen") {
    background(25);
    textSize(32);
    text("Lights Out", windowWidth/2, windowHeight/2);
    fill(0, 102, 153);
  }
}