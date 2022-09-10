function solve(firstNum, secondNum, thirdSum){
    let largestNumber;

    if(firstNum > secondNum && firstNum > thirdSum){
        largestNumber = firstNum;
    }else if (secondNum > firstNum && secondNum > thirdSum){
        largestNumber = secondNum;
    }else if(thirdSum > firstNum && thirdSum > secondNum){
        largestNumber = thirdSum;
    }

    console.log(`The largest number is ${largestNumber}.`)
}