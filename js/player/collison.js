function isColliding(y, x){
    if(Player.x + x < 0 || Player.y + y < 0  || Player.x + x >=MAP_WIDTH || Player.y + y >=MAP_HEIGHT){ // leaving the map
        return true;
    }else{
        y = (Player.y + y);
        x = (Player.x + x);

        let diff = Math.max(Player.currentHeight - mapTiles[y][x].height,mapTiles[y][x].height - Player.currentHeight)


        // can interact with things on the same height
        if (diff < 2) {
            if (isPropCollision(x, y)){
                beginCanvas();
                return true;
            }
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

function isPropCollision(x, y){
    if(mapTiles[y][x].prop == "chest"){
        mapTiles[y][x].prop = "none";
        Player.gold += Math.floor(Math.random()*9)+2;
        return false;
    }
    if(mapTiles[y][x].prop == "npc"){
        
        return true;
    }
}