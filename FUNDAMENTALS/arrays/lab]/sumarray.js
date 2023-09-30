
function solve(numbers) {
  let result = 0;

  for (let text of numbers){
    let num = Number(text);
    result += num % 2 === 0 ? num : 0;
  }
  console.log(result)
}

solve(['1','2','3','4','5','6'])