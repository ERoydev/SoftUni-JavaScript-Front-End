
function solve(arr) {
    let sortedInAscendingOrder = arr.sort((a, b) => a - b )
    console.log(arr.slice(0, 2).join(" "))
}

solve([30, 15, 50, 5])