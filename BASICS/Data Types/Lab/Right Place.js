
function solve(string1, char, string2) {
  let result = string1.replace("_", char)
  
  let output = result === string2? "Matched": "Not Matched";
  console.log(output)
  
}

solve('Str_ng', 'I',
'Strong' )