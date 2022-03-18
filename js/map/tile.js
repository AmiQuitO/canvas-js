class Tile{
    constructor(type, color, height, prop = "none"){
        this.type = type;
        // future types: exit of the stage | get up / get down one level | destructibles wood minerals? | 
        // add!!! stairs | passing to another level | doors

        this.color = color;
        this.height = height;
        
        this.setProp(prop);
        //sprite = type + ".png";
    }
    setProp(prop){
        this.prop = prop;
        if(prop == "none"){
            this.spriteProp = "none";
        }else{ 
            this.spriteProp = document.querySelector(`#${this.prop}`);
        }
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

        // reveal the player system
        let radius = 1;
        if ((this.height - 1 > Player.currentHeight) && 
            (this.height / 1.5 * radius > gridY - Player.y) && (gridY >= Player.y) &&
            (this.height * radius > gridX - Player.x) && (gridX >= Player.x)) {        
            height = (Player.currentHeight + 1) * scale          
            ctx.fillStyle = "#111111";
        }

        // filling the tile with colour
        ctx.beginPath();
        ctx.moveTo(posX, posY-height);                    //top
        ctx.lineTo(posX+(scale*2), posY+scale-height);    //left top
        ctx.lineTo(posX+(scale*2), posY+scale);           //left
        ctx.lineTo(posX, posY+(scale*2));                 //bottom
        ctx.lineTo(posX-(scale*2), posY+scale);           //right
        ctx.lineTo(posX-(scale*2), posY+scale-height);    //right top
        ctx.lineTo(posX, posY-height);                    //top
        ctx.fill();
        

        // drawing sprites
        for (let h = 0; h < height; h+=scale) {
            ctx.drawImage(Tile.spriteWall, posX-(BASE_SCALE*2), posY-h, BASE_SCALE*4,BASE_SCALE*2); //sciana
            if (h == height - scale) {
                //ctx.drawImage(Tile.spriteFloor,    posX-(BASE_SCALE*2), posY-BASE_SCALE-h,   BASE_SCALE*4,BASE_SCALE*2); //podloga
            }      
        }
        if(this.height == 0 && this.type == "floor"){
            ctx.drawImage(Tile.spriteFloor, posX-(BASE_SCALE*2), posY, BASE_SCALE*4,BASE_SCALE*2);
        }
        //ctx.drawImage(this.spriteWall, posX-(BASE_SCALE*2), posY, BASE_SCALE*4,BASE_SCALE*2);            
    
        this.drawProp(posX, posY, ctx);
    }

    drawProp(posX, posY, ctx)
    {
        if (this.prop == "none" || this.spriteProp == undefined) 
            return

        let scale = this.spriteProp.getAttribute("scale");

        ctx.drawImage(
            this.spriteProp, 
            posX-(BASE_SCALE*scale), posY-(BASE_SCALE*scale) + BASE_SCALE - (BASE_SCALE*this.height),
            BASE_SCALE*scale*2, BASE_SCALE*scale*2
        );
    }
    
    static spriteFloor = document.querySelector("#floor");
    static spriteWall = document.querySelector("#wall");
}
