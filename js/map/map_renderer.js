function drawMap(){
    let baseX = (CANVAS_WIDTH/2) + (((Player.x*BASE_SCALE)*2) - ((Player.y*BASE_SCALE)*2));
    let baseY = (CANVAS_HEIGHT/2) - BASE_SCALE + (Player.x*BASE_SCALE) + (Player.y*BASE_SCALE);

    for(let i=(Player.y*-1)-FOV;i<=(Player.y*-1)+FOV;i++){ // drawing process
        for(let j=(Player.x*-1)-FOV;j<=(Player.x*-1)+FOV;j++){
            x = baseX + ((j*BASE_SCALE)*2 - (i*BASE_SCALE)*2);
            y = baseY + (j*BASE_SCALE)+(i*BASE_SCALE);
            if(i < 0 || i > MAP_HEIGHT-1 || j < 0 || j > MAP_WIDTH-1){
                continue;
            }
            mapTiles[i][j].drawTile(x, y, 0); // drawing the tile
            
            if(i==Player.y*-1 && j==Player.x*-1){ // drawing the player
                C.drawImage(Player.sprite, (CANVAS_WIDTH/2)-(SPRITE_SIZE/2), (CANVAS_HEIGHT/2)-(SPRITE_SIZE) - (Player.currentHeight * BASE_SCALE));
            }
        }
    }
}