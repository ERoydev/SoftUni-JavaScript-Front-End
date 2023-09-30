function solve(input) {
  let text = input[0];

  var aplhas = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  totalSum = 0;

  for (let i = 0; i < text.length; i++) {
    if ("aeiou".includes(text[i])) {
      let letter = text.charAt(i);
      totalSum += aplhas[letter];
    }
  }
  console.log(totalSum);
}

solve(["Hello"]);
