window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    x = event.key;
    if(x == "w" && !isColliding(1, 0)){
        Player.y += MOVEMENT_SPEED;
        beginCanvas();
    }
    if(x =="s" && !isColliding(-1, 0)){
        Player.y -= MOVEMENT_SPEED;
        beginCanvas();}
    if(x == "a" && !isColliding(0, 1)){
        Player.x += MOVEMENT_SPEED;
        beginCanvas();}
    if(x == "d" && !isColliding(0, -1)){
        Player.x -= MOVEMENT_SPEED;
        beginCanvas();}
    event.preventDefault();
}, true);

function isColliding(y, x){
    y *= -1;
    x *= -1;
    if(mapTiles[Player.y+y][Player.x+x].collision == true || Player.x + x > 0 || Player.y + y > 0){
        console.log(y, x);
        return true;
    }else{
        console.log("wolne");
        return false;
    }
}