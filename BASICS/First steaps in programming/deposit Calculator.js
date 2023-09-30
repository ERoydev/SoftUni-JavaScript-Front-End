function solve(input) {
    let countPens = Number(input[0]);
    let countMark = Number(input[1]);
    let litersCleaner = Number(input[2]);
    let discount = Number(input[3]);
    let penPrice = countPens * 5.80;
    let markPrice = countMark * 7.20;
    let cleanerPrice = litersCleaner * 1.20;
    let totalPrice = penPrice + markPrice + cleanerPrice
    console.log(totalPrice - totalPrice * discount / 100)
}

solve(["2 ",
"3 ",
"4 ",
"25 "])