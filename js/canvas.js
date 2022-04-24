class Canvas{
    static canvasHolder = document.querySelector("#canvas-holder");
    constructor(canvas, width, height){
        this.c = canvas;
        this.CTX = this.c.getContext("2d");
        this.c.width = width;
        this.c.height = height;
        Canvas.canvasHolder.appendChild(this.c);
    }
}
// temporarily
let baner = new Image();
baner.src = "img/philosopherstalev1.png";

const MAIN_CANVAS = new Canvas(document.createElement("canvas"), CANVAS_WIDTH, CANVAS_HEIGHT);

// For UI
const UI_CANVAS = new Canvas(document.createElement("canvas"), CANVAS_WIDTH, CANVAS_HEIGHT);

// optimization
MAIN_CANVAS.CTX.imageSmoothingEnabled = false;
MAIN_CANVAS.CTX.mozImageSmoothingEnabled = false;
MAIN_CANVAS.CTX.webkitImageSmoothingEnabled = false;
MAIN_CANVAS.CTX.msImageSmoothingEnabled = false;

function beginCanvas(){
    clearCanvas(MAIN_CANVAS.CTX);
    clearCanvas(UI_CANVAS.CTX);
    
    Map.draw(MAIN_CANVAS.CTX);

    drawPos(UI_CANVAS.CTX);
    drawGoldCount(UI_CANVAS.CTX);
}

function clearCanvas(ctx){
    ctx.resetTransform()
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

//debug
function drawPos(ctx){
    ctx.font = '22px monospace';
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${Player.x}, ${Player.y}`, 0, 18);
    ctx.drawImage(baner, CANVAS_WIDTH-220, CANVAS_HEIGHT-60, 200, 40);
}
function drawGoldCount(ctx){
    ctx.font = '30px monospace';
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${Player.gold}`, 50, CANVAS_HEIGHT - 50);
    //UI_CTX.fillText(`${Player.gold}`, CANVAS_WIDTH - (CANVAS_WIDTH/10), CANVAS_HEIGHT -  (CANVAS_HEIGHT/10));
}