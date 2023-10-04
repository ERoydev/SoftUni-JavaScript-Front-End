
function solve(numOne, numTwo) {
    function factorial(n) {
        if (n == 0) {
            return 1;
        }

        return n * factorial(n - 1);
    }

    let result = [numOne, numTwo];
    for(let i = 0; i < 2; i ++) {
        result[i] = factorial(result[i])
    }

    console.log((result[0] / result[1]).toFixed(2))
}

solve(5, 2)    
