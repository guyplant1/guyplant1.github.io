// Grid-Based Game
// Syhon Rylott
// Oct 28th, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const CELL_SIZE = 25;
const PLAYER = 0;
let grid;
let cols;
let rows;
let timerState = 5;
let lastTimeTimerSwitched = 0;
let lastTimeGridSwitched = 0;
let timerWaitTime = 1000;
let gameWaitTime = 5000;
let timerNumbers = [];
let thePlayer;


// In the setup the canvas, cols and rows for the grid, and the grid itself are created/drawn.
function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/2/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  thePlayer = {
    x: 0,
    y: 0,
  };
  grid = generateRandomGrid(cols, rows);
  //grid[thePlayer.y][thePlayer.x] = PLAYER;
  // for (let i = 0; i < 6; i++) {
  //   drawTimerNumber();
  // }
}


// In the draw loop the background is set to black, and goes through the functions that decide how long both the grid and timer numbers are displayed for,
// (con) displayment of the randomly colored sqaures in the grid, and displayment of the number text for the timer (on the right side of the canvas/screen).
function draw() {
  background(0);
  timerChanges();
  displayGrid();
  displayTimerNumberText();
}


// This function displays the timer number text on the right side of the screen, shown for a full second for each number before changing to the next, using the changed timerState from timerChanges() to switch the number.
function displayTimerNumberText() {
  // textSize(windowHeight/4);
  // fill("white");
  // text("5", 1100, 450);
  textSize(windowWidth/4);
  fill("white");
  text(timerState, 1100, 450);
}


// This function here uses millis() in two different ways to draw or change both the grid and the timer number on the screen, having the timer change every second using timerState subtracted by 1 (and if reaches 0, will go back to being a 5), and the grid to be randomly generated for colors every 5 seconds.
function timerChanges() {
  if (millis() > lastTimeGridSwitched + gameWaitTime) {
    grid = generateRandomGrid(cols, rows);
    lastTimeGridSwitched = millis();
  }
  if (millis() > lastTimeTimerSwitched + gameWaitTime/5) {
    timerState = timerState - 1;
    if (timerState === 0) {
      timerState = 5;
    }
    lastTimeTimerSwitched = millis();
  }
}


// This function executes the drawing of each cell square of the grid, with its selected color coming from generateRandomGrid()
function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      
      if (grid[y][x] === 0) {
        fill("red");
      }

      else if (grid[y][x] === 1) {
        fill("orange");
      }

      else if (grid[y][x] === 2) {
        fill("yellow");
      }

      else if (grid[y][x] === 3) {
        fill("green");
      }

      else if (grid[y][x] === 4) {
        fill("blue");
      }

      else if (grid[y][x] === 5) {
        fill("purple");
      }

      else if (grid[y][x] === 6) {
        fill("white");
      }

      else if (grid[y][x] === 7) {
        fill("black");
      }

      else if (grid[y][x] === 8) {
        fill("brown");
      }

      else if (grid[y][x] === 9) {
        fill(70, 70, 50);
      }

      else {
        fill("pink");
      }

      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
  //replaceCellForPlayer();
}


// //
// function replaceCellForPlayer() {
//   y = random(rows);
//   x = random(cols);
//   grid[newY][newX] = PLAYER;
// }


// This function randomly decides each cell's color in the grid, with the selection of 10 colors/numbers different from the player (being the color red/the number 0).
function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (y = 0; y < rows; y++) {
    newGrid.push([]);
    for (x = 0; x < cols; x++) {
      // toss in a 0 or 1 randomly
      if (random(100) <= 10) {
        newGrid[y].push(1);
      }

      else if (random(100) > 10 && random(100) <= 20) {
        newGrid[y].push(2);
      }

      else if (random(100) > 20 && random(100) <= 30) {
        newGrid[y].push(3);
      }

      else if (random(100) > 30 && random(100) <= 40) {
        newGrid[y].push(4);
      }

      else if (random(100) > 40 && random(100) <= 50) {
        newGrid[y].push(5);
      }

      else if (random(100) > 50 && random(100) <= 60) {
        newGrid[y].push(6);
      }

      else if (random(100) > 60 && random(100) <= 70) {
        newGrid[y].push(7);
      }

      else if (random(100) > 70 && random(100) <= 80) {
        newGrid[y].push(8);
      }

      else if (random(100) > 80 && random(100) <= 90) {
        newGrid[y].push(9);
      }

      else {
        newGrid[y].push(10);
      }
    }
  }

  let playerY = Math.floor(random(rows));
  let playerX = Math.floor(random(cols));

  newGrid[playerY][playerX] = PLAYER;

  thePlayer.y = playerY;
  thePlayer.x = playerX;

  return newGrid;
}


// //
// function mousePressed() {
//   if (key === "w") {
//     //move up
//     movePlayer(thePlayer.x, thePlayer.y - 1);
//   }

//   if (key === "a") {
//     //move left
//     movePlayer(thePlayer.x - 1, thePlayer.y);
//   }

//   if (key === "s") {
//     //move down
//     movePlayer(thePlayer.x, thePlayer.y + 1);
//   }

//   if (key === "d") {
//     //move right
//     movePlayer(thePlayer.x + 1, thePlayer.y);
//   }
// }


// //
// function movePlayer(x, y) {
//   //don't move off grid, and only move in open tiles
//   if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && grid[y][x] === OPEN_TILE) {
//     //previous player location
//     let oldX = thePlayer.x;
//     let oldY = thePlayer.y;

//     //keeping track of where the player is
//     thePlayer.x = x;
//     thePlayer.y = y;

//     //reset the old location to be an empty tile
//     grid[oldY][oldX] = OPEN_TILE;

//     //put the player into the grid
//     grid[thePlayer.y][thePlayer.x] = PLAYER;
//   }
// }


// function drawTimerNumber() {
//   let number = {
//     x: 1100,
//     y: 450,
//   };
//   timerNumbers.push(number);
// }


//lastTimeTimerSwitched = millis();

// if (millis() > lastTimeTimerSwitched + gameWaitTime/5) { //timerWaitTime
//   // textSize(windowWidth/4);
//   // fill("white");
//   // text(timerStateCheck(), 1100, 450);

//   // for (let number of timerNumbers) {
//   //   if (timerState === "five") {
//   //     text("4", number.x, number.y); //use number y and x, maybe look at how it is done in the array-object project
//   //     timerState = "four";
//   //   }

//   //   else if (timerState === "four") {
//   //     text("3", number.x, number.y);
//   //     timerState = "three";
//   //   }

//   //   else if (timerState === "three") {
//   //     text("2", number.x, number.y);
//   //     timerState = "two";
//   //   }

//   //   else if (timerState === "two") {
//   //     text("1", number.x, number.y);
//   //     timerState = "one";
//   //   }

//   //   else if (timerState === "one") {
//   //     text("0", number.x, number.y);
//   //     timerState = "zero";
//   //   }

//   //   else if (timerState === "zero") {
//   //     text("5", number.x, number.y);
//   //     timerState = "five";
//   //   }
//   // }

//   lastTimeTimerSwitched = millis();
// }


//
// function timerStateCheck() {
//   //let timerTextDisplay;
//   if (timerState === 5) { //lastTimeTimerSwitched < 1000
//     //text("4", number.x, number.y);
//     //timerState = "4";
//     console.log(timerState);
//     return timerState;
//     //timerTextDisplay = ["4", 1100, 450];
//     //return ["4", 1100, 450]; //timerTextDisplay;
//   }
  
//   else if (timerState === 4) { //lastTimeTimerSwitched < 2000 && lastTimeTimerSwitched > 1000
//     //text("3", number.x, number.y);
//     //timerState = "3";
//     console.log(timerState);
//     return timerState;
//     //timerTextDisplay = ["3", 1100, 450];
//     //return timerTextDisplay;
//   }

//   else if (timerState === 3) { //lastTimeTimerSwitched < 3000 && lastTimeTimerSwitched > 2000
//     //text("2", number.x, number.y);
//     //timerState = "2";
//     console.log(timerState);
//     return timerState;
//     //timerTextDisplay = ["2", 1100, 450];
//     //return timerTextDisplay;
//   }

//   else if (timerState === 2) { //lastTimeTimerSwitched < 4000 && lastTimeTimerSwitched > 3000
//     //text("1", number.x, number.y);
//     //timerState = "1";
//     console.log(timerState);
//     return timerState;
//     //timerTextDisplay = ["1", 1100, 450];
//     //return timerTextDisplay;
//   }

//   else if (timerState === 1) { //lastTimeTimerSwitched < 5000 && lastTimeTimerSwitched > 4000
//     //text("0", number.x, number.y);
//     //timerState = "0";
//     console.log(timerState);
//     return timerState;
//     //timerTextDisplay = ["0", 1100, 450];
//     //return timerTextDisplay;
//   }

//   else if (timerState === 0) { //lastTimeTimerSwitched < 6000 && lastTimeTimerSwitched > 5000
//     //text("5", number.x, number.y);
//     //timerState = "5";
//     timerState = 5;
//     console.log(timerState);
//     return timerState;
//     //timerTextDisplay = ["5", 1100, 450];
//     //return timerTextDisplay;
//   }

//   // else if (lastTimeTimerSwitched === 6000) {
//   //   //change the timer to make it that the display stays for the full second, instead of a millisecond (I think)
//   // }
//   // //return timerTextDisplay;
// }


// Want to now display the timer numbers, maybe similar as an array from the array-object project.
// Want to also fix how the display size and other details of the number texts are displayed, for now using a text test function to display a still number.