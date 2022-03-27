function generateMap(){
    generateChunks();
    generateDoors();
    generateInteriors();

    // create the map
    TILE_COLOR_LENGTH = TILE_COLOR.length;
    for(i=0;i<MAP_HEIGHT;i++){
        for(j=0;j<MAP_WIDTH;j++){
            let pickedColor = Math.floor(Math.random()*(TILE_COLOR_LENGTH-1));
            if(mapTiles[i] == null)
                mapTiles[i] = [];
            mapTiles[i][j] = new Tile("some type", "#222222", 0);
        }
    }


    // render the dungeon over the map

    for(let chunk of mapChunks)
    {
        // start positions
        let sx = chunk.x * CHUNKS_SIZE;
        let sy = chunk.y * CHUNKS_SIZE;

        // get the center of the map
        sx += Math.round((MAP_WIDTH  / 2) - (CHUNKS_SIZE / 2));
        sy += Math.round((MAP_HEIGHT / 2) - (CHUNKS_SIZE / 2));

        // walls
        for (let i = 0; i < CHUNKS_SIZE; i++) {   
            mapTiles[sy][sx + i] = new Tile("wall", DUN_COLOR[0], 2);       
            mapTiles[sy + i][sx] = new Tile("wall", DUN_COLOR[0], 2);  
            mapTiles[sy + CHUNKS_SIZE - 1][sx + i] = new Tile("wall",DUN_COLOR[0], 2);  
            mapTiles[sy + i][sx + CHUNKS_SIZE - 1] = new Tile("wall",DUN_COLOR[0], 2);              
        }


        let chestPosX = Math.floor(Math.random()*CHUNKS_SIZE)-1;
        let chestPosY = Math.floor(Math.random()*CHUNKS_SIZE)-1;

        let chestGenerationChance = Math.floor(Math.random()*5);
        for (let i = 1; i < CHUNKS_SIZE - 1; i++) {   
            for (let j = 1; j < CHUNKS_SIZE - 1; j++) {

                if(chestPosX == j && chestPosY == i && chestGenerationChance == 1){
                    mapTiles[sy + j][sx + i] = new Tile("floor",DUN_COLOR[0], 0,new PropChest()) // chest generator 
                    console.log((sx + i), (sy + j)); 
                    continue;
                }

                mapTiles[sy + j][sx + i] = new Tile("floor",DUN_COLOR[0], 0);
            }
        }

        // doors

        for(i=0;i<chunk.doorsPlacement.length;i++){
            if(chunk.doorsPlacement[i] == 4){
                mapTiles[sy + Math.floor(CHUNKS_SIZE / 2)][sx] = new Tile("floor",DUN_COLOR[0], 0,new PropDoor());
            }
            if(chunk.doorsPlacement[i] == 1){
                mapTiles[sy][sx + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor",DUN_COLOR[0], 0,new PropDoor());
            }
            if(chunk.doorsPlacement[i] == 2){
                mapTiles[sy + Math.floor(CHUNKS_SIZE / 2)][sx + CHUNKS_SIZE - 1] = new Tile("floor",DUN_COLOR[0], 0,new PropDoor()); 
            }
            if(chunk.doorsPlacement[i] == 3){
                mapTiles[sy + CHUNKS_SIZE - 1][sx + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor",DUN_COLOR[0], 0,new PropDoor());
            }
        }

       // for debug
       /*
        for(i=0;i<chunk.doorsPlacement.length;i++){
            if(chunk.doorsPlacement[i] == 4){
                mapTiles[sy + Math.floor(CHUNKS_SIZE / 2)][sx] = new Tile("floor","red",3);
            }
            if(chunk.doorsPlacement[i] == 1){
                mapTiles[sy][sx + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor","red",3);
            }
            if(chunk.doorsPlacement[i] == 2){
                mapTiles[sy + Math.floor(CHUNKS_SIZE / 2)][sx + CHUNKS_SIZE - 1] = new Tile("floor","red",3); 
            }
            if(chunk.doorsPlacement[i] == 3){
                mapTiles[sy + CHUNKS_SIZE - 1][sx + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor","red",3);
            }
        }
        */

        // staris
        mapTiles[sy + 1][sx + 1].height = 1;


        // layouts
        for(let i=0;i<chunk.interior.length;i++){
            let baseX = sx + 1 + (11*(i%2));
            let baseY = sy + 1 + (11*(parseInt(i/2)%2));
            for(let j = 0; j<10; j++){
                for(let k = 0; k<10; k++){
                    if(i == 0){
                        check = Chunk.interiorBlueprints[chunk.interior[i]][j][k];
                    }else if(i == 1){
                        check = Chunk.interiorBlueprints[chunk.interior[i]][j][9-k];
                    }else if(i == 2){
                        check = Chunk.interiorBlueprints[chunk.interior[i]][9-j][k];
                    }else if(i == 3){
                        check = Chunk.interiorBlueprints[chunk.interior[i]][9-j][9-k];
                    }
                    /*

                    // needs update !!!!!!
                    let type, color, height, prop;

                    if(check == 0){
                        type = "floor";
                        color = DUN_COLOR[0];
                        height = 0;
                    }
                    if(check > 10 && check < 20){
                        type = "wall";
                        color = DUN_COLOR[0];
                        height = check-10;
                    }
                    if(check > 19 && check < 30){
                        type = "floor";
                        color = DUN_COLOR[0];
                        height = 0;
                    }
                    */
                    mapTiles[baseY + j][baseX + k] = new Tile(check[0], check[1], check[2], check[3]);
                }
            }
        }
    }
    middle = Math.floor(MAP_HEIGHT/2);

    // props for debug !!!!
    mapTiles[middle][middle-1] = new Tile("floor",DUN_COLOR[0], 0, new PropChest());
    mapTiles[middle][middle-2] = new Tile("floor",DUN_COLOR[0], 0, new PropNpc());
    mapTiles[middle][middle-3] = new Tile("floor",DUN_COLOR[0], 0, new PropCrate());

    console.log(mapTiles);
    console.log(mapChunks);
}


function generateChunks(){
    let chunksCount = CHUNKS_BASE_COUNT + (progressLevel*2);
    chunksCount = Math.min(chunksCount, (CHUNKS_ONEWAY_COUNT * CHUNKS_ONEWAY_COUNT)-1);
    let loadedChunks = [];
    loadedChunks.push(new Chunk(0, 0));
    overTheMapVariable = Math.floor(CHUNKS_ONEWAY_COUNT)/2;

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
        
        if(x >= overTheMapVariable || x <= -overTheMapVariable || y >= overTheMapVariable || y <= -overTheMapVariable)
            continue;

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
    mapChunks = loadedChunks;
}


function generateDoors(){
    for(i=0;i<mapChunks.length;i++){
        doorCount = Math.floor(Math.random()*2)+1;
        for(j=0;j<mapChunks.length;j++){
            if(mapChunks[i].doorsPlacement.length >= doorCount){
                break;
            }
            if(mapChunks[i].x == mapChunks[j].x && mapChunks[i].y == (mapChunks[j].y + 1)){
                mapChunks[i].doorsPlacement.push(1);
                mapChunks[j].doorsPlacement.push(3);
            }
            else if(mapChunks[i].x == (mapChunks[j].x + 1) && mapChunks[i].y == mapChunks[j].y){
                mapChunks[i].doorsPlacement.push(4);
                mapChunks[j].doorsPlacement.push(2);
            }
            else if(mapChunks[i].x == mapChunks[j].x && mapChunks[i].y == (mapChunks[j].y - 1)){
                mapChunks[i].doorsPlacement.push(3);
                mapChunks[j].doorsPlacement.push(1);
            }
            else if(mapChunks[i].x == (mapChunks[j].x - 1) && mapChunks[i].y == mapChunks[j].y){
                mapChunks[i].doorsPlacement.push(2);
                mapChunks[j].doorsPlacement.push(4);
            }
        }
    }
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
            if(mapTiles[i] == null)
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

function generateInteriors(){
    for(let chunk of mapChunks){
        if(chunk.x ==0 && chunk.y==0)
            continue;
        for(let i=0;i<4;i++){
            let interiorNumber = Math.floor(Math.random()*Chunk.interiorBlueprints.length);
            chunk.interior.push(interiorNumber);
        }
    }
}