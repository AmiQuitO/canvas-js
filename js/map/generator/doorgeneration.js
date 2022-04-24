Map.generateDoors = () => {
    for(i=0;i<Map.chunks.length;i++){
        doorCount = Math.floor(Math.random()*2)+1;
        for(j=0;j<Map.chunks.length;j++){
            if(Map.chunks[i].doorsPlacement.length >= doorCount){
                break;
            }
            if(Map.chunks[i].x == Map.chunks[j].x && Map.chunks[i].y == (Map.chunks[j].y + 1)){
                Map.chunks[i].doorsPlacement.push(1);
                Map.chunks[j].doorsPlacement.push(3);
            }
            else if(Map.chunks[i].x == (Map.chunks[j].x + 1) && Map.chunks[i].y == Map.chunks[j].y){
                Map.chunks[i].doorsPlacement.push(4);
                Map.chunks[j].doorsPlacement.push(2);
            }
            else if(Map.chunks[i].x == Map.chunks[j].x && Map.chunks[i].y == (Map.chunks[j].y - 1)){
                Map.chunks[i].doorsPlacement.push(3);
                Map.chunks[j].doorsPlacement.push(1);
            }
            else if(Map.chunks[i].x == (Map.chunks[j].x - 1) && Map.chunks[i].y == Map.chunks[j].y){
                Map.chunks[i].doorsPlacement.push(2);
                Map.chunks[j].doorsPlacement.push(4);
            }
        }
    }
}