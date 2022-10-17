function solution(array) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;

    const finalArray = [];

    array.forEach(element => {
        if(element >= biggestNumber){
            finalArray.push(element);
            biggestNumber = element;
        }
    });

    return finalArray;
}
