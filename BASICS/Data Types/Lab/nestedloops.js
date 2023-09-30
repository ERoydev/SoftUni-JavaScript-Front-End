function solve(n) {
  let result = ['a', 'b', 'c']
  for (let i = 0; i < n; i++){
    result[0] = String.fromCharCode(97 + i)
    for (let j = 0; j < n; j++) {
      result[1] = String.fromCharCode(97 + j)
      for (let k = 0; k < n; k++){
        result[2] = String.fromCharCode(97 + k)
        console.log(result.join(''));
      }
    }
  }
}

solve(2)