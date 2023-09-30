
function solve(name, numberGrams, priceKg) {
    let neededPrice = numberGrams * priceKg

    console.log(`I need $${(neededPrice / 1000).toFixed(2)} to buy ${(numberGrams / 1000).toFixed(2)} kilograms ${name}.`)
}

solve('orange', 2500, 1.80)