function solve(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operation = input[2];
  let result = undefined;

  switch (operation) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
  }

  if ((operation != "/") & (operation != "%")) {
    if (result % 2 == 0) {
      var pos = "even";
    } else {
      var pos = "odd";
    }

    console.log(`${n1} ${operation} ${n2} = ${result} - ${pos}`);
  } else {
    if (n2 == 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      if (operation == "/") {
        result = n1 / n2;
      } else {
        result = n1 % n2;
      }
      console.log(
        `${n1} ${operation} ${n2} = ${result.toFixed(2).replace(/[.,]00$/, "")}`
      );
    }
  }
}

solve(["7", "3", "*"]);
