
function solve(arr, specialNumber) {
    let specialBomb = specialNumber[0];
    let BombPower = specialNumber[1];
    let ArrayLength = arr.length;

    for(let i = 0; i < ArrayLength; i ++){
        if (i >= arr.length) {
            break;
        }

        if (arr[i] == specialBomb){
            let start = Math.max(0, i - BombPower)

            let deleteCount = Math.min(arr.length, BombPower * 2 + 1)
            arr.splice(start, deleteCount)
            i -= 2
    
        }  
    }

    let totalSum = 0

    for(let el of arr) {
        totalSum += el
    }

    console.log(totalSum)

}

solve([1, 1, 2, 1, 2, 1,
    2, 1, 1, 1],
    [2, 1]
    )