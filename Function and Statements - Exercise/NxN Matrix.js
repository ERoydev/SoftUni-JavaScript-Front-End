
function matrix(n) {
    let result = [];
    for(let row = 0; row < n; row++) {
        result = (n.toString() + " ").repeat(n)
        console.log(result)
    }
}

matrix(5)