
function solve(numbers){
  let originalSum = 0;
  let modifiedSum = 0;
  let arrayLength = numbers.length

  for(let i = 0; i < arrayLength; i++){
    let number = numbers[i]
    originalSum += number

    if (number % 2 == 0) {
      number += i
    } else {
      number -= i
    }

    numbers[i] = number
    modifiedSum += number
  }

  console.log(numbers)
  console.log(originalSum)
  console.log(modifiedSum)
}

solve([5, 15, 23, 56, 35])