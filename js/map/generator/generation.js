Map.prototype.generateMap = () => {
    // render the dungeon over the map

    for(let chunk of MAP.chunks)
    {
        // start positions
        let sx = chunk.x * CHUNKS_SIZE;
        let sy = chunk.y * CHUNKS_SIZE;

        // get the center of the map
        sx += Math.round((MAP_WIDTH  / 2) - (CHUNKS_SIZE / 2));
        sy += Math.round((MAP_HEIGHT / 2) - (CHUNKS_SIZE / 2));

        // walls
        for (let i = 0; i < CHUNKS_SIZE; i++) {   
            MAP.tiles[sy][sx + i] = new Tile("wall", DUN_COLOR[0], 2);       
            MAP.tiles[sy + i][sx] = new Tile("wall", DUN_COLOR[0], 2);  
            MAP.tiles[sy + CHUNKS_SIZE - 1][sx + i] = new Tile("wall",DUN_COLOR[0], 2);  
            MAP.tiles[sy + i][sx + CHUNKS_SIZE - 1] = new Tile("wall",DUN_COLOR[0], 2);              
        }

        // for removal !!!
        let chestPosX = Math.floor(Math.random()*CHUNKS_SIZE)-1;
        let chestPosY = Math.floor(Math.random()*CHUNKS_SIZE)-1;

        let chestGenerationChance = Math.floor(Math.random()*5);
        for (let i = 1; i < CHUNKS_SIZE - 1; i++) {   
            for (let j = 1; j < CHUNKS_SIZE - 1; j++) {

                if(chestPosX == j && chestPosY == i && chestGenerationChance == 1){
                    MAP.tiles[sy + j][sx + i] = new Tile("floor",DUN_COLOR[0], 0,new PropChest()) // chest generator 
                    console.log((sx + i), (sy + j)); 
                    continue;
                }

                MAP.tiles[sy + j][sx + i] = new Tile("floor",DUN_COLOR[0], 0);
            }
        }
        // for removal!!!

        // doors

        for(i=0;i<chunk.doorsPlacement.length;i++){
            if(chunk.doorsPlacement[i] == 4){
                MAP.tiles[sy + Math.floor(CHUNKS_SIZE / 2)][sx] = new Tile("floor",DUN_COLOR[0], 0,new PropDoor());
            }
            if(chunk.doorsPlacement[i] == 1){
                MAP.tiles[sy][sx + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor",DUN_COLOR[0], 0,new PropDoor());
            }
            if(chunk.doorsPlacement[i] == 2){
                MAP.tiles[sy + Math.floor(CHUNKS_SIZE / 2)][sx + CHUNKS_SIZE - 1] = new Tile("floor",DUN_COLOR[0], 0,new PropDoor()); 
            }
            if(chunk.doorsPlacement[i] == 3){
                MAP.tiles[sy + CHUNKS_SIZE - 1][sx + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor",DUN_COLOR[0], 0,new PropDoor());
            }
        }

        // staris
        MAP.tiles[sy + 1][sx + 1].height = 1;


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
                    
                    MAP.tiles[baseY + j][baseX + k] = new Tile(check[0], check[1], check[2], check[3]);
                }
            }
        }
    }
    middle = Math.floor(MAP_HEIGHT/2);

    // props for debug !!!!
    MAP.tiles[middle][middle-1] = new Tile("floor",DUN_COLOR[0], 0, new PropChest());
    MAP.tiles[middle][middle-2] = new Tile("floor",DUN_COLOR[0], 0, new PropNpc());
    MAP.tiles[middle][middle-3] = new Tile("floor",DUN_COLOR[0], 0, new PropCrate());

    console.log(MAP.tiles);
    console.log(MAP.chunks);
}

Map.prototype.generateBaseMap = () => {
    TILE_COLOR_LENGTH = TILE_COLOR.length;
    for(i=0;i<MAP_HEIGHT;i++){
        for(j=0;j<MAP_WIDTH;j++){
            let pickedColor = Math.floor(Math.random()*(TILE_COLOR_LENGTH-1));
            if(MAP.tiles[i] == null)
                MAP.tiles[i] = [];
            MAP.tiles[i][j] = new Tile("void", "#222222", 0);
        }
    }
}