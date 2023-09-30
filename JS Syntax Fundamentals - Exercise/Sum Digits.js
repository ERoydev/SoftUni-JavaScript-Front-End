function solve(number) {
    let result = 0;
    let numbers = number.toString();


    for(let i = 0; i < numbers.length; i ++){
        result += Number(numbers[i])
    }

    console.log(result)

}

solve(245678)