function city(obj) {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]} -> ${obj[keys[i]]}`);
  }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
