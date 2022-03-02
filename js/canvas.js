let canvasHolder = document.querySelector("#canvas-holder")

// For static stuff that move along with the map
const MAP_CANVAS = document.createElement("canvas");
MAP_CANVAS.width = CANVAS_WIDTH;
MAP_CANVAS.height = CANVAS_HEIGHT;
canvasHolder.appendChild(MAP_CANVAS);

// For dynamic stuff that could be animated
const MAIN_CANVAS = document.createElement("canvas");
MAIN_CANVAS.width = CANVAS_WIDTH;
MAIN_CANVAS.height = CANVAS_HEIGHT;
canvasHolder.appendChild(MAIN_CANVAS);

// For UI
const UI_CANVAS = document.createElement("canvas");
UI_CANVAS.width = CANVAS_WIDTH;
UI_CANVAS.height = CANVAS_HEIGHT;
canvasHolder.appendChild(UI_CANVAS);

// Btw teraz to nic nie robi xd
const MAIN_CTX = MAIN_CANVAS.getContext("2d");
const MAP_CTX = MAP_CANVAS.getContext("2d");
const UI_CTX = UI_CANVAS.getContext("2d");

function beginCanvas(){
    clearCanvas(MAP_CTX);
    clearCanvas(MAIN_CTX);
    clearCanvas(UI_CTX);
    drawMap(); // map_renderer.js
    drawPos();
    drawGoldCount();
}
function clearCanvas(ctx){
    ctx.resetTransform()
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

//debug
function drawPos(){
    UI_CTX.font = '48px monospace';
    UI_CTX.fillStyle = "#ffffff";
    UI_CTX.fillText(`${Player.y}, ${Player.x}`, 0, 40);
}
function drawGoldCount(){
    UI_CTX.font = '40px monospace';
    UI_CTX.fillStyle = "#ffffff";
    UI_CTX.fillText(`${Player.gold}`, CANVAS_WIDTH - 100, CANVAS_HEIGHT  - 40);
}