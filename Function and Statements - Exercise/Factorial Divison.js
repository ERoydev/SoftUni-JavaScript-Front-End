
function solve(n, divisor) {
    let numOne = n;
    for(let i = n-1; i > 0; i--) {
        numOne *= i;
    }

    for(let i = divisor -1; i > 0; i--) {
        divisor *= i;
    }
    console.log((numOne / divisor).toFixed(2))
}

solve(6, 2);