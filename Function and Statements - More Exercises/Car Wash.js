
function solve(arr) {
    const carWash = {
        soap: (value) => value + 10,
        water: (value) => value * 1.2,
        "vacuum cleaner": (value) => value * 1.25,
        mud: (value) => value * 0.9,
    };

    let value = arr.reduce((total, curr) => carWash[curr](total), 0)
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

solve(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
