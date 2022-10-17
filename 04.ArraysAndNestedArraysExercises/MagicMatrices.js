function solve(matrix){

    let sum;
    
    for(let index = 0; index<matrix.length; index++){
    
        let tempSum = matrix[index].reduce((acomulator, value) => acomulator+value,0);
    
        if(sum == undefined){
            sum = tempSum;
        }
    
        
        if(sum != tempSum){
            return false;
        }
    
        let colSum = matrix
        .map(row => row[index])
        .reduce((acomulator,value) => acomulator + value, 0);
    
        if(sum != colSum){
            return false;
        }
    
    }
    
    return true;
    }