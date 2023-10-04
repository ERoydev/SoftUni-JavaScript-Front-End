
function solve(number) {
    const arr = number.toString();

    function evenOddSums(arr) {
        const even = [];
        const odd = [];

        for(let i = 0; i < arr.length; i++) {

            if (Number(arr[i]) % 2 === 0) {
                even.push(Number(arr[i]));
            } else {
                odd.push(Number(arr[i]));
            }
        }
        return [even, odd]
        }

    let result = evenOddSums(arr);
    const evenSum = result[0].length > 0 ? result[0].reduce((x, y) => x + y) : 0;
    const oddSum = result[1].length > 0 ? result[1].reduce((x, y) => x + y) : 0;

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(3495892137259234);