"use strict";
const pacmanEl = document.getElementById("pacman");
// Create multi-dimensional array
// 10 x 10 (0 - 9)
let world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

function displayWorld() {
  let output = "";
  // Iterate over the world checking each value
  // i is the row and j is the column
  for (let i = 0; i < world.length; i++) {
    // Create the div elem w/class row tha holds columns
    output += "<div class='row'>";
    // iterate over each column of row 0, 1, 2...etc
    for (let j = 0; j < world[i].length; j++) {
      // Create a dev elem with class brick
      if (world[i][j] == 2) {
        output += "<div class='brick'></div>";
        // Create a dev elem with class coin
      } else if (world[i][j] == 1) {
        output += "<div class='coin'></div>";
        // Create a dev elem with class empty
      } else if (world[i][j] == 0) {
        output += "<div class='empty'></div>";
      }
    }
    // Add the closing tag to the div with class row
    output += "</div>";
  }
  console.log(output);
  document.getElementById("world").innerHTML = output;
}

displayWorld();

const pacmanObj = {
  x: 8,
  y: 8,
};

function displayPacman() {
  // Move pacman up negative value down positive
  pacmanEl.style.top = pacmanObj.y + "px";
  // Move back right positive and left negative
  pacmanEl.style.left = pacmanObj.x + "px";
}

displayPacman();

document.onkeydown = function (e) {
  console.log(e.key);
  if (e.key === "ArrowUp") {
    pacmanObj.y -= 20;
  } else if (e.key === "ArrowDown") {
    pacmanObj.y += 20;
  } else if (e.key === "ArrowRight") {
    pacmanObj.x += 20;
  } else if (e.key === "ArrowLeft") {
    pacmanObj.x -= 20;
  }
  displayPacman();
};
