Map.prototype.generateInteriors = () =>{
    for(let chunk of MAP.chunks){
        if(chunk.x ==0 && chunk.y==0)
            continue;
        for(let i=0;i<4;i++){
            let interiorNumber = Math.floor(Math.random()*Chunk.interiorBlueprints.length);
            chunk.interior.push(interiorNumber);
        }
    }
}