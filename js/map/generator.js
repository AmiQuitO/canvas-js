const MAP_WIDTH = 315;
const MAP_HEIGHT = 315;
const CHUNKS_BASE_COUNT = 8;
const CHUNKS_SIZE = 15;
const TILE_COLOR = ["#c1f376", "#a1df50", "#79d021", "#5fc314", "#55c233", "#37ae0f" ];
// color for background on dungeons? #e4dcb7

let mapTiles = [];

let mapChunks = [];
let progressLevel = 1;


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

    for(let chunk of mapChunks)
    {
        let sx = chunk.x * CHUNKS_SIZE
        let sy = chunk.y * CHUNKS_SIZE

        sx += Math.round((MAP_WIDTH  / 2) - (CHUNKS_SIZE / 2))
        sy += Math.round((MAP_HEIGHT / 2) - (CHUNKS_SIZE / 2))

        for (let i = 0; i < CHUNKS_SIZE; i++) {   
            mapTiles[sx + i][sy] = new Tile("wall","#333",2);       
            mapTiles[sx]   [sy + i] = new Tile("wall","#333",2);  
            mapTiles[sx + i][sy + CHUNKS_SIZE - 1] = new Tile("wall","#333",2);  
            mapTiles[sx + CHUNKS_SIZE - 1][sy + i] = new Tile("wall","#333",2);              
        }

        for (let i = 1; i < CHUNKS_SIZE - 1; i++) {   
            for (let j = 1; j < CHUNKS_SIZE - 1; j++) { 
                mapTiles[sx + i][sy + j] = new Tile("floor","#544",0); ;        
            }
        }
        mapTiles[sx][sy + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor","#544",0); 
        mapTiles[sx + Math.floor(CHUNKS_SIZE / 2)][sy] = new Tile("floor","#544",0); 
        mapTiles[sx + CHUNKS_SIZE - 1][sy + Math.floor(CHUNKS_SIZE / 2)] = new Tile("floor","#544",0); 
        mapTiles[sx + Math.floor(CHUNKS_SIZE / 2)][sy + CHUNKS_SIZE - 1] = new Tile("floor","#544",0); 

        mapTiles[sx + 1][sy + 1].height = 1;  
    }
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