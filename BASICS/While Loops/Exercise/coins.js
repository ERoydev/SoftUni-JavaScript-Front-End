
function coins(input) {
  let price = Number(input[0]).toFixed(2);
  let money = [200, 100, 50, 20, 10, 5, 2, 1]
  
  price = price.toString().replace(".", "")
  let counter = 0

  for (let i = 0; i < money.length; i++) {
    if (money[i] <= price) {
      price -= money[i]
      counter++
      i--
    }
  }
  console.log(counter)
}

coins(["10.00"])