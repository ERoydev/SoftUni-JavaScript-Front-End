function solve(start, end) {
    let result_sum = 0;
    let result = [];
    for(let i = start; i <= end; i ++) {
        result_sum += i;
        result.push(i)
    }

    console.log(result.join(" "))
    console.log(`Sum: ${result_sum}`)
}