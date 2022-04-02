window.addEventListener("DOMContentLoaded", function(){
    
    MAP.generateChunks();
    MAP.generateDoors();
    MAP.generateInteriors();
    MAP.generateBaseMap();
    MAP.generateMap();

    beginCanvas();
});

console.log(screen.availHeight);
console.log(screen.availWidth); // for future display things