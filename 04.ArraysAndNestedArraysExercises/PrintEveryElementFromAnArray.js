function solution(array,element){
    array = array.map((value, index, array) => {
        if(index % element == 0){
            return value;
        }else{
            return null;
        }
    })
    .filter((x) => x != null); 

    return array;
}