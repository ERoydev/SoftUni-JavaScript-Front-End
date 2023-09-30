function numbers(input) {
  let number = Number(input[0]);

  for (let i = number; i >= 1; i = i - 1) {
    console.log(i);
  }
}

numbers(["10"]);
