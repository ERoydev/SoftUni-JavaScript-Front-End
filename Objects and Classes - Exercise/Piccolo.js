function piccolo(data) {
  let parking = [];

  for(let info of data) {
    let [direction, number] = info.split(', ')

    if(direction === "IN" && !parking.includes(number)){
      parking.push(number);

    } else if (direction === "OUT" && parking.includes(number)) { 
      let numberIndx = parking.indexOf(number)
      parking.splice(numberIndx, 1);
    }
  }
  if(parking.length > 0) {
    console.log((parking.sort((a, b) => a.localeCompare(b))).join('\n'))
  } else {
    console.log("Parking Lot is Empty")
  }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])