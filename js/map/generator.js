const MAP_WIDTH = 336;
const MAP_HEIGHT = 336;
const CHUNKS_BASE_COUNT = 8;
const CHUNKS_SIZE = 16;
const TILE_COLOR = ["#c1f376", "#a1df50", "#79d021", "#5fc314", "#55c233", "#37ae0f" ];
// color for background on dungeons? #e4dcb7

let mapTiles = [];

let mapChunks = [];
let progressLevel = 1;


function generateMap(){
    generateChunks();
    for(i=0;i<MAP_HEIGHT;i++){
        if(i%16==0)updateLoadingBar(i); // not work
        for(j=0;j<MAP_WIDTH;j++){
            let pickedColor = Math.floor(Math.random()*(TILE_COLOR.length-1));
            let collisionrandom = Math.floor(Math.random()*8); // tests
            let collisionsmaybe = false;
            if(collisionrandom < 3 && (i%16 == 0 || j%16 == 0)){
                collisionsmaybe = true;           
                spritee = "./img/tileFloor.png";
                spriteee = "./img/tileWall.png";
            }
            if(mapTiles[i] == undefined)
                mapTiles[i] = [];
                mapTiles[i][j] = new Tile("some type", TILE_COLOR[pickedColor], collisionsmaybe);
            if(collisionsmaybe){
                mapTiles[i][j].spriteFloor.src = spritee;
                mapTiles[i][j].spriteWall.src = spriteee;
            }
        }
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