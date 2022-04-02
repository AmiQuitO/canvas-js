Map.prototype.generateDoors = () => {
    for(i=0;i<MAP.chunks.length;i++){
        doorCount = Math.floor(Math.random()*2)+1;
        for(j=0;j<MAP.chunks.length;j++){
            if(MAP.chunks[i].doorsPlacement.length >= doorCount){
                break;
            }
            if(MAP.chunks[i].x == MAP.chunks[j].x && MAP.chunks[i].y == (MAP.chunks[j].y + 1)){
                MAP.chunks[i].doorsPlacement.push(1);
                MAP.chunks[j].doorsPlacement.push(3);
            }
            else if(MAP.chunks[i].x == (MAP.chunks[j].x + 1) && MAP.chunks[i].y == MAP.chunks[j].y){
                MAP.chunks[i].doorsPlacement.push(4);
                MAP.chunks[j].doorsPlacement.push(2);
            }
            else if(MAP.chunks[i].x == MAP.chunks[j].x && MAP.chunks[i].y == (MAP.chunks[j].y - 1)){
                MAP.chunks[i].doorsPlacement.push(3);
                MAP.chunks[j].doorsPlacement.push(1);
            }
            else if(MAP.chunks[i].x == (MAP.chunks[j].x - 1) && MAP.chunks[i].y == MAP.chunks[j].y){
                MAP.chunks[i].doorsPlacement.push(2);
                MAP.chunks[j].doorsPlacement.push(4);
            }
        }
    }
}