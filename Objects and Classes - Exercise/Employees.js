function solve(arr) {
  result = [];
  for (let el of arr) {
    result.push({ name: el, number: el.length });
  }

  for (let i = 0; i < result.length; i++) {
    let name = result[i]["name"];
    let number = result[i]["number"];
    console.log(`Name: ${name} -- Personal Number: ${number}`);
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
