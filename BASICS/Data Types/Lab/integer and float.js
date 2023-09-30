
function solve(n1, n2, n3) {
  let result = n1 + n2 + n3
  let isInteger = result % 1 === 0;
  
  if (isInteger) {
    console.log(`${result} - Integer`)
  } else {
    console.log(`${result} - Float`)
  }
}

solve(9, 100, 1.1)