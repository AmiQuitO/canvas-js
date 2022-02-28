function generateMap(){
    generateChunks();
    for(i=0;i<MAP_HEIGHT;i++){
        for(j=0;j<MAP_WIDTH;j++){
            let pickedColor = Math.floor(Math.random()*(TILE_COLOR.length-1));
            if(mapTiles[i] == undefined)
                mapTiles[i] = [];
            mapTiles[i][j] = new Tile("some type", TILE_COLOR[pickedColor],0);
        }
    }


    // render the dungeon over the map

    for(let chunk of mapChunks)
    {
        let sx = chunk.x * CHUNKS_SIZE;
        let sy = chunk.y * CHUNKS_SIZE;

        sx += Math.round((MAP_WIDTH  / 2) - (CHUNKS_SIZE / 2));
        sy += Math.round((MAP_HEIGHT / 2) - (CHUNKS_SIZE / 2));

        //
        for (let i = 0; i < CHUNKS_SIZE; i++) {   
            mapTiles[sx + i][sy] = new Tile("wall","#333",2);       
            mapTiles[sx]   [sy + i] = new Tile("wall","#333",2);  
            mapTiles[sx + i][sy + CHUNKS_SIZE - 1] = new Tile("wall","#333",2);  
            mapTiles[sx + CHUNKS_SIZE - 1][sy + i] = new Tile("wall","#333",2);              
        }

        let chestPosX = Math.floor(Math.random()*CHUNKS_SIZE)-1;
        let chestPosY = Math.floor(Math.random()*CHUNKS_SIZE)-1;

        let chestGenerationChance = Math.floor(Math.random()*5);
        for (let i = 1; i < CHUNKS_SIZE - 1; i++) {   
            for (let j = 1; j < CHUNKS_SIZE - 1; j++) {
                
                if(chestPosX == j && chestPosY == i && chestGenerationChance == 1){
                    mapTiles[sx + i][sy + j] = new Tile("floor","#544",0 , "chest"); // chest generator 
                    console.log((sx + i), (sy + j)); 
                    continue;
                }

                mapTiles[sx + i][sy + j] = new Tile("floor","#544",0);      
            }
        }
        mapTiles[sx][sy + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor","#544",0); 
        mapTiles[sx + Math.floor(CHUNKS_SIZE / 2)][sy] = new Tile("floor","#544",0); 
        mapTiles[sx + CHUNKS_SIZE - 1][sy + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor","#544",0); 
        mapTiles[sx + Math.floor(CHUNKS_SIZE / 2)][sy + CHUNKS_SIZE - 1] = new Tile("floor","#544",0); 

        mapTiles[sx + 1][sy + 1].height = 1;  
    }
    console.log(mapTiles);
}

function generateChunks(){
    let chunksCount = CHUNKS_BASE_COUNT + (progressLevel*2);
    let loadedChunks = [];
    loadedChunks.push(new Chunk(0, 0)); 

    do{
        let x = 0; let y = 0;
        let isSame = false;
        direction = Math.floor(Math.random()*4)+1;
        continuingChunk = Math.floor(Math.random()*loadedChunks.length);
        if(direction == 1){
            x = 0;
            y = 1;
        }else if(direction == 2){
            x = 1;
            y = 0;
        }else if(direction == 3){
            x = -1;
            y = 0;
        }else if(direction == 4){
            x = 0;
            y = -1;
        }
        x += loadedChunks[continuingChunk].x;
        y += loadedChunks[continuingChunk].y;
        newChunk = new Chunk(x, y);
        for(let i=0;i<loadedChunks.length;i++){
            if(loadedChunks[i].x == newChunk.x && loadedChunks[i].y == newChunk.y){
                isSame = true;
            }
        }
        if(!isSame){
            loadedChunks.push(newChunk);
        }
    }while(loadedChunks.length <= chunksCount);
    console.log(loadedChunks);
    mapChunks = loadedChunks;
}

/*
function generateMap(){
    for(i=0;i<MAP_HEIGHT;i++){
        updateLoadingBar(i); // not work
        for(j=0;j<MAP_WIDTH;j++){
            let pickedColor = Math.floor(Math.random()*(TILE_COLOR.length-1));
            let collisionrandom = Math.floor(Math.random()*8); // tests
            let collisionsmaybe = false;
            if(collisionrandom == 1){
                collisionsmaybe = true;           
                spritee = "./img/tileFloor.png";
                spriteee = "./img/tileWall.png";
            }
            if(mapTiles[i] == undefined)
                mapTiles[i] = [];
                mapTiles[i][j] = new Tile("some type", TILE_COLOR[pickedColor], collisionsmaybe);
            if(collisionrandom == 1){
                mapTiles[i][j].spriteFloor.src = spritee;
                mapTiles[i][j].spriteWall.src = spriteee;
            }
        }
    }
    console.log(mapTiles);
}
*/