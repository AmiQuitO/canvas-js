window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    x = event.key;
    if(x == "w" && !isColliding(MOVEMENT_SPEED, 0)){
        Player.y += MOVEMENT_SPEED;
        beginCanvas();
    }
    if(x =="s" && !isColliding(-MOVEMENT_SPEED, 0)){
        Player.y -= MOVEMENT_SPEED;
        beginCanvas();}
    if(x == "a" && !isColliding(0, MOVEMENT_SPEED)){
        Player.x += MOVEMENT_SPEED;
        beginCanvas();}
    if(x == "d" && !isColliding(0, -MOVEMENT_SPEED)){
        Player.x -= MOVEMENT_SPEED;
        beginCanvas();}
    event.preventDefault();
}, true);