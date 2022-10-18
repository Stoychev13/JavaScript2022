function solve(array){
    const object = {};
    for(let index = 0; index < array.length; index++){
        if(index %2 != 0){
            object[array[index - 1]] = Number(array[index]);
        }
    }
    
    console.log(object);
    };