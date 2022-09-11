function GCD(firstNum, secondNum){
    let divisor;
    let duvNumber;

    if(firstNum > secondNum){
        divisor = secondNum;
        duvNumber = firstNum;
    }else{
        divisor = firstNum;
        duvNumber = secondNum;
    }
    let finalResult;

    while(true){
        finalResult = duvNumber % divisor;
        if(finalResult != 0){
            duvNumber = divisor;
            divisor = finalResult;
        }else{
            break;
        }
    }

    console.log(divisor);
}