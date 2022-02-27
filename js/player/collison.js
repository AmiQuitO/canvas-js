function isColliding(y, x){
    if(Player.x + x < 0 || Player.y + y < 0  || Player.x + x >=MAP_WIDTH || Player.y + y >=MAP_HEIGHT){ // leaving the map
        return true;
    }else{ // objects collision
        y = (Player.y + y);
        x = (Player.x + x);

        let diff = Math.max(Player.currentHeight - mapTiles[y][x].height,mapTiles[y][x].height - Player.currentHeight)

        if (diff < 2) {
            Player.currentHeight = mapTiles[y][x].height
        }

        if(mapTiles[y][x].height != Player.currentHeight){
            return true;
        }else{
            //Player.currentHeight = mapTiles[y][x].height //falling (also add > instead of != above)
            return false;
        }
    }
}