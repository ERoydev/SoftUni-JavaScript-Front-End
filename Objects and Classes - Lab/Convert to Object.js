function convertor(file) {
  let jsonToObject = JSON.parse(file);

  for (const key in jsonToObject) {
    console.log(`${key}: ${jsonToObject[key]}`);
  }
}

convertor('{"name": "George", "age": 40, "town": "Sofia"}');
