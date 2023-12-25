
function solve(input) {
  const n = Number(input[0]);
  const data = {};
  
  for(let i = 1; i <= n; i ++ ) {
    const [rider, fuelCapacity, position] = input[i].split('|');
    data[rider] = {fuel: fuelCapacity, position: position};
  }

  for(let i = n+1; i < input.length; i++) {
    if (input[i] == "Finish") {
      break;
    }

    const args = input[i].split(' - ');
    const command = args[0];

    if (command == "StopForFuel") {
      const rider = args[1];
      const minimumFuel = Number(args[2]);
      const changedPosition = Number(args[3]);

      if (data[rider].fuel < minimumFuel) {
        data[rider].position = changedPosition;
        console.log(`${rider} stopped to refuel but lost his position, now he is ${data[rider].position}.`)

      } else {
        console.log(`${rider} does not need to stop for fuel!`)
      }

    }

    else if (command == "Overtaking") {
      const rider1 = args[1];
      const rider2 = args[2];

      if (data[rider1].position < data[rider2].position) {
        [data[rider1].position, data[rider2].position] = [data[rider2].position, data[rider1].position];
        console.log(`${rider1} overtook ${rider2}!`);
      }
    }

    else if (command == "EngineFail") {
      const rider = args[1];
      const lapsLeft = args[2];
      
      delete data[rider];
      console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
    }
  }
  for(let [driverName, info] of Object.entries(data)) {
    console.log(`${driverName}`)
    console.log(`  Final position: ${info.position}`)
  }
}


solve((["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]))