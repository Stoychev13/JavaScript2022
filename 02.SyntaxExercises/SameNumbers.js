function sameNumbers(numbers){

    let areEqual = true;
    let number = `${numbers}`;

    for(let i = 1; i <= number.length - 1; i++){
        if(number.charAt(i) != number.charAt(i-1)){
            areEqual = false;
            break;
        }
     }
    console.log(areEqual);
}