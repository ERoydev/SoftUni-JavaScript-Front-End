function solve(input) {
  let countNumbers = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= countNumbers; i++) {
    let currentNum = Number(input[i]);

    if (currentNum < 200) {
      p1 += 1;
    } else if (currentNum <= 399) {
      p2 += 1;
    } else if (currentNum <= 599) {
      p3 += 1;
    } else if (currentNum <= 799) {
      p4 += 1;
    } else if (currentNum >= 800) {
      p5 += 1;
    }
  }
  console.log(`${((p1 / countNumbers) * 100).toFixed(2)}%`);
  console.log(`${((p2 / countNumbers) * 100).toFixed(2)}%`);
  console.log(`${((p3 / countNumbers) * 100).toFixed(2)}%`);
  console.log(`${((p4 / countNumbers) * 100).toFixed(2)}%`);
  console.log(`${((p5 / countNumbers) * 100).toFixed(2)}%`);
}

solve(["3", "1", "2", "999"]);
