// Interactive Scene
// Syhon Rylott
// October 2nd, 2024
//
// Extra for Experts:
// - I experimented with using the mouseWheel function as another input to interact with in my interactive scene.
// (continued) I used the function in a way that involves having a WASD user controlled square go into the size/inside of another square-
// (continued) which then allows you to use the mouse wheel to "fill up" the generator/that other square that the user went into. 
// I just made the scrolling interaction to cause a rect()'s height to increase visually (going downwards) in the color blue as more of the mouse wheel is spun,-
// (continued) while being in front of another rect() that is black so it looks like something like an empty tube is being filled up with water.



let origXPos = 175;
let origYPos = 200;
let whiteSquareX = 175;
let whiteSquareY = 200;
let characterSize = 40;
let speed = 5;
let theButtonX = 150;
let theButtonY = 200;
let gameState = "start screen";
let buttonState = "locked";


let titleTextX = 95;
let titleTextY = 120;
let levelTitleTextX = 115;
let levelTitleTextY = 80;
let toBeChangedSmallerTextX = 45;
let toBeChangedSmallerTextY = 160;
let mainTitleTextX = 95;
let mainTitleTextY = 120;


let blockX = 0;
let blockY = 326;
let blockSize = 75;
let rectX = 3;
let rectY = 300;
let rectMouseScrollPercentage = 1;
let chargeBlockState = "deactivated";


let chargeBlockTextX = 4;
let chargeBlockTextY = 280;


let lockedTextX = 351;
let lockedTextY = 30;

const COLOR_GRAY = 220;
const BUTTON_SIZE = 50;



//
function setup() {
  createCanvas(400, 400);
}


//
function draw() {
  gameStateChange();
}


//
function gameStateChange() {
  if (gameState === "start screen") {
    background(COLOR_GRAY);
    levelTitle();
    theButton();
  }

  else if (gameState === "level 1") {
    clear();
    background(COLOR_GRAY);
    levelTitle();
    theButton();
    backToStartScreenButton();
  }

  else if (gameState === "level 2") {
    clear();
    background(COLOR_GRAY);
    levelTitle();
    theButton();
    backToStartScreenButton();
  }

  else if (gameState === "level 3") {
    clear();
    background("green");
    levelTitle();
    theButton();
    backToStartScreenButton();
    displayChargeBlock();
    displayCharacter();
  }
}


//
function levelTitle() {
  if (gameState === "start screen") {
    textSize(50);
    fill("red");
    stroke("black");
    text("theButton", mainTitleTextX, mainTitleTextY);
    textSize(20);
    toBeChangedSmallerTextX = 45;
    toBeChangedSmallerTextY = 160;
    text("A game about clicking a red button.", toBeChangedSmallerTextX, toBeChangedSmallerTextY);
  }

  else if (gameState === "level 1") {
    textSize(50);
    fill("red");
    stroke("black");
    text("Level 1", levelTitleTextX, levelTitleTextY);
    textSize(25);
    toBeChangedSmallerTextX = 155;
    toBeChangedSmallerTextY = 120;
    text("Click", toBeChangedSmallerTextX, toBeChangedSmallerTextY);
  }

  else if (gameState === "level 2") {
    textSize(50);
    fill("red");
    stroke("black");
    text("Level 2", levelTitleTextX, levelTitleTextY);
    textSize(25);
    toBeChangedSmallerTextX = 100;
    toBeChangedSmallerTextY = 120;
    text("Where did it go?", toBeChangedSmallerTextX, toBeChangedSmallerTextY);
  }

  else if (gameState === "level 3") {
    textSize(50);
    fill("red");
    stroke("black");
    text("Level 3", levelTitleTextX, levelTitleTextY);
    textSize(25);
    toBeChangedSmallerTextX = 75;
    toBeChangedSmallerTextY = 120;
    text("Time for some WASD", toBeChangedSmallerTextX, toBeChangedSmallerTextY);
  }
}


//
function theButton() {
  if (gameState === "start screen") {
    theButtonX = 165;
    theButtonY = 200;
    if (mouseX > theButtonX && mouseX < theButtonX + BUTTON_SIZE && mouseY > theButtonY && mouseY < theButtonY + BUTTON_SIZE) {
      fill("green");
      stroke("black");
      square(theButtonX, theButtonY, BUTTON_SIZE);
      if (mouseIsPressed) {
        gameState = "level 1";
      }
    }
  
    else {
      fill("red");
      stroke("black");
      square(theButtonX, theButtonY, BUTTON_SIZE);
    }
  }


  else if (gameState === "level 1") {
    theButtonX = 160;
    theButtonY = 150;
    if (mouseX > theButtonX && mouseX < theButtonX + BUTTON_SIZE && mouseY > theButtonY && mouseY < theButtonY + BUTTON_SIZE) {
      fill("green");
      stroke("black");
      square(theButtonX, theButtonY, BUTTON_SIZE);
      if (mouseIsPressed) {
        gameState = "level 2";
      }
    }
  
    else {
      fill("red");
      stroke("black");
      square(theButtonX, theButtonY, BUTTON_SIZE);
    }
  }


  else if (gameState === "level 2") {
    theButtonX = 50;
    theButtonY = 300;
    if (mouseX > theButtonX && mouseX < theButtonX + BUTTON_SIZE && mouseY > theButtonY && mouseY < theButtonY + BUTTON_SIZE) {
      fill("green");
      stroke("black");
      square(theButtonX, theButtonY, BUTTON_SIZE);
      if (mouseIsPressed) {
        gameState = "level 3";
      }
    }
  
    else {
      fill(COLOR_GRAY);
      stroke(COLOR_GRAY);
      square(theButtonX, theButtonY, BUTTON_SIZE);
    }
  }


  else if (gameState === "level 3") {
    theButtonX = 350;
    theButtonY = 0;
    if (buttonState === "unlocked") {
      if (mouseX > theButtonX && mouseX < theButtonX + BUTTON_SIZE && mouseY > theButtonY && mouseY < theButtonY + BUTTON_SIZE) {
        fill("green");
        stroke("black");
        square(theButtonX, theButtonY, BUTTON_SIZE);
        if (mouseIsPressed) {
          gameState = "level 4";
          //startGame();
          //mouseClicked();
        }
      }
    
      else {
        fill("red");
        stroke("black");
        square(theButtonX, theButtonY, BUTTON_SIZE);
      }
    }
    else {
      fill("red");
      stroke("black");
      square(theButtonX, theButtonY, BUTTON_SIZE);
      fill("black");
      textSize(15);
      text("Locked", lockedTextX, lockedTextY);
    }
    }
}


//
function backToStartScreenButton() {
  if (mouseX > 0 && mouseX < 0 + BUTTON_SIZE && mouseY > 0 && mouseY < 0 + BUTTON_SIZE) {
    fill("white");
    stroke("black");
    square(0, 0, BUTTON_SIZE);
    fill("black");
    textSize(15);
    text("Restart", 1, BUTTON_SIZE/2);
    if (mouseIsPressed) {
      gameState = "start screen";
    }
  }

  else {
    fill("yellow");
    stroke("black");
    square(0, 0, BUTTON_SIZE);
  }
}


//
function displayCharacter() {
  fill("white");
  stroke("black");
  square(whiteSquareX, whiteSquareY, characterSize);
  moveWASD();
  conditionsForWhiteSquareToReturnToOrigin();
  //canvasBorder();
  //characterBorder();
}


//
function moveWASD() {
  if (keyIsDown(87)) { //w
    whiteSquareY = whiteSquareY - speed;
  }
  if (keyIsDown(65)) { //a
    whiteSquareX = whiteSquareX - speed;
  }
  if (keyIsDown(83)) { //s
    whiteSquareY = whiteSquareY + speed;
  }
  if (keyIsDown(68)) { //d
    whiteSquareX = whiteSquareX + speed;
  }
}


// function canvasBorder() {
//   if (whiteSquareX >= width - characterSize || whiteSquareX < 0 || whiteSquareY >= height - characterSize || whiteSquareY < 0) {
//     returnToCharacterOrigin();
//   }
// }


//
function conditionsForWhiteSquareToReturnToOrigin() {
  if (gameState === "start screen" || whiteSquareX >= width - characterSize || whiteSquareX < 0 || whiteSquareY >= height - characterSize || whiteSquareY < 0) {
    whiteSquareX = origXPos;
    whiteSquareY = origYPos;
  }
}


//
function displayChargeBlock() {
  if (gameState === "level 3") {
    fill("orange");
    stroke("black");
    square(blockX, blockY, blockSize);
    textSize(11.5);
    fill("white");
    text("Go inside the orange block and use the mousewheel to charge the generator.", chargeBlockTextX, chargeBlockTextY);
    fill("black");
    stroke("black");
    rect(rectX, rectY, 25, 100);
    fill("blue");
    rect(rectX, rectY, 25, rectMouseScrollPercentage);
    chargeState();
  }
  else if (gameState === "start screen" && rectMouseScrollPercentage > 1) {
    rectMouseScrollPercentage = 1;
  }
}


//
function chargeState() {
  if (gameState === "level 3") {
    if (whiteSquareX > blockX && whiteSquareX < blockX + blockSize && whiteSquareY > blockY && whiteSquareY < blockY + blockSize) {
      chargeBlockState = "activated";
    }
    else {
      chargeBlockState = "deactivated"
    }
  }
}


//
function mouseWheel() {
  if (gameState === "level 3" && chargeBlockState === "activated") {
    rectMouseScrollPercentage += 1;
    if (rectMouseScrollPercentage >= 100) {
      buttonState = "unlocked";
    }
  }
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


//Questions/Considerations:
// Comment header/Extras for Experts.