function solve (firstNumber, secondNumber, operator){

    let finalResult;
    if(operator == '+'){
        finalResult = firstNumber + secondNumber;
    }else if(operator == '-'){
        finalResult = firstNumber - secondNumber;
    }else if(operator == '*'){
        finalResult = firstNumber * secondNumber;
    }else if(operator == '/'){
        finalResult = firstNumber / secondNumber;
    }else if(operator == '%'){
        finalResult = firstNumber % secondNumber;
    }else if(operator == '**'){
        finalResult = firstNumber ** secondNumber;
    }
       console.log(finalResult);
}
