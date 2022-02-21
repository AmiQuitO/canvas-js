function beginCanvas(){
    clearCanvas();
    let mapCenter = CANVAS_WIDTH/2;
    let x = mapCenter + playerX;
    let y = 0 + playerY;
    for(let i=0;i<COL;i++){
        for(let j=0;j<ROWS;j++){
            drawTile(x + ((j*BASE_SCALE)*2 - (i*BASE_SCALE)*2), y + (j*BASE_SCALE)+(i*BASE_SCALE) , 0, "red");
        }
    }
}

function drawTile(posX, posY, scale, type){
    scale = scale + BASE_SCALE;
    C.beginPath();
    C.moveTo(posX, posY);
    C.lineTo(posX+(scale*2), posY+scale);
    C.lineTo(posX, posY+(scale*2));
    C.lineTo(posX-(scale*2), posY+scale);
    C.lineTo(posX, posY);
    C.fillStyle = type;
    C.fill();
    C.stroke();
}
function clearCanvas(){
    C.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}