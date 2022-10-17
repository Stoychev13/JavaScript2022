function solution(array,rotate){

    for(let index=1; index<=rotate; index++){
        let lastValue = array.pop();
        array.unshift(lastValue);
    }

    console.log(array.join(' '));
}