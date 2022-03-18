class Controller{
    constructor(y, x){
        this.y = y;
        this.x = x;
        this.currentHeight = 0;
        this.gold = 0;
        this.sprite = new Image();
    }
};
var Player = new Controller(Math.floor(MAP_HEIGHT/2) , Math.floor(MAP_WIDTH/2));
Player.sprite.src = "./img/player.png";


window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    x = event.key;
    if(x == "w" && !isColliding(-MOVEMENT_SPEED, 0)){
        Player.y -= MOVEMENT_SPEED;
        beginCanvas();
    }
    if(x =="s" && !isColliding(MOVEMENT_SPEED, 0)){
        Player.y += MOVEMENT_SPEED;
        beginCanvas();}
    if(x == "a" && !isColliding(0, -MOVEMENT_SPEED)){
        Player.x -= MOVEMENT_SPEED;
        beginCanvas();}
    if(x == "d" && !isColliding(0, MOVEMENT_SPEED)){
        Player.x += MOVEMENT_SPEED;
        beginCanvas();}
    event.preventDefault();
}, true);

function buttonsMove(x){
    if(x == "w" && !isColliding(-MOVEMENT_SPEED, 0)){
        Player.y -= MOVEMENT_SPEED;
        beginCanvas();
    }
    if(x =="s" && !isColliding(MOVEMENT_SPEED, 0)){
        Player.y += MOVEMENT_SPEED;
        beginCanvas();}
    if(x == "a" && !isColliding(0, -MOVEMENT_SPEED)){
        Player.x -= MOVEMENT_SPEED;
        beginCanvas();}
    if(x == "d" && !isColliding(0, MOVEMENT_SPEED)){
        Player.x += MOVEMENT_SPEED;
        beginCanvas();}
}