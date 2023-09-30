function solve(input) {
  let NumberGroups = Number(input[0]);

  let musala = 0;
  let monblan = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;

  let totalPeople = 0;

  for (let i = 1; i <= NumberGroups; i++) {
    let number = Number(input[i]);
    totalPeople += number;

    if (input[i] <= 5) {
      musala += number;
    } else if (input[i] <= 12) {
      monblan += number;
    } else if (input[i] <= 25) {
      kilimandjaro += number;
    } else if (input[i] <= 40) {
      k2 += number;
    } else if (input[i] > 40) {
      everest += number;
    }
  }

  console.log(((musala / totalPeople) * 100).toFixed(2) + "%");
  console.log(((monblan / totalPeople) * 100).toFixed(2) + "%");
  console.log(((kilimandjaro / totalPeople) * 100).toFixed(2) + "%");
  console.log(((k2 / totalPeople) * 100).toFixed(2) + "%");
  console.log(((everest / totalPeople) * 100).toFixed(2) + "%");
}

solve(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
