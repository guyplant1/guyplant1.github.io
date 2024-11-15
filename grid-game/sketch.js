// Grid-Based Game
// Syhon Rylott
// Oct 28th, 2024
//
// Extra for Experts:
// I experimented with storing the high score of the player's score to the local storage, being used to update the high score to
// whatever number the player surpasses in rounds in the game (storeItem and getItem are used).


// 1. Check player location  2. Display score and game over screen  3. Extra for Experts  4. Code check  5. Ball character  6. Start screen

// 1. Commenting/check code  2. Background colors display (maybe change some) ---- 3. Ball character  4. Start screen  5. Music


const CELL_SIZE = 25;
const PLAYER = 0;
let grid;
let cols;
let rows;
let timerState = 5;
let lastTimeTimerSwitched = 0;
let lastTimeGridSwitched = 0;
let lastTimeColorSwitched = 0;
let timerWaitTime = 1000;
let gameWaitTime = 5000;
//let timerNumbers = [];
let thePlayer = {
  x: 0,
  y: 0,
};
let bgState = "not colored";
let playerCell;
let bgColor = 0;
let gameState = "start game" // start screen, game over
let playerScore = 0;
let highScore;


// In the setup, the canvas, cols and rows for the grid, and the grid itself are created/drawn.
function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/2/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  // thePlayer = {
  //   x: 0,
  //   y: 0,
  // };
  grid = generateRandomGrid(cols, rows);
  highScore = getItem("highscore");
}


// In the draw loop the background is set to black, and goes through the functions that decide how long both the grid and timer numbers are displayed for,
// (con) displayment of the randomly colored sqaures in the grid, and displayment of the number text for the timer (on the right side of the canvas/screen).
function draw() {
  if (gameState !== "game over") {
    selectBgColor();
    timerChanges();
    displayGrid();
    displayTimerNumberText();
    displayScore();
  }
  else if (gameState === "game over") {
    displayGameOverScreen();
  }
}


function mousePressed() {
  gameState = "game over";
}


//
function displayScore() {
  textSize(100);
  text(playerScore, windowWidth/2 + 880, 99);
  text("Score:", windowWidth/2 + 575, 93);
}


//
function displayGameOverScreen() {
  if (playerScore > highScore) {
    storeItem("highscore", playerScore);
    highScore = getItem("highscore"); // maybe see if commenting this out will affect if you have a higher score than high score
  }

  fill("black");
  rect(0, 0, windowWidth, windowHeight);
  fill("white");
  textSize(200);
  text("Score:", windowWidth/2 - 600, 400);
  text(playerScore, windowWidth/2 + 10, 410);
  text("High Score:", windowWidth/2 - 600, 650);
  text(highScore, windowWidth/2 + 470, 660);
}


// This function displays the timer number text on the right side of the screen, shown for a full second for each number before changing to the next, using the changed timerState from timerChanges() to switch the number.
function displayTimerNumberText() {
  textSize(windowWidth/4);
  fill("white");
  text(timerState, 1100, 450);
}


// This function here uses millis() in two different ways to draw or change both the grid and the timer number on the screen, having the timer change every second using timerState subtracted by 1 (and if reaches 0, will go back to being a 5), and the grid to be randomly generated for colors every 5 seconds.
function timerChanges() {
  if (millis() > lastTimeTimerSwitched + gameWaitTime/5 && timerState !== 0) {
    timerState = timerState - 1;
    lastTimeTimerSwitched = millis();
    lastTimeColorSwitched = millis();
  }

  if (timerState === 0) {
    selectBgColor();
  }

  if (millis() > lastTimeColorSwitched + 2000) {
    if (playerCell === bgColor) {
      grid = generateRandomGrid(cols, rows);
      lastTimeColorSwitched = millis();
      timerState = 5;
      bgState = "not colored";
      playerScore += 1;
      console.log("new round");
    }
    else {
      gameState = "game over";
    }
  }
}


//
function selectBgColor() {
  if (timerState !== 0) {
    background("black");
  }
  else if (bgState === "not colored") {

    if (random(100) <= 10) {
      bgColor = 1;
      background("orange");
    }

    else if (random(100) > 10 && random(100) <= 20) {
      bgColor = 2;
      background("yellow");
    }

    else if (random(100) > 20 && random(100) <= 30) {
      bgColor = 3;
      background("green");
    }

    else if (random(100) > 30 && random(100) <= 40) {
      bgColor = 4;
      background("blue");
    }

    else if (random(100) > 40 && random(100) <= 50) {
      bgColor = 5;
      background("purple");
    }

    else if (random(100) > 50 && random(100) <= 60) {
      bgColor = 6;
      background("white");
    }

    else if (random(100) > 60 && random(100) <= 70) {
      bgColor = 7;
      background("black");
    }

    else if (random(100) > 70 && random(100) <= 80) {
      bgColor = 8;
      background("brown");
    }

    else if (random(100) > 80 && random(100) <= 90) {
      bgColor = 9;
      background(70, 70, 50);
    }

    else {
      bgColor = 10;
      background("pink");
    }

    bgState = "colored";
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
}


// This function randomly decides each cell's color in the grid, with the selection of 10 colors/numbers different from the player (being the color red/the number 0).
function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (y = 0; y < rows; y++) {
    newGrid.push([]);
    for (x = 0; x < cols; x++) {
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

  let randomPlayerY = Math.floor(random(rows));
  let randomPlayerX = Math.floor(random(cols));

  newGrid[randomPlayerY][randomPlayerX] = PLAYER;
  thePlayer.y = randomPlayerY;
  thePlayer.x = randomPlayerX;

  return newGrid;
}


//
function keyPressed() {
  if (gameState !== "game over") {
    if (key === "w") {
      //move up
      movePlayer(thePlayer.x, thePlayer.y - 1);
    }
  
    if (key === "a") {
      //move left
      movePlayer(thePlayer.x - 1, thePlayer.y);
    }
  
    if (key === "s") {
      //move down
      movePlayer(thePlayer.x, thePlayer.y + 1);
    }
  
    if (key === "d") {
      //move right
      movePlayer(thePlayer.x + 1, thePlayer.y);
    }
  }
}


//
function movePlayer(x, y) {
  //don't move off grid, and only move in open tiles
  if (x !== 0 && x < cols && y !== 0 && y < rows) {
    //keeping track of where the player is
    thePlayer.x = x;
    thePlayer.y = y;

    //put the player into the grid
    playerCell = grid[y][x];
    console.log(grid[y][x]);
    grid[y][x] = PLAYER;
  }
}