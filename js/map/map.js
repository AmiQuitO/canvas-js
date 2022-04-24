class Map{
    static generateMap(){};

    static generateChunks(){};
    static generateDoors(){};
    static generateInteriors(){};

    static generateBaseMap(){};

    static newMap = () => {
        
        Map.chunks = Map.generateChunks();
        Map.generateInteriors();

        Map.tiles = Map.generateBaseMap();
        Map.generateDoors();

        Map.generateMap();
    }

    static draw(){};

    static tiles = [];

    static chunks = [];
};