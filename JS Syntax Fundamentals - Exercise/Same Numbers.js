function solve(n) {
    let numbers = n.toString();
    let difference = false;
    let sumResult = 0;

    for(let i = 1; i < numbers.length; i++) {
        sumResult += Number(numbers[i - 1])
        if (numbers[i] !== numbers[i - 1]){
            difference = true;
        }
    } 
    sumResult += Number(numbers[numbers.length - 1]);
    
    if (difference) {

        console.log('false');
    } else {
        console.log('true');
    }   

    console.log(sumResult)
}

solve(2222222)
solve(1234)