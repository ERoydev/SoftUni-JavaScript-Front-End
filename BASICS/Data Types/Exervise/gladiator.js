

function solve(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let brokenHelm = 0;
  let brokenSword = 0;
  let brokenShield = 0;
  let brokenArmor = 0;

  let shiedInRow = 0;

  for(let i = 1; i <= lostFightCount; i++) {

    if (i % 2 === 0) {
      brokenHelm += 1
    }

    if (i % 3 === 0) {
      brokenSword += 1
    }

    if (i % 2 === 0 && i % 3 === 0) {
      brokenShield  += 1
      shiedInRow += 1;
      if (shiedInRow === 2) {
        shiedInRow = 0
        brokenArmor += 1;
      }
    }
  }

  let result = (helmetPrice * brokenHelm) + (swordPrice * brokenSword) + (shieldPrice * brokenShield) + (armorPrice * brokenArmor)
  console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`)
}

solve(23,
12.50,
21.50,
40,
200)