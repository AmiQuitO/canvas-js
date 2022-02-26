function drawMap(){
    let baseX = CANVAS_WIDTH/2 + (((Player.x*BASE_SCALE)*2) - ((Player.y*BASE_SCALE)*2));
    let baseY = (CANVAS_HEIGHT/2) - BASE_SCALE + (Player.x*BASE_SCALE) + (Player.y*BASE_SCALE);

    for(let i=0;i<MAP_HEIGHT;i++){ // drawing process
        for(let j=0;j<MAP_WIDTH;j++){
            x = baseX + ((j*BASE_SCALE)*2 - (i*BASE_SCALE)*2);
            y = baseY + (j*BASE_SCALE)+(i*BASE_SCALE);
            if(mapTiles[i][j].collision){
                C.beginPath();
                //C.drawImage(mapTiles[i][j].sprite, x-(BASE_SCALE*2), y, BASE_SCALE*4,BASE_SCALE*2);
                C.drawImage(mapTiles[i][j].sprite, x-(BASE_SCALE*2), y-BASE_SCALE, BASE_SCALE*4,BASE_SCALE*2);
                C.drawImage(mapTiles[i][j].sprite2, x-(BASE_SCALE*2), y, BASE_SCALE*4,BASE_SCALE*2);
            }else{
                drawTile(x, y, 0, mapTiles[i][j].type);
            }
            if(i==Player.y*-1 && j==Player.x*-1){ 
                C.drawImage(Player.sprite, (CANVAS_WIDTH/2)-(SPRITE_SIZE/2), (CANVAS_HEIGHT/2)-(SPRITE_SIZE));
            }
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
}
