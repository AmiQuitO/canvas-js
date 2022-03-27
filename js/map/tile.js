class Tile{
    constructor(type, color, height, prop = null){
        this.type = type;
        // future types: exit of the stage | get up / get down one level | destructibles wood minerals? | 
        // add!!! stairs | passing to another level | doors

        this.color = color;
        this.height = height;       
        /** @type {Prop} */ 
        this.prop = prop;
        //sprite = type + ".png";
    }

    static floor = document.querySelector("#floor");
    static floorWhite = document.querySelector("#floorWhite");
    static floorBlack = document.querySelector("#floorBlack");
    static floorVoid = document.querySelector("#floorVoid");
    static wall = document.querySelector("#wall");

    drawTile(posX, posY, gridX,gridY,scale,ctx){
        let height = 0;        
        ctx.fillStyle = this.color;
        scale = scale + BASE_SCALE;
        height = scale * this.height;

        // Don't obscure the player
        // if ((this.height - 1 > Player.currentHeight) && 
        //     (mapTiles[gridY-Math.floor(this.height / 2)][gridX-Math.floor(this.height / 2)].height < this.height) &&
        //     (Math.sqrt((gridX-Player.x) * (gridX-Player.x) + (gridY-Player.y) * (gridY-Player.y)) < radius)
        //     ) 
        //

        // reveal the player system
        let radius = 1;
        if ((this.height - 1 > Player.currentHeight) && 
            (this.height / 1.5 * radius > gridY - Player.y) && (gridY >= Player.y) &&
            (this.height * radius > gridX - Player.x) && (gridX >= Player.x)) {        
            height = (Player.currentHeight + 1) * scale          
            ctx.fillStyle = "#111111";
        }

        // filling the tile with color
        ctx.beginPath();
        ctx.moveTo(posX, posY-height);                    //top
        ctx.lineTo(posX+(scale*2), posY+scale-height);    //left top
        ctx.lineTo(posX+(scale*2), posY+scale);           //left
        ctx.lineTo(posX, posY+(scale*2));                 //bottom
        ctx.lineTo(posX-(scale*2), posY+scale);           //right
        ctx.lineTo(posX-(scale*2), posY+scale-height);    //right top
        ctx.lineTo(posX, posY-height);                    //top
        ctx.fill();
        
        // drawing wall sprites
        for (let h = 0; h < height; h+=scale) {
            ctx.drawImage(Tile.wall, posX-(BASE_SCALE*2), posY-h, BASE_SCALE*4,BASE_SCALE*2); //sciana
            if (h == height - scale) {
                ctx.drawImage(Tile.floor,    posX-(BASE_SCALE*2), posY-BASE_SCALE-h,   BASE_SCALE*4,BASE_SCALE*2); //podloga
            }      
        }

        // drawing the floor sprites
        if(this.type == "floor" && this.height < 2){
            ctx.drawImage(Tile.floorWhite,    posX-(BASE_SCALE*2), posY- height,   BASE_SCALE*4,BASE_SCALE*2);
        }else if(this.type == "wall"){
            ctx.drawImage(Tile.floor,    posX-(BASE_SCALE*2), posY-height,   BASE_SCALE*4,BASE_SCALE*2);
        }else if(this.type == "void"){
            ctx.drawImage(Tile.floorVoid,    posX-(BASE_SCALE*2), posY-height,   BASE_SCALE*4,BASE_SCALE*2);
        }
        //ctx.drawImage(this.spriteWall, posX-(BASE_SCALE*2), posY, BASE_SCALE*4,BASE_SCALE*2);            
    
        //prop drawing
        if(this.prop){
            if (!this.prop.drawProp) 
                console.error(this.prop," Wrong Prop Type");
            else
                this.prop.drawProp(posX, posY, this, ctx);
        }
    }

    
    static spriteFloor = document.querySelector("#floor");
    static spriteWall = document.querySelector("#wall");
}
