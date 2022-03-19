class Prop {
    /**
     * @param {boolean} hasCollision 
     * @param {string} spriteId 
     * @param {number} scale 
     */
    constructor(hasCollision, spriteId, scale = 4)
    {
        this.sprite = document.querySelector(`#${spriteId}`);
        this.collision = hasCollision;
        this.scale = scale;
    }

    /** 
     * @abstract 
     * @param {Controller} player
     * @param {Tile} owner
     * @returns {boolean | undefined}
     * */
    onPlayerEnter(player,owner)
    {}

    
    drawProp(posX, posY, tile, ctx)
    {
        let scale = this.scale;
        ctx.drawImage(
            this.sprite, 
            posX-(BASE_SCALE*scale), posY-(BASE_SCALE*scale) + BASE_SCALE - (BASE_SCALE*tile.height),
            BASE_SCALE*scale*2, BASE_SCALE*scale*2
        );
    }
}

class PropChest extends Prop {
    constructor()
    {
        super(false,"chest");
    }

    /** 
     * @param {Controller} player
     * @param {Tile} owner
     * @returns {boolean | undefined}
     * */
    onPlayerEnter(player,owner)
    {
        player.gold += Math.floor(Math.random()*9)+2;
        owner.prop = undefined;
    }
}

class PropCrate extends Prop {
    constructor()
    {
        super(false,"crate");
    }

    /** 
     * @param {Controller} player
     * @param {Tile} owner
     * @returns {boolean | undefined}
     * */
    onPlayerEnter(player,owner)
    {
        owner.prop = undefined;
    }
}

class PropDoor extends Prop {
    constructor()
    {
        super(false,"door",2);
    }
}

class PropNpc extends Prop {
    constructor()
    {
        super(true,"npc");
    }
}




// Default Props