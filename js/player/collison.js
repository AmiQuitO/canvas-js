function isColliding(y, x){
    if(Player.x + x > 0 || Player.y + y > 0  || Player.x + x <=(MAP_WIDTH * -1) || Player.y + y <=(MAP_HEIGHT * -1)){ // leaving the map
        return true;
    }else{ // objects collision
        y = (Player.y + y) * -1;
        x = (Player.x + x) * -1;

        let diff = Math.max(Player.currentHeight - mapTiles[y][x].height,mapTiles[y][x].height - Player.currentHeight)

        if (diff < 2) {
            Player.currentHeight = mapTiles[y][x].height
        }

        if(mapTiles[y][x].height != Player.currentHeight){
            return true;
        }else{
            return false;
        }
    }
}