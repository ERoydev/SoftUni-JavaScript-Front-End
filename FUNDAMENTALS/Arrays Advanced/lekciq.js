function solve(arr) {
    let numbers = arr;
    console.log(Number(numbers.shift()) + Number(numbers.pop()))
    
}

solve(['20', '30', '40'])

function lekciq() {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    let filtered = arr.filter(a => a > 4)

    console.log(filtered)
}

lekciq()