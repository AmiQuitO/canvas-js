function isColliding(y, x){
    if(Player.x + x > 0 || Player.y + y > 0  || Player.x + x <=(MAP_WIDTH * -1) || Player.y + y <=(MAP_HEIGHT * -1)){ // leaving the map
        console.log("border collision");
        return true;
    }else{ // objects collision
        y = (Player.y + y) * -1;
        x = (Player.x + x) * -1;
        if(mapTiles[y][x].collision == true){
            console.log("object collision");
            return true;
        }else{
            return false;
        }
    }
}