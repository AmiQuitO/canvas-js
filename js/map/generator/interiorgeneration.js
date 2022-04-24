Map.generateInteriors = () =>{
    for(let chunk of Map.chunks){
        if(chunk.x ==0 && chunk.y==0)
            continue;
        for(let i=0;i<4;i++){
            let interiorNumber = Math.floor(Math.random()*Chunk.interiorBlueprints.length);
            chunk.interior.push(interiorNumber);
        }
    }
}

// types of interiors
// 0 - empty
// 1 - empty but with enemies
// 2 - empty but loot

// 3 - rooms but empty
// 4 - rooms but with ememies
// 5 - rooms with loot

// 6 - boss
// 7 - next level room

// E // E / EE / EL / EA
// R // R / RE / RL / RA
// C // C / CE / CL / CA - complex
// B // F