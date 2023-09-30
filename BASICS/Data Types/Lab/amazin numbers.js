function solve(number) {
  let numberAsTex = number.toString();
  let result = 0;

  for (let i = 0; i < numberAsTex.length; i++) {
    result += Number(numberAsTex[i]);
  }
  let final = result.toString().includes("9");

  console.log(final ? `${numberAsTex} Amazing? True` : `${numberAsTex} Amazing? False`);
}

solve(1233)