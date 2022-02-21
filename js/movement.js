window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    x = event.key;
    if(x == "w")
        playerY += MOVEMENT_SPEED;
        beginCanvas();
    if(x == "s")
        playerY -= MOVEMENT_SPEED;
        beginCanvas();
    if(x == "a")
        playerX += MOVEMENT_SPEED*2;
        beginCanvas();
    if(x == "d")
        playerX -= MOVEMENT_SPEED*2;
        beginCanvas();
    event.preventDefault();
}, true);