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
    let availableChunks = []; // generate the map

    loadedChunks.push(new Chunk(0, 0)); 
    do{
        for(let lC=0; lC<loadedChunks.length;lC++){
            for(let i=-1;i<=1;i++){
                for(let j=-1;j<=1; j++){
                    newCords = new Chunk(loadedChunks[lC].x+i , loadedChunks[lC].y+j);
                    
                    let isSame = false;
                    if(!loadedChunks.length === 1){
                        for(let aC=0; aC<loadedChunks.length;aC++){
                            isSame = isSameChunk(availableChunks[aC], loadedChunks[lC]);
                            if(isSame)
                                break;
                        }
                    }
                    if(!isSame)
                        availableChunks.push(newCords);
                }
            }
        }
        chosenChunk = Math.floor(Math.random()*availableChunks.length);
        loadedChunks.push(availableChunks[chosenChunk]);
        availableChunks.splice(chosenChunk, 1);
        
        console.log(loadedChunks.length);
    }while(loadedChunks.length <= chunksCount);
}

function isSameChunk(a, b){
    if(a.x === b.x && a.y === b.y)
        return true;
    return false;
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