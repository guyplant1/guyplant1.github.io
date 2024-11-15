// Grid-Based Game
// Syhon Rylott
// Oct 28th, 2024
//
// Extra for Experts:
// I experimented with storing the high score of the player's score to the local storage, being used to update the high score to
// whatever number the player surpasses in rounds in the game (storeItem and getItem are used).


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
let thePlayer = {
  x: 0,
  y: 0,
};
let bgState = "not colored";
let playerCell;
let bgColor = 0;
let gameState = "start game";
let playerScore = 0;
let highScore;


// In the setup, the canvas, cols and rows for the grid, and the grid itself are created/drawn.
// The highscore for the player is also placed here to intentionally have ready to display when the player receives a game over.
function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/2/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
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


// This function displays the playerScore during the gamplay period of the game, increasing by one from a condtional in timerChanges() (not calling the function, but the changed value of playerScore to display).
function displayScore() {
  textSize(100);
  text(playerScore, windowWidth/2 + 550, 99);
  text("Score:", windowWidth/2 + 250, 96);
}


// This function displays the screen made to happen when the player receives a game over (global variable gameState changes to "game over", instead of "start game").
// This displays a rect() that hides the previously displayed canvas (before gameState changed to "game over"), the current playerScore, and the local stored highScore.
function displayGameOverScreen() {
  if (playerScore > highScore) {
    storeItem("highscore", playerScore);
    highScore = getItem("highscore");
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
  text(timerState, 1100, 500);
}


// This function mainly uses millis(), combined with some global variables in conditionals to change the timerState number that is displayed on the right side of the screen,
// (con) and to change the display of the game by generating the grid again, and reseting the timerState number to 5. That only happens if the player is located on a cell that is the same color as the background (if playerCell === bgColor).
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


// This function decides randomly the background color (short for bgColor) that is going to be displayed whenever the timerState is at 0 (called in TimerChanges()).
// bgColor is used to decide if the player's cell is the same color as the variable's value ( or color, and also done in timerChanges()).
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
      background(127, 206, 210);
    }

    else if (random(100) > 40 && random(100) <= 50) {
      bgColor = 5;
      background("purple");
    }

    else if (random(100) > 50 && random(100) <= 60) {
      bgColor = 6;
      background("pink");
    }

    else if (random(100) > 60 && random(100) <= 70) {
      bgColor = 7;
      background(98, 232, 1);
    }

    else if (random(100) > 70 && random(100) <= 80) {
      bgColor = 8;
      background(1, 232, 175);
    }

    else if (random(100) > 80 && random(100) <= 90) {
      bgColor = 9;
      background(164, 1, 85);
    }

    else {
      bgColor = 10;
      background(25, 1, 164);
    }

    bgState = "colored";
  }
}


// This function executes the drawing of each cell square of the grid, with its selected color coming from generateRandomGrid().
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
        fill(127, 206, 210);
      }

      else if (grid[y][x] === 5) {
        fill("purple");
      }

      else if (grid[y][x] === 6) {
        fill("pink");
      }

      else if (grid[y][x] === 7) {
        fill(98, 232, 1);
      }

      else if (grid[y][x] === 8) {
        fill(1, 232, 175);
      }

      else if (grid[y][x] === 9) {
        fill(164, 1, 85);
      }

      else {
        fill(25, 1, 164);
      }

      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}


// This function randomly decides each cell's color in the grid, with the selection of 10 colors/numbers different from the player (being the color red/the number 0).
// The code near the bottom of this function is to decide where to place the character on the grid randomly.
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


// This function is used to move the player by using WASD, only if the gameState does not equal "game over" (movement decided in movePlayer()).
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


// This function decides (depending on the key pressed in keyPressed(), using WASD) where the player will move to on the grid, only being done if the player is moving on the grid space,
// (con) and that x and y (thePlayer.x and thePlayer.y) does not equal 0.
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