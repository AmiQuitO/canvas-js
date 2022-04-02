function isColliding(y, x){
    if(Player.x + x < 0 || Player.y + y < 0  || Player.x + x >=MAP_WIDTH || Player.y + y >=MAP_HEIGHT){ // leaving the map
        return true;
    }else{
        y = (Player.y + y);
        x = (Player.x + x);

        let diff = Math.max(Player.currentHeight - MAP.tiles[y][x].height , MAP.tiles[y][x].height - Player.currentHeight)

        if(MAP.tiles[y][x].type == "wall"){
            return true;
        }
        
        // can interact with things on the same height
        if (diff < 2) {
            if(handlePropCollision(x,y))
                return true;
            else
                Player.currentHeight = MAP.tiles[y][x].height 
        }

        if(MAP.tiles[y][x].height != Player.currentHeight){
            return true;
        }


        return false;
        /* 
        if(MAP.tiles[y][x].height != Player.currentHeight){
            return true;
        }else{
            //Player.currentHeight = MAP.tiles[y][x].height //falling (also add > instead of != above)
            return false;
        }
        */
    }
}

function handlePropCollision(x, y){
    let tile = MAP.tiles[y][x];
    let prop = tile.prop;

    if (prop) {
        if (prop.onPlayerEnter) {            
            let res = prop.onPlayerEnter(Player,tile);
            if(res == null)
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