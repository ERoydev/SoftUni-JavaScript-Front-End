function solve(arr) {
    let result = [];
    let ArrayLength = arr.length;

    for(let el of arr) {
        el = Number(el)
        if (el < 0) {
            result.unshift(el)
        } else {
            result.push(el)
        }
    }

    console.log(result.join("\n"))
    
}

solve(['3', '-2', '0', '-1'])