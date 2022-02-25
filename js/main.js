class Controller{
    constructor(y, x){
        this.y = y;
        this.x = x;
    }
};
let Player = new Controller(0 , 0);
generateMap();
beginCanvas();