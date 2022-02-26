class Tile{
    constructor(type, collision){
        this.type = type;

        this.height = 0;
        this.collision = collision;
        if (collision) {
            this.height = Math.round(Math.random()*3 + 1);
        }

        this.sprite = new Image();
        this.sprite2 = new Image();
        //sprite = type + ".png";
    }
    drawTile(posX, posY, scale){
        scale = scale + BASE_SCALE;
        let height = 0;
        height = scale * this.height

        C.beginPath();
        C.moveTo(posX, posY-height);                    //top
        C.lineTo(posX+(scale*2), posY+scale-height);    //left top
        C.lineTo(posX+(scale*2), posY+scale);           //left
        C.lineTo(posX, posY+(scale*2));                 //bottom
        C.lineTo(posX-(scale*2), posY+scale);           //right
        C.lineTo(posX-(scale*2), posY+scale-height);    //right top
        C.lineTo(posX, posY-height);                    //top
        C.fillStyle = this.type;
        C.fill();
        

        for (let h = 0; h < height; h+=scale) {
            C.drawImage(this.sprite2,   posX-(BASE_SCALE*2), posY-h,              BASE_SCALE*4,BASE_SCALE*2); //sciana
            if (h == height - scale) {
                C.drawImage(this.sprite,    posX-(BASE_SCALE*2), posY-BASE_SCALE-h,   BASE_SCALE*4,BASE_SCALE*2); //podloga
            }      
        }
        //C.drawImage(this.sprite, posX-(BASE_SCALE*2), posY, BASE_SCALE*4,BASE_SCALE*2);            
    
    }
    
}
