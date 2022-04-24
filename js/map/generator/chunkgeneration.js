Map.generateChunks = () => {
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
    return loadedChunks;
}