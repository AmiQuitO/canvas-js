const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 600;

const CTX = document.querySelector("canvas");
CTX.style.border = "1px solid black";
const C = CTX.getContext("2d");

const ROWS = 20; // testing
const COL = 25;
const BASE_SCALE = 20;

let playerX = 0;
let playerY = 0;

beginCanvas();

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch(event.key){
        
    }

    event.preventDefault();
  }, true);