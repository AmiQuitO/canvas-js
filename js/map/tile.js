class Tile{
    constructor(type, color, height){
        this.type = type;
        // future types: exit of the stage | get up / get down one level | destructibles wood minerals? | 
        this.color = color;
        this.height = height;

        this.spriteFloor = document.querySelector("#floor");
        this.spriteWall = document.querySelector("#wall");
        //sprite = type + ".png";
    }
    drawTile(posX, posY, gridX,gridY,scale){
        let height = 0;        
        C.fillStyle = this.color;
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
            C.fillStyle = "black";
        }

        
        C.beginPath();
        C.moveTo(posX, posY-height);                    //top
        C.lineTo(posX+(scale*2), posY+scale-height);    //left top
        C.lineTo(posX+(scale*2), posY+scale);           //left
        C.lineTo(posX, posY+(scale*2));                 //bottom
        C.lineTo(posX-(scale*2), posY+scale);           //right
        C.lineTo(posX-(scale*2), posY+scale-height);    //right top
        C.lineTo(posX, posY-height);                    //top
        C.fill();
        C.stroke();
        
        for (let h = 0; h < height; h+=scale) {
            C.drawImage(this.spriteWall,   posX-(BASE_SCALE*2), posY-h,              BASE_SCALE*4,BASE_SCALE*2); //sciana
            if (h == height - scale) {
                //C.drawImage(this.spriteFloor,    posX-(BASE_SCALE*2), posY-BASE_SCALE-h,   BASE_SCALE*4,BASE_SCALE*2); //podloga
            }      
        }
        //C.drawImage(this.spriteWall, posX-(BASE_SCALE*2), posY, BASE_SCALE*4,BASE_SCALE*2);            
    
    }
    
}
