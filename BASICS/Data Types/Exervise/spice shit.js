
function solve(yield) {
  const consume = 26;
  let mined = 0;
  let days = 0;

  while (yield >= 100) {
    mined += yield
    mined -= Math.min(mined, consume)
    days ++

    yield -= 10
  }
  mined -= Math.min(mined, consume)

  console.log(days)
  console.log(mined)
}

solve(450)