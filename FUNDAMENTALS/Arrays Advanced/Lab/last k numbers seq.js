function solve(n, k) {
    let result = [1];
    
    while (n > result.length) {
        let current = result.slice(-k);
        let sum = 0;

        for(let i = 0; i < current.length; i ++) {
            sum += current[i];
        }
        result.push(sum)
    }
    console.log(result.join(" "))
}

solve(6, 3)