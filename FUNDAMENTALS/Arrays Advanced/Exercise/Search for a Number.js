function solve(numbers, commands) {
    
    let numberToTake = commands[0];
    let numberToDelete = commands[1];
    let numberToSearch = commands[2];

    let result = numbers.slice(0, numberToTake)
    result.splice(0, numberToDelete);

    let numberCounter = result.filter(e => e === numberToSearch).length;

    console.log(`Number ${numberToSearch} occurs ${numberCounter} times.`
    )
}


solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3])