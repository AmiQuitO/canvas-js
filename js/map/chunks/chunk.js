class Chunk{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    doorsPlacement = [];
    interior = [];

    // 0 - 9 common props
    // 0 floor 1 nextlevel 2 -- ? 9 random prop for decoration
    // 10 - 19 walls and their heights
    // 20 - 29 chests and theier probability of loot
    // 30 - 39 crates and theier chance of getting more amount of gold
    // 40 -- ?
    static interiorBlueprintsLobby = [];
    static interiorBlueprints = [];

}