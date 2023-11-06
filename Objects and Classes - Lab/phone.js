function storage(arr) {
  let file = {};
  for (const item of arr) {
    let [name, number] = item.split(" ");
    file[name] = number;
  }
  for (const item in file) {
    console.log(`${item} -> ${file[item]}`);
  }
}

storage([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
