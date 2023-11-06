function convertor(name, lastName, hairColor) {
  let result = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };
  const converted = JSON.stringify(result);
  console.log(converted);
}

convertor("George", "Jones", "Brown");
