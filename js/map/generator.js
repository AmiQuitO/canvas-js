const MAP_WIDTH = 20;
const MAP_HEIGHT = 25;
const TILE_COLOR = ["#bdc940", "#bdc940","#bdc940","#bdc940","#bdc940", "#888536", "#4d4b17", "#263d14", "#208a7d", "black"];

let mapTiles = [];

class Tile{
    constructor(type, collision){
        this.type = type;
        this.collision = collision;
        this.sprite = new Image();
        //sprite = type + ".png";
    }
}

function generateMap(){
    for(i=0;i<MAP_HEIGHT;i++){
        for(j=0;j<MAP_WIDTH;j++){
            let pickedColor = Math.floor(Math.random()*(TILE_COLOR.length-1));
            let collisionrandom = Math.floor(Math.random()*11); // tests
            let collisionsmaybe = false;
            if(collisionrandom == 10){
                pickedColor = TILE_COLOR.length-1;
                collisionsmaybe = true;           
                spritee = "./img/tiletest.png";
            }
            if(mapTiles[i] == undefined)
                mapTiles[i] = [];
                mapTiles[i][j] = new Tile(TILE_COLOR[pickedColor], collisionsmaybe);
            if(collisionrandom == 10){
                mapTiles[i][j].sprite.src = spritee;
            }
        }
    }
    console.log(mapTiles);
}