
function solve(number) {
  let numberAsText = number.toString()
  let result = 0;
  for (let i = 0; i < numberAsText.length; i ++) {
    result += Number(numberAsText[i]);
  }

  console.log(result)
}

solve(245678)