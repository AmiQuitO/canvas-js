function drawMap(ctx){
    ctx.translate(0,Player.currentHeight * BASE_SCALE)

    let baseX = (CANVAS_WIDTH/2) + (((-Player.x*BASE_SCALE)*2) - ((-Player.y*BASE_SCALE)*2));
    let baseY = (CANVAS_HEIGHT/2) - BASE_SCALE + (-Player.x*BASE_SCALE) + (-Player.y*BASE_SCALE);

    for(let i=(Player.y)-FOV;i<=(Player.y)+FOV;i++){ // drawing process
        for(let j=(Player.x)-FOV;j<=(Player.x)+FOV;j++){
            x = baseX + ((j*BASE_SCALE)*2 - (i*BASE_SCALE)*2);
            y = baseY + (j*BASE_SCALE)+(i*BASE_SCALE);

            // drawing nothing if its outside of the map
            if(i < 0 || i > MAP_HEIGHT-1 || j < 0 || j > MAP_WIDTH-1){
                continue;
            }

            // drawing tiles
            mapTiles[i][j].drawTile(x, y,j,i, 0, ctx);

            // drawing props
            if(mapTiles[i][j].prop != "none"){
                if(mapTiles[i][j].prop == "door"){  
                    ctx.drawImage(mapTiles[i][j].spriteProp, x-(BASE_SCALE*2), y-(BASE_SCALE*2) + BASE_SCALE - (BASE_SCALE*mapTiles[i][j].height), BASE_SCALE*4, BASE_SCALE*4);
                }else{
                    ctx.drawImage(mapTiles[i][j].spriteProp, x-(BASE_SCALE*4), y-(BASE_SCALE*4) + BASE_SCALE - (BASE_SCALE*mapTiles[i][j].height), BASE_SCALE*8, BASE_SCALE*8);
                }
            }
            
            // drawing the player
            if(i==Player.y && j==Player.x){
                ctx.drawImage(Player.sprite, (CANVAS_WIDTH/2)-(BASE_SCALE*4), (CANVAS_HEIGHT/2)-(BASE_SCALE*4) - (Player.currentHeight * BASE_SCALE), BASE_SCALE*8, BASE_SCALE*8);
            }
        }
    }
}