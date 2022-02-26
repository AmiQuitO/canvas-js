const SPRITE_SIZE = 32;
class Controller{
    constructor(y, x){
        this.y = y;
        this.x = x;
        this.sprite = new Image();
    }
};
let Player = new Controller(-5 , -5 );
Player.sprite.src = "./img/PlayerSprite.png";
