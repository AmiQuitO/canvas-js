class Controller{
    constructor(y, x){
        this.y = y;
        this.x = x;
        this.currentHeight = 0;
        this.gold = 0;
        this.sprite = new Image();
    }
};
var Player = new Controller(82 , 82);
Player.sprite.src = "./img/PlayerSprite.png";
