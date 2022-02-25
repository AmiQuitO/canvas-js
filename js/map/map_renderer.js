function drawMap(){
    let baseX = CANVAS_WIDTH/2 + (((Player.x*BASE_SCALE)*2) - ((Player.y*BASE_SCALE)*2));
    let baseY = (CANVAS_HEIGHT/2) - 20 + (Player.x*BASE_SCALE) + (Player.y*BASE_SCALE);

    for(let i=0;i<MAP_HEIGHT;i++){ // drawing process
        for(let j=0;j<MAP_WIDTH;j++){
            x = baseX + ((j*BASE_SCALE)*2 - (i*BASE_SCALE)*2);
            y = baseY + (j*BASE_SCALE)+(i*BASE_SCALE);
            drawTile(x, y, 0, mapTiles[i][j].type);
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
