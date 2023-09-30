
function stringToIntegers() {
    let arr = ["1", "2", "3", "4", "5"];

    let myNumberArr = arr.map((a) => Number(a))
    
    console.log(myNumberArr)
}

function selectEvenNumbers() {
    let arr = [1, 2, 3, 4, 5, 6]

    let evenNumbers = arr.map((a) => a + 3)

    console.log(evenNumbers)
}

selectEvenNumbers()