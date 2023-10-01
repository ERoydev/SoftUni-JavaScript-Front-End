function calculator(n1, n2, operator) {
    let operations = {
        'multiply': multiply(n1, n2),
        'divide': divide(n1, n2),
        'add': add(n1, n2),
        'subtract': subtract(n1, n2)
    }

    function multiply(n1, n2) {
        return n1 * n2;
    }

    function divide(n1, n2){
        return n1 / n2;
    }

    function add(n1, n2) {
        return n1 + n2;
    }

    function subtract(n1, n2) {
        return n1 - n2
    }

    console.log(operations[operator])
}

calculator(5, 5, "multiply")