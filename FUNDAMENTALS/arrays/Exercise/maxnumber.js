
function solve(numbers) {
  let arrayLength = numbers.length
  let result = []

  for(let i = 1; i <= arrayLength; i++) {
    let isMax = true;

    let currentNumber = Number(numbers[i - 1]);

    for(let j = i; j < arrayLength; j++) {
      let nextNumber = Number(numbers[j])

      if (currentNumber <= nextNumber) {
        isMax = false;
        break;
      }
    }
    if(isMax) {
      result.push(currentNumber)
    }

  }
  console.log(result.join(" "))
}
    
  



solve([27, 19, 42, 2, 13, 45, 48])