function echo(array) {
    let result = [];
    array.sort(function(a, b){return a - b});
    let smallest = 0;
    let counter = 0;
     
     
    for(let el of array){
    result.push(el);
   
    while(counter === 0){
        smallest = array.pop();
        result.push(smallest);
        
        break;
    }
     
    }
     
    return result;
    }
