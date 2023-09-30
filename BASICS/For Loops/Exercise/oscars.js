function solve(input) {
  let actor = input[0];
  let points = Number(input[1]);
  let judges = Number(input[2]);

  const NEEDEDPOINTS = 1250.5;
  let counter = 3;

  let output = "";

  for (let i = 0; i < judges; i++) {
    let judgeName = input[counter];
    let JudgeScore = Number(input[counter + 1]);
    counter += 2;

    points += (judgeName.length * JudgeScore) / 2;

    if (points > NEEDEDPOINTS) {
      output = `Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(
        1
      )}!`;
      break;
    }
  }

  if (points < NEEDEDPOINTS) {
    output = `Sorry, ${actor} you need ${(NEEDEDPOINTS - points).toFixed(
      1
    )} more!`;
  }

  console.log(output);
}

solve([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
