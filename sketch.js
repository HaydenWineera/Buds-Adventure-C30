// light's out
// Hayden Wineera
// 11/17/2021

// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let someText;


function setup() {
  
  let canvas = createCanvas(1760, 600);
  canvas.position(10, 10);

  someText = createP("The story begins <span style=\"color: white;\">here</span>");
  someText.position(500, 500);
  someText.style("color", "red");
  someText.style("font-size", "42pt");
}

function draw() {
  background(0);
}

function mousePressed() {
  someText.html = "keep <span style=\"color: white;\">clicking!</span>"; 
  // supposed to look like <span style="color: white;">WORD</span>
}