// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let origXPos = 175;
let origYPos = 200;
let x = 175;
let y = 200;
let characterSize = 40;
let speed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("green");
  displayCharacter();
  moveWASD();
  startScreenTitle();
  canvasBorder();
}

function startScreenTitle() {
  fill("black");
  stroke("white");
  text("Dodge", 80, 115);
  textSize(75);
}

function displayCharacter() {
  fill("white");
  stroke("black");
  square(x, y, characterSize);
}

function moveWASD() {
  if (keyIsDown(87)) { //w
    y = y - speed;
  }
  if (keyIsDown(65)) { //a
    x = x - speed;
  }
  if (keyIsDown(83)) { //s
    y = y + speed;
  }
  if (keyIsDown(68)) { //d
    x = x + speed;
  }
}

function returnToCharacterOrigin() {
  x = origXPos;
  y = origYPos;
}

function canvasBorder() {
  if (x >= width - characterSize) {
    returnToCharacterOrigin();
  }
  // else if (x <= width - characterSize) {
  //   returnToCharacterOrigin()
  // }
}