class Tile{
    constructor(type, color, height, prop){
        this.type = type;
        // future types: exit of the stage | get up / get down one level | destructibles wood minerals? | 
        // add!!! stairs | passing to another level | doors

        this.color = color;
        this.height = height;

        this.prop = prop;
        if(!this.prop == undefined)
            setTilePropSprite();
        
        this.spriteFloor = document.querySelector("#floor");
        this.spriteWall = document.querySelector("#wall");
        this.spriteProp = document.querySelector(`#${this.prop}`);
        //sprite = type + ".png";
    }
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
        let radius = 1;
        if ((this.height - 1 > Player.currentHeight) && 
            (this.height / 1.5 * radius > gridY - Player.y) && (gridY >= Player.y) &&
            (this.height * radius > gridX - Player.x) && (gridX >= Player.x)) {        
            height = (Player.currentHeight + 1) * scale          
            ctx.fillStyle = "black";
        }

        
        ctx.beginPath();
        ctx.moveTo(posX, posY-height);                    //top
        ctx.lineTo(posX+(scale*2), posY+scale-height);    //left top
        ctx.lineTo(posX+(scale*2), posY+scale);           //left
        ctx.lineTo(posX, posY+(scale*2));                 //bottom
        ctx.lineTo(posX-(scale*2), posY+scale);           //right
        ctx.lineTo(posX-(scale*2), posY+scale-height);    //right top
        ctx.lineTo(posX, posY-height);                    //top
        ctx.fill();
        ctx.stroke();
        
        for (let h = 0; h < height; h+=scale) {
            ctx.drawImage(this.spriteWall,   posX-(BASE_SCALE*2), posY-h,              BASE_SCALE*4,BASE_SCALE*2); //sciana
            if (h == height - scale) {
                //ctx.drawImage(this.spriteFloor,    posX-(BASE_SCALE*2), posY-BASE_SCALE-h,   BASE_SCALE*4,BASE_SCALE*2); //podloga
            }      
        }
        //ctx.drawImage(this.spriteWall, posX-(BASE_SCALE*2), posY, BASE_SCALE*4,BASE_SCALE*2);            
    
    }
    
}
