function SameNumbers(number){
    let areEqual = true;
    let inputNumber = `${number}`;
    let finalSum = 0;
   
   for(let i = 1; i <= inputNumber.length -1 ; i++){
       let firstNmber = Number(inputNumber.charAt(i));
       let secondNumber = Number(inputNumber.charAt(i - 1));
   
       finalSum += i<inputNumber.length -1 ? secondNumber : firstNmber + secondNumber;
   
       if(areEqual && firstNmber != secondNumber){
               areEqual = false;
               }
           }
   
   console.log(areEqual);
   console.log(finalSum);
   }
   
   SameNumbers(2222222);
   SameNumbers(1234);