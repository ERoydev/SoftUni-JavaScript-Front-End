function RankList(input) {
  let NumberTournirs = Number(input[0]);
  let points = Number(input[1]);
  const StartingPoints = Number(input[1]);
  let wons = 0;

  for (let i = 2; i < NumberTournirs + 2; i++) {
    let result = input[counter];
    counter += 1
    
    switch (result) {
      case "W":
        points += 2000
        wons += 1
        break;

      case "F":
        points += 1200;
        break;

      case "SF":
        points += 720
        break;
    }
  }
  console.log(`Final points: ${points}`)
  console.log(`Average points: ${Math.trunc((points - StartingPoints) / NumberTournirs)}`)
  console.log(((wons / NumberTournirs) * 100).toFixed(2) + "%")
}

RankList(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])