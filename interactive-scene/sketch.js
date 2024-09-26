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
const BUTTON_SIZE = 50;
const START_SCREEN_BUTTON_X = 150;
const START_SCREEN_BUTTON_Y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("green");
  //displayCharacter();
  //moveWASD();
  startScreenTitle();
  buttonHover();
  //canvasBorder();
}

function startScreenTitle() {
  fill("black");
  stroke("white");
  text("Dodge", 80, 115);
  textSize(75);
}

function buttonNotHovered() {
  fill("yellow");
  stroke("blue");
}

function buttonHover() {
  if (mouseX > START_SCREEN_BUTTON_X) {
    fill("red");
    stroke("yellow");
    square(START_SCREEN_BUTTON_X, START_SCREEN_BUTTON_Y, BUTTON_SIZE);
  }
  else {
    fill("yellow");
    stroke("red");
    square(START_SCREEN_BUTTON_X, START_SCREEN_BUTTON_Y, BUTTON_SIZE);
  }
}

// function displayCharacter() {
//   fill("white");
//   stroke("black");
//   square(x, y, characterSize);
// }

// function moveWASD() {
//   if (keyIsDown(87)) { //w
//     y = y - speed;
//   }
//   if (keyIsDown(65)) { //a
//     x = x - speed;
//   }
//   if (keyIsDown(83)) { //s
//     y = y + speed;
//   }
//   if (keyIsDown(68)) { //d
//     x = x + speed;
//   }
// }

// function returnToCharacterOrigin() {
//   x = origXPos;
//   y = origYPos;
// }

// function canvasBorder() {
//   if (x >= width - characterSize) {
//     returnToCharacterOrigin();
//   }
//   // else if (x <= width - characterSize) {
//   //   returnToCharacterOrigin()
//   // }
// }