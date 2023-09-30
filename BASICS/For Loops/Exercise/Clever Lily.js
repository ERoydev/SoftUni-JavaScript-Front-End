function solve(input) {
  let age = Number(input[0]);
  let machinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let toyCount = 0;
  let money = 0;
  let gift = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 != 0) {
      toyCount += 1;
    } else {
      money += gift - 1;
      gift += 10;
    }
  }

  money += toyCount * toyPrice;

  if (money >= machinePrice) {
    console.log(`Yes! ${(money - machinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(machinePrice - money).toFixed(2)}`);
  }
}

solve(["10", "170.00", "6"]);
