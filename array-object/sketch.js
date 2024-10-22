// Arrays and Object Notation Assignment
// Syhon Rylott
// Oct 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Steps remaining: 1. Able to click on beverage/beverage cell to then put the selected beverage onto the game board.
// Maybe if the mouse is clicked again, but done somewhere else besides the game board, then it'll cancel the process of placing a beverage down.
// 2. Make another array that displays blocks coming from the right side of the screen/window, placed in one of the cell sections on the game board.
// Then it'll keep on moving until it reaches the very left of the screen/window. I'm thinking to use text numbers displayed on the blocks to show their difficulty.
// 3. Make the beverages shoot from themselves circles at the blocks, making the blocks visually increase in color and the beverages decrease in color.
// 4. Extra for Experts: I'm thinking to look a little bit into visuals to experiment with, maybe shapes and or other things able I'm able to display in this assignment.
// 5. This is for if I'm able to add a start screen and end screen for the user's game experience.

let beverageCharacters = [];
let beverageCells = [];
let gameBoardCells = [];
let cellSize;
let selectedBeverage = "water";
let beverageX;
let beverageY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  if(width > height) {
    cellSize = height/8;
  }
  else {
    cellSize = width/16;
  }

  // for (i = 0; i < 6; i++) {
  //   beverageDraw();
  // }

  graphDraw();

}


function draw() {
  background(220);
  
  //noLoop(); //causes one blue circle to to be drawn in the top left corner, instead of all circles being brown (chocolate milk). The solution I feel is making all the states for the beverages so that noLoop() can be removed.

  //console.log(window.innerWidth);

  displayGraphCells();

  //beveragePositionDraw();

  anotherDisplayBeverage();
}


function graphDraw() {
  //let characterXChange = cellSize/2;
  for(let y = 0; y < 8; y++) {
    for(let x = 0; x < 16; x++) {
      if (y === 0) {
        beverageCellDraw(x * cellSize, y * cellSize, cellSize);
        // fill("orange");
        // stroke("white");
        // square(x * cellSize, y * cellSize, cellSize);
        if (x < 6) {
          beverageDraw(x);
        }

      }
      else {
        gameBoardCellDraw(x * cellSize, y * cellSize, cellSize);
        // fill("green");
        // stroke("black");
        // square(x * cellSize, y * cellSize, cellSize);
      }
    }
  }
}


function displayGraphCells() {
  //let button = false;
  for (let cell of beverageCells) {
    if (mouseX > cell.beverageCellX && mouseX < cell.beverageCellX + cell.beverageCellSize && mouseY > cell.beverageCellY && mouseY < cell.beverageCellY + cell.beverageCellSize) {
      stroke("orange");
      fill("yellow");
    }
    else if (mouseX > cell.beverageCellX && mouseX < cell.beverageCellX + cell.beverageCellSize && mouseY > cell.beverageCellY && mouseY < cell.beverageCellY + cell.beverageCellSize && mouseIsPressed) {
      fill("green");
    }
    else {
      fill("orange");
      stroke("white");
    }
    square(cell.beverageCellX, cell.beverageCellY, cell.beverageCellSize);
  }

  fill("green");
  stroke("black");
  for (let boardCell of gameBoardCells) {
    square(boardCell.gameBoardCellX, boardCell.gameBoardCellY, boardCell.gameBoardCellSize);
  }
}


// function mousePressed() {
//   if (mouseX > cell.beverageCellX && mouseX < cell.beverageCellX + cell.beverageCellSize && mouseY > cell.beverageCellY && mouseY < cell.beverageCellY + cell.beverageCellSize) {
//     button = !button;
//   }
// }


function beverageDraw(x) {
  let beverageDrawn = {
    cupX: x * cellSize + 30,
    cupY: cellSize/2 - 35,
    cupW: 40,
    cupLiquidH: 70,
    cupEmptyH: 10,
  };
  beverageCharacters.push(beverageDrawn);
}


function anotherDisplayBeverage() { // x was in here
  let beverageState = "water";
  stroke("white");
  for (let beverage of beverageCharacters) {
    if (beverageState === "water") {
      fill(0, 150, 255);
      buildBeverage(beverage);
      beverageState = "chocolate milk";
    }
  
    else if (beverageState === "chocolate milk") {
      fill(120, 40, 0);
      buildBeverage(beverage);
      beverageState = "lemonade";
    }
    
    else if (beverageState === "lemonade") {
      fill(0, 0, 0);
      buildBeverage(beverage);
      beverageState = "ice tea";
    }
    
    else if (beverageState === "ice tea") {
      fill(180, 50, 0);
      buildBeverage(beverage);
      beverageState = "coffee";
    }
    
    else if (beverageState === "coffee") {
      fill(50, 0, 0);
      buildBeverage(beverage);
      beverageState = "orange juice";
    }
    
    else if (beverageState === "orange juice") {
      fill(250, 120, 0);
      buildBeverage(beverage);
      beverageState = "water";
    }
  }
}

// x * beverage.cupX replaced for x * cellsize + 30


function buildBeverage(beverage) {
  rect(beverage.cupX, beverage.cupY, beverage.cupW, beverage.cupLiquidH);
  fill(160);
  rect(beverage.cupX, beverage.cupY, beverage.cupW, beverage.cupEmptyH);
}


// function beverageColor(x) {
//   let color;
//   if (x === 0) {
//     color = [0, 150, 255];
//     //selectedBeverage = "chocolate milk";
//   }

//   else if (x === 1) {
//     //selectedBeverage = "lemonade";
//     color = [120, 40, 0];
//   }
  
//   else if (x === 2) {
//     //selectedBeverage = "ice tea";
//     color = [0, 0, 0];
//   }
  
//   else if (x === 3) {
//     //selectedBeverage = "coffee";
//     color = [180, 50, 0];
//   }
  
//   else if (x === 4) {
//     //selectedBeverage = "orange juice";
//     color = [50, 0, 0];
//   }
  
//   else if (x === 5) {
//     //selectedBeverage = "water";
//     color = [250, 120, 0];
//   }
//   return color;
// }


// function beverageColorState() {
//   if (x === 0) {
//     fill(0, 150, 255);
//   }

//   else if (x === 1) {
//     fill(120, 40, 0);
//   }
  
//   else if (x === 2) {
//     fill(0, 0, 0);
//   }
  
//   else if (x === 3) {
//     fill(180, 50, 0);
//   }
  
//   else if (x === 4) {
//     fill(50, 0, 0);
//   }
  
//   else if (x === 5) {
//     fill(250, 120, 0);
//   }
// }


// function mousePressed() {
//   for (let beverage of beverageCharacters) {
//     if (beverageIsClicked(mouseX, mouseY, beverage)) {
//       // beverage.cupX = mouseX - beverage.cupW/2;
//       // beverage.cupY = mouseY - beverage.cupLiquidH/2;
//       for (let cell of beverageCells) {
//         cell.beverageCellStateColor = "white";
//         // if (beverageAndCellAligned(beverage, cell)) {
//         //   //console.log("true");
//         //   cell.beverageCellStateColor = "white";
//         // }
//         // else {
//         //   //console.log("false");
//         // }
//       }


//       // beverage.cupX = mouseX - beverage.cupW/2;
//       // beverage.cupY = mouseY - beverage.cupLiquidH/2;
//     }
//   }

  
//   // if (mouseX > beverageX && mouseX < beverageX + w && mouseY > beverageY && mouseY < beverageY + h) {
//   //   beverageX = mouseX - w/2;
//   //   beverageY = mouseY - h/2;
//   // }
// }


// function beverageIsClicked(x, y, beverage) {
//   let distanceAway = dist(x, y, beverage.cupX, beverage.cupY);
//   if (distanceAway < beverage.cupW) {
//     //console.log("true");
//     return true;
//   }
//   else {
//     //console.log("false");
//     return false;
//   }
// }


function gameBoardCellDraw(x, y, size) {
  let gameBoardCellDrawn = {
    gameBoardCellX: x,
    gameBoardCellY: y,
    gameBoardCellSize: size,
    gameBoardCellColor: "green"
  };
  gameBoardCells.push(gameBoardCellDrawn);
}


function beverageCellDraw(x, y, size) {
  let beverageCellDrawn = {
    beverageCellX: x,
    beverageCellY: y,
    beverageCellSize: size,
    beverageCellStateColor: "orange",
  };
  beverageCells.push(beverageCellDrawn);
  //console.log("beverage cells");
}


// function beverageAndCellAligned(beverage, cell) {
//   //let cellAndBeverageAlignment = dist(beverage.cupX, beverage.cupY, cell.beverageCellX, cell.beverageCellY);
//   if (beverage.cupX - 30 === cell.beverageCellX) { //cellAndBeverageAlignment > cell.beverageCellSize
//     return true;
//   }
//   else {
//     return false;
//   }
// }


// function beverageCellColorState() {
//   for (let cell of beverageCells) {
//     if (cell.beverageCellColor === "white") {
//       return cell.beverageCellColor;
//     }
//   }
//   return cell.beverageCellColor;
// }


// function beverageColor(x) {
//   let color;
//   if (x === 0) {
//     color = [0, 150, 255];
//     anotherDisplayBeverage(x, color);
//     selectedBeverage = "chocolate milk";
//   }

//   else if (x === 1) {
//     selectedBeverage = "lemonade";
//     return color = [120, 40, 0];
//   }
  
//   else if (x === 2) {
//     selectedBeverage = "ice tea";
//     return color = [0, 0, 0];
//   }
  
//   else if (x === 3) {
//     selectedBeverage = "coffee";
//     return color = [180, 50, 0];
//   }
  
//   else if (x === 4) {
//     selectedBeverage = "orange juice";
//     return color = [50, 0, 0];
//   }
  
//   else if (x === 5) {
//     selectedBeverage = "water";
//     return color = [250, 120, 0];
//   }
//   return color;
// }





// function displayBeverageSelection(x, y) {
//   beverageX = x * cellSize + 30;
//   beverageY = cellSize/2 - 35;
//   // -added: figuring out centering of circle characters  --- //--characterXChange * x + 50
//   if (selectedBeverage === "water") {
//     fill(0, 150, 255);
//     circle(x * cellSize + 50, cellSize/2, 20);
//     drawBeverageCharacter(x, y);
//     // last here: I think I may add a rect on top of the first rect to make the beverage look not entirely full
//     selectedBeverage = "chocolate milk";
//   }
  
//   else if (selectedBeverage === "chocolate milk") {
//     fill(120, 40, 0);
//     circle(x * cellSize + 50, cellSize/2, 20);
//     drawBeverageCharacter(x, y);
//     selectedBeverage = "lemonade";
//   }
        
//   else if (selectedBeverage === "lemonade") {
//     fill("yellow");
//     circle(x * cellSize + 50, cellSize/2, 20);
//     drawBeverageCharacter(x, y);
//     selectedBeverage = "ice tea";
//   }

//   else if (selectedBeverage === "ice tea") {
//     fill(180, 50, 0);
//     circle(x * cellSize + 50, cellSize/2, 20);
//     drawBeverageCharacter(x, y);
//     selectedBeverage = "coffee";
//   }

//   else if (selectedBeverage === "coffee") {
//     fill(50, 0, 0);
//     circle(x * cellSize + 50, cellSize/2, 20);
//     drawBeverageCharacter(x, y);
//     selectedBeverage = "orange juice";
//   }

//   else if (selectedBeverage === "orange juice") {
//     fill(250, 120, 0);
//     circle(x * cellSize + 50, cellSize/2, 20);
//     drawBeverageCharacter(x, y);
//     selectedBeverage = "water";
//   }

//   else {
//     fill("green");
//     circle(x * cellSize + 50, cellSize/2, 20);
//     drawBeverageCharacter(x, y);
//   }

//   //last here: to continue the beverage states
        
// }


// // function displaySelectedBeverage() {
// //   circle(x * cellSize + 50, cellSize/2, 20);
// // }


// // function characterPlacement() {

// // }


// function drawBeverageCharacter(x, y) {
//   rect(beverageX, beverageY, 40, 70);
//   fill(160);
//   rect(beverageX, beverageY, 40, 10);
// }


// Taking away noLoop() makes the beverages flash different colors, and I want to make the beverage follow the mouse, so I want to work on both of these.
// Also added/made the beverageX/Ys, using them in this function, want to look at the light demos more to make the mouse alignment within a beverage's area possible.


// Last here: Commented out functions of a new charcter and way of displaying the beverage characters, I want to go through the bubble demo to implement arrays and object notation.
// (Con) I feel that I want to do this with the later block characters and the beverages.