function solve(input) {
  let text = input[0];
  total = 0;

  for (let i = 0; i < text.length; i++) {
    total += Number(text[i]);
  }
  console.log(`The sum of the digits is:${total}`);
}

solve(["1234"]);
