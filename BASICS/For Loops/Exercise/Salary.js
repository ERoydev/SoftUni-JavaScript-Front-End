function solve(input) {
  let tabs = Number(input[0]);
  let salary = Number(input[1]);

  let output = "";
  for (let i = 2; i <= input.length; i++) {
    if (input[i] === "Facebook") {
      salary -= 150;
    } else if (input[i] === "Instagram") {
      salary -= 100;
    } else if (input[i] === "Reddit") {
      salary -= 50;
    }

    if (salary <= 0) {
      output = "You have lost your salary.";
      break;
    }
  }

  if (!output) {
    output = parseInt(salary);
  }

  console.log(output);
}

solve(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
