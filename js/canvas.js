const CANVAS_HEIGHT = 450;
const CANVAS_WIDTH = 800;
const BASE_SCALE = 20;

document.write(`<canvas width='${CANVAS_WIDTH}' height='${CANVAS_HEIGHT}'></canvas>`);

const CTX = document.querySelector("canvas");
const C = CTX.getContext("2d");

function beginCanvas(){
    clearCanvas();
    drawMap(); // map_renderer.js
    drawPos();
}
function clearCanvas(){
    C.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function drawPos(){
    C.font = '48px monospace';
    C.fillStyle = "#ffffff";
    C.fillText(`${Player.y}, ${Player.x}`, 0, 40);
}
function updateLoadingBar(progress){
    let progressSquareSize = 40;
    let baseX = (CANVAS_WIDTH/2)-50;
    let baseY = (CANVAS_HEIGHT/2)-progressSquareSize;
    C.beginPath();
    if(progress == 16){ 
        C.moveTo(baseX, baseY);   
    }else{
        C.moveTo(baseX+(progress*2), baseY);
    }
    C.lineTo(baseX+(progress*2)+progressSquareSize, baseY);
    C.lineTo(baseX+(progress*2)+progressSquareSize, baseY+progressSquareSize);
    C.lineTo(baseX+(progress*2), baseY+progressSquareSize);
    C.fillStyle = "white";
    C.fill();
    console.log("loaded");
}