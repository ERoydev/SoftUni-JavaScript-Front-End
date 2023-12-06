
function schedule(arrays) {
  const transformData = (flight) => {
    let data = flight.split(' ')
    let number = data[0];
    let cityName = data.slice(1).join(' ')
    return [number, cityName]
  }

  let flights = arrays[0];
  let changedStatuses = arrays[1];
  let flightStatus = arrays[2];

  let result = [];
  let toCancel = [];

  changedStatuses.forEach((flight) => {
    toCancel.push(flight.split(' ')[0])
  })

  if(flightStatus == 'Ready to fly') {
    for(let flight of flights) {
      let [number, cityName] = transformData(flight);
      if(!toCancel.includes(number)) {
        result.push({Destination: `${cityName}`, Status: `${flightStatus}`})
      }
    }
  }

  else {
    for(let flight of flights) {
      let [number, cityName] = transformData(flight);
      if(toCancel.includes(number)){
        result.push({Destination: `${cityName}`, Status: `${flightStatus}`})
      }
    }
  }
  for(let i of result) {
    console.log(i)
  }
}


schedule([['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK330 Cancelled'],
	['Ready to fly']
]);