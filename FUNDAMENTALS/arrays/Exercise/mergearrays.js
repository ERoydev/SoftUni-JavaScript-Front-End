
function solve(arr1, arr2) {
  let thirdArray = []
  let arrayLength = arr1.length

  for(let i = 0; i < arrayLength; i++) {
    let number = 0;

    if (i % 2 == 0) {
      number = Number(arr1[i]) + Number(arr2[i])
    } else {
      number = arr1[i] + arr2[i]
    }
    thirdArray.push(number)
  }

  console.log(thirdArray.join(" - "))
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)