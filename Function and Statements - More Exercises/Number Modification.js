
function average(num) {
    let number = num.toString();

    const sum = () => number
    .split('')
    .map(Number)
    .reduce((total, current) => total + current) / number.length;

    while (true) {
        let average = sum();

        if (average > 5) {
            console.log(number);
            break;

        } else {
            number += 9;
        }
    }
}

average(101);