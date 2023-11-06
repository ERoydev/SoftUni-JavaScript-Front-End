function info(arr) {
  let result = {};
  for (let data of arr) {
    let [name, address] = data.split(":");
    result[name] = address;
  }

  let sortedNames = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (const name of sortedNames) {
    console.log(`${name} -> ${result[name]}`);
  }
}

info([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
