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
    if(Player.x + x > 0 || Player.y + y > 0){ // leaving the map
        console.log("blok");
        return true;
    }else{ // objects collision
        y = (Player.y + y) * -1;
        x = (Player.x + x) * -1;
        if(mapTiles[y][x].collision == true){
            console.log(mapTiles[y][x].collision);
            return true;
        }else{
            return false;
        }
    }
}