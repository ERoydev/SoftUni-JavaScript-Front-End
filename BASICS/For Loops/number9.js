function solve(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let total = 0;
  let collection = [];

  for (let i = start; i <= end; i++) {
    if (i % 9 == 0) {
      total += i;
      collection.push(i);
    }
  }
  console.log(`The sum: ${total}`);

  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
  }
}

solve(["100", "200"]);
