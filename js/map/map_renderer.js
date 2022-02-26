function drawMap(){
    let baseX = CANVAS_WIDTH/2 + (((Player.x*BASE_SCALE)*2) - ((Player.y*BASE_SCALE)*2));
    let baseY = (CANVAS_HEIGHT/2) - BASE_SCALE + (Player.x*BASE_SCALE) + (Player.y*BASE_SCALE);

    for(let i=0;i<MAP_HEIGHT;i++){ // drawing process
        for(let j=0;j<MAP_WIDTH;j++){
            x = baseX + ((j*BASE_SCALE)*2 - (i*BASE_SCALE)*2);
            y = baseY + (j*BASE_SCALE)+(i*BASE_SCALE);
            
            mapTiles[i][j].drawTile(x, y, 0);
            
            if(i==Player.y*-1 && j==Player.x*-1){ 
                C.drawImage(Player.sprite, (CANVAS_WIDTH/2)-(SPRITE_SIZE/2), (CANVAS_HEIGHT/2)-(SPRITE_SIZE));
            }
        }
    }
}