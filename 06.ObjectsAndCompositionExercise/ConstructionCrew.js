function solve(object){

    if(object.dizziness){
        object.levelOfHydrated += object.weight * 0.10 * object.experience;
    }
    
    return object;
    };