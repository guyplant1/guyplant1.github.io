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
  startScreenTitle();
  startScreenButtonsTexts();
  buttonHover();
}


function startScreenTitle() {
  textSize(75);
  fill("black");
  stroke("white");
  text("Dodge", 80, 115);
}


function startScreenButtonsTexts() {
  textSize(20);
  fill("red");
  text("Test", 100, 300);
  textSize(40);
  fill("blue");
  text("Other Test", 30, 200);
}


function buttonHover() {
  if (mouseX > START_SCREEN_BUTTON_X && mouseX < START_SCREEN_BUTTON_X + BUTTON_SIZE && mouseY > START_SCREEN_BUTTON_Y && mouseY < START_SCREEN_BUTTON_Y + BUTTON_SIZE) {
    fill("white");
    stroke("black");
    square(START_SCREEN_BUTTON_X, START_SCREEN_BUTTON_Y, BUTTON_SIZE);
    if (mouseIsPressed) {
      startGame();
    }
  }

  else {
    fill("black");
    stroke("white");
    square(START_SCREEN_BUTTON_X, START_SCREEN_BUTTON_Y, BUTTON_SIZE);
  }
}


function startGame() {
  displayCharacter();
  moveWASD();
  canvasBorder();
}


//mouseX < START_SCREEN_BUTTON_X + BUTTON_SIZE


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



// let gameState = "start";

// draw
// if (gameState === "start") {
//   showStartScreen();
// else if (gameState === "moving square");
// }

// function mousePressed() {
//   if (gameState === "start") {
//     gameState = "moving square";
//   }
// }

// function showStartScreen {
//   textAlign(CENTER, CENTER);
//   textSize(50);
//   text("Press to start");