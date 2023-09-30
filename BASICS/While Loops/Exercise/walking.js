
function walking(input) {
  const GOAL = 10000
  let index = 0
  let totalSteps = 0
  let walk = 0

  while(totalSteps < GOAL) {
    walk = input[index]
    index++

    if (walk == 'Going home') {
      totalSteps += Number(input[index])
      break;
    }

    totalSteps += Number(walk)
  }
  if (totalSteps >= GOAL) {
    console.log(`Goal reached! Good job!`)
    console.log(`${totalSteps - GOAL} steps over the goal!`)
  } else {
    console.log(`${GOAL - totalSteps} more steps to reach goal.`)
  }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])