"use strict";
// import { world } from "world.js";
const pacmanEl = document.getElementById("pacman");
const ghost_1El = document.getElementById("ghost--1");
const ghost_2El = document.getElementById("ghost--2");
const ghost_3El = document.getElementById("ghost--3");
let points = 0;

let world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 2, 2, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 2, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
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
  x: 0.4,
  y: 0.4,
};

function displayPacman() {
  // Move pacman up negative value down positive
  pacmanEl.style.top = pacmanObj.y * 20 + "px";
  // Move back right positive and left negative
  pacmanEl.style.left = pacmanObj.x * 20 + "px";
}

displayPacman();

document.onkeydown = function (e) {
  console.log(e.key);
  if (e.key === "ArrowUp") {
    pacmanObj.y--;
  } else if (e.key === "ArrowDown") {
    pacmanObj.y++;
  } else if (e.key === "ArrowRight") {
    pacmanObj.x++;
  } else if (e.key === "ArrowLeft") {
    pacmanObj.x--;
  }
  displayPacman();
  cellValue();
};

function cellValue() {
  // Get current location of pacman
  let pacX = Math.floor(pacmanObj.x); // column
  let pacY = Math.floor(pacmanObj.y); // row
  console.log(pacX);
  // Value of the spot in world where pacman is at
  let worldValue = world[pacY][pacX];
  console.log(worldValue);
  console.log(worldValue === 1);
  if (worldValue === 1) {
    console.log("hello");
    console.log(world[pacY][pacX]);
    points += 25; // points for eating a coin
    console.log(points);
    world[pacY][pacX] = 0; // Make empty
    displayWorld();
  }
}
