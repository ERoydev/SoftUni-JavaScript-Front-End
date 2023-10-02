function subract(sumResult, n1, n2, n3) {
    return sumResult(n1, n2) - n3
}

function sum(n1, n2) {
    return n1 + n2
}

function takeInput(n1, n2, n3) {
    const result = subract(sum, n1, n2, n3)
    console.log(result)
}


takeInput(23, 6, 10)
