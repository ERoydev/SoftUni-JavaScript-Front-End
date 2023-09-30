
function solve(arr) {
    const CONCRETEPERONEFOOT = 195;
    let result = [];
    let total = 0

    while (true) {
        let concrete = 0
        let added = false
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i] += 1
                concrete += 1
                added = true
            }
        }

        if (!added) {
            break;
        }
        
        let spendedConcrete = concrete * CONCRETEPERONEFOOT
        total += spendedConcrete
        result.push(spendedConcrete)
    }
    console.log(result.join(", "))
    console.log(`${total * 1900} pesos`)
}

solve([17])