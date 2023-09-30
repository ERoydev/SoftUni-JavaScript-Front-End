function solve(year) {
    if (year / 4 % 1 === 0 && year / 100 % 1 !== 0 || year / 400 % 1 === 0) {
        console.log("yes")
    
    } else {
        console.log("no")
    }

}

solve(2000)