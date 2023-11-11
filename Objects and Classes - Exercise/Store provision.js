function solve(stock, ordered) {
  let combined = [...stock, ...ordered];
  let store = {};

  for(let index = 0; index < combined.length; index ++) {
    let item = combined[index]
    if(index % 2 === 0) {
      if(!store.hasOwnProperty(item)) {
        store[item] = 0;
      }    
    } else {
      let value = Number(item);
      let previousItem = combined[index - 1];
      store[previousItem] += value;
    } 
  }
  for(const key in store) {
    console.log(`${key} -> ${store[key]}`)
  }
}


solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
[
'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
])
