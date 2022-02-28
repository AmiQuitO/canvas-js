document.write(`<canvas width='${CANVAS_WIDTH}' height='${CANVAS_HEIGHT}'></canvas>`);

const CTX = document.querySelector("canvas");
const C = CTX.getContext("2d");

function beginCanvas(){
    clearCanvas();
    drawMap(); // map_renderer.js
    C.resetTransform()
    drawPos();
    drawGoldCount();
}
function clearCanvas(){
    C.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function drawPos(){
    C.font = '48px monospace';
    C.fillStyle = "#ffffff";
    C.fillText(`${Player.y}, ${Player.x}`, 0, 40);
}
function drawGoldCount(){
    C.font = '40px monospace';
    C.fillStyle = "#ffffff";
    C.fillText(`${Player.gold}`, CANVAS_WIDTH - 100, CANVAS_HEIGHT  - 40);
}