const SPRITE_SIZE = 32; // better not change
const MOVEMENT_SPEED = 1;
let FOV = 20;
class Controller{
    constructor(y, x){
        this.y = y;
        this.x = x;
        this.sprite = new Image();
    }
};
let Player = new Controller(-157 , -157);
Player.sprite.src = "./img/PlayerSprite.png";
