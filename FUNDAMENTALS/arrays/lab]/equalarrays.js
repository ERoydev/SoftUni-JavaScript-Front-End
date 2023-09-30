
function solve(arr1, arr2){
  let output = `Arrays are identical. Sum: `;
  let result = 0;
  let isIdentical = false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      output = `Arrays are not identical. Found difference at ${i} index`
      isIdentical = true;
      break;

    } 
    result += Number(arr1[i])
    
  }
  if (!isIdentical){
  console.log(output + result)
  } else {
    console.log(output)
  }
}

solve(['1','2','3','4','5'],
['1','2','4','4','5']
)