
function Vacation(input) {
  let neededMoney = Number(input[0]);
  let budget = Number(input[1]);
  let index = 2
  let counter = 0
  let days= 0
  let saved = false

  while(counter < 5) {
    let operation = input[index]
    let price = Number(input[index+1])
    days++
    index += 2

    if (operation == "save") {
      counter = 0
      budget += price
    } else if (operation == "spend") {
      counter++
      budget -= price
      budget = Math.max(0, budget)
    }

    if (budget >= neededMoney) {
      console.log(`You saved the money for ${days} days.`)
      saved = true
      break;
    }
  }
  if (!saved) {
  console.log(`You can't save the money.`)
  console.log(days)
  }
}

Vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])