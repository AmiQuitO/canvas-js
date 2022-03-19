function isColliding(y, x){
    if(Player.x + x < 0 || Player.y + y < 0  || Player.x + x >=MAP_WIDTH || Player.y + y >=MAP_HEIGHT){ // leaving the map
        return true;
    }else{
        y = (Player.y + y);
        x = (Player.x + x);

        let diff = Math.max(Player.currentHeight - mapTiles[y][x].height,mapTiles[y][x].height - Player.currentHeight)


        // can interact with things on the same height
        if (diff < 2) {
            if(handlePropCollision(x,y))
                return true;
            else
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

function handlePropCollision(x, y){
    let tile = mapTiles[y][x];
    let prop = tile.prop;

    if (prop) {
        if (prop.onPlayerEnter) {            
            let res = prop.onPlayerEnter(Player,tile);
            if(res == undefined)
                return prop.collision;
            else
                return res;
        }
        else
            return prop.collision;
    }
    else
        return false;

}