const MAP_WIDTH = 20;
const MAP_HEIGHT = 25;
const TILE_COLOR = ["#c1f376", "#a1df50", "#79d021", "#5fc314", "#55c233", "#37ae0f" ];
// color for background on dungeons? #e4dcb7

let mapTiles = [];

function generateMap(){
    for(i=0;i<MAP_HEIGHT;i++){
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
                mapTiles[i][j] = new Tile(TILE_COLOR[pickedColor], collisionsmaybe);
            if(collisionrandom == 1){
                mapTiles[i][j].spriteFloor.src = spritee;
                mapTiles[i][j].spriteWall.src = spriteee;
            }
        }
    }
    console.log(mapTiles);
}