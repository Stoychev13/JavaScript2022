function stringLenght(a, b, c){
    let firstLength = a.length;
    let secondLength = b.length;
    let thirdLength = c.length;

    let total = firstLength + secondLength + thirdLength;
    let average = Math.floor(total / 3);

    console.log(total);
    console.log(average);
}

