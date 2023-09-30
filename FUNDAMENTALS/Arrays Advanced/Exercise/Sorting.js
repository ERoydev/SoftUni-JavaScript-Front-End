function solve(numbers) {
    let sorted = numbers.sort((a, b) => (b - a))
    let result = [];
    let sortedLength = sorted.length

    for(let index = 0; index < sortedLength / 2; index++) {
        let currentNumber = sorted.shift();
        let lastNumber = sorted.pop();

        result.push(currentNumber);
        result.push(lastNumber)
    }
    console.log(result.join(' '))
}  

solve([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94]
    )